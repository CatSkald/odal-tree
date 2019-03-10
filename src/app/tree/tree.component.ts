import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import {
  VisNode, VisNodes, VisNodeOptions, VisEdges, VisNetworkService, VisNetworkData, VisNetworkOptions
} from 'ng2-vis/components/network'

import { TreeProviderService } from '../tree-provider.service';

class TreeNetworkData implements VisNetworkData {
  public nodes: VisNodes;
  public edges: VisEdges;
}

declare const require: any

@Component({
  selector: 'app-tree',
  template: require('./tree.component.html'),
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy {

  public visNetwork: string = 'familyTreeNetwork';
  public visNetworkData: TreeNetworkData;
  public visNetworkOptions: VisNetworkOptions;

  constructor(
    private router: Router,
    private treeProvider: TreeProviderService,
    private visNetworkService: VisNetworkService) {
  }

  public addNode(): void {
    const newId = this.visNetworkData.nodes.getLength() + 1;
    this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
    this.visNetworkService.fit(this.visNetwork);
  }

  public networkInitialized(): void {
    this.visNetworkService.on(this.visNetwork, 'click');

    this.visNetworkService.click
      .subscribe((eventData: any[]) => {
        if (eventData[0] === this.visNetwork) {
          console.log(eventData[1]);
        }
      });
  }

  public ngOnInit(): void {
    const nodes = this.treeProvider.getNodes();
    const edges = this.treeProvider.getEdges();

    this.visNetworkData = {
      nodes,
      edges,
    };

    this.visNetworkOptions = require('./network-options.json');
  }

  public ngOnDestroy(): void {
    this.visNetworkService.off(this.visNetwork, 'click');
  }

  openNodeDetail(): void {
    this.router.navigate(['/node']);
  }
}
