import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadstableComponent } from './leadstable.component';

describe('LeadstableComponent', () => {
  let component: LeadstableComponent;
  let fixture: ComponentFixture<LeadstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
