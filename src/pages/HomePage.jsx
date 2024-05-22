import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListeng from '../components/JobListengs'
import ViewAllJobs from '../components/ViewAllJobs'
function HomePage() {
  return (
    <>
        <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
        <HomeCards/>
        <JobListeng isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage