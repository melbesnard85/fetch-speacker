import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; 
import { Router } from '@angular/router';
import { SpeakerMp, SPEAKERS } from 'src/app/core/models/http/speaker.model';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit{
  displayedColumns: string[] = ['picture', 'name', 'email', 'gender', 'phone'];
  dataSource = new MatTableDataSource<SpeakerMp>([]);
  clickedRows = new Set<SpeakerMp>();
  selectedSpeaker: SpeakerMp | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.dataSource.data = SPEAKERS;
  }
  showInfo(data: SpeakerMp) {
    console.log(data);
    this.selectedSpeaker = data;
    this.router.navigate(['/information', this.selectedSpeaker.name]);
  }
}
