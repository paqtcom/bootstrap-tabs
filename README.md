# BootstrapTabs

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

With this function you can add more functions to the bootstrap tabs.

You can add the functions like:
```
var prefix = 'w2w_tab_';
var test = new BootstrapTabs(element, prefix).listen();
```

Now you can open a tab manual with:
```
test.open('#details')
```


## Test the package.

To test the package, clone the package to your system.
Than run this command.

```
npm run build
```

This will copy the test files to the dist, and also build the package files include the dependencies.

When this script is complete without errors, you can open `dist/index.html` in your browser.
Open the dev tools, tab console, and you see all the results of the tests.

If you only want to check the eslint rules, just run.

```
npm run lint
```


[downloads-image]: https://img.shields.io/npm/dm/way2web-bootstrap-tabs.svg
[npm-url]: https://www.npmjs.com/package/way2web-bootstrap-tabs
[npm-image]: https://img.shields.io/npm/v/way2web-bootstrap-tabs.svg
