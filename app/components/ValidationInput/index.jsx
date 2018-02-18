import React from 'react';
import PropTypes from 'prop-types';
import './ValidationInput.scss';

const propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  errorClassName: PropTypes.string,
  name: PropTypes.string,
  nameClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  autoFocus: false,
  className: 'ValidationInput',
  error: '',
  errorClassName: 'ValidationInput__validation-message',
  name: '',
  nameClassName: 'ValidationInput__label',
  inputClassName: 'ValidationInput__text-input',
  placeholder: '',
  value: '',
  onChange() {},
};

function ValidationInput(props) {
  const {
    autoFocus,
    className,
    error,
    errorClassName,
    name,
    nameClassName,
    inputClassName,
    placeholder,
    value,
    onChange,
  } = props;

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={nameClassName}
      >
        {name}
        <input
          autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
          id={name}
          className={inputClassName}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {error &&
        <p
          className={errorClassName}
        >
          {error}
        </p>
      }
    </div>
  );
}

ValidationInput.propTypes = propTypes;
ValidationInput.defaultProps = defaultProps;

export default ValidationInput;