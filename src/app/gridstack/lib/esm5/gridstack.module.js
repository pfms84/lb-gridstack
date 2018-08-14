/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './components/gridstack.component';
import { GridstackItemComponent } from './components/gridstack-item.component';
import { GridstackService } from './services/gridstack.service';
var GridstackModule = /** @class */ (function () {
    function GridstackModule() {
    }
    /**
     * @return {?}
     */
    GridstackModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GridstackModule,
            providers: [
                GridstackService
            ]
        };
    };
    GridstackModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        GridstackComponent,
                        GridstackItemComponent
                    ],
                    exports: [
                        GridstackComponent,
                        GridstackItemComponent
                    ]
                },] }
    ];
    return GridstackModule;
}());
export { GridstackModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWJyaWEvZ3JpZHN0YWNrLyIsInNvdXJjZXMiOlsiZ3JpZHN0YWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0lBYzlDLHVCQUFPOzs7O1FBQ2pCLE9BQU87WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1AsZ0JBQWdCO2FBQ25CO1NBQ0osQ0FBQzs7O2dCQWxCVCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3FCQUFDO29CQUMzQixPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQUM7aUJBQzlCOzswQkFoQkQ7O1NBaUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBHcmlkc3RhY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZHN0YWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdyaWRzdGFja0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JpZHN0YWNrU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JpZHN0YWNrLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBHcmlkc3RhY2tDb21wb25lbnQsXHJcbiAgICAgICAgR3JpZHN0YWNrSXRlbUNvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgR3JpZHN0YWNrQ29tcG9uZW50LFxyXG4gICAgICAgIEdyaWRzdGFja0l0ZW1Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkc3RhY2tNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBHcmlkc3RhY2tNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgR3JpZHN0YWNrU2VydmljZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=