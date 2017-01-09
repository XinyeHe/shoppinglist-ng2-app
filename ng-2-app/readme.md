
//npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save

core-js client/shim: Adds es6 features to browsers that don't have them

zone.js: An execution context. Helps with change detection and showing errors. Anyone from angular 1 will know that seeing console errors and trying to debug was near impossible. Provides stack traces. Helps Angular run change detection throughout our app.

reflect-metadata: Polyfill for decorator metadata. Used to apply decorators to our code (Component is a decorator). A clean way of adding metadata to our classes.

rxjs: Libraries that help create asynchronous data streams. Gives us Observables. The Angular 2 http library uses these heavily and is the preferred way of handling async events in Angular 2.

//npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save

//system.js
