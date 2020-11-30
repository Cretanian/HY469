import { Component, Input, OnInit } from '@angular/core';
import { Message, Reaction } from '../Final-Phone/conversations/conversations.component';

@Component({
  selector: 'conversation-message-preview',
  templateUrl: './conversation-message-preview.component.html',
  styleUrls: ['./conversation-message-preview.component.css']
})
export class ConversationMessagePreviewComponent implements OnInit {

  // @Input('name') name: string;
  // @Input('time') time: string;
  // // @Input('message') message: string;
  // @Input('emojis') emojis: Reaction[];

  @Input('message') message: Message;

  constructor() { 
    // if(this.name == undefined)
    //   this.name = 'undefiened'
    
    // if(this.time == undefined)
    //   this.time = '99:99'
      
    // if(this.message == undefined)
    //   this.message = 'undefiened'
  }

  ngOnInit(): void {
    if(this.message == undefined)
      console.log('MP: Message is undef');
  }

  findPhoto(photo: string): string{
    return '../../assets/' + photo;
  }

  findEmoji(emoji: string): string{
    return '../../assets/emojis/' + emoji;
  }

  
}
