import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { VisModule } from 'ng2-vis';

import { TreeComponent } from '../tree/tree.component';
import { TreeLoaderComponent } from './tree-loader.component';
import { TreeProviderService } from '../tree-provider.service';

describe('TreeLoaderComponent', () => {
  let component: TreeLoaderComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TreeLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        VisModule
      ],
      declarations: [TreeComponent, TreeLoaderComponent],
      providers: [TreeProviderService]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TreeLoaderComponent);
        fixture.detectChanges();
        component = fixture.nativeElement;
        debugElement = fixture.debugElement;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Build your family tree.`, () => {
    expect(debugElement.componentInstance.title).toEqual('Build your family tree.');
  });

  it('should render title in a h1 tag', () => {
    expect(debugElement.nativeElement.querySelector('h2').textContent)
      .toContain('Build your family tree.');
  });

  it('should render button New',
    inject([Router, Location], (router: Router, location: Location) => {
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
    }));

  it('should render button Open', () => {
    const button = debugElement.queryAll(By.css('button'))
      .find(it => it.nativeElement.textContent === 'Open');

    expect(button).toBeTruthy();
  });

  it('should render correct file uploader', () => {
    const fileUpload = debugElement.query(By.css('input[type=file]'))
      .nativeElement;

    expect(fileUpload.style.display).toEqual('none');
    expect(fileUpload.accept).toEqual('.json');
  });
});
