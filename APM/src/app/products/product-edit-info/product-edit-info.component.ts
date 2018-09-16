import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product = { id: 1, productName: 'test', productCode: 'test' };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
