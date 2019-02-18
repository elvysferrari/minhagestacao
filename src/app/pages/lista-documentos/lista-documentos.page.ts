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
  documentosFiltered: DocumentoModelo[] = [];
  constructor(private docsService: DocumentosService) { }

  ngOnInit() {
    this.documentos = this.docsService.getDocumentList();
    this.documentosFiltered = this.docsService.getDocumentList();

    this.documentos.sort((a: any, b: any) => {
      return a.titulo < b.titulo ? -1 : 1;
    });

    this.documentosFiltered.sort((a: any, b: any) => {
      return a.titulo < b.titulo ? -1 : 1;
    });
  }

  changeSearch(evt){
    console.log('changeSearch', evt);    
    if(evt.detail.value == ""){
      this.documentosFiltered = this.documentos;
    }else{
      this.documentosFiltered = this.documentos.filter(x => x.titulo.toLocaleLowerCase().includes(evt.detail.value.toLocaleLowerCase()));
    }
  }

  cancelSearch(evt){
    this.documentosFiltered = this.documentos;
  }
}
