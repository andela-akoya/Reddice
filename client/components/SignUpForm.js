/**
 * Created by koyexes on 19/09/2017.
 */
import React from 'react';
import css from './css/SignUpForm.css';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return(
      <div className="d-flex justify-content-center">
        <form className={"w-50 " + css.signUpForm } onSubmit={this.onSubmit}>
          <h1 className={"d-flex justify-content-center " + css.header}>Join our community!</h1>
          <div className="form-group">
            <label className="font-weight-bold" >Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" >Email</label>
            <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" >Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" >Password Confirmation</label>
            <input type="password" className="form-control" name="passwordConfirmation" placeholder="Password" value={this.state.passwordConfirmation} onChange={this.onChange} />
          </div>
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

