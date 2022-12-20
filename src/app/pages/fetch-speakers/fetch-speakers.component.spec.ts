import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { firstValueFrom, of } from 'rxjs';
import { mockSearchResponse } from 'src/app/mocks/search-response.mock';

import { FetchSpeakersComponent } from './fetch-speakers.component';

describe('FetchSpeakersComponent', () => {
  let component: FetchSpeakersComponent;
  let fixture: ComponentFixture<FetchSpeakersComponent>;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['search']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, MatCardModule],
      declarations: [ FetchSpeakersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit response when do fetch', (done: DoneFn) => {
    const fixture = TestBed.createComponent(FetchSpeakersComponent);
    const searchBarComponent = fixture.componentInstance;

    userServiceSpy.search.and.returnValue(of({ ...mockSearchResponse }));
    fixture.detectChanges();

    firstValueFrom(searchBarComponent.result$.asObservable()).then((res) => {
      expect(res.info.page).toEqual(mockSearchResponse.info.page);
      done();
    });

    searchBarComponent.search('melwin');
    searchBarComponent.changeTable({ page: 1, results: 9, pageSize: 0 });
  });
});
