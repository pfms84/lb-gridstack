/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GridstackOptions() { }
/** @type {?|undefined} */
GridstackOptions.prototype.acceptWidgets;
/**
 * if true the resizing handles are shown even if the user is not hovering over the widget (default: false)
 * @type {?|undefined}
 */
GridstackOptions.prototype.alwaysShowResizeHandle;
/**
 * turns animation on (default: true)
 * @type {?|undefined}
 */
GridstackOptions.prototype.animate;
/**
 * if false gridstack will not initialize existing items (default: true)
 * @type {?|undefined}
 */
GridstackOptions.prototype.auto;
/**
 *  one cell height (default: 60)
 * @type {?|undefined}
 */
GridstackOptions.prototype.cellHeight;
/**
 * class that implement drag'n'drop functionallity for gridstack.
 * If false grid will be static. (default: null - first available plugin will be used)
 * @type {?|undefined}
 */
GridstackOptions.prototype.ddPlugin;
/**
 * disallows dragging of widgets (default: false).
 * @type {?|undefined}
 */
GridstackOptions.prototype.disableDrag;
/**
 * disallows resizing of widgets (default: false).
 * @type {?|undefined}
 */
GridstackOptions.prototype.disableResize;
/**
 * allows to override jQuery UI draggable options. (default: { handle: '.grid-stack-item-content', scroll: true, appendTo: 'body' })
 * @type {?|undefined}
 */
GridstackOptions.prototype.draggable;
/**
 * draggable handle selector (default: '.grid-stack-item-content')
 * @type {?|undefined}
 */
GridstackOptions.prototype.handle;
/**
 * draggable handle class (e.g. 'grid-stack-item-content'). If set handle is ignored (default: null)
 * @type {?|undefined}
 */
GridstackOptions.prototype.handleClass;
/**
 * maximum rows amount.Default is 0 which means no maximum rows
 * @type {?|undefined}
 */
GridstackOptions.prototype.height;
/**
 * enable floating widgets (default: false) See example
 * @type {?|undefined}
 */
GridstackOptions.prototype.float;
/**
 * widget class (default: 'grid-stack-item')
 * @type {?|undefined}
 */
GridstackOptions.prototype.itemClass;
/**
 * minimal width.If window width is less, grid will be shown in one - column mode (default: 768)
 * @type {?|undefined}
 */
GridstackOptions.prototype.minWidth;
/**
 * disables the onColumnMode when the window width is less than minWidth (default: 'false')
 * @type {?|undefined}
 */
GridstackOptions.prototype.disableOneColumnMode;
/**
 * class set on grid when in one column mode (default: 'grid-stack-one-column-mode')
 * @type {?|undefined}
 */
GridstackOptions.prototype.oneColumnModeClass;
/**
 * class for placeholder (default: 'grid-stack-placeholder')
 * @type {?|undefined}
 */
GridstackOptions.prototype.placeholderClass;
/**
 * placeholder default content (default: '')
 * @type {?|undefined}
 */
GridstackOptions.prototype.placeholderText;
/**
 * allows to override jQuery UI resizable options. (default: { autoHide: true, handles: 'se' })
 * @type {?|undefined}
 */
GridstackOptions.prototype.resizable;
/**
 * if true widgets could be removed by dragging outside of the grid. It could also be a jQuery selector string,
 * @type {?|undefined}
 */
GridstackOptions.prototype.removable;
/**
 * time in milliseconds before widget is being removed while dragging outside of the grid. (default: 2000)
 * @type {?|undefined}
 */
GridstackOptions.prototype.removeTimeout;
/**
 *  if true turns grid to RTL. Possible values are true, false, 'auto' (default: 'auto')
 * @type {?|undefined}
 */
GridstackOptions.prototype.rtl;
/**
 * makes grid static (default false).If true widgets are not movable/ resizable.You don't even need jQueryUI draggable/resizable. A CSS class grid-stack-static is also added to the container.
 * @type {?|undefined}
 */
GridstackOptions.prototype.staticGrid;
/**
 * vertical gap size (default: 20)
 * @type {?|undefined}
 */
GridstackOptions.prototype.verticalMargin;
/**
 * amount of columns (default: 12)
 * @type {?|undefined}
 */
