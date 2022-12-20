import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'; 
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SearchResult } from 'src/app/core/models/http/http.model';
import { Speaker } from 'src/app/core/models/http/speaker.model';
import { TableChange } from 'src/app/core/models/http/table.model';
import { SpeakerService } from 'src/app/core/services/speaker.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit, OnDestroy{
  @Input() result$: Subject<SearchResult<Speaker>> | undefined;
  @Input() reset$: Subject<any> | undefined;
  @Output() change: EventEmitter<TableChange> = new EventEmitter<TableChange>();

  total = 0;
  perPage = 10;

  page = 0;
  displayedColumns: string[] = ['picture', 'name', 'email', 'gender', 'phone', 'nat'];
  dataSource = new MatTableDataSource<Speaker>([]);
  clickedRows = new Set<Speaker>();

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private router: Router,
    private speakerService: SpeakerService,
  ) {}
  ngOnInit(): void {
    if (this.result$) {
      this.result$
        .asObservable()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((res) => {
          this.dataSource.data = res.results;
          this.total = 100; // TODO: have to create new api endpoint to integrate it.
        })
    }
    if (this.reset$) {
      this.reset$
        .asObservable()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe(() => {
          this.page = 0;
          this.total = 0;
          this.dataSource.data = [];
        });
    }
  }
  
  showInfo(data: Speaker) {
    this.router.navigate(["/information"], {queryParams: {data : JSON.stringify(data)}});
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
  
  changePage(page: PageEvent) {
    this.change.emit({ page: page.pageIndex + 1, pageSize: page.pageIndex, results: page.length, });
  }
}
