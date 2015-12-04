## It's a repository to reproduce the bug of [fis-node-sass](https://github.com/fex-team/fis-parser-node-sass).
## How it works when using grunt-sass
```sh
npm install
grunt sass
```
## How to reproduce the error
run below command

```sh
npm install
./node_modules/fis3/bin/fis.js release -w
```

## Symptom
```sh
 [INFO] Currently running fis3 (/Users/kane/git/fis3-node-sass-bug/node_modules/fis3)

 Ω ..
 [ERROR] parser.node-sass: Undefined variable: "$html-bg". [`/assets/scss/bs.base.scss` 2:21] 
```