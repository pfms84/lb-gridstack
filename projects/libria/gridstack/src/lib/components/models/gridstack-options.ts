export interface GridstackOptions {
    acceptWidgets?: string;
    /**
     * if true the resizing handles are shown even if the user is not hovering over the widget (default: false)
     */
    alwaysShowResizeHandle?: boolean;
    /**
     * turns animation on (default: true)
     */
    animate?: boolean;
    /**
     * if false gridstack will not initialize existing items (default: true)
     */
    auto?: boolean;
    /**
     *  one cell height (default: 60)
     */
    cellHeight?: number | string;
    /**
     * class that implement drag'n'drop functionallity for gridstack.
     * If false grid will be static. (default: null - first available plugin will be used)
     */
    ddPlugin?: any;
    /**
     * disallows dragging of widgets (default: false).
     */
    disableDrag?: boolean;
    /**
     * disallows resizing of widgets (default: false).
     */
    disableResize?: boolean;
    /**
     * allows to override jQuery UI draggable options. (default: { handle: '.grid-stack-item-content', scroll: true, appendTo: 'body' })
     */
    draggable?: {};
    /**
    * draggable handle selector (default: '.grid-stack-item-content')
    */
    handle?: string;
    /**
     * draggable handle class (e.g. 'grid-stack-item-content'). If set handle is ignored (default: null)
     */
    handleClass?: string;
    /**
    * maximum rows amount.Default is 0 which means no maximum rows
    */
    height?: number;
    /**
    * enable floating widgets (default: false) See example
    */
    float?: boolean;
    /**
    * widget class (default: 'grid-stack-item')
    */
    itemClass?: string;
    /**
    * minimal width.If window width is less, grid will be shown in one - column mode (default: 768)
    */
    minWidth?: number;
    /**
     * disables the onColumnMode when the window width is less than minWidth (default: 'false')
     */
    disableOneColumnMode?: boolean;
    /**
     * class set on grid when in one column mode (default: 'grid-stack-one-column-mode')
     */
    oneColumnModeClass?: string;
    /**
    * class for placeholder (default: 'grid-stack-placeholder')
    */
    placeholderClass?: string;
    /**
     * placeholder default content (default: '')
     */
    placeholderText?: string;
    /**
    * allows to override jQuery UI resizable options. (default: { autoHide: true, handles: 'se' })
    */
    resizable?: {};
    /**
     * if true widgets could be removed by dragging outside of the grid. It could also be a jQuery selector string,
     */
    removable?: boolean | string;
    /**
     * time in milliseconds before widget is being removed while dragging outside of the grid. (default: 2000)
     */
    removeTimeout?: number;
    /**
     *  if true turns grid to RTL. Possible values are true, false, 'auto' (default: 'auto')
     */
    rtl?: boolean | 'auto';
    /**
    * makes grid static (default false).If true widgets are not movable/ resizable.You don't even need jQueryUI draggable/resizable.
    * A CSS class grid-stack-static is also added to the container.
    */
    staticGrid?: boolean;
    /**
    * vertical gap size (default: 20)
    */
    verticalMargin?: number;
    /**
    * amount of columns (default: 12)
    */
    width?: number;
}
