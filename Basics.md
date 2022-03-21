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
