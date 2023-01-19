import React from 'react';
import P from 'prop-types';

import { Component } from 'react';

import './styles.css';

export class Button extends Component {
  render() {
    const { text, actionFn, disabled = false } = this.props;

    return (
      <button className="button" disabled={disabled} onClick={actionFn}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  actionFn: P.func.isRequired,
  disabled: P.bool,
};
