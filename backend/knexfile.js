// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'desafio_2020_07_20',
      user:     'postgres',
      password: 'ws18012001'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'desafio_2020_07_20',
      user:     'postgres',
      password: 'ws18012001'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
