(function () {

  window.Stock = Backbone.Model.extend({

  	defaults: {
  		ifinitpriceset: false,
  		initprice: 0,
  		recentchange: 0
  	},
    updatePrice: function (newPrice) {
      var newPriceFloat = parseFloat(newPrice);
      var initialPriceFloat = this.get("initprice");
      this.set({ price: newPriceFloat });
      if ( this.get('ifinitpriceset') === false ) {
      	
      	this.set({ initprice: newPriceFloat });
      	this.set({ ifinitpriceset: true });

      }
	  this.set({ recentchange: Math.abs(newPriceFloat - initialPriceFloat) });
    }

  });

})();
