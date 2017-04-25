import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let debugElement: DebugElement;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.nativeElement;
    debugElement = fixture.debugElement;
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

  it('should render button New', async(() => {
    const button = debugElement.queryAll(By.css('button'))
      .find(it => it.nativeElement.textContent === 'New');

    expect(button).toBeTruthy();
  }));

  it('should render button Open', async(() => {
    const button = debugElement.queryAll(By.css('button'))
      .find(it => it.nativeElement.textContent === 'Open');

    expect(button).toBeTruthy();
  }));
});
