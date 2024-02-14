// seeders/YYYYMMDDHHMMSS-product-seed.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get Category ID from existing categories
    const category1Id = await queryInterface.rawSelect('Category', {
      where: { name: 'Category 1' }
    }, ['id']);

    const category2Id = await queryInterface.rawSelect('Category', {
      where: { name: 'Category 2' }
    }, ['id']);

    await queryInterface.bulkInsert('Product', [
      { name: 'Product 1', price: 10.99, description: 'Description for Product 1', categoryId: category1Id},
      { name: 'Product 2', price: 24.99, description: 'Description for Product 2', categoryId: category2Id},
      { name: 'Product 3', price: 15.99, description: 'Description for Product 3', categoryId: category1Id},
      { name: 'Product 4', price: 29.99, description: 'Description for Product 4', categoryId: category2Id},
      // Add more products as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};
