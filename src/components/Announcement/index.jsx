import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { BiX } from 'react-icons/bi';

import styles from './Announcement.module.scss';
const cx = classNames.bind(styles);

function Announcement(props) {
  const [flag, setFlag] = useState(true);

  return (
    <>
      {flag && (
        <div className={cx('bar', 'color-white')}>
          <span>Free Delivery on orders over £120. Don’t miss discount.</span>
          <BiX className={cx('close-ic')} onClick={() => setFlag(false)} />
        </div>
      )}
    </>
  );
}

export default Announcement;
