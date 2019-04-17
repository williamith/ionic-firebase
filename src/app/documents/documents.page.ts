import { DocumentsService } from './shared/documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  documents = [];

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documentsService.getDocuments()
      .subscribe(
        response => this.documents = Object.values(response),
        error => console.log(error)
      );
  }

}
