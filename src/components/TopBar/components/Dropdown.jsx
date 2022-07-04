import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

Dropdown.propTypes = {
  dropdownList: PropTypes.array,
};

Dropdown.defaultProps = {
  dropdownList: [],
};

function Dropdown(props) {
  const { dropdownList, param, hidden, handleToggle } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isOpen = hidden === '' ? true : false;
  const handleSelectedIndex = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className={cx('dropdown')}>
      <div
        className={cx('select-selected')}
        onClick={() => handleToggle(param)}
      >
        <span>{dropdownList[selectedIndex]}</span>
        {/* {if(isOpen){
          ()
        }} */}
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className={cx('select-hidden', `${hidden}`)}>
        {dropdownList.map((item, index) => (
          <div
            key={index}
            className={
              selectedIndex === index ? cx('color-black') : cx('color-grey')
            }
            onClick={() => handleSelectedIndex(index)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
