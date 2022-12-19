import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchSpeakersComponent } from './fetch-speakers.component';

describe('FetchSpeakersComponent', () => {
  let component: FetchSpeakersComponent;
  let fixture: ComponentFixture<FetchSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
