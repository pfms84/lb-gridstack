import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Widget1Component } from './widget1/widget1.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetsService } from './services/widgets.service';
import { Widget2Component } from './widget2/widget2.component';
import { Widget3Component } from './widget3/widget3.component';
import { Widget4Component } from './widget4/widget4.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [Widget1Component, Widget2Component, Widget3Component, Widget4Component],
    exports: [Widget1Component, Widget2Component, Widget3Component, Widget4Component]
})
export class WidgetsModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: WidgetsModule,
            providers: [WidgetsService]
        };
    }
}