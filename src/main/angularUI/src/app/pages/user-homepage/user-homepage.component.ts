import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  products!: Products[];

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
  gotoOrderItem() {
    this.router.navigate(['/create-coffee']);
  }

  logout() {
    this.router.navigate(['/home-page']);
  }
}
