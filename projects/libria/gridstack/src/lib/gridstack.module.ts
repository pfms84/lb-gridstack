import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './components/gridstack.component';
import { GridstackItemComponent } from './components/gridstack-item.component';
import { GridstackService } from './services/gridstack.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GridstackComponent,
        GridstackItemComponent],
    exports: [
        GridstackComponent,
        GridstackItemComponent]
})
export class GridstackModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: GridstackModule,
            providers: [
                GridstackService
            ]
        };
    }
}
