# 02.Bootstrapping Angular

## 003. Understanding Frameworks

All programming language have framework, there are two types of framework-

1. Configuration over convention
   - Easy to learn
   - Freedom to structure project
   - missing features need additional library
   - React, Vue
2. Convention over configuration
   - Structure out of box
   - built in features for common problem
   - Larger learning curve
   - Fixed File organization

What is Angular?

- convention over configuration
- not meant for small apps
- high learning curve

## 0004 The Angular CLI

Angular CLI can-

- Build the project
- Start development server
- Generate component, module, service
- Run test
- Deploy the app

The process-

1. App files: `TS`,`CSS`,`HTML`,`Assets`,`Configuration`
2. Angular CLI:uses the build tools -> `Webpack`, `Babel`, `TypeScript`, `SASS`, `Other`
3. Bundle: `JS`,`HTML`,`CSS`,`Assets`

![1](images/0004%20The%20Angular%20CLI.png)

[Angular CLI Official Doc](https://angular.io/cli)

To install `npm i -g @angular/cli`
to check if installed `ng version`
`ng help` to view the options that ng cli can perform.
