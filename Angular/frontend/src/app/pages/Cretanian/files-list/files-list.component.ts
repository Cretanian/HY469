import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  @Input() header:string;
  @Input() icon:string;
  @Input() file_list:file_list[];
 
  constructor() { 
  
  }

  ngOnInit(): void {
    
  }

}
class files_header{
  header:string;
  icon:string;
  constructor() { 
    this.header ='';
    this.icon ='';
  }
}
class file_list{
  image:string;
  name:string;
  last_edit:string;
  Favorites:string;
  Team:string;

  constructor() { 
    this.image ='';
    this.name ='';
    this.last_edit ='';
    this.Favorites ='';
    this.Team ='';
  }
}