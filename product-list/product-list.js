Polymer({
  products: [],
  error: null,
  selected: null,
  customize: function (e) {
    e.preventDefault();
    this.selected = this.products[e.target.dataset.index];
  },
  handleResponse: function (e, resp) {
    if (!resp.response) {
      this.error = 'Server could not be reached';
      return;
    }
    this.products = resp.response;
    this.selected = this.products[0];
    this.error = null;
  },
  handleError: function (err) {
    console.info('Error fetching products', err);
    this.error = err;
  },
  fetch: function () {
    this.$.ajax.go();
  },
});
