import { Component, OnInit } from '@angular/core';
import { TableChange } from 'src/app/core/models/http/table.model';

@Component({
  selector: 'app-fetch-speakers',
  templateUrl: './fetch-speakers.component.html',
  styleUrls: ['./fetch-speakers.component.scss']
})
export class FetchSpeakersComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    
  }
  search(keyword: string) {
    console.log(keyword)
  }
  changeTable(event: TableChange) {
    // if (!this.firstLoaded) {
    //   return;
    // }
    // this.page = event.page;
    // this.direction = event.direction;
    // this.searchUsers();
  }
}
