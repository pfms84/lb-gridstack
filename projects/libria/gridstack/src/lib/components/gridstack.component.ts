import { GridstackOptions } from './models/gridstack-options';
import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Output,
    QueryList,
    Renderer2,
    ViewEncapsulation,
    ViewContainerRef,
    OnInit,
    OnDestroy,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

declare var _: any;
let _sequence = 0;

import { GridstackItemComponent } from './gridstack-item.component';
import { Item } from './models/item';
import { GridstackService } from '../services/gridstack.service';
import { Grid } from './models/grid';
import { GridItem } from './models/grid-item';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'div[lb-gridstack]',
    templateUrl: './gridstack.component.html',
    styleUrls: ['./gridstack.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridstackComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges, Grid {
    @ContentChildren(GridstackItemComponent) gridstackItems: QueryList<GridstackItemComponent>;
    @Input() options: GridstackOptions;
    @Input() animate: boolean | string;
    @Input() width: number | string;
    @Input() height: number | string;

    @Output() change = new EventEmitter<Item[]>();
    @Output() added = new EventEmitter<Item[]>();
    @Output() removed = new EventEmitter<Item[]>();
    @Output() dragstart = new EventEmitter();
    @Output() dragstop = new EventEmitter();
    @Output() resizestart = new EventEmitter();
    @Output() gsresizestop = new EventEmitter();

    public generatedId = (_sequence++).toString();

    private _gridstack: any;

    private _ngUnsubscribe = new Subject();

    constructor(private _zone: NgZone,
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _gridstackService: GridstackService) { }

    ngOnInit(): void {
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

            const width = this.width || (this.options || {}).width;

            if (!_.isNull(width) && !_.isUndefined(width)) {
                this._renderer.addClass(this._el.nativeElement, `grid-stack-${width}`);
            }

            const el = (<any>$(this._el.nativeElement)).gridstack(this.options);
            $(el).data('generated-id', this.generatedId);
            this._gridstack = $(el).data('gridstack');

            this._gridstackService.addGrid(this);

            // Hook events
            $(this._el.nativeElement).on('added', (evt: any, items: Item[]) => {
                const itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
                const existingItemIds: string[] = (<any>this._gridstack).grid.nodes.map(i => $(i.el)
                    .attr('class')
                    .split(/\s+/)
                    .find(s => s.startsWith('lb-generated-id-'))
                    .replace('lb-generated-id-', ''));

                const itemsToAdd = existingItemIds.filter(i => !itemsOfCurrentGrid.some(ei => ei.generatedId === i));
                itemsToAdd.forEach(i => this._gridstackService.attachGridItem(this.generatedId, i));

                this.added.emit(items);
            });

            $(this._el.nativeElement).on('change', (evt: any, items: Item[]) => {
                this.change.emit(items);
            });

            $(this._el.nativeElement).on('dragstart', (evt: any, ui: any) => {
              this.dragstart.emit(evt);
            });

            $(this._el.nativeElement).on('dragstop', (evt: any, ui: any) => {
              this.dragstop.emit(evt);
            });

            $(this._el.nativeElement).on('resizestart', (evt: any, ui: any) => {
              this.resizestart.emit(evt);
            });

            $(this._el.nativeElement).on('gsresizestop', (evt: any, ui: any) => {
              this.gsresizestop.emit(evt);
            });

            $(this._el.nativeElement).on('removed', (evt: any, items: Item[]) => {
                const itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
                const existingItemIds: string[] = (<any>this._gridstack).grid.nodes.map(i => $(i.el)
                    .attr('class')
                    .split(/\s+/)
                    .find(s => s.startsWith('lb-generated-id-'))
                    .replace('lb-generated-id-', ''));

                const itemsToDelete = itemsOfCurrentGrid.filter(i => !existingItemIds.some(ei => ei === i.generatedId));
                itemsToDelete.forEach(i => this._gridstackService.detachGridItemIfExists(i.generatedId));
                this.removed.emit(items);
            });
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        const heightChanges = changes['height'];
        const optionsChanges = changes['options'];

        if (heightChanges && !heightChanges.isFirstChange() && heightChanges.currentValue !== heightChanges.previousValue) {
            this._updateGridstackHeight(+heightChanges.currentValue);
        }

        if (optionsChanges && !optionsChanges.isFirstChange()) {
            const prev: GridstackOptions = optionsChanges.previousValue;
            const curr: GridstackOptions = optionsChanges.currentValue;

            if (curr.cellHeight !== prev.cellHeight) {
                this._updateGridstackHeight(curr.cellHeight);
            }
        }
    }

    ngAfterViewInit(): void {
        this.gridstackItems.changes
            .pipe(takeUntil(this._ngUnsubscribe))
            .subscribe(changes => {
                this._handleItemChanges(this.gridstackItems.toArray());
            });

        this._handleItemChanges(this.gridstackItems.toArray());
    }

    ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._gridstack.destroy();
        this._gridstackService.removeGrid(this);
    }

    private _updateGridstackHeight(height: number | string) {
        this._zone.runOutsideAngular(() => {
            this._gridstack.cellHeight(<any>height);
        });
    }

    private _handleItemChanges(items: GridstackItemComponent[]): void {
        const itemsOfCurrentGrid = this._gridstackService.getGridItems(this.generatedId);
        const itemsToAdd = items.filter(i => !itemsOfCurrentGrid.some(w => w.generatedId === i.generatedId));
        const itemsToRemove = itemsOfCurrentGrid.filter(w => !items.some(i => i.generatedId === w.generatedId));

        this._gridstack.batchUpdate();
        itemsToAdd.forEach(i => this._addItem(i));
        itemsToRemove.forEach(i => this._removeItem(i));
        this._gridstack.commit();
    }

    private _addItem(item: GridstackItemComponent): void {
        this._zone.runOutsideAngular(() => {
            if (this._gridstack.willItFit(+item.x, +item.y, +item.width, +item.height, this._isValueTrue(item.autoPosition))) {
                this._gridstackService.addOrphanGridItem(item);
                $(item.elem.nativeElement).addClass('lb-generated-id-' + item.generatedId);
                this._gridstack.makeWidget(item.elem.nativeElement);
            } else {
                console.error('Not enough free space to place the widget');
            }
        });
    }

    private _removeItem(item: GridItem): void {
        this._gridstackService.removeGridItem(item.generatedId);

        this._zone.runOutsideAngular(() => {
            this._gridstack.removeWidget(item.elem.nativeElement);
        });
    }

    private _setAttributeIfNotUndefined(attrName: string, val: number | string): void {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this._el.nativeElement, attrName, val.toString());
        }
    }

    private _isValueTrue(val: boolean | string) {
        return (val === true || val === 'true');
    }
}
