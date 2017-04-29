import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  title: string;
  fileContent: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openNodeDetail(): void {
    this.router.navigate(['/node']);
  }
}
