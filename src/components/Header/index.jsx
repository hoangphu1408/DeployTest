import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header(props) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'header', 'p-3rem')}>
        <div className={cx('menu-item')}>menu</div>
        <div className={cx('logo')}>
          <h1>MiniMog</h1>
        </div>
        <div className={cx('tooltip-item')}>tooltip</div>
      </div>
    </div>
  );
}

export default Header;
