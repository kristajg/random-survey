var Sequelize = require("sequelize");

// Initialize db connection
var sequelize = new Sequelize('randomsurvey', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = {
  createTables: function() {
    // user model
    var User = sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });

    // survey model
    var Survey = sequelize.define('survey', {
      question: {
        type: Sequelize.STRING
      },
      optionOne: {
        type: Sequelize.STRING,
        field: 'option_one'
      },
      optionTwo: {
        type: Sequelize.STRING,
        field: 'option_two'
      },
      optionThree: {
        type: Sequelize.STRING,
        field: 'option_three'
      }    
    }, {
      freezeTableName: true
    });

    // questions answered model
    // var Answered = sequelize.define('answered', {
      // need foreign key to questions
    // }, {
      // freezeTableName: true
    // });

    // Create user table
    User.sync({force: true}).then(function () {
      // Table created
      console.log('User table successfully created.');

      // Bulk upload fixture data to user table
      var userData = [
        {
          firstName: 'Krista',
          lastName: 'Gee',
          email: 'k.g@gmail.com',
          password: 'hello123',
          type: 'guest'
        },
        {
          firstName: 'admin',
          email: 'admin@example.com',
          password: 'admin789',
          type: 'admin'
        }
      ];

      User.bulkCreate(userData)
      .then(function(response){
        console.log('User data successfully inserted');
      })
      .catch(function(error){
        console.log('User data failed to upload');
      });
    });

    // Create survey table
    Survey.sync({force: true}).then(function () {
      console.log('Survey table successfully created.');

      // Bulk upload fixture data to survey table
      var surveyData = [
        {
          question: 'What is your favorite kind of cheese?',
          optionOne: 'gouda',
          optionTwo: 'chedda chedda cheeeze',
          optionThree: 'swiss'
        },
        {
          question: 'How would you rate your knowledge of space time travel?',
          optionOne: 'Somewhat familiar',
          optionTwo: 'Not very familiar',
          optionThree: 'I\'m in like 5 places at once rn'
        }
      ];

      Survey.bulkCreate(surveyData)
      .then(function(response){
        console.log('Survey data successfully inserted');
      })
      .catch(function(error){
        console.log('Survey data failed to upload');
      });      
    });
  }
}
