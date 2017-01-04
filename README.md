Just some exercises on react.
# Form
# Analog Clock
# deoply to github-pages
## Add the following to the package.json
```
"homepage": "https://rdwrcode.github.io/myreact-web",

"scripts": {
      // ...
      "deploy": "npm run build&&gh-pages -d build"
    }    
```
## Add necessary packages for github-pages to work
```
yarn add --dev gh-pages
```
## Last run 
```
yarn run deploy
```
