import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeackerinfoComponent } from './speackerinfo.component';

describe('SpeackerinfoComponent', () => {
  let component: SpeackerinfoComponent;
  let fixture: ComponentFixture<SpeackerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeackerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeackerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
