import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduacationComponent } from './eduacation.component';

describe('EduacationComponent', () => {
  let component: EduacationComponent;
  let fixture: ComponentFixture<EduacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
