module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Fabio',
        email: 'fabio@hotmail.com',
        password_hash:
          '$2a$08$.4fj4IusInF6sKNrlFu2Lu7fc39gn9lwHZopbVercJFLK2YjH1ESe',
        provider: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('People', null, {});
  },
};
