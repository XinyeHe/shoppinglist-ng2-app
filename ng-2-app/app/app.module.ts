import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// here the formsModule is to implament the two-way-binding
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemProfileComponent} from './shoppinglist/item-profile.component';
import { ItemFormComponent } from './shoppinglist/itemform.component';


@NgModule({
  imports: [ 
  BrowserModule,
  FormsModule
],
  declarations: [ 
  AppComponent,
  ItemProfileComponent,
  ItemFormComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}