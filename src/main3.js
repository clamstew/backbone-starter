var ButtonView = Backbone.View.extend({
  render: function () {
    $(this.el).html('<button>I don\'t do anything :(</button>');
  }
});

var view = new ButtonView({
  el: $('.big-button')
});
view.render();