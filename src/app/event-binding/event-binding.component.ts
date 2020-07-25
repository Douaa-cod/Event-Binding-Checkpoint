import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  color="";
  constructor() { }

  ngOnInit(): void {
  }

  onclick(colorInput) {
    console.log(colorInput);
    this.color = colorInput;
  }

}
