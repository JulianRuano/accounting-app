import { Component, Output , EventEmitter} from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EnterpriseService } from '../../service/enterprise-service.service';

@Component({
  selector: 'app-list-enterprise',
  imports: [HeaderComponent,SearchBarComponent,ButtonComponent, RouterModule,CommonModule],
  templateUrl: './list-enterprise.component.html',
  styleUrl: './list-enterprise.component.css'
})
export class ListEnterpriseComponent {
  enterprises: any[] = [];
  filteredEnterprises: any[] = [];

  constructor(private enterpriseService: EnterpriseService) {}

  ngOnInit() {
    this.enterprises = this.enterpriseService.getEnterprises();
    this.filteredEnterprises = this.enterprises;
  }

  filterEnterprises(searchText: string) {
    if (!searchText) {
      this.filteredEnterprises = [...this.enterprises];
    } else {
      const searchLower = searchText.toLowerCase();
      this.filteredEnterprises = this.enterprises.filter(enterprise =>
        enterprise.nombre.toLowerCase().includes(searchLower)
      );
    }
  }

  guardarEmpresaSeleccionada(enterprise: any) {
    localStorage.setItem('enterpriseSelected', JSON.stringify(enterprise));
  }

}
