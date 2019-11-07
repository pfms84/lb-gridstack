import { Injectable } from '@angular/core';
import { Grid } from '../components/models/grid';
import { GridItem } from '../components/models/grid-item';

@Injectable()
export class GridstackService {
    private _gridItems: {
        gridId: string;
        item: GridItem;
    }[] = [];

    private _grids:Grid[] = [];

    constructor() { }

    addGrid(grid: Grid) {
        this._grids.push(grid);
    }

    removeGrid(grid: Grid) {
        this._grids.splice(this._grids.findIndex(g => g.generatedId == grid.generatedId), 1);
        this._gridItems = this._gridItems.filter(gi => gi.gridId != grid.generatedId);
    }

    attachGridItem(gridId: string, gridItemId: string) {
        this._gridItems.find(gi => gi.item.generatedId == gridItemId).gridId = gridId;
    }

    detachGridItemIfExists(gridItemId: string) {
        const gridItem = this._gridItems.find(gi => gi.item.generatedId == gridItemId);

        if (!!gridItem) {
            gridItem.gridId = null;
        }
    }

    getGridItems(gridId: string) {
        return this._gridItems.filter(gi => gi.gridId == gridId).map(g => g.item);
    }

    getOrphanGridItems() {
        return this._gridItems.filter(gi => gi.gridId == null).map(g => g.item);
    }

    addOrphanGridItem(gridItem: GridItem) {
        this._gridItems.push({
            gridId: null,
            item: gridItem
        });
    }

    removeGridItem(gridItemId: string) {
        this._gridItems.splice(this._gridItems.findIndex(gi => gi.item.generatedId == gridItemId), 1);
    }
}