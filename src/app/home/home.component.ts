import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  template: `
    <h1>Home</h1>
    
    <span>Local State is: "{{localState | json}}"</span>
`
})

export class HomeComponent implements OnInit {
  localState = { value: 'dummy'};

  constructor(public appState: AppState) {}

  ngOnInit() {

  }
}
