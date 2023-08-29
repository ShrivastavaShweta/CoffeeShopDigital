import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../_services/drink.service';
import { Drink } from '../models/Drink';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkTypes } from '../models/drink-types';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinkTypes!: DrinkTypes[];
  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {

    this.menuService.getDrinkTypes().subscribe((data: DrinkTypes[]) => {
      console.log(data);
      this.drinkTypes = data;
      console.log(this.drinkTypes)
    })

    // this.route.params.subscribe(params => {
    //   if(params['searchTerm'])
    //   this.drinkTypes = this.drinkService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
    //   else
    //   this.drinkTypes = this.drinkService.getAll();
    //})
  }

}
