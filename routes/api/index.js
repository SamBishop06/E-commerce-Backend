// Require the express module and create a router instance
const router = require('express').Router();

// Require the routes for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount the category routes under '/categories'
router.use('/categories', categoryRoutes);
// Mount the product routes under '/products'
router.use('/products', productRoutes);
// Mount the tag routes under '/tags'
router.use('/tags', tagRoutes);

// Export the router instance to be used in other parts of the application
module.exports = router;
