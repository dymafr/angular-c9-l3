import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Cocktail } from "../shared/interfaces/cocktail.interface";
import { CocktailService } from "../shared/services/cocktail.service";

@Component({
  selector: "app-cocktail-container",
  templateUrl: "./cocktail-container.component.html",
  styleUrls: ["./cocktail-container.component.scss"]
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public selectedCocktail: Cocktail;
  public cocktails: Cocktail[];
  public subscription: Subscription;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.subscription = this.cocktailService.cocktails$.subscribe(
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    );

    this.cocktailService.selectedCocktail$.subscribe(
      (selectedCocktail: Cocktail) => {
        this.selectedCocktail = selectedCocktail;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
