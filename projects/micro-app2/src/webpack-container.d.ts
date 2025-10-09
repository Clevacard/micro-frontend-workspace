declare module 'webpack/container' {
  export const container: {
    init: (sharedScope?: any) => Promise<void>;
  };
}
