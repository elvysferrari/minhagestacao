import { DocumentoModelo } from './../../models/documentoModelo';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.page.html',
  styleUrls: ['./document-view.page.scss'],
})
export class DocumentViewPage implements OnInit {
  id: number;
  documento: DocumentoModelo;

  constructor(private route: ActivatedRoute,
              private documentService: DocumentosService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.documento = this.documentService.getDocById(this.id);

  }

}
