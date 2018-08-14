/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class GridstackService {
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
        /** @type {?} */
        const gridItem = this._gridItems.find(gi => gi.item.generatedId == gridItemId);
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
    { type: Injectable }
];
/** @nocollapse */
GridstackService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GridstackService.prototype._gridItems;
    /** @type {?} */
    GridstackService.prototype._grids;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGlicmlhL2dyaWRzdGFjay8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dyaWRzdGFjay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE1BQU07SUFRRjswQkFKTSxFQUFFO3NCQUVnQixFQUFFO0tBRVQ7Ozs7O0lBRWpCLE9BQU8sQ0FBQyxJQUFVO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakY7Ozs7OztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBa0I7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ2pGOzs7OztJQUVELHNCQUFzQixDQUFDLFVBQWtCOztRQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0tBQ0o7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdFOzs7O0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNFOzs7OztJQUVELGlCQUFpQixDQUFDLFFBQWtCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRUQsY0FBYyxDQUFDLFVBQWtCO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakc7OztZQWpESixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RlbHMvZ3JpZCc7XHJcbmltcG9ydCB7IEdyaWRJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RlbHMvZ3JpZC1pdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWRzdGFja1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfZ3JpZEl0ZW1zOiB7XHJcbiAgICAgICAgZ3JpZElkOiBzdHJpbmc7XHJcbiAgICAgICAgaXRlbTogR3JpZEl0ZW07XHJcbiAgICB9W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9ncmlkczpHcmlkW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGFkZEdyaWQoZ3JpZDogR3JpZCkge1xyXG4gICAgICAgIHRoaXMuX2dyaWRzLnB1c2goZ3JpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR3JpZChncmlkOiBHcmlkKSB7XHJcbiAgICAgICAgdGhpcy5fZ3JpZHMuc3BsaWNlKHRoaXMuX2dyaWRzLmZpbmRJbmRleChnID0+IGcuZ2VuZXJhdGVkSWQgPT0gZ3JpZC5nZW5lcmF0ZWRJZCksIDEpO1xyXG4gICAgICAgIHRoaXMuX2dyaWRJdGVtcyA9IHRoaXMuX2dyaWRJdGVtcy5maWx0ZXIoZ2kgPT4gZ2kuZ3JpZElkICE9IGdyaWQuZ2VuZXJhdGVkSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaEdyaWRJdGVtKGdyaWRJZDogc3RyaW5nLCBncmlkSXRlbUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ncmlkSXRlbXMuZmluZChnaSA9PiBnaS5pdGVtLmdlbmVyYXRlZElkID09IGdyaWRJdGVtSWQpLmdyaWRJZCA9IGdyaWRJZDtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhY2hHcmlkSXRlbUlmRXhpc3RzKGdyaWRJdGVtSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGdyaWRJdGVtID0gdGhpcy5fZ3JpZEl0ZW1zLmZpbmQoZ2kgPT4gZ2kuaXRlbS5nZW5lcmF0ZWRJZCA9PSBncmlkSXRlbUlkKTtcclxuXHJcbiAgICAgICAgaWYgKCEhZ3JpZEl0ZW0pIHtcclxuICAgICAgICAgICAgZ3JpZEl0ZW0uZ3JpZElkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JpZEl0ZW1zKGdyaWRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRJdGVtcy5maWx0ZXIoZ2kgPT4gZ2kuZ3JpZElkID09IGdyaWRJZCkubWFwKGcgPT4gZy5pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcnBoYW5HcmlkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRJdGVtcy5maWx0ZXIoZ2kgPT4gZ2kuZ3JpZElkID09IG51bGwpLm1hcChnID0+IGcuaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JwaGFuR3JpZEl0ZW0oZ3JpZEl0ZW06IEdyaWRJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICBncmlkSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGl0ZW06IGdyaWRJdGVtXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR3JpZEl0ZW0oZ3JpZEl0ZW1JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zLnNwbGljZSh0aGlzLl9ncmlkSXRlbXMuZmluZEluZGV4KGdpID0+IGdpLml0ZW0uZ2VuZXJhdGVkSWQgPT0gZ3JpZEl0ZW1JZCksIDEpO1xyXG4gICAgfVxyXG59Il19