const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../../package.json").dependencies;

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        microApp1: 'microApp1@http://localhost:4201/remoteEntry.js',
        microApp2: "microApp2@http://localhost:4202/remoteEntry.js",
        microApp3: "microApp3@http://localhost:4203/remoteEntry.js",
      },
        shared: {
      '@angular/core': { singleton: true, eager: true },
      '@angular/common': { singleton: true, eager: true },
      '@angular/router': { singleton: true, eager: true },
      'shared-components': { singleton: true, eager: true },
    },
    }),
  ],
};
