// global.d.ts
export {}; // to ensure this file is treated as a module
declare global {
  interface Window {
    [key: string]: any;
    __webpack_share_scopes__?: any;
  }
}