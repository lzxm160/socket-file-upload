define([
	"fileUpload",
	"fileUploadView"
], function (FileUpload, FileUploadView) {

	var MasterView = Backbone.View.extend({

		el: $("body"),
		$uploads: $("#uploads"),
		$file: $("#file-input"),
		$submit: $("#submit"),

		events: {
			"change #file-input": "addFile",
			"click #submit": "getFile"
		},

		// Simulate a click on the file input.
		getFile: function (event) {
			event.preventDefault();
			this.$file.click();
		},

		// Get file input, create a new FileUpload instance (with an automatically-updating view).
		addFile: function (event) {
			var view = new FileUploadView({ model: new FileUpload(this.$file[0].files[0]) });
			this.$uploads.append(view.render().el);
			this.$file.prop("value", "");
		}

	});

	return new MasterView;

})