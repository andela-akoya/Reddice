/**
 * Created by koyexes on 19/09/2017.
 */
import axios from 'axios';

const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
};

export default userSignupRequest;