import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs/jobs.service';

@Component({
  moduleId: module.id,
  selector: 'jobs',
  template: `
    <h1>Jobs</h1>
    
    <div class="main-content">
      <ol>
        <li *ngFor="let item of items | slice:0:30" class="post">
          <job itemID="{{ item }}"></job>
        </li>
      </ol>
    </div>
`
})

export class JobsComponent implements OnInit {
  items;

  constructor(private jobService: JobsService) {}

  ngOnInit() {
    this.jobService.fetchStories()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories'));
  }
}

