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

## 0022 Type Annotations

Type annotation is a way of describing data type. Then it will strictly maintain the data type.

to annotate the type we write : then the type ie: `price:number` type annotation use lowercase of primitive data type name.
when we annotate the data type we will no longer pass other data types other than number, if we try to pass it will show error and the code will not compile. we can also set the return type of a function same as variable with colon,`:` after `)`, `function name():number`, then we must return a value from this function, this ensure we write the intended code.

## 0023 Variables

Typescript supports all primitive types:`string`,`number`,`boolean`,`null`,`undefined`. Typescript can auto infer the data type if it is assigned when the variable is declared. We should use this feature, but if variable is not initialize then we need to type annotate. thats why we need to type annotate the parameters of function because the initial value is not set, and typescript will set the data type to any.

## 0024 Union Types

We may need more than one data type, like we will assign the value from api and initialize with null, we can do this with union operator, `|` using this pipe operator we can annotate multiple data type. Example -

```ts
const myName:string:null=null;
function addShipping():number|boolean{
if(error) return false;
return number;
}
```

## 0025 Arrays

we can annotate an array with the data type and `[]` ie:

```ts
let items=[1,2]
//or
let items=[1,'value']
or
let items: number[]=[]
or
number[]|string[]
or
(number|string)[]

```

## 0026 Objects

object annotation is same like the object itself, `{name:string}`, we can also mention if a property is optional, with a `?` sing after property name, we can also annotate array of objects.

```ts
const account: {
  name: string;
  balance: number;
  status?: boolean;
} = {
  name: "doe",
  balance: 15,
};

const accounts: {}[] = [{}];
```

## 0027 Interfaces

interface help us create clean and more structured code, for example the object type annotation, we have one portion for type annotation and then the object, it may look some time confusing, and another thing we cannot reuse it, but with interface it is possible. the syntax is `interface 'PascalCaseInterfaceName 'Data annotation';`, for convenient we add the latter `I` before the name of interface so that other can easily recognize.example-

```ts
//interface
interface IAccount {
  name: string;
  balance: number;
  status?: boolean;
  deposit?: (amount: number) => number;
}
const accountNew: IAccount = {
  name: "doe",
  balance: 15,
};

const accountsNew: IAccount[] = [
  {
    name: "doe",
    balance: 15,
  },
];
```

## 0028 Classes

We use interface with classes with implements keyword, then we need to have our name and balance variable, we can accept the variable in constructor function with public keyword, or we can initiate the variable at top of the class, both are the same, we use private keyword to block access the method outside of the class.Example -

```ts
class InvestmentAccount implements IAccount {
  name;
  balance;
  // constructor(public name, public balance) {}
  private withdraw() {}
}
```

## 0029 Generics

Generics are data type placeholder, it use `<T>` angle syntax, this T will be replaced when it is used, the variable can be anything but it a convention to use `T` for type. Example

```ts
class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }
  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add("Rahim");
nameQueue.add("karim");

const numberQueue = new Queue<number>();
numberQueue.add(5);
numberQueue.add(10);
```
