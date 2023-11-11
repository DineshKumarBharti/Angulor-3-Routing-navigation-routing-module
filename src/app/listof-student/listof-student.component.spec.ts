import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofStudentComponent } from './listof-student.component';

describe('ListofStudentComponent', () => {
  let component: ListofStudentComponent;
  let fixture: ComponentFixture<ListofStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofStudentComponent]
    });
    fixture = TestBed.createComponent(ListofStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
