import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule , routingComponents} from './app.routing';
import { GButtonComponent } from './pages/g-button/g-button.component';
import { MobileFooterComponent } from './pages/mobile-footer/mobile-footer.component';
import { MoreBarComponent } from './pages/more-bar/more-bar.component';
import { MobileControllerMoreComponent } from './pages/mobile-controller-more/mobile-controller-more.component';
import { MessageExtraComponent } from './pages/message-extra/message-extra.component';
import { TableMenuComponent } from './pages/Table/table-menu/table-menu.component';
import { TableMenuCarouselComponent } from './pages/Table/table-menu-carousel/table-menu-carousel.component';
import { AccountMenuComponent } from './pages/account-menu/account-menu.component';
import { ConversationPreviewComponent } from './pages/conversation-preview/conversation-preview.component';
import { ConversationMessagePreviewComponent } from './pages/conversation-message-preview/conversation-message-preview.component';
import { EmojiCounterComponent } from './pages/emoji-counter/emoji-counter.component';
import { MobileMessageLeftComponent } from './pages/mobile-message-left/mobile-message-left.component';
import { MobileMessageComponent } from './pages/mobile-message/mobile-message.component';
import { MobileChatBarComponent } from './pages/mobile-chat-bar/mobile-chat-bar.component';
import { MobileTeamMoreComponent } from './pages/mobile-team-more/mobile-team-more.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { TVGridComponent } from './pages/components/tvgrid/tvgrid.component';
import { TvgridListComponent } from  './pages/components/tvgrid-list/tvgrid-list.component';
import { ParticipantComponent } from  './pages/components/participant/participant.component';
import { ParticipantsComponent } from './pages/components/participants/participants.component';
import { ParticipantTVComponent } from './pages/Wall/participant-tv/participant-tv.component';
import { ParticipantsTVComponent } from './pages/Wall/participants-tv/participants-tv.component';
import { ContactComponent } from  './pages/components/contacts/contact/contact.component';
import { ContactListComponent } from './pages/components/contacts/contact-list/contact-list.component';
import { ContactSectionComponent } from './pages/components/contacts/contact-section/contact-section.component';
import { ContactSectionListComponent } from './pages/components/contacts/contact-section-list/contact-section-list.component';
import { EmptyComponent } from './pages/components/activities/empty/empty.component';
import { TableParticipantsComponent } from './pages/Table/table-participants/table-participants/table-participants.component';
import { TableParticipantComponent } from './pages/Table/table-participants/table-participant/table-participant.component';
import { TableFooterComponent } from './pages/Table/table-utilComponents/table-footer/table-footer.component';
import { NavigationButtonsComponent } from './pages/Table/table-participants/navigation-buttons/navigation-buttons.component';
import { ParticipantsWindowComponent } from './pages/Table/table-participants/participants-window/participants-window.component';
import { OptionsButtonsComponent } from './pages/Table/table-participants/options-buttons/options-buttons.component';
import { ActivityComponent } from './pages/components/activities/activity/activity.component';
import { ActivityMessageComponent } from './pages/components/activities/activity-message/activity-message.component';
import { ActivityListComponent } from './pages/components/activities/activity-list/activity-list.component';
import { DropdownComponent } from './pages/components/dropdown/dropdown.component';
import { DropdownMenuComponent } from './pages/components/dropdown-menu/dropdown-menu.component';
import { TableAnswerCallComponent } from './pages/Table/table-answer-call/table-answer-call.component';
import { TableTVgridComponent } from './pages/Table/table-tvgrid/table-tvgrid.component';
import { TableTvgridButtonComponent } from './pages/Table/table-tvgrid-button/table-tvgrid-button.component';
import { CalendarMobileComponent } from './pages/components/calendar-mobile/calendar-mobile.component';

