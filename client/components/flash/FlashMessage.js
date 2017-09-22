/**
 * Created by koyexes on 21/09/2017.
 */
import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let { id } = this.props.message;
    this.props.deleteFlashMessage(id);
  }
  render() {
    const { id, type, text } = this.props.message;
    const closeBtn = (
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
    return (
      <div role="alert" className={classnames('alert alert-dismissible fade show', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        {closeBtn}
        {text}
      </div>
    )

  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};
export default FlashMessage;