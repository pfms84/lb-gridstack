import { Grid } from '../components/models/grid';
import { GridItem } from '../components/models/grid-item';
export declare class GridstackService {
    private _gridItems;
    private _grids;
    constructor();
    addGrid(grid: Grid): void;
    removeGrid(grid: Grid): void;
    attachGridItem(gridId: string, gridItemId: string): void;
    detachGridItemIfExists(gridItemId: string): void;
    getGridItems(gridId: string): GridItem[];
    getOrphanGridItems(): GridItem[];
    addOrphanGridItem(gridItem: GridItem): void;
    removeGridItem(gridItemId: string): void;
}
