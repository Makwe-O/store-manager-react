const mockCategoriesData = {
  returnedCategories: {
    categories: [
      {
        category_id: 1,
        category_name: 'uncategorized'
      },
      {
        category_id: 2,
        category_name: 'nike'
      }
    ]
  },
  successResponse: {
    message: 'Category Created!'
  },
  duplicateFailureResponse: {
    message: 'Category already exists'
  },
  addCategoryData: {
    category_name: 'balenciaga'
  }
};

export default mockCategoriesData;
