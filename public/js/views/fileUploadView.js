define([], function () {

	var FileUploadView = Backbone.View.extend({

		tagName: "li",
		className: "upload",

		_progressTemplate: _.template($("#file-upload-progress-view").html()),
		_completeTemplate: _.template($("#file-upload-complete-view").html()),


		events: {
			"click .file-info input": "selectLink"
		},

		initialize: function () {
			this.listenTo(this.model, "change:progress", this.renderProgressUpdate);
			this.listenToOnce(this.model, "complete", this.renderComplete);
		},

		render: function () {
			this.$el.html(this._progressTemplate(this.model.attributes));
			return this;
		},

		renderProgressUpdate: function () {
			this.$el.find(".progress").css("width", this.model.get("progress") + "%");
		},

		renderComplete: function () {
			this.$el.html(this._completeTemplate(this.model.attributes));
		},

		selectLink: function (event) {
			event.target.select();
		}

	});

	return FileUploadView;

});