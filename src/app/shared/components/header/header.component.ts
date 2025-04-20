import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { EnterpriseService } from '../../../features/enterprise/service/enterprise-service.service';
import { Enterprise } from '../../../features/enterprise/models/enterprise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  enterpriseSelectOpen = false;

  enterpriseSelected: Enterprise | null = null;
  enterpriseFiltered = '';
  enterprises: Enterprise[] = [];
  filteredEnterprises: Enterprise[] = [];

  serviceMenu: any[] = [];
  filteredMenu: any[] = [];

  constructor(
    private enterpriseService: EnterpriseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.enterprises = this.enterpriseService.getEnterprises();

    // Cargar empresa seleccionada desde localStorage si existe
    const stored = localStorage.getItem('enterpriseSelected');
    if (stored) {
      const selected = JSON.parse(stored);
      // Buscar la empresa en la lista cargada por ID/NIT (para tener referencia real del objeto)
      const match = this.enterprises.find(e => e.nit === selected.nit);
      if (match) {
        this.enterpriseSelected = match;
        this.enterpriseFiltered = match.nombre;
      }
    } else {
      // Si no hay nada en localStorage, usar la primera
      this.enterpriseSelected = this.enterprises[0];
      this.enterpriseFiltered = this.enterpriseSelected?.nombre ?? '';
    }


    this.filteredEnterprises = this.enterprises.slice(0,5);

    this.serviceMenu = [
      { name: 'Crear Empresa', route: '/enterprise/1234567890' },
      { name: 'Factura de Venta', route: '/enterprise/0987654321' },
      { name: 'Factura de Compra', route: '/enterprise/1122334455' },
      { name: 'Inventario', route: '/enterprise/5566778899' },
      { name: 'Reportes', route: '/enterprise/9988776655' },
    ]
    this.filteredMenu = [...this.serviceMenu];
  }

  selectEnterprises(enterprise: Enterprise) {
    this.enterpriseSelected = enterprise;
    this.enterpriseFiltered = enterprise.nombre;
    this.filteredEnterprises = [];
  }

  filterEnterprises() {
    const filtro = this.enterpriseFiltered.trim().toLowerCase();

    if (filtro === '') {
      this.filteredEnterprises = this.enterprises.slice(0, 5);
    } else {
      this.filteredEnterprises = this.enterprises.filter(e =>
        e.nombre.toLowerCase().includes(filtro)
      );
    }
  }


  filterMenu(searchText: string) {
    if (!searchText) {
      this.filteredMenu = [...this.serviceMenu];
    } else {
      const searchLower = searchText.toLowerCase();
      this.filteredMenu = this.serviceMenu.filter(menu =>
        menu.name.toLowerCase().includes(searchLower)
      );
    }
  }

  irARuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
