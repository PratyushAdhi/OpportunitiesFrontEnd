import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadretrieveComponent } from './leadretrieve.component';

describe('LeadretrieveComponent', () => {
  let component: LeadretrieveComponent;
  let fixture: ComponentFixture<LeadretrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadretrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
