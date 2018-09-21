module.exports = {
  getInventory: (req, res) => {
    req.app
      .get("db")
      .get_inventory()
      .then(inventory => res.status(200).send(inventory))
      .catch(err => res.send(err));
  },

  addProduct: (req, res) => {
    console.log(req.body);
    let { name, price, imgurl } = req.body;
    price = parseFloat(price);

    req.app
      .get("db")
      .add_product(name, price, imgurl)
      .then(() => res.status(200).send())
      .catch(err => {
        console.log(err);
        res.status(500);
      });
  }
};
