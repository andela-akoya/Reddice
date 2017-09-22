/**
 * Created by koyexes on 19/09/2017.
 */
import axios from 'axios';

const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
};

const isUserExists = (identifier) => {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
};

export { userSignupRequest, isUserExists };