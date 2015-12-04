## It's a repository to reproduce the bug of [fis-node-sass](https://github.com/fex-team/fis-parser-node-sass).
## HowTO
run below command

```sh
npm install
./node_modules/fis3/bin/fis.js release -w
```

## Symptom
```sh
[ERROR] parser.node-sass: argument `$color` of `darken($color, $amount)` must be a color

Backtrace:
  ../../../../bower_components/bootstrap/scss/_variables.scss:78, in function `darken`
  ../../../../bower_components/bootstrap/scss/_variables.scss:78 [`/bower_components/bootstrap/scss/_variables.scss` 78:30] 
```