/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './components/gridstack.component';
import { GridstackItemComponent } from './components/gridstack-item.component';
import { GridstackService } from './services/gridstack.service';
export class GridstackModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GridstackModule,
            providers: [
                GridstackService
            ]
        };
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWJyaWEvZ3JpZHN0YWNrLyIsInNvdXJjZXMiOlsiZ3JpZHN0YWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBYWhFLE1BQU07Ozs7SUFDSyxNQUFNLENBQUMsT0FBTztRQUNqQixPQUFPO1lBQ0gsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLGdCQUFnQjthQUNuQjtTQUNKLENBQUM7Ozs7WUFsQlQsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDVixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtpQkFBQztnQkFDM0IsT0FBTyxFQUFFO29CQUNMLGtCQUFrQjtvQkFDbEIsc0JBQXNCO2lCQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgR3JpZHN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWRzdGFjay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmlkc3RhY2tJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdyaWRzdGFja1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dyaWRzdGFjay5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgR3JpZHN0YWNrQ29tcG9uZW50LFxyXG4gICAgICAgIEdyaWRzdGFja0l0ZW1Db21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIEdyaWRzdGFja0NvbXBvbmVudCxcclxuICAgICAgICBHcmlkc3RhY2tJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0YWNrTW9kdWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogR3JpZHN0YWNrTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIEdyaWRzdGFja1NlcnZpY2VcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19