import { Component, OnInit } from "@angular/core";
import { ParticipantsService } from "src/app/global/services/participants/participants.service";
import { participant } from "src/app/pages/components/utils/participant";
import { SocketsService } from "src/app/global/services";

@Component({
  selector: "app-participants-settings",
  templateUrl: "./participants-settings.component.html",
  styleUrls: ["./participants-settings.component.css"],
})
export class ParticipantsSettingsComponent implements OnInit {
  part_array: participant[];
  helper: participant[];
  Team_name: string;
  constructor(
    private contactsService: ParticipantsService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.Team_name = "YeetFleet";
    this.loadParticipants();

    this.socketService
      .syncMessages("participants/change")
      .subscribe((event) => {
        this.loadParticipants();
      });
  }

  loadParticipants() {
    this.contactsService.getAll().subscribe((data) => {
      this.helper = data as participant[];
      this.part_array = new Array();
      for (let i = 0; i < this.helper.length; i++) {
        if (this.helper[i].team == this.Team_name) {
          this.part_array.push(
            new participant(
              this.helper[i].name,
              this.helper[i].src2,
              this.helper[i].isMuted,
              this.helper[i].volume,
              this.helper[i].prevVolume
            )
          );
        }
      }
    });
  }
}
