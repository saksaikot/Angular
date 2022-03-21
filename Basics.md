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

## 0005 Latest Version Of Angular

Upgrading angular to latest version is easy, the official angular update page gives straight forward instruction to upgrade angular version.[Angular update instruction](https://update.angular.io/).As long as the upgrade command says **Migration complete** then the upgrade is done.

## 0006 Creating a New Application

`ng new` command create new angular project, but before using it we can get the command help file and read it so we can understand better. We can see that the `ng new` command have a required argument is name, and has other optional argument or options. There is an option `--skip-tests` or `-S`, it will not generate any test files or `spec.ts` files. Since this course will not cover test so we can use it to skip generating test files.
steps:

1. `ng new basics -S` create new project named basics with test file generation skipped.
2. use router: no, will discussed later
3. style, css.
   Then will generate the new angular project

## 0007 Starting the server

`ng serve` will start the server with development feature and looks for the change of file and if change happen then it will automatically reflect the changes.
We can learn more on `ng serve` command by `ng serve --help`
The development server is not production ready it helps to code. We need to build the project for a production build.

## 0008 Reviewing the Configuration Files

There are several config files at the root of the project

- `.browserslistrc`: to tell angular which browsers need to be supported
- `.editorconfig`: default editor settings so that if team works on a project then they get the same indentation and setting throughout all browser.this setting file will not work in vscode, we need a separate extension to make it work.
- .`gitignore` the ignore file of git to tell git which file should not add to git
- `.angular.json` angular configuration for default project, where we can manage multiple projects. there are also some cli configuration for building and testing the project through angular cli.
- `karma.conf.js`: for testing the project
- `tsconfig.json` these files are to set various config for typeScripts. The other two file extends the `tsconfig.json` file for the app and for the test file `tsconfig.spec.json`

## 0009 Main Entry File

`project_root->src->main.ts` has two responsibility.

- Load the angular code
- Load the app code
  To learn more we will delete all the codes in main.ts and will rewrite from stretch.

## 0010 AOT Compilation

**Just-In-Time Compilation**: Server(Source code)-> Browser:angular compiler->(`template`,`Services`,`modules`)-> Browser runs app.
**Ahead-of-time Compilation**:server(Source code),angular compiler->browser runs app.  
So in JIT the compilation is done in browser and the size of it large and takes longer time.And in AOT angular compiler run on server, and the process code is then passed to browser, which is smaller and run faster.Angular provides both AOT and JIT, AOT is new feature and is recommended to use it all the time.

## 0011 Loading a Platform

Angular needs to know which platform it will run and which compilation strategy it will use. Since our app will run in web we will use the browser but there are two platform browser `platformBrowser` for `AOT` and `platformBrowserDynamic` for `JIT`, So we should use the `platformBrowser` but Angular recommend to use `platformBrowserDynamic` and it will automatically choose AOT compiler for us and with the option to switch to `JIT`, we will import `platformBrowserDynamic` from `@angular/platform-browser-dynamic`.

## 0012 Bootstrapping Angular

when we call `platformBrowserDynamic` it will load angular and now we need to give an entry module that will run, we have a default module `AppModule` which was created with `ng new ` command, we will chain the call `platformBrowserDynamic().bootstrapModule(AppModule)` and it return a promise so we need to catch it `.catch(console.error)`
so the final code will be,

```ts
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);
```

## 0013 Enabling Production Mode

By default angular run the change detection in browser twice for better debugging opportunities. It is not good for production mode. We can change this behaviors by calling `enableProdMode` from `@angular/core`, but we want to run it conditionally only when we are on production mode, we can detect the mode from `src->environments->environments.ts`.
the structure of environments file, there are two files- -`environments.ts`

- `environments.prod.ts`: when angular cli build the project it will auto replace `environments` with `environments.prod.ts`, the configuration is given in `angular.json` ->project-name-> architecture->`fileReplacements`
  **Note: `enableProdMode` needs to place before bootstrapping the module.**

## 0014 Understanding Modules

Module in angular is like superset of js modules, it works like js module but solve some more problems, we can make related component under one module, and the imports in module will be available in there component.We make modules by features, related components are under single module.

## 0015 Creating Modules

First clean up the `app.module.ts` file then write it from scratch, first we define the class `export class AppModule{}`, then we need to add decorative. Decorative are the way of adding metadata.`NgModule` decorative is for providing metadata for class. here we can write which module or component we can import. our code will run inside browser so we need to import `BrowserModule`, importing here it will allow the components under it will have same api access. At this point we will see that the browser output is empty and if we inspect then we will see below error message

```txt
The module AppModule was bootstrapped, but it does not declare "@NgModule.bootstrap"

```

So it is telling like the main entry file is calling bootstrap but there is no bootstrap is defined here. It will sort out in next video.

## 0016 Understanding Components

Components are like custom html tag, angular help us to teach browser new tag, and then we can reuse these custom tag,We can add view and behavior to custom tag, component can use other component as well, we have given a component when we use `ng new` to create the project, this component is `src->app->app.components.ts`, we will learn more on component on next video.

## 0017 Creating Components

same as module we need to use decorative, for component we use `Component` from `@angular/core`, the properties needed for a component are, selector and template, template is html tags and selector is custom tag, must be all lowercase and only use `-` minus, with all of these our `app.component.ts` will be-

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: "<h1> Hello world",
})
export class AppComponent {}
```

with our component is done now we can complete our `AppModule`,Since `AppModule` is a root Module, for root module we need to provide bootstrap property, and the value will be our main component, to import the components we need to add them inside declarations, so the final AppModule will be,

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## 0018 External Templates and Styles

The MVC pattern in angular, We can refer then in angular like these-

- Model: data
- View: HTML/CSS
- Controller: TypeScript Class

in app component there are other properties,

- template : `template`/`templateUrl`, `template` is inline value whereas `templateUrl` need to set the relative path of the html template, we can not use both properties we need to use only one property.
- styles: like template, styles have two properties, `styles` and `styleUrls`, Name suggest that it will take the value as array and we can provide multiple css file or styles. Same as template we cannot use both we need to use only one.
  Then we can change the html template and the style and we can see the changes in browser.

## 0019 Everything else

files and folder under `src`

- `assets`:There is a folder under app, `assets` where we keep files like, image and font it will be compiled and include in final build.
- `polyfills.ts`: this file is for giving support for older browser which don't have latest feature.
- `styles`: This is where we write our global style, css are declare here will apply globally.
