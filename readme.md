# To reproduce the bug

Setup node_modules directory using yarn or npm

```unix
yarn install
```

or

```unix
npm install
```

Then in vscode start Wallaby

## Expected

All tests should pass

## Actual

"does a thing" test fails with "TypeError: Cannot read property 'VALUE' of undefined​​"
