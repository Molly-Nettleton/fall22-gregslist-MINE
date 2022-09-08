import { generateId } from "../Utils/generateId.js"



export class Job{

/**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string, imgUrl: string, id?:string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.imgUrl = data.imgUrl || 'https://i.insider.com/5f5f9dbbe6ff30001d4e8a39?width=1000&format=jpeg&auto=webp'
  }

  get JobCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="${this.company}-${this.jobTitle}" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.company} | ${this.jobTitle} ${this.hours}
          </h5>
          <p>
            <strong>$ ${this.rate}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }

  
}