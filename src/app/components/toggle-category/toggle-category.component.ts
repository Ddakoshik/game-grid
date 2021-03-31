import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-category',
  templateUrl: './toggle-category.component.html',
  styleUrls: ['./toggle-category.component.scss']
})
export class ToggleCategoryComponent implements OnInit {


  @Input() categoriesList: any;
  @Input() selectedCategoryId: number;
  @Output() selectCategory: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedCategory(categorId: number): void {
    this.selectCategory.emit(categorId === this.selectedCategoryId ? null : categorId);
  }
}