import { TeamsButtonComponent } from './pages/Cretanian/teams-button/teams-button.component';
import { OnlineDevicesComponent } from './pages/Cretanian/online-devices/online-devices.component';
import { VolumeSliderComponent } from './pages/Cretanian/volume-slider/volume-slider.component';
import { GenericVolumeEditorComponent } from './pages/Cretanian/generic-volume-editor/generic-volume-editor.component';
import { TvSpeakerComponent } from './pages/TV/tv-speaker/tv-speaker.component';
import { ChatMessegesComponent } from './pages/Cretanian/chat-messeges/chat-messeges.component';
import { FilesComponent } from './pages/Cretanian/files/files.component';
import { CalendarEventComponent } from './pages/Cretanian/calendar-event/calendar-event.component';
import { TVIncomingCallComponent } from './pages/TV/tv-incoming-call/tv-incoming-call.component';
import { CallendaEventWallComponent } from './pages/Wall/callenda-event-wall/callenda-event-wall.component';
import { UpcomingEventsItemComponent } from './pages/Wall/upcoming-events-item/upcoming-events-item.component';
import { GenericUpcomingEventsBackgroundComponent } from './pages/Wall/generic-upcoming-events-background/generic-upcoming-events-background.component';
import { TodaysEventsComponent } from './pages/Wall/todays-events/todays-events.component';
import { FDisplayUpcomingEventsComponent } from './pages/Wall/f-display-upcoming-events/f-display-upcoming-events.component';
import { CallendarHeadComponent } from './pages/Wall/callendar-head/callendar-head.component';
import { FinalCalendarComponent } from './pages/Wall/final-calendar/final-calendar.component';
import { TvCamerasWallComponent } from './pages/Wall/tv-cameras-wall/tv-cameras-wall.component';
import { Tv3mainComponent } from './pages/TV/tv3main/tv3main.component';
import { Tv1mainComponent } from './pages/TV/tv1main/tv1main.component';
import { Screenshare1mainComponent } from './pages/TV/screenshare1main/screenshare1main.component';
import { Tv3x3mainComponent } from './pages/TV/tv3x3main/tv3x3main.component';
import { TvChatOnComponent } from './pages/TV/tv-chat-on/tv-chat-on.component';
import { GenDayCalendarComponent } from './pages/Wall/gen-day-calendar/gen-day-calendar.component';
import { DaysCalendarListComponent } from './pages/Cretanian/days-calendar-list/days-calendar-list.component';
import { ChatListComponent } from './pages/Cretanian/chat-list/chat-list.component';
import { FilesListComponent } from './pages/Cretanian/files-list/files-list.component';
import { OutAudioComponent } from './pages/Cretanian/in/out-audio/out-audio.component';
import { GenericHeaderItemComponent } from './pages/Cretanian/generic-header-item/generic-header-item.component';
import { AudioSettingsCameraComponent } from './pages/Cretanian/audio-settings-camera/audio-settings-camera.component';
import { ParticipantsSettingsComponent } from './pages/Cretanian/participants-settings/participants-settings.component';
import { ActivityEmptyComponent } from './pages/Final-Cretanian/activity-empty/activity-empty.component';
import { MobileControllerCallInfoComponent } from './pages/mobile-controller-call-info/mobile-controller-call-info.component';
import { MobileMeetingDeviceSettingComponent } from './pages/mobile-meeting-device-setting/mobile-meeting-device-setting.component';
import { DimmerComponent } from './pages/dimmer/dimmer.component';
import { GenericVolumeDropdownComponent } from './pages/Cretanian/generic-volume-dropdown/generic-volume-dropdown.component';
import { ManyUsersComponent } from './pages/Final-Wall/many-users/many-users.component';
import { PinboardComponent } from './pages/Wall/pinboard/pinboard.component';
import { FParticipantsComponent } from './pages/Wall/f-participants/f-participants.component';
import { ControllerCallChatComponent } from './pages/Final-Cretanian/controller-call-chat/controller-call-chat.component';
import { ExplorerTeamConversationComponent } from './pages/Final-Cretanian/explorer-team-conversation/explorer-team-conversation.component';
import { ExplorerContactChatComponent } from './pages/Final-Cretanian/explorer-contact-chat/explorer-contact-chat.component';
import { SetUserComponent } from './pages/set-user/set-user.component';
import { TvMasterComponent } from './pages/Final-Cretanian/tv-master/tv-master.component';
import { TvChatComponent } from './pages/TV/tv-chat/tv-chat.component';
import { TvMessageComponent } from './pages/TV/tv-message/tv-message.component';
import { AddButtonComponent } from './pages/Cretanian/add-button/add-button.component';
import { ReturnOncallButtonComponent } from './pages/Cretanian/return-oncall-button/return-oncall-button.component';
import { FilesWindowComponent } from './pages/Table/files-window/files-window.component';
import { FilesWindowListComponent } from './pages/Table/files-window-list/files-window-list.component';
import { TableFilesComponent } from './pages/Table/table-files/table-files.component';
import { OpenFileComponent } from './pages/Table/open-file/open-file.component';
import { FinalTableComponent } from './pages/Table/final-table/final-table.component';
import { PinnedComponent } from './pages/Wall/pinned/pinned.component';
import { MobileAddPinComponent } from './pages/mobile-add-pin/mobile-add-pin.component';
import { MobilePinboardComponent } from './pages/Final-Cretanian/mobile-pinboard/mobile-pinboard.component';
import { MobilePinComponent } from './pages/mobile-pin/mobile-pin.component';
import { LoadingCircleComponent } from './pages/components/loading-circle/loading-circle.component';
import { TeamsParticipantsComponent } from './pages/Final-Cretanian/teams-participants/teams-participants.component';

