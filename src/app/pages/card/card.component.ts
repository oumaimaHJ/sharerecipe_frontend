import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdateRecipeFormComponent } from '../update-recipe-form/update-recipe-form.component';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() recipe:any
  constructor(public dialog:MatDialog,private recipeService:RecipeServiceService){}

  handleOpenUpdateRecipeForm(){
    this.dialog.open(UpdateRecipeFormComponent,
      {data:this.recipe}
    )

  }

  handleDeleteRecipe(){
    this.recipeService.deleteRecipes(this.recipe.id).subscribe()
  }
}
