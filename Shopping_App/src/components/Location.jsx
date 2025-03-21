import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaGlobe } from 'react-icons/fa';

const Location = () => {
  const { dispatch, Location: currentLocation } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_LOCATION',
      payload: val,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <div className="d-flex align-items-center">
        <FaGlobe className="me-2" />
        <span className="me-2 fw-bold">Currency:</span>
        <select 
          className="form-select" 
          name="Location" 
          id="Location" 
          value={currentLocation}
          onChange={event => changeLocation(event.target.value)}
        >
          <option value="₹">India (₹)</option>
          <option value="$">USA ($)</option>
        </select>
      </div>
    </div>
  );
};

export default Location;