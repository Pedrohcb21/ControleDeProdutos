const { Router } = require ('express');
const ProductController = require ('../controllers/ProductController');

const routes = Router();

routes.post ('/Product', ProductController.AddProductController);

routes.get ('/Products', ProductController.FindAllProductController);

routes.get ('/Product/:id', ProductController.FindOneProductController);

routes.put ('/Product/:id', ProductController.UpdateProductController);

routes.delete('/product/:id', ProductController.DeleteProductController);

module.exports = routes;