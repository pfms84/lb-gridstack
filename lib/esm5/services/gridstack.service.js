/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var GridstackService = /** @class */ (function () {
    function GridstackService() {
        this._gridItems = [];
        this._grids = [];
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    GridstackService.prototype.addGrid = /**
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        this._grids.push(grid);
    };
    /**
     * @param {?} grid
     * @return {?}
     */
    GridstackService.prototype.removeGrid = /**
     * @param {?} grid
     * @return {?}
     */
    function (grid) {
        this._grids.splice(this._grids.findIndex(function (g) { return g.generatedId == grid.generatedId; }), 1);
        this._gridItems = this._gridItems.filter(function (gi) { return gi.gridId != grid.generatedId; });
    };
    /**
     * @param {?} gridId
     * @param {?} gridItemId
     * @return {?}
     */
    GridstackService.prototype.attachGridItem = /**
     * @param {?} gridId
     * @param {?} gridItemId
     * @return {?}
     */
    function (gridId, gridItemId) {
        this._gridItems.find(function (gi) { return gi.item.generatedId == gridItemId; }).gridId = gridId;
    };
    /**
     * @param {?} gridItemId
     * @return {?}
     */
    GridstackService.prototype.detachGridItemIfExists = /**
     * @param {?} gridItemId
     * @return {?}
     */
    function (gridItemId) {
        /** @type {?} */
        var gridItem = this._gridItems.find(function (gi) { return gi.item.generatedId == gridItemId; });
        if (!!gridItem) {
            gridItem.gridId = null;
        }
    };
    /**
     * @param {?} gridId
     * @return {?}
     */
    GridstackService.prototype.getGridItems = /**
     * @param {?} gridId
     * @return {?}
     */
    function (gridId) {
        return this._gridItems.filter(function (gi) { return gi.gridId == gridId; }).map(function (g) { return g.item; });
    };
    /**
     * @return {?}
     */
    GridstackService.prototype.getOrphanGridItems = /**
     * @return {?}
     */
    function () {
        return this._gridItems.filter(function (gi) { return gi.gridId == null; }).map(function (g) { return g.item; });
    };
    /**
     * @param {?} gridItem
     * @return {?}
     */
    GridstackService.prototype.addOrphanGridItem = /**
     * @param {?} gridItem
     * @return {?}
     */
    function (gridItem) {
        this._gridItems.push({
            gridId: null,
            item: gridItem
        });
    };
    /**
     * @param {?} gridItemId
     * @return {?}
     */
    GridstackService.prototype.removeGridItem = /**
     * @param {?} gridItemId
     * @return {?}
     */
    function (gridItemId) {
        this._gridItems.splice(this._gridItems.findIndex(function (gi) { return gi.item.generatedId == gridItemId; }), 1);
    };
    GridstackService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GridstackService.ctorParameters = function () { return []; };
    return GridstackService;
}());
export { GridstackService };
if (false) {
    /** @type {?} */
    GridstackService.prototype._gridItems;
    /** @type {?} */
    GridstackService.prototype._grids;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGlicmlhL2dyaWRzdGFjay8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dyaWRzdGFjay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWF2QzswQkFKTSxFQUFFO3NCQUVnQixFQUFFO0tBRVQ7Ozs7O0lBRWpCLGtDQUFPOzs7O0lBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLElBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQWpDLENBQWlDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUE3QixDQUE2QixDQUFDLENBQUM7S0FDakY7Ozs7OztJQUVELHlDQUFjOzs7OztJQUFkLFVBQWUsTUFBYyxFQUFFLFVBQWtCO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFqQyxDQUFpQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUNqRjs7Ozs7SUFFRCxpREFBc0I7Ozs7SUFBdEIsVUFBdUIsVUFBa0I7O1FBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDSjs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQW5CLENBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDO0tBQzdFOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDO0tBQzNFOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixRQUFrQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxVQUFrQjtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsRUFBakMsQ0FBaUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2pHOztnQkFqREosVUFBVTs7OzsyQkFKWDs7U0FLYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGVscy9ncmlkJztcclxuaW1wb3J0IHsgR3JpZEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGVscy9ncmlkLWl0ZW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZHN0YWNrU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9ncmlkSXRlbXM6IHtcclxuICAgICAgICBncmlkSWQ6IHN0cmluZztcclxuICAgICAgICBpdGVtOiBHcmlkSXRlbTtcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2dyaWRzOkdyaWRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgYWRkR3JpZChncmlkOiBHcmlkKSB7XHJcbiAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVHcmlkKGdyaWQ6IEdyaWQpIHtcclxuICAgICAgICB0aGlzLl9ncmlkcy5zcGxpY2UodGhpcy5fZ3JpZHMuZmluZEluZGV4KGcgPT4gZy5nZW5lcmF0ZWRJZCA9PSBncmlkLmdlbmVyYXRlZElkKSwgMSk7XHJcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zID0gdGhpcy5fZ3JpZEl0ZW1zLmZpbHRlcihnaSA9PiBnaS5ncmlkSWQgIT0gZ3JpZC5nZW5lcmF0ZWRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoR3JpZEl0ZW0oZ3JpZElkOiBzdHJpbmcsIGdyaWRJdGVtSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2dyaWRJdGVtcy5maW5kKGdpID0+IGdpLml0ZW0uZ2VuZXJhdGVkSWQgPT0gZ3JpZEl0ZW1JZCkuZ3JpZElkID0gZ3JpZElkO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFjaEdyaWRJdGVtSWZFeGlzdHMoZ3JpZEl0ZW1JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSB0aGlzLl9ncmlkSXRlbXMuZmluZChnaSA9PiBnaS5pdGVtLmdlbmVyYXRlZElkID09IGdyaWRJdGVtSWQpO1xyXG5cclxuICAgICAgICBpZiAoISFncmlkSXRlbSkge1xyXG4gICAgICAgICAgICBncmlkSXRlbS5ncmlkSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRHcmlkSXRlbXMoZ3JpZElkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZEl0ZW1zLmZpbHRlcihnaSA9PiBnaS5ncmlkSWQgPT0gZ3JpZElkKS5tYXAoZyA9PiBnLml0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9ycGhhbkdyaWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZEl0ZW1zLmZpbHRlcihnaSA9PiBnaS5ncmlkSWQgPT0gbnVsbCkubWFwKGcgPT4gZy5pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPcnBoYW5HcmlkSXRlbShncmlkSXRlbTogR3JpZEl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9ncmlkSXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGdyaWRJZDogbnVsbCxcclxuICAgICAgICAgICAgaXRlbTogZ3JpZEl0ZW1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVHcmlkSXRlbShncmlkSXRlbUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ncmlkSXRlbXMuc3BsaWNlKHRoaXMuX2dyaWRJdGVtcy5maW5kSW5kZXgoZ2kgPT4gZ2kuaXRlbS5nZW5lcmF0ZWRJZCA9PSBncmlkSXRlbUlkKSwgMSk7XHJcbiAgICB9XHJcbn0iXX0=