/**
 * Created by koyexes on 18/09/2017.
 */
import React from 'react';
import css from './css/Greetings.css';

class Greetings extends React.Component {

  render() {

    return (
      <div className="jumbotron" >
        <h1 className={ css.root + " display-3" }>Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
      </div>
    )
  }
}

export default Greetings;