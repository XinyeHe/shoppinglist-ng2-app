import { Component, Output, EventEmitter } from '@angular/core';
import { list } from '../shared/models/list';

@Component({
	selector: 'item-form',
	styles: [`
	form {
		padding: 10px;
		background: #4E5D6C;
		border-radius: 3px;
		margin-bottom:30px;
	}

	`],
	template: `
		<form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">

		{{form.valid}}

		<div class="form-group" [ngClass]="{ 'has-error': itemname.invalid && itemname.touched }">
			<input type="text" class="form-control" name="itemname" required
			[(ngModel)]="newItem.itemname" #itemname="ngModel"
			placeholder="Please input your new item name!">
		
		    <span class="help-block" *ngIf="itemname.invalid && itemname.touched">Item is required!</span>
		</div>

		<div class="form-group" [ngClass]="{ 'has-error': quantity.invalid && quantity.touched }">
			<input type="text" class="form-control" name="quantity" required
			[(ngModel)]="newItem.quantity" #quantity="ngModel"
			placeholder="Please input your new item's quantity!">
			<span class="help-block" *ngIf="quantity.invalid && quantity.touched">Quantity is required!</span>
		</div>

		<div class="form-group" [ngClass]="{ 'has-error': price.invalid && price.touched }">
			<input type="text" class="form-control" name="price" required
			[(ngModel)]="newItem.price" #price="ngModel"
			placeholder="Please input the price for your new item!">
			<span class="help-block" *ngIf="price.invalid && price.touched">Price is required!</span>
		</div>

		<button type="submit" class="btn btn-block btn-primary"
		[disabled]="form.invalid">Add item</button>
		</form>

	`
})

export class ItemFormComponent{
	@Output() itemAdded = new EventEmitter();
	newItem:list = new list();
	active: boolean = true;
	onSubmit(){
		//show the event that the item was added
		this.itemAdded.emit({ item: this.newItem });
		console.log(this.newItem);
		this.newItem = new list();
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}
}