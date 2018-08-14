/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
/** @type {?} */
let _sequence = 0;
export class GridstackItemComponent {
    /**
     * @param {?} elem
     * @param {?} _renderer
     */
    constructor(elem, _renderer) {
        this.elem = elem;
        this._renderer = _renderer;
        this.generatedId = (_sequence++).toString();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
    }
    /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    _setAttributeIfNotUndefined(attrName, val) {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, val.toString());
        }
    }
    /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    _setAttributeIfTrue(attrName, val) {
        if (val === true || val === 'true') {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    }
}
GridstackItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[lb-gridstack-item]',
                template: "<div class=\"grid-stack-item-content\">\r\n    <ng-content></ng-content>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
GridstackItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxpYnJpYS9ncmlkc3RhY2svIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBR1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7O0FBSXZCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQVFsQixNQUFNOzs7OztJQWdCRixZQUFtQixJQUFnQixFQUN2QjtRQURPLFNBQUksR0FBSixJQUFJLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVM7MkJBSFEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtLQUloRDs7OztJQUVMLGVBQWU7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNEOzs7Ozs7SUFFTywyQkFBMkIsQ0FBQyxRQUFnQixFQUFFLEdBQW9CO1FBQ3RFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDbEY7Ozs7Ozs7SUFHRyxtQkFBbUIsQ0FBQyxRQUFnQixFQUFFLEdBQXFCO1FBQy9ELElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRTs7OztZQXJEUixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsOEZBQThDO2dCQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7Ozs7WUFwQkcsVUFBVTtZQU9WLFNBQVM7OztnQkFlUixLQUFLO2dCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxZQUFZO3VCQUNsQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUssU0FBQyxXQUFXO3FCQUNqQixLQUFLLFNBQUMsU0FBUzsyQkFDZixLQUFLLFNBQUMsZUFBZTtxQkFDckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL21vZGVscy9pdGVtJztcclxuaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdCxcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyaWRJdGVtIH0gZnJvbSAnLi9tb2RlbHMvZ3JpZC1pdGVtJztcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxubGV0IF9zZXF1ZW5jZSA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGl2W2xiLWdyaWRzdGFjay1pdGVtXScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRzdGFja0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBHcmlkSXRlbSB7IFxyXG4gICAgQElucHV0KCkgeDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgeTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgnbWF4LXdpZHRoJykgbWF4V2lkdGg6IG51bWJlciB8IHN0cmluZztcclxuICAgIEBJbnB1dCgnbWF4LWhlaWdodCcpIG1heEhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCdtaW4td2lkdGgnKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCdtaW4taGVpZ2h0JykgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoJ25vLXJlc2l6ZScpIG5vUmVzaXplOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCduby1tb3ZlJykgbm9Nb3ZlOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCdhdXRvLXBvc2l0aW9uJykgYXV0b1Bvc2l0aW9uOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbG9ja2VkOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgcHVibGljIGdlbmVyYXRlZElkOiBzdHJpbmcgPSAoX3NlcXVlbmNlKyspLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsICdncmlkLXN0YWNrLWl0ZW0nKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy14JywgdGhpcy54KTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy15JywgdGhpcy55KTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy13aWR0aCcsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLWhlaWdodCcsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1pZCcsIHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1heC13aWR0aCcsIHRoaXMubWF4V2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1heC1oZWlnaHQnLCB0aGlzLm1heEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtbWluLXdpZHRoJywgdGhpcy5taW5XaWR0aCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtbWluLWhlaWdodCcsIHRoaXMubWluSGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZlRydWUoJ2RhdGEtZ3Mtbm8tcmVzaXplJywgdGhpcy5ub1Jlc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLW5vLW1vdmUnLCB0aGlzLm5vTW92ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLWF1dG8tcG9zaXRpb24nLCB0aGlzLmF1dG9Qb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLWxvY2tlZCcsIHRoaXMubG9ja2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZChhdHRyTmFtZTogc3RyaW5nLCB2YWw6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghXy5pc051bGwodmFsKSAmJiAhXy5pc1VuZGVmaW5lZCh2YWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgYXR0ck5hbWUsIHZhbC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlSWZUcnVlKGF0dHJOYW1lOiBzdHJpbmcsIHZhbDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBhdHRyTmFtZSwgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19