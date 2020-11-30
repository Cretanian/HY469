import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-audio',
  templateUrl: './out-audio.component.html',
  styleUrls: ['./out-audio.component.css']
})
export class OutAudioComponent implements OnInit {
  @Input ('device') device: string;
  constructor() { }

  ngOnInit(): void {
  }

}
