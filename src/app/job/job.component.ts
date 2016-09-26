import { Component, Input, OnInit } from '@angular/core';

import { JobsService } from '../jobs/jobs.service';

@Component({
  selector: 'job',
  templateUrl: `
    <div class="loading-section" *ngIf="!item">
      <div class="loader">
        Loading...
      </div>
    </div>
    <div *ngIf="item">
      <div class="item-laptop">
          <p> 
            <a class="title" href="">
              {{item.title}}
            </a>
            <span class="domain">{{item.url}}</span>
          </p>
          <div class="subtext-laptop">
            {{item.score}} points by 
            <a href="">{{item.by}}</a>
            {{item.time}}
            <a href="">
              <span *ngIf="item.descendants !== 0">
                {{item.descendants}}
                <span *ngIf="item.descendants === 1">comment</span>
                <span *ngIf="item.descendants > 1">comments</span>
              </span>
              <span *ngIf="item.descendants === 0">discuss</span>
            </a>
          </div>
      </div>
      <div class="item-mobile">
        <p> 
          <a class="title" href="">
            {{item.title}}
          </a>
          <span class="domain">{{item.url}}</span>
        </p>
        <div class="subtext-palm">
          <div class="details">
            <span class="name"> <a href="">{{item.by}}</a></span>
            <span class="right">{{item.score}} ★</span>
          </div>
          <div class="details">
          {{item.time}}
          <a href="" class="comment-number"> • 
            <span *ngIf="item.descendants !== 0">
              {{item.descendants}}
              <span *ngIf="item.descendants === 1">comment</span>
              <span *ngIf="item.descendants > 1">comments</span>
            </span>
            <span *ngIf="item.descendants === 0">discuss</span>
          </a>
          </div>
        </div>
      </div>
    </div>
`
})

export class JobComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
  }
}
