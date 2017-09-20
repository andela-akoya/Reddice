/**
 * Created by koyexes on 19/09/2017.
 */
import express from 'express';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

const validateInput = (data) => {
  let errors = {};

  if(validator.isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if(validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }else if(!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if(validator.isEmpty(data.password)){
    errors.password = "This field is required";
  }
  if(validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "This field is required"
  }
  if(!validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
