# lb-gridstack

Angular 5 wrapper for [Gridstack.js](http://gridstackjs.com/).

***THIS IS A WORK IN PROGRESS! USE IT AT YOUR OWN RISK!***

## Getting started

In order to try lb-gridstack while it is under development, you can install it directly from the tarballs.

For example:
```bash
npm install https://github.com/pfms84/lb-gridstack/raw/develop/tarball/lb-gridstack-0.0.1.tgz --save
```

Then import the library on your root module (AppModule, for instance):
```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridstackModule } from '@lb/gridstack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridstackModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Since this library is a wrapper for a jquery plugin, you need to define some global plugins and styles.

### Using Angular-cli:
- Add the following to the .angular-cli.json file
```bash
{
  ...,
  "apps": [{
    ...
    "styles": [
        "../node_modules/gridstack/dist/gridstack.css",
        ...
    ],
    "scripts": [
        "../node_modules/lodash/lodash.min.js",
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/jquery-ui-dist/jquery-ui.js",
        "../node_modules/gridstack/dist/gridstack.js",
        "../node_modules/gridstack/dist/gridstack.jQueryUI.js",
        ...
    ],
  }]
}
```
