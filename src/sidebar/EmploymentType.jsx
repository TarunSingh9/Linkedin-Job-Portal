import React from 'react';
import InputField from '../components/InputField';

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Type of employement</h4>

    <div>
      <label className='sidebar-label-container'>
          <input 
           type='radio'
           name='test' 
           id="test" 
           value="" 
           onChange={handleChange}
           />
          <span className='checkmark'></span>Any
      </label>

      <InputField 
      handleChange={handleChange} 
      value="Full-time" 
      title="Full-time" 
      name="test"
      />

      <InputField 
      handleChange={handleChange} 
      value="Temporary" 
      title="Temporary" 
      name="test"
      />

      <InputField 
      handleChange={handleChange} 
      title="Part-time" 
      name="Part-time"
      />

    </div>
  </div>
  )
}

export default EmploymentType
