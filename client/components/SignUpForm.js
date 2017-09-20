/**
 * Created by koyexes on 19/09/2017.
 */
import React from 'react';
import css from './css/SignUpForm.css';
import validateInput from '../../server/shared/validations/signup';
import TextFieldGroup from './common/TextFieldGroup';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  isValid(){
    const { errors , isValid } = validateInput(this.state);
    if(!isValid){
      this.setState({ error: errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()){
      this.setState( { error: {} });
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ response }) => {
          this.setState({error: response.data});
        }
      );
    }

  }

  render() {
    const { error } = this.state;
    return(
      <div className="d-flex justify-content-center">
        <form className={"w-50 " + css.signUpForm } onSubmit={this.onSubmit}>
          <h1 className={"d-flex justify-content-center " + css.header}>Join our community!</h1>
          <TextFieldGroup
            error={error.username}
            label="Username"
            field="username"
            onChange={this.onChange}
            value={this.state.username}
          />

          <TextFieldGroup
            error={error.email}
            label="Email"
            type="email"
            field="email"
            onChange={this.onChange}
            value={this.state.email}
          />

          <TextFieldGroup
            error={error.password}
            label="Password"
            type="password"
            field="password"
            onChange={this.onChange}
            value={this.state.password}
          />

          <TextFieldGroup
            error={error.passwordConfirmation}
            label="Password Confirmation"
            type="password"
            field="passwordConfirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
          />

          <div className="form-group d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25 " >Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default SignUpForm;

