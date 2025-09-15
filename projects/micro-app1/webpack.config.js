

// const { shareAll } = require('@angular-architects/module-federation/webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "microApp1",
     publicPath: "http://localhost:4201/", 
    scriptType: "text/javascript", // avoids import.meta issues
  },
  optimization: {
    runtimeChunk: false, // IMPORTANT for remotes
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microApp1",
      filename: "remoteEntry.js",
      exposes: {
        // 👇 expose the standalone App component
        './App': './projects/micro-app1/src/app/app.ts',
      },
      shared: {

        "@angular/core": { singleton: true, strictVersion: true, eager: true },
        "@angular/common": { singleton: true, strictVersion: true, eager: true },
        "@angular/router": { singleton: true, strictVersion: true, eager: true },
        'shared-components': { singleton: true, eager: true },
      },
      //  shared: shareAll({ singleton: true, strictVersion: false }),
    }),
  ],
};
