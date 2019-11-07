import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackModule } from '@libria/gridstack';

@NgModule({
    imports: [
        CommonModule,
        GridstackModule
    ],
    exports: [
        GridstackModule
    ],
    declarations: []
})
export class SharedModule { }
