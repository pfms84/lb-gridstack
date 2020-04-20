# lb-gridstack

Angular 9 wrapper for [Gridstack.js](http://gridstackjs.com/).

## Getting started

```bash
npm install @libria/gridstack --save
```

Then import the library on your root module (AppModule, for instance):
```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridstackModule } from '@libria/gridstack';

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
- Add the following to the .angular.json file
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

## Basic library usage

```bash
<div lb-gridstack
     width="5">
    <div lb-gridstack-item
         x="0"
         y="0"
         width="3">
        Widget 1
    </div>
    <div lb-gridstack-item
         x="3"
         y="0"
         width="2">
        Widget 2
    </div>
</div>
```

## Options
_All attribute options match the gridstack.js data-gs-* attributes unless explicitly stated._
### lb-gridstack

| Name | Description | Additional Information |
| --- | --- | --- |
| options | general options for the grid. See <https://github.com/gridstack/gridstack.js/tree/master/doc#options> | The option 'acceptWidgets' is not fully supported yet |
| animate | turns animation on | - |
| width | amount of columns | The library supports up to 24 columns without having to manually change the CSS |
| height | maximum rows amount | - |

### lb-gridstack-item
| Name | Description | Additional Information |
| --- | --- | --- |
| id | good for quick identification | - |
| x | element position | - |
| y | element position | - |
| width | element size | - |
| height | element size | - |
| max-width | element size constraint | - |
| max-height | element size constraint | - |
| min-width | element size constraint | - |
| min-height | element size constraint | - |
| no-resize | disable element resizing | - |
| no-move | disable element moving | - |
| auto-position | tells to ignore data-gs-x and data-gs-y attributes and to place element to the first available position | - |
| locked | the widget will be locked. It means another widget wouldn't be able to move it during dragging or resizing. The widget can still be dragged or resized. You need to add data-gs-no-resize and data-gs-no-move attributes to completely lock the widget. | - |

