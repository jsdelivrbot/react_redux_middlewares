import axios from 'axios';
import { FETCH_USERS } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password})
      .then(response => {

        disptch({ type: AUTH_USER });

        browserHistory.push('/feature');
      })
      .catch(() => {
        localStorage.setItem('token', response.data.token);
      });
  }
}

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  }
}
