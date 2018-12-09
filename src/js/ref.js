import {setupMaster} from 'cluster';
import axios from 'axios';

const ref = {
  add: (num1,num2) => num1 + num2,
  isNull: () => null,
  checkValuePassed: x => x,
  createUser: () => {
    const user = {
      first: 'stefano',
      last: 'xxxxxxx',
    };
    return user;
  },
  conditional: (a,b) => {
    if (a + b < 100) {
      return a+b;
    } else {
      return 'over 100';
    }
  },
  sent: () => {
    let sent = 'there is no I in team';
    return sent;
  },
  arr: () => {
    let users = ['tom','jon','don', 'admin'];
    return users;
  },
  fetchUser: () => {
    let user = axios.get('https://jsonplaceholder.typicode.com/users/4');
    return user
      .then(res => res.data)
      .catch(error => error);
  },
  reverseStr: (str) => {
    return str.split('').reverse().join('');
  }



};






export default ref;
