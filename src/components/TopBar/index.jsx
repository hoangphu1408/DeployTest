import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import styles from './TopBar.module.scss';
import Dropdown from './components/Dropdown';

const currencyArr = ['CAD', 'CNY', 'EUR', 'GBP', 'HKD', 'USD'];
const languageArr = ['English', 'français', '简体中文'];

const cx = classNames.bind(styles);
function TopBar(props) {
  const [showItem, setShowItem] = useState(null);
  const handleToggle = (param) => {
    if (showItem === param) {
      setShowItem(null);
    } else {
      setShowItem(param);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'top-bar', 'p-3rem')}>
        <div className={cx('left')}>
          <div className={cx('social-media')}>
            <a href='/'>
              <FaFacebookF />
              <span>300k Followers</span>
            </a>
            <a href='/'>
              <FaInstagram />
              <span>100k Followers</span>
            </a>
          </div>
        </div>
        <div className={cx('center')}>
          <span>
            Open Doors To A World Of Fashion |{' '}
            <Link to='/' className={cx('text-decor')}>
              Discover More
            </Link>
          </span>
        </div>
        <div className={cx('right')}>
          <div className={cx('language')}>
            <Dropdown
              dropdownList={languageArr}
              param={'lang'}
              handleToggle={handleToggle}
              hidden={showItem === 'lang' ? '' : 'hidden'}
            />
          </div>
          <div className={cx('currency')}>
            <Dropdown
              dropdownList={currencyArr}
              param={'currency'}
              handleToggle={handleToggle}
              hidden={showItem === 'currency' ? '' : 'hidden'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
