import { GridstackModule } from '../gridstack/gridstack.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        GridstackModule.forRoot()
    ],
    exports: [
        GridstackModule
    ],
    declarations: []
})
export class SharedModule { }
