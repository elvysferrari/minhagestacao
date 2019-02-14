import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  private serviceProviders: ServiceProvider[] = [];
  constructor() {
    this.generateProviders();
   }

  generateProviders(){
    this.serviceProviders = [{
      id: '1',
      name: 'Salão da Ana'
    }]
  }

  getAllProviders(){
    return this.serviceProviders;
  }
}
