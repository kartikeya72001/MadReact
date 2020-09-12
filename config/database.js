// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         srv: env.bool('DATABASE_SRV', false),
//         port: env.int('DATABASE_PORT', 27017),
//         database: 'MAD',
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });

module.exports = ({env}) => (
  {
    "defaultConnection": "default",
    "connections": {
      "default": {
        "connector": "mongoose",
        "settings": {
          "uri": "mongodb://admin:admin@mad-project-shard-00-00.7qrbp.mongodb.net:27017,mad-project-shard-00-01.7qrbp.mongodb.net:27017,mad-project-shard-00-02.7qrbp.mongodb.net:27017/mad-project?ssl=true&replicaSet=atlas-13ghhc-shard-0&authSource=admin&retryWrites=true&w=majority",
          "database": "mad-project"
        },
        "options": {
          "ssl": true
        }
      }
    }
  });