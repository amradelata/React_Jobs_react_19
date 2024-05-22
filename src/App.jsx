import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JopsPage from './pages/JopsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './EditJobPage';

const App = () => {
  //add new job
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/Json',
      },
      body: JSON.stringify(newJob)
    });
    return;
  }
  
  //delete new job
  const deleteJob = async(id)=>{
    
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'delete',
      headers:{
        'Content-Type': 'application/Json',
      },
      
    });
    return;
  }


  //updatedJob

  const updatedJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/Json',
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JopsPage/>}/>
      <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updatedJob} />} loader={jobLoader}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
    )
  );
  return (
    <>
    <RouterProvider router={router}/>
      
      
      
    </>
  )
}

export default App
