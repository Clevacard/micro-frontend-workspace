


const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
  output: {
    uniqueName: "microApp3",
     publicPath: "http://localhost:4203/", 
    scriptType: "text/javascript", // avoids import.meta issues
  },
  optimization: {
    runtimeChunk: false, // IMPORTANT for remotes
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microApp3",
      filename: "remoteEntry.js",
      remotes: {
        microApp2: "microApp2@http://localhost:4202/remoteEntry.js",
      },
      exposes: {
        './App': "./projects/micro-app3/src/app/app.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, eager: true },
        "@angular/common": { singleton: true, strictVersion: true, eager: true },
        "@angular/router": { singleton: true, strictVersion: true, eager: true },
        'shared-components': { singleton: true, eager: true },
        "rxjs": { singleton: true, strictVersion: true, eager: true }
      },
    }),
  ],
};
