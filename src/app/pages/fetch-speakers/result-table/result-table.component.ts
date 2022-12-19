import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; 
import { Router } from '@angular/router';
import { Speaker } from 'src/app/core/models/http/speaker.model';
import { SpeakerService } from 'src/app/core/services/speaker.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit{
  displayedColumns: string[] = ['picture', 'name', 'email', 'gender', 'phone'];
  dataSource = new MatTableDataSource<Speaker>([]);
  clickedRows = new Set<Speaker>();

  constructor(
    private router: Router,
    private speakerService: SpeakerService,
  ) {}
  ngOnInit(): void {
    this.speakerService.search().subscribe((data: any) => {
      console.log(data)
      if (data?.results?.length > 0) {
        this.dataSource.data = data.results;
      }
    });
  }
  showInfo(data: Speaker) {
    console.log( data.name.first);
    console.log( data.login.username);
    this.router.navigate(["/information"], {queryParams: {data : JSON.stringify(data)}});
  }
}
