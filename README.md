# Jimp rollup example repo

Small example trying to show the issue with JIMP's module/ESM setting.

## Setting up

Install [ASDF](https://asdf-vm.com/) then run in the project directory:

```bash
asdf install
```

Or alternatively just look at `./.tool-versions` and install the versions manually.

## Running build

```bash
npm run build
```

This shows the issue:

```
> n run build

> jimp-rollup@1.0.0 build
> rollup -c


main.js → bundle.js...
[!] RollupError: "default" is not exported by "node_modules/jimp/es/index.js", imported by "main.js".
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
main.js (1:7)
1: import Jimp from "jimp";
          ^
2: 
3: const blankImage = Jimp.create(100, 100, 0x00000000);
RollupError: "default" is not exported by "node_modules/jimp/es/index.js", imported by "main.js".
    at error (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:206:30)
    at Module.error (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:13355:16)
    at Module.traceVariable (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:13718:29)
    at ModuleScope.findVariable (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:12270:39)
    at MemberExpression.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:9439:49)
    at CallExpression.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:6089:23)
    at CallExpression.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:9765:15)
    at VariableDeclarator.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:6089:23)
    at VariableDeclaration.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:6085:28)
    at Program.bind (~/jimp-rollup/node_modules/rollup/dist/shared/rollup.js:6085:28)
```