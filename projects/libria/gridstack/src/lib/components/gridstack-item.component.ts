import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewEncapsulation,
} from '@angular/core';
import { GridItem } from './models/grid-item';

declare var _: any;
let _sequence = 0;

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'div[lb-gridstack-item]',
    templateUrl: './gridstack-item.component.html',
    styleUrls: ['./gridstack-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridstackItemComponent implements AfterViewInit, GridItem {
    @Input() public x: number | string;
    @Input() public y: number | string;
    @Input() public width: number | string;
    @Input() public height: number | string;
    @Input() public id: string;
    @Input('max-width') public maxWidth: number | string;
    @Input('max-height') public maxHeight: number | string;
    @Input('min-width') public minWidth: number | string;
    @Input('min-height') public minHeight: number | string;
    @Input('no-resize') public noResize: boolean | string;
    @Input('no-move') public noMove: boolean | string;
    @Input('auto-position') public autoPosition: boolean | string;
    @Input() public locked: boolean | string;
    public generatedId: string = (_sequence++).toString();

    constructor(public elem: ElementRef,
                private _renderer: Renderer2
    ) { }

    public ngAfterViewInit() {
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

    private _setAttributeIfNotUndefined(attrName: string, val: number | string): void {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, val.toString());
        }
    }

    private _setAttributeIfTrue(attrName: string, val: boolean | string): void {
        if (val === true || val === 'true') {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    }
}
