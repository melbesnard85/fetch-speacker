import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Speaker } from 'src/app/core/models/http/speaker.model';
import { SpeakerService } from 'src/app/core/services/speaker.service';

@Component({
  selector: 'app-speackerinfo',
  templateUrl: './speackerinfo.component.html',
  styleUrls: ['./speackerinfo.component.scss']
})

export class SpeackerinfoComponent implements OnInit{
  speaker: any | undefined;

  constructor(
    private speakerService: SpeakerService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.speaker = JSON.parse(params['data']);
    });
  }
}
