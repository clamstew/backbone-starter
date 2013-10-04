(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      var newPriceFloat = parseFloat(newPrice);
      this.set({ price: newPriceFloat });
    }
  });

})();
