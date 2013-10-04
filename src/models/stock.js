(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      newPriceFloat = parseFloat(newPrice);
      this.set({ price: newPriceFloat });
    }
  });

})();
