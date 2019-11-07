import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WidgetConfig } from '../models/widget-config';

@Injectable()
export class WidgetsService {
    private _widgetConfigurations = new Subject<WidgetConfig[]>();
    public widgetConfigurations$: Observable<WidgetConfig[]> = this._widgetConfigurations.asObservable();

    constructor() {
    }

    public loadConfigurations(): void {
        const widgetConfigsString = localStorage.getItem('widgetConfigs');

        if (!!widgetConfigsString) {
            const configs = JSON.parse(widgetConfigsString) as WidgetConfig[];
            setTimeout(() => this._widgetConfigurations.next(configs), 3000);
        } else {
            setTimeout(() => this._widgetConfigurations.next([]), 3000);
        }
    }

    public saveConfigurations(configs: WidgetConfig[]) {
        localStorage.setItem('widgetConfigs', JSON.stringify(configs));
        this._widgetConfigurations.next(configs);
    }
}
