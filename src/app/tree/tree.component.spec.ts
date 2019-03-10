import { DebugElement } from '@angular/core/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { VisModule } from 'ng2-vis';

import { TreeComponent } from './tree.component';
import { TreeProviderService } from '../tree-provider.service';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        VisModule
      ],
      declarations: [TreeComponent],
      providers: [TreeProviderService]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TreeComponent);
        fixture.detectChanges();
        component = fixture.nativeElement;
        debugElement = fixture.debugElement;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
