export function loadRemoteContainer(remoteName: string, remoteUrl: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Initialize share scope if needed
    const shareScopes = (window as any).__webpack_share_scopes__ || {};
    if (!shareScopes['default']) {
      shareScopes['default'] = {};
      (window as any).__webpack_share_scopes__ = shareScopes;
    }

    // If container already loaded, just resolve
    if ((window as any)[remoteName]) {
      console.log(`${remoteName} already loaded`);
      resolve();
      return;
    }

    // Check if script is already added
    const scriptId = `remote-script-${remoteName}`;
    if (document.getElementById(scriptId)) {
      // Wait for script to load if needed - optional
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = remoteUrl;
    script.type = "text/javascript";

    script.onload = () => {
      const container = (window as any)[remoteName];

      if (!container) {
        reject(new Error(`Container ${remoteName} not found on window`));
        return;
      }

      // Initialize container with shared scope if not already initialized
      if (!container.__initialized) {
        container.init((window as any).__webpack_share_scopes__?.default)
          .then(() => {
            container.__initialized = true; // mark as initialized
            console.log(`${remoteName} container initialized`);
            resolve();
          })
          .catch((err: any) => {
            reject(err);
          });
      } else {
        // Already initialized
        resolve();
      }
    };

    script.onerror = () => reject(new Error(`Failed to load script: ${remoteUrl}`));
    document.head.appendChild(script);
  });
}
