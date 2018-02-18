import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './ReloadButton.scss';

const propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onStopRefresh: PropTypes.func,
};
const defaultProps = {
  className: 'ReloadButton',
  isLoading: false,
  onRefresh() {},
  onStopRefresh() {},
};

function ReloadButton(props) {
  const {
    className,
    isLoading,
    onRefresh,
    onStopRefresh,
  } = props;

  return (
    <div
      className={cx('ReloadButton', { className })}
    >
      {!isLoading &&
        <button
          type="button"
          className="ReloadButton__btn ReloadButton__btn--refresh"
          onClick={onRefresh}
        >
          <i className="fas fa-undo" />
        </button>
      }
      {isLoading &&
        <button
          type="button"
          className="ReloadButton__btn ReloadButton__btn--refresh"
          onClick={onStopRefresh}
        >
          <i className="fas fa-times" />
        </button>
      }
    </div>
  );
}

ReloadButton.propTypes = propTypes;
ReloadButton.defaultProps = defaultProps;

export default ReloadButton;