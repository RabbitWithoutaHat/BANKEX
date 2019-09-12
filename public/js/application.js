<<<<<<< HEAD
// import axios from 'axios';
// const axios = require('axios');

document.addEventListener('DOMContentLoaded', event => {
  const form = document.forms.main;
  if (form) {
    form.addEventListener('submit', async event => {
      const { name, firstName, lastName, password } = event.target;
      // console.log(name.value);
      // console.log(firstName.value);
      // console.log(lastName.value);
      // console.log(password.value);

      event.preventDefault();
      console.log('Got SUBMIT!');
      // async function makeGetRequest() {
      axios
        .post('http://192.168.1.197:4000/users', {
          name: name.value,
          firstName: firstName.value,
          lastName: lastName.value,
          password: password.value,
        })
        .then(function(response) {
          console.log('---New user data succefully sended!---');
          // console.log(response);
          window.location = 'http://localhost:3000';
        })
        .catch(function(error) {
          console.log(`Something wrong...: ${error}`);
          window.location = 'http://localhost:3000/error';
        });
      // }
    });
  }
});
=======
// let respData = [];
// document.addEventListener('DOMContentLoaded', async (event) => {
//   const response = await fetch('http://192.168.1.197:4000/users/', {});
//   respData = await response.json();
//   console.log(respData);
// });
>>>>>>> aa941ba76ef6c3439cbdbddc9e312c5bb496413c
