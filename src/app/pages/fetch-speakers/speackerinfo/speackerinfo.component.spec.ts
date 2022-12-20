import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { SpeackerinfoComponent } from './speackerinfo.component';

describe('SpeackerinfoComponent', () => {
  let component: SpeackerinfoComponent;
  let fixture: ComponentFixture<SpeackerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatCardModule, RouterTestingModule],
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
