(function () {

	var stockTemplateHtml = $('#templates .stock').html();
	var stockTemplate = _.template(stockTemplateHtml);
  
  window.StockView = Backbone.View.extend({
    className: 'stock',
    initialize: function() {
    	this.listenTo(this.model, 'change', this.render);
    }, 
    render: function() {
			var newHtml = stockTemplate({ name: this.model.get("price"), price: this.model.get("name") });
			$(this.el).html(newHtml);
    }
  });

})();
