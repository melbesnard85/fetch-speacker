import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, Subject } from 'rxjs';
import { SearchResult } from 'src/app/core/models/http/http.model';
import { Speaker } from 'src/app/core/models/http/speaker.model';
import { TableChange } from 'src/app/core/models/http/table.model';
import { SpeakerService } from 'src/app/core/services/speaker.service';

@Component({
  selector: 'app-fetch-speakers',
  templateUrl: './fetch-speakers.component.html',
  styleUrls: ['./fetch-speakers.component.scss']
})
export class FetchSpeakersComponent implements OnInit{
  constructor(private speakerService: SpeakerService, private snack: MatSnackBar, private cdRef : ChangeDetectorRef) {}

  isLoading = false;
  firstLoaded = false;
  result$: Subject<SearchResult<Speaker>> = new Subject<SearchResult<Speaker>>();
  reset$: Subject<any> = new Subject<any>();

  keyword!: string;
  page: number | undefined;

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }

  search(keyword: string) {
    this.keyword = keyword;
    this.firstLoaded = true;
    this.reset$.next(null);
    this.searchUsers();
  }

  changeTable(event: TableChange) {
    if (!this.firstLoaded) {
      return;
    }
    this.page = event.page;
    this.searchUsers();
  }

  private searchUsers() {
    this.isLoading = true;
    this.speakerService
      .search(this.keyword, this.page, 10)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (res) => {
          this.result$.next(res);
        },
        error: (err) => {
          this.snack.open(err.error.message);
          this.reset$.next(null);
        }
      })
  }
}
