import superagent from 'superagent';

export default {
  loginUser: function(data, callback){
    superagent
      .post('/api/user/')
      .send(data)
      .end(function(err, res) {
        if(err) {
          console.log('Login user failed: ', err);
        } else {
          callback(res.body);
        }
      });
  },

  getSingleUser: function(email, callback){
    superagent
      .get('/api/user/'+email)
      .end(function(err, res) {
        if(err) {
          console.log('Get user by email failed: ', err);
        } else {
          callback(res.body);
        }
      });
  },

  getSurveyQuestion: function(email, callback){
    superagent
      .get('/api/question/')
      .end(function(err, res){
        if(err) {
          console.log('Get unique survey question failed: ', err);
        } else {
          callback(res.body);
        }
      });
  }
};
