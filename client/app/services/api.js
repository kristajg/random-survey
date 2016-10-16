import Superagent from 'superagent';

export default {
  getUser: function(email, callback){
    superagent
      .get('/user')
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
      .get('/question')
      .end(function(err, res){
        if(err) {
          console.log('Get unique survey question failed: ', err);
        } else {
          callback(res.body);
        }
      });
  }
};