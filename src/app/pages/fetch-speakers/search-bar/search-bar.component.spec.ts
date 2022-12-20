import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button and label of input box', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const searchBarComponent = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button span.font-medium')?.textContent).toContain('Search');
  });

  it('should send keyword when do search', (done: DoneFn) => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const searchBarComponent = fixture.componentInstance;
    fixture.detectChanges();
    searchBarComponent.form.controls.keyword.setValue('melwin');

    searchBarComponent.search.asObservable().subscribe((res) => {
      expect(res).toContain('melwin');
      done();
    });

    searchBarComponent.submit();
  });
});