@NgModule({
  declarations: [
    AppComponent,
    GButtonComponent,
    MobileFooterComponent,
    MoreBarComponent,
    MobileControllerMoreComponent,
    MessageExtraComponent,
    TableMenuComponent,
    TableMenuCarouselComponent,
    AccountMenuComponent,
    ConversationPreviewComponent,
    ConversationMessagePreviewComponent,
    EmojiCounterComponent,
    MobileMessageLeftComponent,
    MobileMessageComponent,
    MobileChatBarComponent,
    MobileTeamMoreComponent,
    HeaderComponent,
    TVGridComponent,
    TvgridListComponent,
    ParticipantComponent,
    ParticipantsComponent,
    ParticipantTVComponent,
    ParticipantsTVComponent,
    ContactComponent,
    ContactListComponent,
    ContactSectionComponent,
    ContactSectionListComponent,
    EmptyComponent,
    TableParticipantsComponent,
    TableParticipantComponent,
    TableFooterComponent,
    NavigationButtonsComponent,
    ParticipantsWindowComponent,
    OptionsButtonsComponent,
    ActivityComponent,
    ActivityMessageComponent,
    ActivityListComponent,
    DropdownComponent,
    DropdownMenuComponent,
    TableAnswerCallComponent,
    TableTVgridComponent,
    TableTvgridButtonComponent,
    CalendarMobileComponent,
    TeamsButtonComponent,
    OnlineDevicesComponent,
    VolumeSliderComponent,
    GenericVolumeEditorComponent,
    TvSpeakerComponent,
    ChatMessegesComponent,
    FilesComponent,
    CalendarEventComponent,
    TVIncomingCallComponent,
    CallendaEventWallComponent,
    UpcomingEventsItemComponent,
    GenericUpcomingEventsBackgroundComponent,
    TodaysEventsComponent,
    FDisplayUpcomingEventsComponent,
    CallendarHeadComponent,
    FinalCalendarComponent,
    TvCamerasWallComponent,
    Tv3mainComponent,
    Tv1mainComponent,
    Screenshare1mainComponent,
    Tv3x3mainComponent,
    TvChatOnComponent,
    GenDayCalendarComponent,
    DaysCalendarListComponent,
    ChatListComponent,
    FilesListComponent,
    OutAudioComponent,
    GenericHeaderItemComponent,
    AudioSettingsCameraComponent,
    ParticipantsSettingsComponent,
    ActivityEmptyComponent,
    MobileControllerCallInfoComponent,
    MobileMeetingDeviceSettingComponent,
    DimmerComponent,
    ParticipantsSettingsComponent,
    GenericVolumeDropdownComponent,
    ManyUsersComponent,
    PinboardComponent,
    FParticipantsComponent,
    TvMasterComponent,
    TvChatComponent,
    TvMessageComponent,
    routingComponents,
    ControllerCallChatComponent,
    ExplorerTeamConversationComponent,
    ExplorerContactChatComponent,
    SetUserComponent,
    AddButtonComponent,
    ReturnOncallButtonComponent,
    FilesWindowComponent,
    FilesWindowListComponent,
    TableFilesComponent,
    OpenFileComponent,
    FinalTableComponent,
    PinnedComponent,
    MobileAddPinComponent,
    MobilePinboardComponent,
    MobilePinComponent,
    LoadingCircleComponent,
    TeamsParticipantsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
