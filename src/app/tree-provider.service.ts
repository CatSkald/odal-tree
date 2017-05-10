import { Injectable } from '@angular/core';

import { VisNode, VisNodes, VisEdges } from 'ng2-vis/components/network'

@Injectable()
export class TreeProviderService {

  getNodes(): any {
    return [
      {
        id: '0', label: 'Click to add', level: 1
      },
      { id: '111', label: 'Ancient King', level: 1 },
      { id: '11', label: 'Old King', level: 2 },
      { id: '12', label: 'Old Queen', level: 2 },
      { id: '1', label: 'King', level: 3 },
      { id: '2', shape: 'dot', title: 'Marriage', size: 0, level: 3 },
      { id: '3', label: 'Queen', level: 3 },
      { id: '1001', label: 'Princess', level: 4 },
      { id: '1002', label: 'Prince', level: 4 },
      { id: '1003', label: 'Unknown', title: 'Unknown', level: 4 }
    ];
  }

  getEdges(): VisEdges {
    return new VisEdges([
      { from: '1', to: '2' },
      { from: '2', to: '3' },
      { from: '2', to: '1001' },
      { from: '2', to: '1002' },
      { from: '2', to: '1003' },
      { from: '111', to: '11' },
      { from: '11', to: '1' },
      { from: '11', to: '12' },
      { from: '11', to: '31' }
    ]);
  }
}
