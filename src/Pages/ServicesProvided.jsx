import React from 'react'
import Graphs from '../components/Graphs'
import LinkedInJobSearch from '../components/LinkedInJobSearch'
import QualifiedCandidatesChar from '../components/QualifiedCandidatesChart'
import BrandVisibilityIndexChart from '../components/BrandVisibilityIndexChart'

const ServicesProvided = () => {
  return (
    <div>
 
    <LinkedInJobSearch/>
      <Graphs/>
      <QualifiedCandidatesChar/>
      <BrandVisibilityIndexChart/>
    </div>
  )
}

export default ServicesProvided
