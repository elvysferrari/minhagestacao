import { DocumentoModelo } from './../../models/documentoModelo';
import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.page.html',
  styleUrls: ['./lista-documentos.page.scss'],
})
export class ListaDocumentosPage implements OnInit {
  documentos: DocumentoModelo[];

  constructor(private docsService: DocumentosService) { }

  ngOnInit() {
    this.documentos = this.docsService.getDocumentList();
  }

}
