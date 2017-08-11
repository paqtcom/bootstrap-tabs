/**
 *  Extens the bootstrap tabs.
 *
 * @param {object} element
 * @param {string} prefix
 *
 * @return {object}
 */
var BootstrapTabs = (function(element, prefix) {
    'use strict';

    var globals = {
        id: null,
        prefix: 'w2w_tab_'
    };

    // Array with the default elements for the bootstrap tabs.
    var elements = {
        error: '.has-error',
        tabPage: '.tab-pane',
        tabItem: 'a[data-toggle="tab"]'
    };

    // Array with the triggers for the bootstrap tabs.
    var triggers = {
        tabOpen: 'shown.bs.tab'
    };

    var functions = {
        /**
         * Public function.
         * Listen to the bootstrap tabs, call a function if you click on a tab.
         */
        listen: function() {
            element.find(elements.tabItem).on(triggers.tabOpen, functions.store);
            functions.reload();
        },

        /**
         * Private function.
         * On a page reload, e.g. if you save the form, switch back to the last tab.
         * If there is an error in a tab, switch to that tab.
         */
        reload: function() {
            var tab = localStorage.getItem(globals.prefix + globals.id);
            var errorTabs = functions.errors();

            if (errorTabs.length > 0) {
                tab = '#' + errorTabs[0];
            }

            functions.open(tab);
        },

        /**
         * Public function.
         * Get all the tabs with errors.
         *
         * @return {array}
         */
        errors: function() {
            var tabs = [];
            var errorElements;

            if (element.parent().find(elements.error).length < 1) {
                return tabs;
            }

            errorElements = element.parent().find(elements.error).closest(elements.tabPage);
            errorElements.each(function() {
                tabs.push($(this).attr('id'));
            });

            return tabs;
        },

        /**
         * Private function.
         * When you click on a tab, call the function to store the tab in the localStorage.
         */
        store: function() {
            var tab = $(this).attr('href');

            functions.open(tab);
        },

        /**
         * Public function.
         * Open the bootstrap tab, and store the tab in the localStorage.
         *
         * @param {string} tab
         */
        open: function(tab) {
            element.find('a[href="' + tab + '"]').tab('show');
            localStorage.setItem(globals.prefix + globals.id, tab);
        },

        /**
         * Public function.
         * Get the active tab.
         *
         * @return {string}
         */
        active: function() {
            return element.parent().find(elements.tabPage + '.active').attr('id');
        },

        /**
         * The id wil get the attribute for the name in the localstorage.
         */
        getId: function() {
            globals.id = element.parent().data('w2w-tabs');

            if (!globals.id) {
                globals.id = element.parent().attr('id');
            }

            if(prefix) {
                globals.prefix = prefix;
            }
        }
    };

    functions.getId();

    return {
        element: element,
        active: functions.active,
        errors: functions.errors,
        elements: elements,
        listen: functions.listen,
        open: functions.open,
        id: globals.id
    };
});
