import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { GridItem } from './models/grid-item';
export declare class GridstackItemComponent implements AfterViewInit, GridItem {
    elem: ElementRef;
    private _renderer;
    x: number | string;
    y: number | string;
    width: number | string;
    height: number | string;
    id: string;
    maxWidth: number | string;
    maxHeight: number | string;
    minWidth: number | string;
    minHeight: number | string;
    noResize: boolean | string;
    noMove: boolean | string;
    autoPosition: boolean | string;
    locked: boolean | string;
    generatedId: string;
    constructor(elem: ElementRef, _renderer: Renderer2);
    ngAfterViewInit(): void;
    private _setAttributeIfNotUndefined;
    private _setAttributeIfTrue;
}
