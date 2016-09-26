import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Job } from '../job/job';


@Injectable()
export class JobsService {
  baseUrl: string;

  constructor(private http: Http){
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
      .map(response => response.json());
  }

  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
      .map(response => response.json());
  }

}

