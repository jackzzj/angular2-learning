import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://media1.giphy.com/media/Kw81cekcrRw88/200_s.gif');
  constructor() { }

  ngOnInit() {
  }

}
