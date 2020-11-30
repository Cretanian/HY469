import { Component, Input, OnInit } from '@angular/core';
import { dropdownOption } from '../components/dropdown-menu/dropdown-option';

@Component({
  selector: 'mobile-meeting-device-setting',
  templateUrl: './mobile-meeting-device-setting.component.html',
  styleUrls: ['./mobile-meeting-device-setting.component.css']
})
export class MobileMeetingDeviceSettingComponent implements OnInit {
  @Input('label') label: string;
  @Input('options') dropdownOptions: dropdownOption[];

  toggler: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
