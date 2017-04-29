import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-tree-loader',
  templateUrl: './tree-loader.component.html',
  styleUrls: ['./tree-loader.component.css']
})
export class TreeLoaderComponent implements OnInit {
  title: string;
  fileContent: string;

  constructor(private router: Router) {
    this.title = 'Build your family tree.';
  }

  ngOnInit() {
  }

  openNewTree(): void {
    this.fileContent = '';
  }

  uploadFile(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (content: any) => this.fileContent = content.target.result;

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
