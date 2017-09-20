/**
 * Created by koyexes on 20/09/2017.
 */
import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = (props) => {
  return (
    <div className={classnames("form-group", { "has-danger": props.error })}>
      <label className="font-weight-bold" >{props.label}</label>
      <input type={props.type} className="form-control" name={props.field} placeholder={props.label} value={props.value} onChange={props.onChange} />
      { props.error && <span>{props.error}</span> }
    </div>
  )
};

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
