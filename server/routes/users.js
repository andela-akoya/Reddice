/**
 * Created by koyexes on 19/09/2017.
 */
import express from 'express';
import bcrypt from 'bcrypt';
import commonValidations from '../shared/validations/signup';
import User from '../models/user';
import isEmpty  from 'lodash/isEmpty'

let router = express.Router();

function validateInput(data, otherValidations) {
  let { error } = otherValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username: data.username}
  }).fetch().then(user => {
    if(user){
      if(user.get('username') === data.username) {
        error.username = 'There is a user with such username';
      }
      if(user.get('email') === data.email) {
        error.email = 'There is a user with such email';
      }
    }
    return {
      error,
      isValid: isEmpty(error)
    };
  });
}

router.get('/:identifier', (req, res) => {
  User.query({
    select: ['username', 'email'],
    where: { email: req.params.identifier },
    orWhere: { username: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });
});

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ error, isValid }) => {
    if(isValid) {
      const { username, password, email } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      User.forge(
        {username, password_digest, email},
        {hasTimestamps: true}
      ).save()
        .then(user => res.json({success: true}))
        .catch(err => res.status(500).json({error: err}));
    } else {
      res.status(400).json(error);
    }
  });
});

export default router;
