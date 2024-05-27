import React from 'react'
import SkillsAssessmentChart from './EmployeeInfo/SkillsAssessmentChart'
import ConnectionPage from './EmployeeInfo/ConnectionPage'
import EngagementDashboard from '../Pages/EmployeeInfo/EngagementDashboard'
import GDPChart from './EmployeeInfo/GDPChart'
const Usergrowth = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
     <h1 className="text-3xl font-bold mb-8">LinkedIn for Job Seekers: Enhancing Productivity, Skill Development, and Career Mobility</h1>
     <SkillsAssessmentChart/>
      <GDPChart/>
      {/* <EngagementDashboard/> */} 
      <ConnectionPage/>

    </div>
  )
}

export default Usergrowth
