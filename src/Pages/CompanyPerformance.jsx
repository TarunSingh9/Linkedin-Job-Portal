import React from 'react'
import Introperform from '../components/CompanyPrefor/Introperform'
import InduSpec from '../components/CompanyPrefor/InduSpec'
import StarPie from '../components/CompanyPrefor/StarPie'
import JobSearchPage from '../components/CompanyPrefor/JobSearchPage'
import NonprofitOrgan from '../components/CompanyPrefor/NonprofitOrgan'


const CompanyPerformance = () => {
  return (
    <div>
       <Introperform/>
       <InduSpec/>
       <StarPie/>
       <JobSearchPage/>
       <NonprofitOrgan />
    </div>
  )
}

export default CompanyPerformance
