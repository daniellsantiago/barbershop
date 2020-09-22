module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'barbershop',
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  },
};
