import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"
import { jobsService } from "../Services/JobsService.js"

function drawJobs() {
  let template = ''
  appState.jobs.forEach(job => template += job.JobCardTemplate)

  setHTML('listings',template)
}

// App, Controller, Service, Model, Appstate

export class JobsController {
  constructor() {
    console.log('the jobs controller')
  appState.on('jobs', drawJobs)
  }

  showJobs() {
    drawJobs()
  }

  addJob() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      jobsService.addJob(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('addJob', error)
  }
}



  
}


