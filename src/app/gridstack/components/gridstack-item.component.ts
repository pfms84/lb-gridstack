import { Item } from './models/item';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Host,
    Input,
    NgZone,
    OnInit,
    Output,
    Renderer2,
    ViewEncapsulation,
} from '@angular/core';
import { GridItem } from './models/grid-item';

declare var _: any;
let _sequence = 0;

@Component({
    selector: 'div[lb-gridstack-item]',
    templateUrl: './gridstack-item.component.html',
    styleUrls: ['./gridstack-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridstackItemComponent implements AfterViewInit, GridItem {
    @Input() x: number | string;
    @Input() y: number | string;
    @Input() width: number | string;
    @Input() height: number | string;
    @Input() id: string;
    @Input('max-width') maxWidth: number | string;
    @Input('max-height') maxHeight: number | string;
    @Input('min-width') minWidth: number | string;
    @Input('min-height') minHeight: number | string;
    @Input('no-resize') noResize: boolean | string;
    @Input('no-move') noMove: boolean | string;
    @Input('auto-position') autoPosition: boolean | string;
    @Input() locked: boolean | string;
    public generatedId: string = (_sequence++).toString();

    constructor(public elem: ElementRef,
        private _renderer: Renderer2
    ) { }

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
