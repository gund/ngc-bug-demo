# ngc-bug-demo
This is a repo to reproduce bug in ngc

## Install

Run `yarn` or `npm i`

## Running

To see a bug run `npm test`
It will throw an error with next trace:
```
TypeError: Cannot read property 'text' of undefined
    at NodeObject.getText (D:\Projects\ngc-bug-demo\node_modules\typescript\lib\typescript.js:78080:30)
    at Evaluator.evaluateNode (D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\evaluator.js:502:66)
    at _loop_1 (D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\collector.js:329:54)
    at D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\collector.js:388:25
    at visitEachNode (D:\Projects\ngc-bug-demo\node_modules\typescript\lib\typescript.js:13907:30)
    at Object.forEachChild (D:\Projects\ngc-bug-demo\node_modules\typescript\lib\typescript.js:14078:24)
    at MetadataCollector.getMetadata (D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\collector.js:222:12)
    at MetadataWriterHost.writeMetadata (D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\compiler_host.js:150:51)
    at MetadataWriterHost.writeFile (D:\Projects\ngc-bug-demo\node_modules\@angular\tsc-wrapped\src\compiler_host.js:142:19)
    at Object.writeFile (D:\Projects\ngc-bug-demo\node_modules\typescript\lib\typescript.js:62522:132)
```

See `src/index.ts` for more info why it fails

## Author

Alex Malkevich
