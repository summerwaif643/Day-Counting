import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
    events: Event[] = [{id:1, name:'Irlanda'}];
  constructor() { }

  ngOnInit() {}

}
