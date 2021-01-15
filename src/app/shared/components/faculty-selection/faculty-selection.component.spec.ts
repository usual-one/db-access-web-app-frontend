import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySelectionComponent } from './faculty-selection.component';

describe('FacultySelectionComponent', () => {
  let component: FacultySelectionComponent;
  let fixture: ComponentFixture<FacultySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
