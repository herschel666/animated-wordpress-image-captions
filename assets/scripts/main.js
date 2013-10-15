(function (win, $) {

    /*
     * init!
    **/
    function init() {

        // no animated Image Captions on touch devices
        if ( 'ontouchstart' in document.documentElement || win.navigator.msMaxTouchPoints ) {
            return;
        }

        // animated captions 4 all.
        $('.wp-caption').each(captionThis);

    }

    /*
     * Enabling the animated captions.
    **/
    function captionThis() {

        var $this = $(this),
            $img = $this.find('img'),
            imgHeight = $img.attr('height'),
            captionHeight = $this.find('p').outerHeight();

        $this
            .height(imgHeight)
            .hover(function () {
                $img.css('margin-top', -captionHeight);
            }, function () {
                $img.css('margin-top', 0);
            });

    }

    /*
     * Starting on DOMLoad
    **/
    $(init);

})(window, jQuery);