import { Injectable } from '@angular/core';
import { ServiceTemplate } from '../models/service-template';

@Injectable({
  providedIn: 'root'
})
export class ServiceTemplateService {
  private services: ServiceTemplate[] = [];
  
  constructor() {
    this.generateServices();
   }

  getAllServices(){
    return this.services;
  }

  generateServices(){
    this.services = [{
      id: '1',
      name: 'Corte feminino',
      description: 'Qualquer corte masculino',
      categoriesId: ['1'],
      active: true,
      value: 20.99,
      serviceProviderId: '1'
    },
    {
      id: '2',
      name: 'Unhas da mão',
      description: '',
      categoriesId: ['1'],
      active: true,
      value: 15,
      serviceProviderId: '1'
    },
    {
      id: '3',
      name: 'Unhas do pé',
      description: '',
      categoriesId: ['1'],
      active: true,
      value: 15,
      serviceProviderId: '1'
    }]
  }


  
}
