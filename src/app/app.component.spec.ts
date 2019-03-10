import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let debugElement: DebugElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [AppComponent]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        component = fixture.nativeElement;
        debugElement = fixture.debugElement;
      });
  }));

  it('should create the app', async(() => {
    expect(debugElement.componentInstance).toBeTruthy();
  }));

  it(`should have as title 'Welcome to Odal Tree!`, async(() => {
    expect(debugElement.componentInstance.title).toEqual('Welcome to Odal Tree!');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(debugElement.nativeElement.querySelector('h1').textContent)
      .toContain('Welcome to Odal Tree!');
  }));
});
