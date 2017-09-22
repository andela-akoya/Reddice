/**
 * Created by koyexes on 19/09/2017.
 */
import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../actions/signupActions';
import { addFlashMessage }  from '../actions/flashMessages';

class SignUpPage extends React.Component {

  render() {
    const {userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <SignUpForm
        userSignupRequest={userSignupRequest}
        addFlashMessage={addFlashMessage}
        isUserExists={isUserExists}
      />
    )
  }
}

SignUpPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignUpPage);