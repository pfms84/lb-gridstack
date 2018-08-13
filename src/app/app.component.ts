import { Item } from './gridstack/components/models/item';
import { NumberSymbol } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { WidgetsService } from './widgets/services/widgets.service';
import { WidgetConfig } from './widgets/models/widget-config';
import { GridstackComponent } from './gridstack/components/gridstack.component';

const _widgetDefaultConfigs: WidgetConfig[] = [{
    id: 'widget1',
    width: 1,
    height: 1,
    enabled: true,
    x: 0
}, {
    id: 'widget2',
    width: 1,
    height: 1,
    enabled: true,
    x: 1
}, {
    id: 'widget3',
    width: 1,
    height: 1,
    enabled: true,
    x: 0
}, {
    id: 'widget4',
    width: 1,
    height: 1,
    enabled: true,
    x: 1
}];

let dynamicWidgetId = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild(GridstackComponent) gridstackComponent: GridstackComponent;

    widgetConfigsLoaded = false;
    widgetConfigs: WidgetConfig[] = _widgetDefaultConfigs;

    get widget1() {
        return this.widgetConfigs.find(wc => wc.id == 'widget1');
    }

    get widget2() {
        return this.widgetConfigs.find(wc => wc.id == 'widget2');
    }

    get widget3() {
        return this.widgetConfigs.find(wc => wc.id == 'widget3');
    }

    get widget4() {
        return this.widgetConfigs.find(wc => wc.id == 'widget4');
    }

    widgets: {
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        i: NumberSymbol
    }[] = [];

    constructor(private _widgetsService: WidgetsService) {
    }

    ngOnInit() {
        this._widgetsService.loadConfigurations();

        this._widgetsService.widgetConfigurations$
            .subscribe(configs => {
                configs.forEach(c => {
                    const existingConfigIndex = this.widgetConfigs.findIndex(wc => wc.id == c.id);
                    this.widgetConfigs.splice(existingConfigIndex, 1, c);
                });

                this.widgetConfigsLoaded = true;
            });
    }

    onWidgetGridChange($event: Item[]) {
        const newConfigs = this.widgetConfigs.map(wc => {
            const item = $event.find(i => i.id == wc.id);
            if (!item) {
                return wc;
            }

            return {
                ...wc,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height
            };
        });

        this._widgetsService.saveConfigurations(newConfigs);
    }

    addWidget() {
        this.widgets.push({
            width: 2,
            height: 2,
            i: dynamicWidgetId++
        });
    }

    removeWidget() {
        this.widgets.splice(0, 1);
    }

    onChange(evt: Item, widget: {
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        i: NumberSymbol
    }) {
        widget.x = evt.x;
        widget.y = evt.y;
    }
}
