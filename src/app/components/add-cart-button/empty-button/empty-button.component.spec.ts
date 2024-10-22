import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyButtonComponent } from './empty-button.component';

describe('EmptyButtonComponent', () => {
  let component: EmptyButtonComponent;
  let fixture: ComponentFixture<EmptyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
