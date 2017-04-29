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
    this.title = 'Build your family tree.';
  }

  ngOnInit() {
  }

  openNewTree(): void {
    this.router.navigate(['/tree']);
  }

  uploadFile(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (content: any) => this.title = content.target.result;

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
