import { Component, OnInit } from "@angular/core";
import { Cocktail } from "../shared/interfaces/cocktail.interface";
import { CocktailService } from "../shared/services/cocktail.service";

@Component({
  selector: "app-cocktail-container",
  templateUrl: "./cocktail-container.component.html",
  styleUrls: ["./cocktail-container.component.scss"]
})
export class CocktailContainerComponent implements OnInit {
  public selectedCocktail: Cocktail;
  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
