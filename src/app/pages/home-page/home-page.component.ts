import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, MatIconModule,MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  recipes=[]

  constructor(public dialog: MatDialog,
     public authService:AuthServiceService,
     private recipeService: RecipeServiceService){}

  handleOpenRecipeForm(){
    this.dialog.open(RecipeFormComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipes().subscribe()
    this.recipeService.recipeSubject.subscribe(

      (state)=>{
        this.recipes=state.recipes
      }
    )

  }

}
