import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloLibComponent } from './hello-lib.component';

describe('HelloLibComponent', () => {
  let component: HelloLibComponent;
  let fixture: ComponentFixture<HelloLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloLibComponent]
    });
    fixture = TestBed.createComponent(HelloLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
