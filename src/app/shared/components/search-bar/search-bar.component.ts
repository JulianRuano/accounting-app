import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchText: string = '';
  @Output() search = new EventEmitter<string>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  onSearchChange() {
    this.search.emit(this.searchText);
  }
}
