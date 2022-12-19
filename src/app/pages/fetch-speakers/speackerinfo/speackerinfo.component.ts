import { Component, OnInit } from '@angular/core';
import { SpeakerMp, SPEAKERS } from 'src/app/core/models/http/speaker.model';

@Component({
  selector: 'app-speackerinfo',
  templateUrl: './speackerinfo.component.html',
  styleUrls: ['./speackerinfo.component.scss']
})
export class SpeackerinfoComponent implements OnInit{
  speaker: SpeakerMp | undefined;

  constructor() {}
  ngOnInit(): void {
    this.speaker = SPEAKERS[0];
  }
}
