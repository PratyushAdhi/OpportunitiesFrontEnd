import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersboardComponent } from './winnersboard.component';

describe('WinnersboardComponent', () => {
  let component: WinnersboardComponent;
  let fixture: ComponentFixture<WinnersboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
