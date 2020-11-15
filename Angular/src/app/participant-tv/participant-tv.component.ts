import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'participant-tv',
  templateUrl: './participant-tv.component.html',
  styleUrls: ['./participant-tv.component.css']
})
export class ParticipantTVComponent implements OnInit {

  @Input() name: string;
  @Input() srcProfile: string;
  @Input() srcMic: string;
  @Input() srcCamera: string;
  @Input() maxSize: number;


  constructor() { }

  ngOnInit(): void {    
  }

  setMaxSize(width: number,percentage: number) {
    this.maxSize = width * percentage/100;
  }

  format(name: string): string {
    this.maxSize = Math.trunc(this.maxSize); 
    console.log("Max Size is " + this.maxSize);
    console.log("Name Length is" + name.length);

    let decr = name.length-this.maxSize;
    if(decr < 2)
      decr = 3;

    if(name.length > this.maxSize)
      return name.slice(0, name.length-decr)+ "..."
    else
      return name;
  }

}