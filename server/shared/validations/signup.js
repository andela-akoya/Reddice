import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = (data) => {

  let error = {};

  if(validator.isEmpty(data.username)) {
    error.username = "This field is required";
  }
  if(validator.isEmpty(data.email)) {
    error.email = "This field is required";
  }else if(!validator.isEmail(data.email)) {
    error.email = "Email is invalid";
  }
  if(validator.isEmpty(data.password)){
    error.password = "This field is required";
  }
  if(validator.isEmpty(data.passwordConfirmation)) {
    error.passwordConfirmation = "This field is required"
  }
  if(!validator.equals(data.password, data.passwordConfirmation)){
    error.passwordConfirmation = "Passwords must match";
  }

  return {
    error,
    isValid: isEmpty(error)
  }
};

export default validateInput;