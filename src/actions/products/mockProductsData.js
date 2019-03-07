const mockProductsData = {
  returnedProducts: [
    {
      product_id: 154,
      product_image:
        'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551942760/Store%20Manager/shoe12_sasxwk.png',
      product_name: 'Nike turbo ',
      price: 30000,
      category_name: 'adidas',
      quantity: 40
    }
  ],
  successMessage: 'Product Created!',
  errorMessage: 'Quantity is not a number',
  addProductBody: {
    price: 50,
    product_image:
      'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551256060/Store%20Manager/shoe13_enlbc4.png',
    product_name: 'Nike orangety55',
    quantity: 50
  },
  addProductBodyFake: {
    price: 50,
    product_image:
      'https://res.cloudinary.com/dnavbc7ny/image/upload/v1551256060/Store%20Manager/shoe13_enlbc4.png',
    product_name: 'Nike orangety55',
    quantity: '50'
  },
  deleteProductSuccess: 'Product Deleted Successfully'
};
export default mockProductsData;
