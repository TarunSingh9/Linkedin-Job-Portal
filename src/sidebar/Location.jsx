import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label className='sidebar-label-container'>
            <input 
             type='radio'
             name='test' 
             id="test" 
             value="" 
             onChange={handleChange}
             />
            <span className='checkmark'></span>All
        </label>

        <InputField 
        handleChange={handleChange} 
        value="chennai" 
        title="chennai" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value="Bengalora" 
        title="Bengalora" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value="Noida" 
        title="Noida" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value="Delhi" 
        title="Delhi" 
        name="test"
        />

        <InputField 
        handleChange={handleChange} 
        value="Lucknow" 
        title="Lucknow" 
        name="test"
        />

      </div>
    </div>
  )
}

export default Location
