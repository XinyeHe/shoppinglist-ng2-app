"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var list_1 = require("../shared/models/list");
var ItemFormComponent = (function () {
    function ItemFormComponent() {
        this.itemAdded = new core_1.EventEmitter();
        this.newItem = new list_1.list();
        this.active = true;
    }
    ItemFormComponent.prototype.onSubmit = function () {
        var _this = this;
        //show the event that the item was added
        this.itemAdded.emit({ item: this.newItem });
        console.log(this.newItem);
        this.newItem = new list_1.list();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return ItemFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemFormComponent.prototype, "itemAdded", void 0);
ItemFormComponent = __decorate([
    core_1.Component({
        selector: 'item-form',
        styles: ["\n\tform {\n\t\tpadding: 10px;\n\t\tbackground: #4E5D6C;\n\t\tborder-radius: 3px;\n\t\tmargin-bottom:30px;\n\t}\n\n\t"],
        template: "\n\t\t<form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\n\t\t{{form.valid}}\n\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': itemname.invalid && itemname.touched }\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"itemname\" required\n\t\t\t[(ngModel)]=\"newItem.itemname\" #itemname=\"ngModel\"\n\t\t\tplaceholder=\"Please input your new item name!\">\n\t\t\n\t\t    <span class=\"help-block\" *ngIf=\"itemname.invalid && itemname.touched\">Item is required!</span>\n\t\t</div>\n\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': quantity.invalid && quantity.touched }\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"quantity\" required\n\t\t\t[(ngModel)]=\"newItem.quantity\" #quantity=\"ngModel\"\n\t\t\tplaceholder=\"Please input your new item's quantity!\">\n\t\t\t<span class=\"help-block\" *ngIf=\"quantity.invalid && quantity.touched\">Quantity is required!</span>\n\t\t</div>\n\n\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': price.invalid && price.touched }\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"price\" required\n\t\t\t[(ngModel)]=\"newItem.price\" #price=\"ngModel\"\n\t\t\tplaceholder=\"Please input the price for your new item!\">\n\t\t\t<span class=\"help-block\" *ngIf=\"price.invalid && price.touched\">Price is required!</span>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-block btn-primary\"\n\t\t[disabled]=\"form.invalid\">Add item</button>\n\t\t</form>\n\n\t"
    }),
    __metadata("design:paramtypes", [])
], ItemFormComponent);
exports.ItemFormComponent = ItemFormComponent;
//# sourceMappingURL=itemform.component.js.map