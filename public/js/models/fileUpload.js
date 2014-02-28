define([], function () {
	
	var FileUpload = Backbone.Model.extend({

		defaults: {
			progress: 0
		},

		initialize: function () {
			var self = this;

			self.on("change:progress", self.checkProgress);

			var progress = self.get("progress");
			self.int = setInterval(function () {
				self.set("progress", progress++);
			}, 50);
		},

		checkProgress: function () {
			if (this.get("progress") == 100) {
				clearInterval(this.int);
				this.trigger("complete");
			}
		}

	});

	return FileUpload;

});