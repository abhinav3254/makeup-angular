import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  makeupData: Product[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAll().subscribe((data) => {
      this.makeupData = data as Product[];
    });
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?size=626&ext=jpg&ga=GA1.1.1038739080.1695141736&semt=sph';
    imgElement.alt = 'Image failed to load';
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