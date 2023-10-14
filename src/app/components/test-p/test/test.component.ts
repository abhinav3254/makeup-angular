import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private test: TestService) { }

  data: Product[] = [];


  ngOnInit(): void {
    this.test.getAll().subscribe((res) => {
      this.data = res as Product[];
    });
  }

}

interface Product {
  id: number
  brand: string
  name: string
  price: string
  price_sign: string
  currency: string
  image_link: string
  product_link: string
  website_link: string
  description: string
  rating: any
  category: string
  product_type: string
  tag_list: string[]
  created_at: string
  updated_at: string
  product_api_url: string
  api_featured_image: string
  product_colors: ProductColor[]
}

interface ProductColor {
  hex_value: string
  colour_name: string
}

