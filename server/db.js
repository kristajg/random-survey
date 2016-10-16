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
      }

      // TODO: add field for questions answered?
      // TODO: see if STRING is the right type for password storage
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

    // User model sync 
    User.sync({force: true}).then(function () {
      // Table created
      return User.create({
        firstName: 'Krista',
        lastName: 'Gee',
        email: 'kay.gee@gmail.com',
        password: 'hello123'
      });
    });


    Survey.sync({force: true}).then(function () {
      // Table created
      return Survey.create(
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
          optionThree: 'Bruh I\'m in like 5 places at once rn'
        }
      );
    });



  }
}
