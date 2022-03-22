# 03. TypeScript - Optional

## 0020 Introduction to TypeScript

TypeScript is a superset of JavaScript, TypeScript does not add anything new but it helps developer to write strict data type so that, the problems of js being without data can be solved. example-
![1](../images/0020%20Introduction%20to%20TypeScript.png)  
We have a price variable and we need to process it before we get the total, ie- `price->applyDiscount(price)->calculateTaxes(price)->addShipping(price)->total`. Here we are expecting that price will be number and if by chance it changes to string then the calculation will be wrong, since the addition and string concatenation are same, we will only caught this type of error after running the app and with close look. Since typescript restrict type we can ensure that price in all case is number.
common js problem:

```js
function addShipping(price, shipping) {
  console.log(price + shipping);
}

addShipping("10", 5);
```

## 0021 Installing TypeScript

From official doc
to install on project `npm i -D typescript` or with `--save-dev` typescript provide the binary tsc, typescript compiler with can access it through `npx tsc fileName`, this command will process ts file and produce js file
