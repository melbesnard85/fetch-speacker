import { Component, OnInit } from '@angular/core';

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
}
