(function($) {
    jQuery.fn.watermark = function(watermarkText, watermarkColour) {
        return this.each(function() {
            var textBox = $(this);
            if (textBox.val() == "") {
                textBox.val(watermarkText);

                if (watermarkColour) {
                    textBox.data("originalColour", textBox.css("color"));
                    textBox.css({ "color": watermarkColour });
                }
            }

            textBox.focus(function() {
                if (textBox.val() == watermarkText) {
                    textBox.val("");
                    if (watermarkColour) {
                        textBox.css({ "color": textBox.data("originalColour") });
                    }
                }
            });
            textBox.blur(function() {
                if (textBox.val() == "") {
                    textBox.val(watermarkText);
                    if (watermarkColour) {
                        textBox.css({ "color": watermarkColour });
                    }
                }
            });
        });
    };
})(jQuery);