GridstackOptions.prototype.width;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGlicmlhL2dyaWRzdGFjay8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kZWxzL2dyaWRzdGFjay1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEdyaWRzdGFja09wdGlvbnMge1xyXG4gICAgYWNjZXB0V2lkZ2V0cz86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogaWYgdHJ1ZSB0aGUgcmVzaXppbmcgaGFuZGxlcyBhcmUgc2hvd24gZXZlbiBpZiB0aGUgdXNlciBpcyBub3QgaG92ZXJpbmcgb3ZlciB0aGUgd2lkZ2V0IChkZWZhdWx0OiBmYWxzZSlcclxuICAgICAqL1xyXG4gICAgYWx3YXlzU2hvd1Jlc2l6ZUhhbmRsZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIHR1cm5zIGFuaW1hdGlvbiBvbiAoZGVmYXVsdDogdHJ1ZSlcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIGlmIGZhbHNlIGdyaWRzdGFjayB3aWxsIG5vdCBpbml0aWFsaXplIGV4aXN0aW5nIGl0ZW1zIChkZWZhdWx0OiB0cnVlKVxyXG4gICAgICovXHJcbiAgICBhdXRvPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogIG9uZSBjZWxsIGhlaWdodCAoZGVmYXVsdDogNjApXHJcbiAgICAgKi9cclxuICAgIGNlbGxIZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGNsYXNzIHRoYXQgaW1wbGVtZW50IGRyYWcnbidkcm9wIGZ1bmN0aW9uYWxsaXR5IGZvciBncmlkc3RhY2suIFxyXG4gICAgICogSWYgZmFsc2UgZ3JpZCB3aWxsIGJlIHN0YXRpYy4gKGRlZmF1bHQ6IG51bGwgLSBmaXJzdCBhdmFpbGFibGUgcGx1Z2luIHdpbGwgYmUgdXNlZClcclxuICAgICAqL1xyXG4gICAgZGRQbHVnaW4/OiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIGRpc2FsbG93cyBkcmFnZ2luZyBvZiB3aWRnZXRzIChkZWZhdWx0OiBmYWxzZSkuXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVEcmFnPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogZGlzYWxsb3dzIHJlc2l6aW5nIG9mIHdpZGdldHMgKGRlZmF1bHQ6IGZhbHNlKS5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZVJlc2l6ZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIGFsbG93cyB0byBvdmVycmlkZSBqUXVlcnkgVUkgZHJhZ2dhYmxlIG9wdGlvbnMuIChkZWZhdWx0OiB7IGhhbmRsZTogJy5ncmlkLXN0YWNrLWl0ZW0tY29udGVudCcsIHNjcm9sbDogdHJ1ZSwgYXBwZW5kVG86ICdib2R5JyB9KVxyXG4gICAgICovXHJcbiAgICBkcmFnZ2FibGU/OiB7fTtcclxuICAgIC8qKlxyXG4gICAgKiBkcmFnZ2FibGUgaGFuZGxlIHNlbGVjdG9yIChkZWZhdWx0OiAnLmdyaWQtc3RhY2staXRlbS1jb250ZW50JylcclxuICAgICovXHJcbiAgICBoYW5kbGU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGRyYWdnYWJsZSBoYW5kbGUgY2xhc3MgKGUuZy4gJ2dyaWQtc3RhY2staXRlbS1jb250ZW50JykuIElmIHNldCBoYW5kbGUgaXMgaWdub3JlZCAoZGVmYXVsdDogbnVsbClcclxuICAgICAqL1xyXG4gICAgaGFuZGxlQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogbWF4aW11bSByb3dzIGFtb3VudC5EZWZhdWx0IGlzIDAgd2hpY2ggbWVhbnMgbm8gbWF4aW11bSByb3dzXHJcbiAgICAqL1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAqIGVuYWJsZSBmbG9hdGluZyB3aWRnZXRzIChkZWZhdWx0OiBmYWxzZSkgU2VlIGV4YW1wbGVcclxuICAgICovXHJcbiAgICBmbG9hdD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICogd2lkZ2V0IGNsYXNzIChkZWZhdWx0OiAnZ3JpZC1zdGFjay1pdGVtJylcclxuICAgICovXHJcbiAgICBpdGVtQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICogbWluaW1hbCB3aWR0aC5JZiB3aW5kb3cgd2lkdGggaXMgbGVzcywgZ3JpZCB3aWxsIGJlIHNob3duIGluIG9uZSAtIGNvbHVtbiBtb2RlIChkZWZhdWx0OiA3NjgpXHJcbiAgICAqL1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIGRpc2FibGVzIHRoZSBvbkNvbHVtbk1vZGUgd2hlbiB0aGUgd2luZG93IHdpZHRoIGlzIGxlc3MgdGhhbiBtaW5XaWR0aCAoZGVmYXVsdDogJ2ZhbHNlJylcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZU9uZUNvbHVtbk1vZGU/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBjbGFzcyBzZXQgb24gZ3JpZCB3aGVuIGluIG9uZSBjb2x1bW4gbW9kZSAoZGVmYXVsdDogJ2dyaWQtc3RhY2stb25lLWNvbHVtbi1tb2RlJylcclxuICAgICAqL1xyXG4gICAgb25lQ29sdW1uTW9kZUNsYXNzPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAqIGNsYXNzIGZvciBwbGFjZWhvbGRlciAoZGVmYXVsdDogJ2dyaWQtc3RhY2stcGxhY2Vob2xkZXInKVxyXG4gICAgKi9cclxuICAgIHBsYWNlaG9sZGVyQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHBsYWNlaG9sZGVyIGRlZmF1bHQgY29udGVudCAoZGVmYXVsdDogJycpXHJcbiAgICAgKi9cclxuICAgIHBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgKiBhbGxvd3MgdG8gb3ZlcnJpZGUgalF1ZXJ5IFVJIHJlc2l6YWJsZSBvcHRpb25zLiAoZGVmYXVsdDogeyBhdXRvSGlkZTogdHJ1ZSwgaGFuZGxlczogJ3NlJyB9KVxyXG4gICAgKi9cclxuICAgIHJlc2l6YWJsZT86IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBpZiB0cnVlIHdpZGdldHMgY291bGQgYmUgcmVtb3ZlZCBieSBkcmFnZ2luZyBvdXRzaWRlIG9mIHRoZSBncmlkLiBJdCBjb3VsZCBhbHNvIGJlIGEgalF1ZXJ5IHNlbGVjdG9yIHN0cmluZywgXHJcbiAgICAgKi9cclxuICAgIHJlbW92YWJsZT86IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB3aWRnZXQgaXMgYmVpbmcgcmVtb3ZlZCB3aGlsZSBkcmFnZ2luZyBvdXRzaWRlIG9mIHRoZSBncmlkLiAoZGVmYXVsdDogMjAwMClcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlVGltZW91dD86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogIGlmIHRydWUgdHVybnMgZ3JpZCB0byBSVEwuIFBvc3NpYmxlIHZhbHVlcyBhcmUgdHJ1ZSwgZmFsc2UsICdhdXRvJyAoZGVmYXVsdDogJ2F1dG8nKVxyXG4gICAgICovXHJcbiAgICBydGw/OiBib29sZWFuIHwgJ2F1dG8nO1xyXG4gICAgLyoqXHJcbiAgICAqIG1ha2VzIGdyaWQgc3RhdGljIChkZWZhdWx0IGZhbHNlKS5JZiB0cnVlIHdpZGdldHMgYXJlIG5vdCBtb3ZhYmxlLyByZXNpemFibGUuWW91IGRvbid0IGV2ZW4gbmVlZCBqUXVlcnlVSSBkcmFnZ2FibGUvcmVzaXphYmxlLiBBIENTUyBjbGFzcyBncmlkLXN0YWNrLXN0YXRpYyBpcyBhbHNvIGFkZGVkIHRvIHRoZSBjb250YWluZXIuXHJcbiAgICAqL1xyXG4gICAgc3RhdGljR3JpZD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICogdmVydGljYWwgZ2FwIHNpemUgKGRlZmF1bHQ6IDIwKVxyXG4gICAgKi9cclxuICAgIHZlcnRpY2FsTWFyZ2luPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAqIGFtb3VudCBvZiBjb2x1bW5zIChkZWZhdWx0OiAxMilcclxuICAgICovXHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxufVxyXG4iXX0=