import { Component, ContentChildren, ElementRef, EventEmitter, Injectable, Input, NgModule, NgZone, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { CommonModule } from '@angular/common';
import 'rxjs/add/operator/takeUntil';

let _sequence$1 = 0;
class GridstackItemComponent {
    /**
     * @param {?} elem
     * @param {?} _renderer
     */
    constructor(elem, _renderer) {
        this.elem = elem;
        this._renderer = _renderer;
        this.generatedId = (_sequence$1++).toString();
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
        this._setAttributeIfNotUndefined('data-gs-resize-handles', this.resizeHandles);
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
        if (typeof (val) === 'boolean' || (val == 'true')) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    }
}
GridstackItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[lb-gridstack-item]',
                template: `
      <div class="grid-stack-item-content">
          <ng-content></ng-content>
      </div>
    `,
                styles: [`

    `],
                encapsulation: ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
GridstackItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
GridstackItemComponent.propDecorators = {
    'x': [{ type: Input },],
    'y': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'id': [{ type: Input },],
    'maxWidth': [{ type: Input, args: ['max-width',] },],
    'maxHeight': [{ type: Input, args: ['max-height',] },],
    'minWidth': [{ type: Input, args: ['min-width',] },],
    'minHeight': [{ type: Input, args: ['min-height',] },],
    'noResize': [{ type: Input, args: ['no-resize',] },],
    'noMove': [{ type: Input, args: ['no-move',] },],
    'autoPosition': [{ type: Input, args: ['auto-position',] },],
    'locked': [{ type: Input },],
    'resizeHandles': [{ type: Input, args: ['resize-handles',] },],
};

class GridstackService {
    constructor() {
        this._gridItems = [];
        this._grids = [];
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    addGrid(grid) {
        this._grids.push(grid);
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    removeGrid(grid) {
        this._grids.splice(this._grids.findIndex(g => g.generatedId == grid.generatedId), 1);
        this._gridItems = this._gridItems.filter(gi => gi.gridId != grid.generatedId);
    }
    /**
     * @param {?} gridId
     * @param {?} gridItemId
     * @return {?}
     */
    attachGridItem(gridId, gridItemId) {
        this._gridItems.find(gi => gi.item.generatedId == gridItemId).gridId = gridId;
    }
    /**
     * @param {?} gridItemId
     * @return {?}
     */
    detachGridItemIfExists(gridItemId) {
        const /** @type {?} */ gridItem = this._gridItems.find(gi => gi.item.generatedId == gridItemId);
        if (!!gridItem) {
            gridItem.gridId = null;
        }
    }
    /**
     * @param {?} gridId
     * @return {?}
     */
    getGridItems(gridId) {
        return this._gridItems.filter(gi => gi.gridId == gridId).map(g => g.item);
    }
    /**
     * @return {?}
     */
    getOrphanGridItems() {
        return this._gridItems.filter(gi => gi.gridId == null).map(g => g.item);
    }
    /**
     * @param {?} gridItem
     * @return {?}
     */
    addOrphanGridItem(gridItem) {
        this._gridItems.push({
            gridId: null,
            item: gridItem
        });
    }
    /**
     * @param {?} gridItemId
     * @return {?}
     */
    removeGridItem(gridItemId) {
        this._gridItems.splice(this._gridItems.findIndex(gi => gi.item.generatedId == gridItemId), 1);
    }
}
GridstackService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GridstackService.ctorParameters = () => [];

let _sequence = 0;
class GridstackComponent {
    /**
     * @param {?} _zone
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _gridstackService
     */
    constructor(_zone, _el, _renderer, _gridstackService) {
        this._zone = _zone;
        this._el = _el;
        this._renderer = _renderer;
        this._gridstackService = _gridstackService;
        this.change = new EventEmitter();
        this.added = new EventEmitter();
        this.removed = new EventEmitter();
        this.generatedId = (_sequence++).toString();
        this._ngUnsubscribe = new Subject$1();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.options && this.options.acceptWidgets != null) {
            console.error('acceptWidgets option not supported yet!');
        }
        this._zone.runOutsideAngular(() => {
            this._renderer.addClass(this._el.nativeElement, 'grid-stack');
            if (this._isValueTrue(this.animate)) {
                this._renderer.setAttribute(this._el.nativeElement, 'data-gs-animate', 'true');
            }
            this._setAttributeIfNotUndefined('data-gs-width', this.width);
            this._setAttributeIfNotUndefined('data-gs-height', this.height);
            const /** @type {?} */ width = this.width || (this.options || {}).width;
            if (!_.isNull(width) && !_.isUndefined(width)) {
                this._renderer.addClass(this._el.nativeElement, `grid-stack-${width}`);
            }
            // Cast due to the wrong IGridstackOptions definition. acceptWidgets should be a string
            const /** @type {?} */ el = $(this._el.nativeElement).gridstack(/** @type {?} */ (this.options));
            $(el).data('generated-id', this.generatedId);
            this._gridstack = ($(el).data('gridstack'));
            this._gridstackService.addGrid(this);
            // Hook events
            $(this._el.nativeElement).on('added', (evt, items) => {
                const /** @type {?} */ itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
                const /** @type {?} */ existingItemIds = ((this._gridstack)).grid.nodes.map(i => $(i.el)
                    .attr('class')
                    .split(/\s+/)
                    .find(s => s.startsWith('lb-generated-id-'))
                    .replace('lb-generated-id-', ''));
                const /** @type {?} */ itemsToAdd = existingItemIds.filter(i => !itemsOfCurrentGrid.some(ei => ei.generatedId == i));
                itemsToAdd.forEach(i => this._gridstackService.attachGridItem(this.generatedId, i));
                this.added.emit(items);
            });
            $(this._el.nativeElement).on('change', (evt, items) => {
                this.change.emit(items);
            });
            $(this._el.nativeElement).on('removed', (evt, items) => {
                const /** @type {?} */ itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
                const /** @type {?} */ existingItemIds = ((this._gridstack)).grid.nodes.map(i => $(i.el)
                    .attr('class')
                    .split(/\s+/)
                    .find(s => s.startsWith('lb-generated-id-'))
                    .replace('lb-generated-id-', ''));
                const /** @type {?} */ itemsToDelete = itemsOfCurrentGrid.filter(i => !existingItemIds.some(ei => ei == i.generatedId));
                itemsToDelete.forEach(i => this._gridstackService.detachGridItemIfExists(i.generatedId));
                this.removed.emit(items);
            });
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.gridstackItems.changes
            .takeUntil(this._ngUnsubscribe)
            .subscribe(changes => {
            this._handleItemChanges(this.gridstackItems.toArray());
        });
        this._handleItemChanges(this.gridstackItems.toArray());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._gridstack.destroy();
        this._gridstackService.removeGrid(this);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _handleItemChanges(items) {
        const /** @type {?} */ itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
        const /** @type {?} */ itemsToAdd = items.filter(i => !itemsOfCurrentGrid.some(w => w.generatedId == i.generatedId));
        const /** @type {?} */ itemsToRemove = itemsOfCurrentGrid.filter(w => !items.some(i => i.generatedId == w.generatedId));
        itemsToAdd.forEach(i => this._addItem(i));
        itemsToRemove.forEach(i => this._removeItem(i));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _addItem(item) {
        this._zone.runOutsideAngular(() => {
            if (this._gridstack.willItFit(+item.x, +item.y, +item.width, +item.height, this._isValueTrue(item.autoPosition))) {
                this._gridstackService.addOrphanGridItem(item);
                $(item.elem.nativeElement).addClass('lb-generated-id-' + item.generatedId);
                this._gridstack.makeWidget(item.elem.nativeElement);
            }
            else {
                console.error('Not enough free space to place the widget');
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _removeItem(item) {
        this._gridstackService.removeGridItem(item.generatedId);
        this._zone.runOutsideAngular(() => {
            this._gridstack.removeWidget(item.elem.nativeElement);
        });
    }
    /**
     * @param {?} attrName
     * @param {?} val
     * @return {?}
     */
    _setAttributeIfNotUndefined(attrName, val) {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this._el.nativeElement, attrName, val.toString());
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _isValueTrue(val) {
        return (typeof (val) === 'boolean' || (val == 'true'));
    }
}
GridstackComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[lb-gridstack]',
                template: `
      <ng-content></ng-content>
    `,
                styles: [`
      .grid-stack-1 .grid-stack-item[data-gs-width='1'] {
        width: 100%; }

      .grid-stack-1 .grid-stack-item[data-gs-x='1'] {
        left: 100%; }

      .grid-stack-1 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 100%; }

      .grid-stack-1 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 100%; }

      .grid-stack-2 .grid-stack-item[data-gs-width='1'] {
        width: 50%; }

      .grid-stack-2 .grid-stack-item[data-gs-x='1'] {
        left: 50%; }

      .grid-stack-2 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 50%; }

      .grid-stack-2 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 50%; }

      .grid-stack-2 .grid-stack-item[data-gs-width='2'] {
        width: 100%; }

      .grid-stack-2 .grid-stack-item[data-gs-x='2'] {
        left: 100%; }

      .grid-stack-2 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 100%; }

      .grid-stack-2 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 100%; }

      .grid-stack-3 .grid-stack-item[data-gs-width='1'] {
        width: 33.33333%; }

      .grid-stack-3 .grid-stack-item[data-gs-x='1'] {
        left: 33.33333%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 33.33333%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 33.33333%; }

      .grid-stack-3 .grid-stack-item[data-gs-width='2'] {
        width: 66.66667%; }

      .grid-stack-3 .grid-stack-item[data-gs-x='2'] {
        left: 66.66667%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 66.66667%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 66.66667%; }

      .grid-stack-3 .grid-stack-item[data-gs-width='3'] {
        width: 100%; }

      .grid-stack-3 .grid-stack-item[data-gs-x='3'] {
        left: 100%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 100%; }

      .grid-stack-3 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 100%; }

      .grid-stack-4 .grid-stack-item[data-gs-width='1'] {
        width: 25%; }

      .grid-stack-4 .grid-stack-item[data-gs-x='1'] {
        left: 25%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 25%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 25%; }

      .grid-stack-4 .grid-stack-item[data-gs-width='2'] {
        width: 50%; }

      .grid-stack-4 .grid-stack-item[data-gs-x='2'] {
        left: 50%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 50%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 50%; }

      .grid-stack-4 .grid-stack-item[data-gs-width='3'] {
        width: 75%; }

      .grid-stack-4 .grid-stack-item[data-gs-x='3'] {
        left: 75%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 75%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 75%; }

      .grid-stack-4 .grid-stack-item[data-gs-width='4'] {
        width: 100%; }

      .grid-stack-4 .grid-stack-item[data-gs-x='4'] {
        left: 100%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 100%; }

      .grid-stack-4 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 100%; }

      .grid-stack-5 .grid-stack-item[data-gs-width='1'] {
        width: 20%; }

      .grid-stack-5 .grid-stack-item[data-gs-x='1'] {
        left: 20%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 20%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 20%; }

      .grid-stack-5 .grid-stack-item[data-gs-width='2'] {
        width: 40%; }

      .grid-stack-5 .grid-stack-item[data-gs-x='2'] {
        left: 40%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 40%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 40%; }

      .grid-stack-5 .grid-stack-item[data-gs-width='3'] {
        width: 60%; }

      .grid-stack-5 .grid-stack-item[data-gs-x='3'] {
        left: 60%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 60%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 60%; }

      .grid-stack-5 .grid-stack-item[data-gs-width='4'] {
        width: 80%; }

      .grid-stack-5 .grid-stack-item[data-gs-x='4'] {
        left: 80%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 80%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 80%; }

      .grid-stack-5 .grid-stack-item[data-gs-width='5'] {
        width: 100%; }

      .grid-stack-5 .grid-stack-item[data-gs-x='5'] {
        left: 100%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 100%; }

      .grid-stack-5 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 100%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='1'] {
        width: 16.66667%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='1'] {
        left: 16.66667%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 16.66667%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 16.66667%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='2'] {
        width: 33.33333%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='2'] {
        left: 33.33333%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 33.33333%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 33.33333%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='3'] {
        width: 50%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='3'] {
        left: 50%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 50%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 50%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='4'] {
        width: 66.66667%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='4'] {
        left: 66.66667%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 66.66667%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 66.66667%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='5'] {
        width: 83.33333%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='5'] {
        left: 83.33333%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 83.33333%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 83.33333%; }

      .grid-stack-6 .grid-stack-item[data-gs-width='6'] {
        width: 100%; }

      .grid-stack-6 .grid-stack-item[data-gs-x='6'] {
        left: 100%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 100%; }

      .grid-stack-6 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 100%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='1'] {
        width: 14.28571%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='1'] {
        left: 14.28571%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 14.28571%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 14.28571%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='2'] {
        width: 28.57143%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='2'] {
        left: 28.57143%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 28.57143%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 28.57143%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='3'] {
        width: 42.85714%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='3'] {
        left: 42.85714%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 42.85714%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 42.85714%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='4'] {
        width: 57.14286%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='4'] {
        left: 57.14286%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 57.14286%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 57.14286%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='5'] {
        width: 71.42857%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='5'] {
        left: 71.42857%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 71.42857%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 71.42857%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='6'] {
        width: 85.71429%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='6'] {
        left: 85.71429%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 85.71429%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 85.71429%; }

      .grid-stack-7 .grid-stack-item[data-gs-width='7'] {
        width: 100%; }

      .grid-stack-7 .grid-stack-item[data-gs-x='7'] {
        left: 100%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 100%; }

      .grid-stack-7 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 100%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='1'] {
        width: 12.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='1'] {
        left: 12.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 12.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 12.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='2'] {
        width: 25%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='2'] {
        left: 25%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 25%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 25%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='3'] {
        width: 37.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='3'] {
        left: 37.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 37.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 37.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='4'] {
        width: 50%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='4'] {
        left: 50%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 50%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 50%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='5'] {
        width: 62.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='5'] {
        left: 62.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 62.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 62.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='6'] {
        width: 75%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='6'] {
        left: 75%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 75%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 75%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='7'] {
        width: 87.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='7'] {
        left: 87.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 87.5%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 87.5%; }

      .grid-stack-8 .grid-stack-item[data-gs-width='8'] {
        width: 100%; }

      .grid-stack-8 .grid-stack-item[data-gs-x='8'] {
        left: 100%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 100%; }

      .grid-stack-8 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 100%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='1'] {
        width: 11.11111%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='1'] {
        left: 11.11111%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 11.11111%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 11.11111%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='2'] {
        width: 22.22222%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='2'] {
        left: 22.22222%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 22.22222%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 22.22222%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='3'] {
        width: 33.33333%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='3'] {
        left: 33.33333%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 33.33333%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 33.33333%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='4'] {
        width: 44.44444%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='4'] {
        left: 44.44444%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 44.44444%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 44.44444%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='5'] {
        width: 55.55556%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='5'] {
        left: 55.55556%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 55.55556%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 55.55556%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='6'] {
        width: 66.66667%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='6'] {
        left: 66.66667%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 66.66667%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 66.66667%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='7'] {
        width: 77.77778%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='7'] {
        left: 77.77778%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 77.77778%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 77.77778%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='8'] {
        width: 88.88889%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='8'] {
        left: 88.88889%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 88.88889%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 88.88889%; }

      .grid-stack-9 .grid-stack-item[data-gs-width='9'] {
        width: 100%; }

      .grid-stack-9 .grid-stack-item[data-gs-x='9'] {
        left: 100%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 100%; }

      .grid-stack-9 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 100%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='1'] {
        width: 10%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='1'] {
        left: 10%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 10%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 10%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='2'] {
        width: 20%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='2'] {
        left: 20%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 20%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 20%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='3'] {
        width: 30%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='3'] {
        left: 30%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 30%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 30%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='4'] {
        width: 40%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='4'] {
        left: 40%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 40%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 40%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='5'] {
        width: 50%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='5'] {
        left: 50%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 50%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 50%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='6'] {
        width: 60%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='6'] {
        left: 60%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 60%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 60%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='7'] {
        width: 70%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='7'] {
        left: 70%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 70%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 70%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='8'] {
        width: 80%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='8'] {
        left: 80%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 80%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 80%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='9'] {
        width: 90%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='9'] {
        left: 90%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 90%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 90%; }

      .grid-stack-10 .grid-stack-item[data-gs-width='10'] {
        width: 100%; }

      .grid-stack-10 .grid-stack-item[data-gs-x='10'] {
        left: 100%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 100%; }

      .grid-stack-10 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 100%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='1'] {
        width: 9.09091%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='1'] {
        left: 9.09091%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 9.09091%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 9.09091%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='2'] {
        width: 18.18182%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='2'] {
        left: 18.18182%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 18.18182%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 18.18182%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='3'] {
        width: 27.27273%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='3'] {
        left: 27.27273%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 27.27273%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 27.27273%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='4'] {
        width: 36.36364%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='4'] {
        left: 36.36364%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 36.36364%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 36.36364%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='5'] {
        width: 45.45455%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='5'] {
        left: 45.45455%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 45.45455%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 45.45455%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='6'] {
        width: 54.54545%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='6'] {
        left: 54.54545%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 54.54545%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 54.54545%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='7'] {
        width: 63.63636%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='7'] {
        left: 63.63636%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 63.63636%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 63.63636%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='8'] {
        width: 72.72727%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='8'] {
        left: 72.72727%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 72.72727%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 72.72727%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='9'] {
        width: 81.81818%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='9'] {
        left: 81.81818%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 81.81818%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 81.81818%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='10'] {
        width: 90.90909%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='10'] {
        left: 90.90909%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 90.90909%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 90.90909%; }

      .grid-stack-11 .grid-stack-item[data-gs-width='11'] {
        width: 100%; }

      .grid-stack-11 .grid-stack-item[data-gs-x='11'] {
        left: 100%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 100%; }

      .grid-stack-11 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 100%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='1'] {
        width: 8.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='1'] {
        left: 8.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 8.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 8.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='2'] {
        width: 16.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='2'] {
        left: 16.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 16.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 16.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='3'] {
        width: 25%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='3'] {
        left: 25%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 25%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 25%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='4'] {
        width: 33.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='4'] {
        left: 33.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 33.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 33.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='5'] {
        width: 41.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='5'] {
        left: 41.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 41.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 41.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='6'] {
        width: 50%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='6'] {
        left: 50%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 50%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 50%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='7'] {
        width: 58.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='7'] {
        left: 58.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 58.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 58.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='8'] {
        width: 66.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='8'] {
        left: 66.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 66.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 66.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='9'] {
        width: 75%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='9'] {
        left: 75%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 75%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 75%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='10'] {
        width: 83.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='10'] {
        left: 83.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 83.33333%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 83.33333%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='11'] {
        width: 91.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='11'] {
        left: 91.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 91.66667%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 91.66667%; }

      .grid-stack-12 .grid-stack-item[data-gs-width='12'] {
        width: 100%; }

      .grid-stack-12 .grid-stack-item[data-gs-x='12'] {
        left: 100%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 100%; }

      .grid-stack-12 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 100%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='1'] {
        width: 7.69231%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='1'] {
        left: 7.69231%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 7.69231%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 7.69231%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='2'] {
        width: 15.38462%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='2'] {
        left: 15.38462%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 15.38462%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 15.38462%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='3'] {
        width: 23.07692%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='3'] {
        left: 23.07692%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 23.07692%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 23.07692%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='4'] {
        width: 30.76923%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='4'] {
        left: 30.76923%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 30.76923%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 30.76923%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='5'] {
        width: 38.46154%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='5'] {
        left: 38.46154%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 38.46154%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 38.46154%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='6'] {
        width: 46.15385%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='6'] {
        left: 46.15385%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 46.15385%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 46.15385%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='7'] {
        width: 53.84615%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='7'] {
        left: 53.84615%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 53.84615%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 53.84615%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='8'] {
        width: 61.53846%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='8'] {
        left: 61.53846%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 61.53846%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 61.53846%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='9'] {
        width: 69.23077%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='9'] {
        left: 69.23077%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 69.23077%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 69.23077%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='10'] {
        width: 76.92308%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='10'] {
        left: 76.92308%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 76.92308%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 76.92308%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='11'] {
        width: 84.61538%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='11'] {
        left: 84.61538%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 84.61538%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 84.61538%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='12'] {
        width: 92.30769%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='12'] {
        left: 92.30769%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 92.30769%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 92.30769%; }

      .grid-stack-13 .grid-stack-item[data-gs-width='13'] {
        width: 100%; }

      .grid-stack-13 .grid-stack-item[data-gs-x='13'] {
        left: 100%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 100%; }

      .grid-stack-13 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 100%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='1'] {
        width: 7.14286%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='1'] {
        left: 7.14286%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 7.14286%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 7.14286%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='2'] {
        width: 14.28571%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='2'] {
        left: 14.28571%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 14.28571%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 14.28571%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='3'] {
        width: 21.42857%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='3'] {
        left: 21.42857%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 21.42857%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 21.42857%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='4'] {
        width: 28.57143%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='4'] {
        left: 28.57143%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 28.57143%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 28.57143%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='5'] {
        width: 35.71429%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='5'] {
        left: 35.71429%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 35.71429%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 35.71429%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='6'] {
        width: 42.85714%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='6'] {
        left: 42.85714%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 42.85714%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 42.85714%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='7'] {
        width: 50%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='7'] {
        left: 50%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 50%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 50%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='8'] {
        width: 57.14286%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='8'] {
        left: 57.14286%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 57.14286%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 57.14286%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='9'] {
        width: 64.28571%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='9'] {
        left: 64.28571%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 64.28571%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 64.28571%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='10'] {
        width: 71.42857%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='10'] {
        left: 71.42857%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 71.42857%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 71.42857%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='11'] {
        width: 78.57143%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='11'] {
        left: 78.57143%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 78.57143%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 78.57143%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='12'] {
        width: 85.71429%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='12'] {
        left: 85.71429%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 85.71429%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 85.71429%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='13'] {
        width: 92.85714%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='13'] {
        left: 92.85714%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 92.85714%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 92.85714%; }

      .grid-stack-14 .grid-stack-item[data-gs-width='14'] {
        width: 100%; }

      .grid-stack-14 .grid-stack-item[data-gs-x='14'] {
        left: 100%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 100%; }

      .grid-stack-14 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 100%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='1'] {
        width: 6.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='1'] {
        left: 6.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 6.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 6.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='2'] {
        width: 13.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='2'] {
        left: 13.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 13.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 13.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='3'] {
        width: 20%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='3'] {
        left: 20%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 20%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 20%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='4'] {
        width: 26.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='4'] {
        left: 26.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 26.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 26.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='5'] {
        width: 33.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='5'] {
        left: 33.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 33.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 33.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='6'] {
        width: 40%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='6'] {
        left: 40%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 40%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 40%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='7'] {
        width: 46.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='7'] {
        left: 46.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 46.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 46.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='8'] {
        width: 53.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='8'] {
        left: 53.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 53.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 53.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='9'] {
        width: 60%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='9'] {
        left: 60%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 60%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 60%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='10'] {
        width: 66.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='10'] {
        left: 66.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 66.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 66.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='11'] {
        width: 73.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='11'] {
        left: 73.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 73.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 73.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='12'] {
        width: 80%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='12'] {
        left: 80%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 80%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 80%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='13'] {
        width: 86.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='13'] {
        left: 86.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 86.66667%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 86.66667%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='14'] {
        width: 93.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='14'] {
        left: 93.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 93.33333%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 93.33333%; }

      .grid-stack-15 .grid-stack-item[data-gs-width='15'] {
        width: 100%; }

      .grid-stack-15 .grid-stack-item[data-gs-x='15'] {
        left: 100%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 100%; }

      .grid-stack-15 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 100%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='1'] {
        width: 6.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='1'] {
        left: 6.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 6.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 6.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='2'] {
        width: 12.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='2'] {
        left: 12.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 12.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 12.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='3'] {
        width: 18.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='3'] {
        left: 18.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 18.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 18.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='4'] {
        width: 25%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='4'] {
        left: 25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 25%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='5'] {
        width: 31.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='5'] {
        left: 31.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 31.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 31.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='6'] {
        width: 37.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='6'] {
        left: 37.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 37.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 37.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='7'] {
        width: 43.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='7'] {
        left: 43.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 43.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 43.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='8'] {
        width: 50%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='8'] {
        left: 50%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 50%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 50%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='9'] {
        width: 56.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='9'] {
        left: 56.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 56.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 56.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='10'] {
        width: 62.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='10'] {
        left: 62.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 62.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 62.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='11'] {
        width: 68.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='11'] {
        left: 68.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 68.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 68.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='12'] {
        width: 75%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='12'] {
        left: 75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 75%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='13'] {
        width: 81.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='13'] {
        left: 81.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 81.25%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 81.25%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='14'] {
        width: 87.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='14'] {
        left: 87.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 87.5%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 87.5%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='15'] {
        width: 93.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='15'] {
        left: 93.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 93.75%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 93.75%; }

      .grid-stack-16 .grid-stack-item[data-gs-width='16'] {
        width: 100%; }

      .grid-stack-16 .grid-stack-item[data-gs-x='16'] {
        left: 100%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 100%; }

      .grid-stack-16 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 100%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='1'] {
        width: 5.88235%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='1'] {
        left: 5.88235%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 5.88235%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 5.88235%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='2'] {
        width: 11.76471%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='2'] {
        left: 11.76471%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 11.76471%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 11.76471%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='3'] {
        width: 17.64706%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='3'] {
        left: 17.64706%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 17.64706%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 17.64706%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='4'] {
        width: 23.52941%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='4'] {
        left: 23.52941%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 23.52941%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 23.52941%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='5'] {
        width: 29.41176%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='5'] {
        left: 29.41176%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 29.41176%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 29.41176%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='6'] {
        width: 35.29412%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='6'] {
        left: 35.29412%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 35.29412%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 35.29412%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='7'] {
        width: 41.17647%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='7'] {
        left: 41.17647%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 41.17647%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 41.17647%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='8'] {
        width: 47.05882%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='8'] {
        left: 47.05882%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 47.05882%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 47.05882%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='9'] {
        width: 52.94118%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='9'] {
        left: 52.94118%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 52.94118%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 52.94118%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='10'] {
        width: 58.82353%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='10'] {
        left: 58.82353%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 58.82353%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 58.82353%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='11'] {
        width: 64.70588%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='11'] {
        left: 64.70588%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 64.70588%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 64.70588%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='12'] {
        width: 70.58824%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='12'] {
        left: 70.58824%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 70.58824%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 70.58824%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='13'] {
        width: 76.47059%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='13'] {
        left: 76.47059%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 76.47059%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 76.47059%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='14'] {
        width: 82.35294%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='14'] {
        left: 82.35294%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 82.35294%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 82.35294%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='15'] {
        width: 88.23529%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='15'] {
        left: 88.23529%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 88.23529%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 88.23529%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='16'] {
        width: 94.11765%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='16'] {
        left: 94.11765%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 94.11765%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 94.11765%; }

      .grid-stack-17 .grid-stack-item[data-gs-width='17'] {
        width: 100%; }

      .grid-stack-17 .grid-stack-item[data-gs-x='17'] {
        left: 100%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 100%; }

      .grid-stack-17 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 100%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='1'] {
        width: 5.55556%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='1'] {
        left: 5.55556%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 5.55556%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 5.55556%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='2'] {
        width: 11.11111%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='2'] {
        left: 11.11111%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 11.11111%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 11.11111%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='3'] {
        width: 16.66667%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='3'] {
        left: 16.66667%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 16.66667%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 16.66667%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='4'] {
        width: 22.22222%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='4'] {
        left: 22.22222%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 22.22222%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 22.22222%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='5'] {
        width: 27.77778%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='5'] {
        left: 27.77778%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 27.77778%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 27.77778%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='6'] {
        width: 33.33333%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='6'] {
        left: 33.33333%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 33.33333%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 33.33333%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='7'] {
        width: 38.88889%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='7'] {
        left: 38.88889%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 38.88889%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 38.88889%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='8'] {
        width: 44.44444%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='8'] {
        left: 44.44444%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 44.44444%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 44.44444%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='9'] {
        width: 50%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='9'] {
        left: 50%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 50%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 50%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='10'] {
        width: 55.55556%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='10'] {
        left: 55.55556%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 55.55556%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 55.55556%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='11'] {
        width: 61.11111%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='11'] {
        left: 61.11111%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 61.11111%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 61.11111%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='12'] {
        width: 66.66667%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='12'] {
        left: 66.66667%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 66.66667%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 66.66667%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='13'] {
        width: 72.22222%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='13'] {
        left: 72.22222%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 72.22222%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 72.22222%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='14'] {
        width: 77.77778%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='14'] {
        left: 77.77778%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 77.77778%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 77.77778%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='15'] {
        width: 83.33333%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='15'] {
        left: 83.33333%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 83.33333%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 83.33333%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='16'] {
        width: 88.88889%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='16'] {
        left: 88.88889%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 88.88889%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 88.88889%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='17'] {
        width: 94.44444%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='17'] {
        left: 94.44444%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 94.44444%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 94.44444%; }

      .grid-stack-18 .grid-stack-item[data-gs-width='18'] {
        width: 100%; }

      .grid-stack-18 .grid-stack-item[data-gs-x='18'] {
        left: 100%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 100%; }

      .grid-stack-18 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 100%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='1'] {
        width: 5.26316%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='1'] {
        left: 5.26316%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 5.26316%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 5.26316%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='2'] {
        width: 10.52632%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='2'] {
        left: 10.52632%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 10.52632%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 10.52632%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='3'] {
        width: 15.78947%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='3'] {
        left: 15.78947%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 15.78947%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 15.78947%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='4'] {
        width: 21.05263%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='4'] {
        left: 21.05263%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 21.05263%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 21.05263%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='5'] {
        width: 26.31579%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='5'] {
        left: 26.31579%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 26.31579%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 26.31579%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='6'] {
        width: 31.57895%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='6'] {
        left: 31.57895%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 31.57895%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 31.57895%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='7'] {
        width: 36.84211%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='7'] {
        left: 36.84211%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 36.84211%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 36.84211%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='8'] {
        width: 42.10526%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='8'] {
        left: 42.10526%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 42.10526%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 42.10526%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='9'] {
        width: 47.36842%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='9'] {
        left: 47.36842%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 47.36842%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 47.36842%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='10'] {
        width: 52.63158%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='10'] {
        left: 52.63158%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 52.63158%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 52.63158%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='11'] {
        width: 57.89474%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='11'] {
        left: 57.89474%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 57.89474%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 57.89474%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='12'] {
        width: 63.15789%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='12'] {
        left: 63.15789%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 63.15789%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 63.15789%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='13'] {
        width: 68.42105%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='13'] {
        left: 68.42105%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 68.42105%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 68.42105%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='14'] {
        width: 73.68421%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='14'] {
        left: 73.68421%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 73.68421%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 73.68421%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='15'] {
        width: 78.94737%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='15'] {
        left: 78.94737%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 78.94737%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 78.94737%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='16'] {
        width: 84.21053%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='16'] {
        left: 84.21053%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 84.21053%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 84.21053%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='17'] {
        width: 89.47368%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='17'] {
        left: 89.47368%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 89.47368%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 89.47368%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='18'] {
        width: 94.73684%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='18'] {
        left: 94.73684%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 94.73684%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 94.73684%; }

      .grid-stack-19 .grid-stack-item[data-gs-width='19'] {
        width: 100%; }

      .grid-stack-19 .grid-stack-item[data-gs-x='19'] {
        left: 100%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 100%; }

      .grid-stack-19 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 100%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='1'] {
        width: 5%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='1'] {
        left: 5%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 5%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 5%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='2'] {
        width: 10%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='2'] {
        left: 10%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 10%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 10%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='3'] {
        width: 15%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='3'] {
        left: 15%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 15%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 15%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='4'] {
        width: 20%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='4'] {
        left: 20%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 20%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 20%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='5'] {
        width: 25%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='5'] {
        left: 25%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 25%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 25%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='6'] {
        width: 30%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='6'] {
        left: 30%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 30%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 30%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='7'] {
        width: 35%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='7'] {
        left: 35%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 35%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 35%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='8'] {
        width: 40%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='8'] {
        left: 40%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 40%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 40%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='9'] {
        width: 45%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='9'] {
        left: 45%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 45%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 45%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='10'] {
        width: 50%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='10'] {
        left: 50%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 50%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 50%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='11'] {
        width: 55%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='11'] {
        left: 55%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 55%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 55%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='12'] {
        width: 60%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='12'] {
        left: 60%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 60%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 60%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='13'] {
        width: 65%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='13'] {
        left: 65%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 65%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 65%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='14'] {
        width: 70%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='14'] {
        left: 70%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 70%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 70%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='15'] {
        width: 75%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='15'] {
        left: 75%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 75%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 75%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='16'] {
        width: 80%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='16'] {
        left: 80%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 80%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 80%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='17'] {
        width: 85%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='17'] {
        left: 85%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 85%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 85%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='18'] {
        width: 90%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='18'] {
        left: 90%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 90%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 90%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='19'] {
        width: 95%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='19'] {
        left: 95%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 95%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 95%; }

      .grid-stack-20 .grid-stack-item[data-gs-width='20'] {
        width: 100%; }

      .grid-stack-20 .grid-stack-item[data-gs-x='20'] {
        left: 100%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-min-width='20'] {
        min-width: 100%; }

      .grid-stack-20 .grid-stack-item.grid-stack-item[data-gs-max-width='20'] {
        max-width: 100%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='1'] {
        width: 4.7619%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='1'] {
        left: 4.7619%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 4.7619%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 4.7619%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='2'] {
        width: 9.52381%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='2'] {
        left: 9.52381%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 9.52381%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 9.52381%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='3'] {
        width: 14.28571%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='3'] {
        left: 14.28571%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 14.28571%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 14.28571%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='4'] {
        width: 19.04762%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='4'] {
        left: 19.04762%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 19.04762%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 19.04762%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='5'] {
        width: 23.80952%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='5'] {
        left: 23.80952%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 23.80952%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 23.80952%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='6'] {
        width: 28.57143%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='6'] {
        left: 28.57143%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 28.57143%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 28.57143%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='7'] {
        width: 33.33333%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='7'] {
        left: 33.33333%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 33.33333%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 33.33333%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='8'] {
        width: 38.09524%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='8'] {
        left: 38.09524%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 38.09524%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 38.09524%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='9'] {
        width: 42.85714%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='9'] {
        left: 42.85714%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 42.85714%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 42.85714%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='10'] {
        width: 47.61905%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='10'] {
        left: 47.61905%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 47.61905%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 47.61905%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='11'] {
        width: 52.38095%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='11'] {
        left: 52.38095%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 52.38095%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 52.38095%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='12'] {
        width: 57.14286%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='12'] {
        left: 57.14286%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 57.14286%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 57.14286%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='13'] {
        width: 61.90476%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='13'] {
        left: 61.90476%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 61.90476%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 61.90476%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='14'] {
        width: 66.66667%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='14'] {
        left: 66.66667%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 66.66667%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 66.66667%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='15'] {
        width: 71.42857%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='15'] {
        left: 71.42857%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 71.42857%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 71.42857%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='16'] {
        width: 76.19048%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='16'] {
        left: 76.19048%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 76.19048%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 76.19048%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='17'] {
        width: 80.95238%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='17'] {
        left: 80.95238%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 80.95238%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 80.95238%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='18'] {
        width: 85.71429%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='18'] {
        left: 85.71429%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 85.71429%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 85.71429%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='19'] {
        width: 90.47619%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='19'] {
        left: 90.47619%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 90.47619%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 90.47619%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='20'] {
        width: 95.2381%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='20'] {
        left: 95.2381%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='20'] {
        min-width: 95.2381%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='20'] {
        max-width: 95.2381%; }

      .grid-stack-21 .grid-stack-item[data-gs-width='21'] {
        width: 100%; }

      .grid-stack-21 .grid-stack-item[data-gs-x='21'] {
        left: 100%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-min-width='21'] {
        min-width: 100%; }

      .grid-stack-21 .grid-stack-item.grid-stack-item[data-gs-max-width='21'] {
        max-width: 100%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='1'] {
        width: 4.54545%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='1'] {
        left: 4.54545%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 4.54545%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 4.54545%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='2'] {
        width: 9.09091%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='2'] {
        left: 9.09091%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 9.09091%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 9.09091%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='3'] {
        width: 13.63636%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='3'] {
        left: 13.63636%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 13.63636%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 13.63636%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='4'] {
        width: 18.18182%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='4'] {
        left: 18.18182%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 18.18182%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 18.18182%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='5'] {
        width: 22.72727%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='5'] {
        left: 22.72727%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 22.72727%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 22.72727%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='6'] {
        width: 27.27273%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='6'] {
        left: 27.27273%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 27.27273%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 27.27273%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='7'] {
        width: 31.81818%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='7'] {
        left: 31.81818%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 31.81818%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 31.81818%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='8'] {
        width: 36.36364%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='8'] {
        left: 36.36364%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 36.36364%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 36.36364%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='9'] {
        width: 40.90909%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='9'] {
        left: 40.90909%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 40.90909%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 40.90909%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='10'] {
        width: 45.45455%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='10'] {
        left: 45.45455%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 45.45455%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 45.45455%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='11'] {
        width: 50%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='11'] {
        left: 50%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 50%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 50%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='12'] {
        width: 54.54545%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='12'] {
        left: 54.54545%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 54.54545%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 54.54545%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='13'] {
        width: 59.09091%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='13'] {
        left: 59.09091%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 59.09091%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 59.09091%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='14'] {
        width: 63.63636%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='14'] {
        left: 63.63636%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 63.63636%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 63.63636%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='15'] {
        width: 68.18182%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='15'] {
        left: 68.18182%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 68.18182%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 68.18182%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='16'] {
        width: 72.72727%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='16'] {
        left: 72.72727%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 72.72727%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 72.72727%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='17'] {
        width: 77.27273%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='17'] {
        left: 77.27273%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 77.27273%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 77.27273%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='18'] {
        width: 81.81818%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='18'] {
        left: 81.81818%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 81.81818%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 81.81818%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='19'] {
        width: 86.36364%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='19'] {
        left: 86.36364%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 86.36364%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 86.36364%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='20'] {
        width: 90.90909%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='20'] {
        left: 90.90909%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='20'] {
        min-width: 90.90909%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='20'] {
        max-width: 90.90909%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='21'] {
        width: 95.45455%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='21'] {
        left: 95.45455%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='21'] {
        min-width: 95.45455%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='21'] {
        max-width: 95.45455%; }

      .grid-stack-22 .grid-stack-item[data-gs-width='22'] {
        width: 100%; }

      .grid-stack-22 .grid-stack-item[data-gs-x='22'] {
        left: 100%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-min-width='22'] {
        min-width: 100%; }

      .grid-stack-22 .grid-stack-item.grid-stack-item[data-gs-max-width='22'] {
        max-width: 100%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='1'] {
        width: 4.34783%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='1'] {
        left: 4.34783%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 4.34783%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 4.34783%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='2'] {
        width: 8.69565%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='2'] {
        left: 8.69565%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 8.69565%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 8.69565%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='3'] {
        width: 13.04348%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='3'] {
        left: 13.04348%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 13.04348%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 13.04348%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='4'] {
        width: 17.3913%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='4'] {
        left: 17.3913%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 17.3913%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 17.3913%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='5'] {
        width: 21.73913%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='5'] {
        left: 21.73913%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 21.73913%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 21.73913%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='6'] {
        width: 26.08696%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='6'] {
        left: 26.08696%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 26.08696%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 26.08696%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='7'] {
        width: 30.43478%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='7'] {
        left: 30.43478%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 30.43478%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 30.43478%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='8'] {
        width: 34.78261%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='8'] {
        left: 34.78261%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 34.78261%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 34.78261%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='9'] {
        width: 39.13043%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='9'] {
        left: 39.13043%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 39.13043%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 39.13043%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='10'] {
        width: 43.47826%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='10'] {
        left: 43.47826%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 43.47826%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 43.47826%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='11'] {
        width: 47.82609%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='11'] {
        left: 47.82609%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 47.82609%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 47.82609%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='12'] {
        width: 52.17391%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='12'] {
        left: 52.17391%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 52.17391%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 52.17391%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='13'] {
        width: 56.52174%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='13'] {
        left: 56.52174%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 56.52174%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 56.52174%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='14'] {
        width: 60.86957%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='14'] {
        left: 60.86957%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 60.86957%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 60.86957%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='15'] {
        width: 65.21739%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='15'] {
        left: 65.21739%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 65.21739%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 65.21739%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='16'] {
        width: 69.56522%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='16'] {
        left: 69.56522%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 69.56522%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 69.56522%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='17'] {
        width: 73.91304%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='17'] {
        left: 73.91304%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 73.91304%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 73.91304%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='18'] {
        width: 78.26087%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='18'] {
        left: 78.26087%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 78.26087%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 78.26087%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='19'] {
        width: 82.6087%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='19'] {
        left: 82.6087%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 82.6087%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 82.6087%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='20'] {
        width: 86.95652%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='20'] {
        left: 86.95652%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='20'] {
        min-width: 86.95652%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='20'] {
        max-width: 86.95652%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='21'] {
        width: 91.30435%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='21'] {
        left: 91.30435%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='21'] {
        min-width: 91.30435%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='21'] {
        max-width: 91.30435%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='22'] {
        width: 95.65217%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='22'] {
        left: 95.65217%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='22'] {
        min-width: 95.65217%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='22'] {
        max-width: 95.65217%; }

      .grid-stack-23 .grid-stack-item[data-gs-width='23'] {
        width: 100%; }

      .grid-stack-23 .grid-stack-item[data-gs-x='23'] {
        left: 100%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-min-width='23'] {
        min-width: 100%; }

      .grid-stack-23 .grid-stack-item.grid-stack-item[data-gs-max-width='23'] {
        max-width: 100%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='1'] {
        width: 4.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='1'] {
        left: 4.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='1'] {
        min-width: 4.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='1'] {
        max-width: 4.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='2'] {
        width: 8.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='2'] {
        left: 8.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='2'] {
        min-width: 8.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='2'] {
        max-width: 8.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='3'] {
        width: 12.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='3'] {
        left: 12.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='3'] {
        min-width: 12.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='3'] {
        max-width: 12.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='4'] {
        width: 16.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='4'] {
        left: 16.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='4'] {
        min-width: 16.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='4'] {
        max-width: 16.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='5'] {
        width: 20.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='5'] {
        left: 20.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='5'] {
        min-width: 20.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='5'] {
        max-width: 20.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='6'] {
        width: 25%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='6'] {
        left: 25%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='6'] {
        min-width: 25%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='6'] {
        max-width: 25%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='7'] {
        width: 29.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='7'] {
        left: 29.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='7'] {
        min-width: 29.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='7'] {
        max-width: 29.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='8'] {
        width: 33.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='8'] {
        left: 33.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='8'] {
        min-width: 33.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='8'] {
        max-width: 33.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='9'] {
        width: 37.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='9'] {
        left: 37.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='9'] {
        min-width: 37.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='9'] {
        max-width: 37.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='10'] {
        width: 41.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='10'] {
        left: 41.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='10'] {
        min-width: 41.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='10'] {
        max-width: 41.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='11'] {
        width: 45.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='11'] {
        left: 45.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='11'] {
        min-width: 45.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='11'] {
        max-width: 45.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='12'] {
        width: 50%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='12'] {
        left: 50%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='12'] {
        min-width: 50%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='12'] {
        max-width: 50%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='13'] {
        width: 54.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='13'] {
        left: 54.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='13'] {
        min-width: 54.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='13'] {
        max-width: 54.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='14'] {
        width: 58.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='14'] {
        left: 58.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='14'] {
        min-width: 58.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='14'] {
        max-width: 58.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='15'] {
        width: 62.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='15'] {
        left: 62.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='15'] {
        min-width: 62.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='15'] {
        max-width: 62.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='16'] {
        width: 66.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='16'] {
        left: 66.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='16'] {
        min-width: 66.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='16'] {
        max-width: 66.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='17'] {
        width: 70.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='17'] {
        left: 70.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='17'] {
        min-width: 70.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='17'] {
        max-width: 70.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='18'] {
        width: 75%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='18'] {
        left: 75%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='18'] {
        min-width: 75%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='18'] {
        max-width: 75%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='19'] {
        width: 79.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='19'] {
        left: 79.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='19'] {
        min-width: 79.16667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='19'] {
        max-width: 79.16667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='20'] {
        width: 83.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='20'] {
        left: 83.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='20'] {
        min-width: 83.33333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='20'] {
        max-width: 83.33333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='21'] {
        width: 87.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='21'] {
        left: 87.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='21'] {
        min-width: 87.5%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='21'] {
        max-width: 87.5%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='22'] {
        width: 91.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='22'] {
        left: 91.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='22'] {
        min-width: 91.66667%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='22'] {
        max-width: 91.66667%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='23'] {
        width: 95.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='23'] {
        left: 95.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='23'] {
        min-width: 95.83333%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='23'] {
        max-width: 95.83333%; }

      .grid-stack-24 .grid-stack-item[data-gs-width='24'] {
        width: 100%; }

      .grid-stack-24 .grid-stack-item[data-gs-x='24'] {
        left: 100%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-min-width='24'] {
        min-width: 100%; }

      .grid-stack-24 .grid-stack-item.grid-stack-item[data-gs-max-width='24'] {
        max-width: 100%; }
    `],
                encapsulation: ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
GridstackComponent.ctorParameters = () => [
    { type: NgZone, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: GridstackService, },
];
GridstackComponent.propDecorators = {
    'gridstackItems': [{ type: ContentChildren, args: [GridstackItemComponent,] },],
    'options': [{ type: Input },],
    'animate': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'change': [{ type: Output },],
    'added': [{ type: Output },],
    'removed': [{ type: Output },],
};

class GridstackModule {
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
            },] },
];
/**
 * @nocollapse
 */
GridstackModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { GridstackComponent, GridstackItemComponent, GridstackModule, GridstackService as ɵa };
//# sourceMappingURL=gridstack.js.map
