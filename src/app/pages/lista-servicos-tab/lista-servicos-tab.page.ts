import { Component, OnInit } from '@angular/core';
import { CategoryServiceTemplate } from 'src/app/models/category-service-template';
import { ServiceTemplate } from 'src/app/models/service-template';
import { ServiceTemplateService } from 'src/app/services/service-template.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryTemplateService } from 'src/app/services/category-template.service';

@Component({
  selector: 'app-lista-servicos-tab',
  templateUrl: './lista-servicos-tab.page.html',
  styleUrls: ['./lista-servicos-tab.page.scss'],
})
export class ListaServicosTabPage implements OnInit {
  private servicesTemplate: ServiceTemplate[];
  private categoryId: string;
  private category: CategoryServiceTemplate;

  constructor(private _serviceTemplateService: ServiceTemplateService,
    private _categoryTemplateService: CategoryTemplateService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.servicesTemplate = this._serviceTemplateService.getAllServices().filter(x => x.categoriesId.includes(this.categoryId));
    this.category = this._categoryTemplateService.getAllCategories().find(x => x.id == this.categoryId)
  }

  clickItem(service: ServiceTemplate){
    console.log('service', service)
  }
}
