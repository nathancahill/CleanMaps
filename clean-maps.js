var CleanMaps = (function() {
    var my = {};

    my.init = function(cover) {
        cover = typeof cover !== 'undefined' ? cover : false;

        $('iframe').each(function() {
            var width = this.width;
            var height = this.height;
            var offset = 150;

            if (this.src.indexOf('maps.google.com') !== -1) {
                $(this).wrap('<div class="clean-maps-outer"><div class="clean-maps-inner"></div></div>');
            }

            $(this).parents().eq(1).css('width', width);
            $(this).parents().eq(1).css('height', height);

            if (height < 200) {
                offset = 145;
            } else if (height < 400) {
                offset = 110;
            }

            $(this).parent().css('height', parseFloat(height) + offset);
            $(this).parent().css('margin-top', -(offset / 2));

            if (cover) {
                $(this).parents().eq(1).prepend('<div class="clean-maps-cover"></div>');
            }
        });
    };

    return my
}());
