import { Component, Input} from '@angular/core';
import { list } from '../shared/models/list';

@Component({
	selector: 'item-profile',
	template:`
		<div class="jumbotron" 
			*ngIf="activeItem" >
				<img src="activeItem.url">
				<h1>{{activeItem.itemname}}</h1>
				<h3>Qunantities left: {{activeItem.quantity - activeItem.sellNO}}</h3>
				<h3>Price/LB: {{activeItem.price | currency : $}}</h3><br>
				<h3>Please input the quantity(s) you want to buy:</h3>
				<input class="form-control" [(ngModel)]="activeItem.sellNO">
				<h4 *ngIf="activeItem.sellNO">Your total price: 
					<small>{{activeItem.sellNO * activeItem.price | currency : $}}
					</small>
				</h4>
				<button type="submit" class="btn btn-block btn-danger">Add to Chat</button>
				
			</div>
	`
})

export class ItemProfileComponent{
	@Input() activeItem: list;
	}