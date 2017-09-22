/**
 * Created by koyexes on 19/09/2017.
 */
import React from 'react';
import { Redirect } from 'react-router';
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
      error: {},
      redirect: false,
      invalid: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  isValid(){
    const { error , isValid } = validateInput(this.state);
    if(!isValid){
      this.setState({ error });
    }
    return isValid;
  }

  checkUserExists(e){
    const field = e.target.name;
    const value = e.target.value;
    if(value !== ''){
      this.props.isUserExists(value).then(res => {
        let { error, invalid }  = this.state;
        if(res.data.user) {
          error[field] = `There is a user with such ${field}`;
          invalid = true;
        }else{
          error[field] = '';
          invalid = false
        }
        this.setState({ error, invalid })

      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()){
      this.setState( { error: {} });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.setState({ redirect: true });
          this.props.addFlashMessage({
            type: 'success',
            text: `You have signed up successfully. Welcome ${this.state.username}!`
          });
        },
        ({ response }) => {
          this.setState({error: response.data});
        }
      );
    }

  }

  render() {
    const { error } = this.state;

    if(this.state.redirect) {
      return <Redirect to="/" />
    }
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
            checkUserExists={this.checkUserExists}
          />

          <TextFieldGroup
            error={error.email}
            label="Email"
            type="email"
            field="email"
            onChange={this.onChange}
            value={this.state.email}
            checkUserExists={this.checkUserExists}
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
            <button type="submit" className="btn btn-primary w-25 " disabled={this.state.invalid} >Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
};

export default SignUpForm;

