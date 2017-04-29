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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
