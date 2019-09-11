// import Axios from 'axios';
const axios = require('axios');

axios
  .post('//192.168.1.197/users', {
    name: user.name,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
  })
  .then(function(response) {
    console.log('---New user data succefully sended!---');
  })
  .catch(function(error) {
    console.log(`Something wrong...: ${error}`);
  });

axios.get('/newuser', {}).then(function(response) {
  console.log('Its GET request');
});
module.exports = Axios;
