/**
 * Tweetie: A simple Twitter feed plugin
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */

(function ($) {

    $.fn.downCount = function (options) {
        var settings = $.extend({
                date: null,
                offset: null
            }, options);

        if (!settings.date) {
            $.error('Date is not defined.');
        }

        
    };

})(jQuery);