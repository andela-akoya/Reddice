/**
 * Created by koyexes on 19/09/2017.
 */
import React from 'react';
import css from './css/SignUpForm.css';
import classnames from 'classnames';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState( {errors: {} });
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ response }) => {
        this.setState({errors: response.data});
      }
    );
  }

  render() {
    const { errors } = this.state;
    return(
      <div className="d-flex justify-content-center">
        <form className={"w-50 " + css.signUpForm } onSubmit={this.onSubmit}>
          <h1 className={"d-flex justify-content-center " + css.header}>Join our community!</h1>
          <div className={classnames("form-group", { "has-danger": errors.username })}>
            <label className="font-weight-bold" >Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" value={this.state.username} onChange={this.onChange} />
            { errors.username && <span>{errors.username}</span> }
          </div>
          <div className={classnames("form-group", { hasDanger: errors.email })}>
            <label className="font-weight-bold" >Email</label>
            <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
            { errors.email && <span>{errors.email}</span> }
          </div>
          <div className={classnames("form-group", { "has-danger": errors.password })}>
            <label className="font-weight-bold" >Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
            { errors.password && <span>{errors.password}</span> }
          </div>
          <div className={classnames("form-group", { "has-danger": errors.passwordConfirmation })}>
            <label className="font-weight-bold" >Password Confirmation</label>
            <input type="password" className="form-control" name="passwordConfirmation" placeholder="Password" value={this.state.passwordConfirmation} onChange={this.onChange} />
            { errors.passwordConfirmation && <span>{errors.passwordConfirmation}</span> }
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

