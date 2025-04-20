import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enterprise } from '../models/enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private enterprisesSubject = new BehaviorSubject<Enterprise[]>([]);
  public enterprises$ = this.enterprisesSubject.asObservable();

  constructor() { }

  getEnterprises(): Enterprise[] {
    const enterprises: Enterprise[] = [
      { nombre: 'Adidas', nit: '1234567890' },
      { nombre: 'Nike', nit: '0987654321' },
      { nombre: 'Puma', nit: '1122334455' },
      { nombre: 'Reebok', nit: '5566778899' },
      { nombre: 'D1', nit: '9988776655' },
      { nombre: 'Exito', nit: '2233445566' },
      { nombre: 'Carulla', nit: '6677889900' },
      { nombre: 'Jumbo', nit: '3344556677' },
      { nombre: 'Falabella', nit: '7788990011' },
    ];
    this.enterprisesSubject.next(enterprises);
    return enterprises;
  }


}
