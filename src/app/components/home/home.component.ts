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

  handleImageError1(img: any) {
    img.src = 'https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg';
    img.alt = 'Image failed to load';
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://thumbs.dreamstime.com/b/funny-face-baby-27701492.jpg';
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