import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HahaComponent } from './haha.component';

describe('HahaComponent', () => {
  let component: HahaComponent;
  let fixture: ComponentFixture<HahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HahaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
