

export function loadRemoteContainer(remoteName: string, remoteUrl: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any)[remoteName]) {
      console.log(`${remoteName} already loaded`);
      resolve();
      return;
    }
    const scriptId = `remote-script-${remoteName}`;
    if (document.getElementById(scriptId)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = remoteUrl;
    script.type = "text/javascript";
    script.onload = () => {
      const container = (window as any)[remoteName];
      console.log(`Loaded script from ${remoteUrl}`);
console.log('Container after script load:', container);
      if (!container) {
        reject(new Error(`Container ${remoteName} not found on window`));
        return;
      }
      container.init((window as any).__webpack_share_scopes__.default)
        .then(resolve)
        .catch(reject);
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${remoteUrl}`));
    document.head.appendChild(script);
  });
}
