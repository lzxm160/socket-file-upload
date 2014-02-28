requirejs.config({

	baseUrl: "/js/",

	paths: {

		jquery: "lib/jquery",
		underscore: "lib/underscore",
		backbone: "lib/backbone",

		fileUpload: "models/fileUpload",
		fileUploadView: "views/fileUploadView"

	},

	// Configure shims.
    shim: {

        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        "underscore": {
            exports: "_"
        }
    }

});

requirejs(["jquery", "underscore", "backbone"],
	function ($, _, Backbone) {
		require(["view"]);
	});