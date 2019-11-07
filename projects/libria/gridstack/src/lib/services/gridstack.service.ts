import { Injectable } from '@angular/core';
import { Grid } from '../components/models/grid';
import { GridItem } from '../components/models/grid-item';

@Injectable()
export class GridstackService {
    private _gridItems: {
        gridId: string;
        item: GridItem;
    }[] = [];

    private _grids: Grid[] = [];

    constructor() { }

    public addGrid(grid: Grid) {
        this._grids.push(grid);
    }

    public removeGrid(grid: Grid) {
        this._grids.splice(this._grids.findIndex(g => g.generatedId == grid.generatedId), 1);
        this._gridItems = this._gridItems.filter(gi => gi.gridId != grid.generatedId);
    }

    public attachGridItem(gridId: string, gridItemId: string) {
        this._gridItems.find(gi => gi.item.generatedId == gridItemId).gridId = gridId;
    }

    public detachGridItemIfExists(gridItemId: string) {
        const gridItem = this._gridItems.find(gi => gi.item.generatedId == gridItemId);

        if (!!gridItem) {
            gridItem.gridId = null;
        }
    }

    public getGridItems(gridId: string) {
        return this._gridItems.filter(gi => gi.gridId == gridId).map(g => g.item);
    }

    public getOrphanGridItems() {
        return this._gridItems.filter(gi => gi.gridId == null).map(g => g.item);
    }

    public addOrphanGridItem(gridItem: GridItem) {
        this._gridItems.push({
            gridId: null,
            item: gridItem
        });
    }

    public removeGridItem(gridItemId: string) {
        this._gridItems.splice(this._gridItems.findIndex(gi => gi.item.generatedId == gridItemId), 1);
    }
}
