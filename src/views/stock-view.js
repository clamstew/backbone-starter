(function () {

	var stockTemplateHtml = $('#templates .stock').html();
	var stockTemplate = _.template(stockTemplateHtml);
  
  window.StockView = Backbone.View.extend({
    
    className: 'stock',

    initialize: function () {
    	this.listenTo(this.model, 'change', this.render);
    	console.log(this.model);
    }, 
    
    render: function () {
			var newHtml = stockTemplate( this.model.toJSON() );
			$(this.el).html(newHtml);
			if ( this.model.get("price") > this.model.previous("price") ) {
				$(this.el).find('.price').addClass("up");
			} else {
				$(this.el).find('.price').addClass("down");
			}
			
    }
  });

})();