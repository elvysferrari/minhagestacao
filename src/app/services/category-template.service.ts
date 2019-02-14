import { Injectable } from '@angular/core';
import { CategoryServiceTemplate } from '../models/category-service-template';

@Injectable({
  providedIn: 'root'
})
export class CategoryTemplateService {
  private categoriesService: CategoryServiceTemplate[] = [];
  constructor() {
    this.generateCategories();
   }

  getAllCategories(){
    return this.categoriesService;
  }

  generateCategories(){
    this.categoriesService = [{
      id: '1',
      name: 'Salões de Beleza',
      active: true,
      icon: 'woman',
      iconColor: '#f142f4'
    },
    {
      id: '2',
      name: 'Barbearias',
      active: true,
      icon: 'man',
      iconColor: '#514ef4'
    },
    {
      id: '3',
      name: 'Clínicas',
      active: true,
      icon: 'medical',
      iconColor: '#53ed95'
    },
    {
      id: '4',
      name: 'Petshops',
      active: true,
      icon: 'medkit',
      iconColor: '#52d3ed'
    },
    {
      id: '5',
      name: 'Jardinagem',
      active: true,
      icon: 'leaf',
      iconColor: '#63ef4a'
    },
    {
      id: '6',
      name: 'Chaveiros',
      active: true,
      icon: 'key',
      iconColor: '#5b4028'
    },
    {
      id: '7',
      name: 'Mecânicos',
      active: true,
      icon: 'car',
      iconColor: '#96958a'
    },
    {
      id: '8',
      name: 'Eletricistas',
      active: true,
      icon: 'outlet',
      iconColor: '#e2d863'
    },
    {
      id: '9',
      name: 'Guinchos',
      active: true,
      icon: 'build',
      iconColor: '#3d390e'
    },
    {
      id: '10',
      name: 'Borracharias',
      active: true,
      icon: 'help-buoy',
      iconColor: '#262520'
    },
    {
      id: '11',
      name: 'Serviços residenciais',
      active: true,
      icon: 'home',
      iconColor: '#6323b2'
    },
    {
      id: '12',
      name: 'Diaristas',
      active: true,
      icon: 'water',
      iconColor: '#961e3e'
    },
    {
      id: '13',
      name: 'Lavanderia',
      active: true,
      icon: 'shirt',
      iconColor: '#0a0d30'
    },
    {
      id: '14',
      name: 'Outros',
      active: true,
      icon: 'grid',
      iconColor: '#193d2f'
    }]
  }

}
