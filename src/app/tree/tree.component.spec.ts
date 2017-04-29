import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [TreeComponent]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TreeComponent);
        fixture.detectChanges();
        component = fixture.nativeElement;
        debugElement = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Build your family tree.`, async(() => {
    expect(debugElement.componentInstance.title).toEqual('Build your family tree.');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(debugElement.nativeElement.querySelector('h2').textContent)
      .toContain('Build your family tree.');
  }));

  it('should render button New', async(inject([Router, Location],
    (router: Router, location: Location) => {
      const button = debugElement.queryAll(By.css('button'))
        .find(it => it.nativeElement.textContent === 'New');

      expect(button).toBeTruthy();

      const navigateSpy = spyOn(router, 'navigate');

      button.nativeElement.click();
      fixture.whenStable().then(() => {
        // todo remove this later
        // expect(location.path()).toEqual('/tree');
        expect(navigateSpy).toHaveBeenCalledWith(['/tree']);
      });
    })));

  it('should render button Open', async(() => {
    const button = debugElement.queryAll(By.css('button'))
      .find(it => it.nativeElement.textContent === 'Open');

    expect(button).toBeTruthy();
  }));

  it('should render correct file uploader', async(() => {
    const fileUpload = debugElement.query(By.css('input[type=file]'))
      .nativeElement;

    expect(fileUpload.style.display).toEqual('none');
    expect(fileUpload.accept).toEqual('.json');
  }));
});
