import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Enterprise } from '../../models/enterprise';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SidebarComponent } from "../../../../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-view-enterprise',
  imports: [RouterModule, CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './view-enterprise.component.html',
  styleUrl: './view-enterprise.component.css'
})
export class ViewEnterpriseComponent {

  enterprise: Enterprise | null = null;


  constructor() {
    const data = localStorage.getItem('enterpriseSelected');
    this.enterprise = data ? JSON.parse(data) : null;
  }
}
