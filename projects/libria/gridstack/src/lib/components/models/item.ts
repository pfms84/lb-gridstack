export interface Item {
    autoPosition: boolean;
    height: number;
    id: string | null;
    lastTriedHeight: number | null;
    lastTriedWidth: number | null;
    lastTriedX: number | null;
    lastTriedY: number | null;
    locked: boolean;
    maxHeight: number | null;
    maxWidth: number | null;
    minHeight: number | null;
    minWidth: number | null;
    noMove: boolean;
    noResize: boolean;
    width: number;
    x: number;
    y: number;
    el: any;
}