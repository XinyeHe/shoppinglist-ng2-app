import { Component } from '@angular/core';
import { list } from './shared/models/list';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css',]
})

export class AppComponent {
	message = 'Hello!';
	shoppinglists: list[] = [
	{id:0, itemname:'Apple', quantity:50, sellNO:0, price:0.89, url:''}, 
	{id:1, itemname:'Pear', quantity:30, sellNO:0, price:1.99, url:''}, 
	{id:2, itemname:'Grape', quantity:50, sellNO:0, price:2.89, url:''}
	];
	activeItem : list;
	selectItem(item){
		this.activeItem = item;
	};
	onItemAdded(event){
		console.log(event);
		this.shoppinglists.push(event.item);
	}
}