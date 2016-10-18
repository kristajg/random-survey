import superagent from 'superagent';

export default {
  getUser: function(data, callback){
    superagent
      .post('/user/'+data.email)
      .send(data.password)
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