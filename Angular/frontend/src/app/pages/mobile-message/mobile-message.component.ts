import { HttpClient } from '@angular/common/http';
import { Component, ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MessagesService } from 'src/app/global/services/messages/messages.service';
import { Message, Reaction } from '../Final-Cretanian/conversations/conversations.component';

@Component({
  selector: 'mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.css']
})
export class MobileMessageComponent {

  @Input('contact') contact: string;
  @Input('message') message: Message;

  extrasOpened: boolean = false;

  constructor(private messageService: MessagesService, private socketService: SocketsService) {}


  findPhoto(photo: string): string{
    return '../../../assets/' + photo;
  }

  findEmoji(emoji: string): string{
    return '../../../assets/emojis/' + emoji;
  }

  openExtras($event?): void{
    this.extrasOpened = true;
  }

  closeExtras($event?): void{
    this.extrasOpened = false;
  }

  reactTo(emojiSrc: string): void{
    console.log('contact: ' + this.contact);
    this.messageService.reactTo(this.contact ,this.message.id, emojiSrc);
  }
}
