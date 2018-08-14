/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
/** @type {?} */
var _sequence = 0;
var GridstackItemComponent = /** @class */ (function () {
    function GridstackItemComponent(elem, _renderer) {
        this.elem = elem;
        this._renderer = _renderer;
        this.generatedId = (_sequence++).toString();
    }
    /**
     * @return {?}
     */
    GridstackItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this.elem.nativeElement, 'grid-stack-item');
        this._setAttributeIfNotUndefined('data-gs-x', this.x);
        this._setAttributeIfNotUndefined('data-gs-y', this.y);
        this._setAttributeIfNotUndefined('data-gs-width', this.width);
        this._setAttributeIfNotUndefined('data-gs-height', this.height);
        this._setAttributeIfNotUndefined('data-gs-id', this.id);
        this._setAttributeIfNotUndefined('data-gs-max-width', this.maxWidth);
        this._setAttributeIfNotUndefined('data-gs-max-height', this.maxHeight);
        this._setAttributeIfNotUndefined('data-gs-min-width', this.minWidth);
        this._setAttributeIfNotUndefined('data-gs-min-height', this.minHeight);
        this._setAttributeIfTrue('data-gs-no-resize', this.noResize);
        this._setAttributeIfTrue('data-gs-no-move', this.noMove);
        this._setAttributeIfTrue('data-gs-auto-position', this.autoPosition);
        this._setAttributeIfTrue('data-gs-locked', this.locked);
    };
    /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    GridstackItemComponent.prototype._setAttributeIfNotUndefined = /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    function (attrName, val) {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, val.toString());
        }
    };
    /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    GridstackItemComponent.prototype._setAttributeIfTrue = /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    function (attrName, val) {
        if (val === true || val === 'true') {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    };
    GridstackItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[lb-gridstack-item]',
                    template: "<div class=\"grid-stack-item-content\">\r\n    <ng-content></ng-content>\r\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GridstackItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    GridstackItemComponent.propDecorators = {
        x: [{ type: Input }],
        y: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        id: [{ type: Input }],
        maxWidth: [{ type: Input, args: ['max-width',] }],
        maxHeight: [{ type: Input, args: ['max-height',] }],
        minWidth: [{ type: Input, args: ['min-width',] }],
        minHeight: [{ type: Input, args: ['min-height',] }],
        noResize: [{ type: Input, args: ['no-resize',] }],
        noMove: [{ type: Input, args: ['no-move',] }],
        autoPosition: [{ type: Input, args: ['auto-position',] }],
        locked: [{ type: Input }]
    };
    return GridstackItemComponent;
}());
export { GridstackItemComponent };
if (false) {
    /** @type {?} */
    GridstackItemComponent.prototype.x;
    /** @type {?} */
    GridstackItemComponent.prototype.y;
    /** @type {?} */
    GridstackItemComponent.prototype.width;
    /** @type {?} */
    GridstackItemComponent.prototype.height;
    /** @type {?} */
    GridstackItemComponent.prototype.id;
    /** @type {?} */
    GridstackItemComponent.prototype.maxWidth;
    /** @type {?} */
    GridstackItemComponent.prototype.maxHeight;
    /** @type {?} */
    GridstackItemComponent.prototype.minWidth;
    /** @type {?} */
    GridstackItemComponent.prototype.minHeight;
    /** @type {?} */
    GridstackItemComponent.prototype.noResize;
    /** @type {?} */
    GridstackItemComponent.prototype.noMove;
    /** @type {?} */
    GridstackItemComponent.prototype.autoPosition;
    /** @type {?} */
    GridstackItemComponent.prototype.locked;
    /** @type {?} */
    GridstackItemComponent.prototype.generatedId;
    /** @type {?} */
    GridstackItemComponent.prototype.elem;
    /** @type {?} */
    GridstackItemComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxpYnJpYS9ncmlkc3RhY2svIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBR1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7O0FBSXZCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUF3QmQsZ0NBQW1CLElBQWdCLEVBQ3ZCO1FBRE8sU0FBSSxHQUFKLElBQUksQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUzsyQkFIUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO0tBSWhEOzs7O0lBRUwsZ0RBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzRDs7Ozs7O0lBRU8sNERBQTJCOzs7OztjQUFDLFFBQWdCLEVBQUUsR0FBb0I7UUFDdEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNsRjs7Ozs7OztJQUdHLG9EQUFtQjs7Ozs7Y0FBQyxRQUFnQixFQUFFLEdBQXFCO1FBQy9ELElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRTs7O2dCQXJEUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsOEZBQThDO29CQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQXBCRyxVQUFVO2dCQU9WLFNBQVM7OztvQkFlUixLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsU0FBUzsrQkFDZixLQUFLLFNBQUMsZUFBZTt5QkFDckIsS0FBSzs7aUNBdENWOztTQXlCYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9tb2RlbHMvaXRlbSc7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3QsXHJcbiAgICBJbnB1dCxcclxuICAgIE5nWm9uZSxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gJy4vbW9kZWxzL2dyaWQtaXRlbSc7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcbmxldCBfc2VxdWVuY2UgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RpdltsYi1ncmlkc3RhY2staXRlbV0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkc3RhY2tJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgR3JpZEl0ZW0geyBcclxuICAgIEBJbnB1dCgpIHg6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHk6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoJ21heC13aWR0aCcpIG1heFdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoJ21heC1oZWlnaHQnKSBtYXhIZWlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgnbWluLXdpZHRoJykgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgnbWluLWhlaWdodCcpIG1pbkhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCduby1yZXNpemUnKSBub1Jlc2l6ZTogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIEBJbnB1dCgnbm8tbW92ZScpIG5vTW92ZTogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIEBJbnB1dCgnYXV0by1wb3NpdGlvbicpIGF1dG9Qb3NpdGlvbjogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxvY2tlZDogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIHB1YmxpYyBnZW5lcmF0ZWRJZDogc3RyaW5nID0gKF9zZXF1ZW5jZSsrKS50b1N0cmluZygpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnZ3JpZC1zdGFjay1pdGVtJyk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MteCcsIHRoaXMueCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MteScsIHRoaXMueSk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3Mtd2lkdGgnLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1oZWlnaHQnLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtaWQnLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1tYXgtd2lkdGgnLCB0aGlzLm1heFdpZHRoKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1tYXgtaGVpZ2h0JywgdGhpcy5tYXhIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1pbi13aWR0aCcsIHRoaXMubWluV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1pbi1oZWlnaHQnLCB0aGlzLm1pbkhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLW5vLXJlc2l6ZScsIHRoaXMubm9SZXNpemUpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1uby1tb3ZlJywgdGhpcy5ub01vdmUpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1hdXRvLXBvc2l0aW9uJywgdGhpcy5hdXRvUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1sb2NrZWQnLCB0aGlzLmxvY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoYXR0ck5hbWU6IHN0cmluZywgdmFsOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIV8uaXNOdWxsKHZhbCkgJiYgIV8uaXNVbmRlZmluZWQodmFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGF0dHJOYW1lLCB2YWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEF0dHJpYnV0ZUlmVHJ1ZShhdHRyTmFtZTogc3RyaW5nLCB2YWw6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsID09PSB0cnVlIHx8IHZhbCA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgYXR0ck5hbWUsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==