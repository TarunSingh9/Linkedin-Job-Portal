import React from 'react'
import Button from './Button';
import InputField from '../components/InputField';


const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Salary</h4>
      <div>
          <Button onClickHandler={handleClick} value="" title="Hourly"/>
          <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
          <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
      </div>

      <div>
        <label className="sidebar-label-container">
      <input 
             type='radio'
             name='test' 
             id="test" 
             value="" 
             onChange={handleChange}
             />
            <span className="checkmark"></span>All
        </label>

        <InputField 
        handleChange={handleChange} 
        value={30}
        title="< 30000" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value={50}
        title="< 50000" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value={80}
        title="< 80000" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value={100}
        title="< 100000" 
        name="test"
        />
      </div>
    </div>
  )
}

export default Salary
