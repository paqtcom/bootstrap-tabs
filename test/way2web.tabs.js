(function(Tabs) {
    'use strict';

    /**
     * With this tab function, you add more functions to the bootstrap tabs.
     * Next time you visit the page, the last active tab will be active again.
     * On a page with a form and multiple tabs, the last active tab will open again on a form submit..
     * When it detects an error in a tab, it opens that tab, so you see the error.
     *
     * You can also open a tab outside with e.g.:
     * Way2web.Tabs.items.orderform.open('#payment')
     *
     * You can get the active tab by:
     * Way2web.Tabs.items.orderform.active()
     *
     * You can find how many errors there are with:
     * Way2web.Tabs.items.orderform.errors()
     */

    // Array with the elements for the tabs.
    Tabs.elements = {
        tabNav: '.js-tabs'
    };

    // The tabs will be stored in this object.
    Tabs.items = {};

    // Search for the bootstrap tabs.
    Tabs.init = function() {
        $(Tabs.elements.tabNav).each(Tabs.find);
    };

    // Attach to the Bootstrap tabs the function to switch to the active on reload, or go to the tab with errors.
    Tabs.find = function() {
        var item;

        item = new BootstrapTabs($(this));

        if (!item) {
            return;
        }

        item.listen();
        Tabs.items[item.id] = item;
    };
})(window.Way2web.Tabs = window.Way2web.Tabs || {});
