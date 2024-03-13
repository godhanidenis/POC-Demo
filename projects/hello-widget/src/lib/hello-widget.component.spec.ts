import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWidgetComponent } from './hello-widget.component';

describe('HelloWidgetComponent', () => {
  let component: HelloWidgetComponent;
  let fixture: ComponentFixture<HelloWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWidgetComponent]
    });
    fixture = TestBed.createComponent(HelloWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
