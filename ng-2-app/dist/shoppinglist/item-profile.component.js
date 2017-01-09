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
var ItemProfileComponent = (function () {
    function ItemProfileComponent() {
    }
    return ItemProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", list_1.list)
], ItemProfileComponent.prototype, "activeItem", void 0);
ItemProfileComponent = __decorate([
    core_1.Component({
        selector: 'item-profile',
        template: "\n\t\t<div class=\"jumbotron\" \n\t\t\t*ngIf=\"activeItem\" >\n\t\t\t\t<img src=\"activeItem.url\">\n\t\t\t\t<h1>{{activeItem.itemname}}</h1>\n\t\t\t\t<h3>Qunantities left: {{activeItem.quantity - activeItem.sellNO}}</h3>\n\t\t\t\t<h3>Price/LB: {{activeItem.price | currency : $}}</h3><br>\n\t\t\t\t<h3>Please input the quantity(s) you want to buy:</h3>\n\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"activeItem.sellNO\">\n\t\t\t\t<h4 *ngIf=\"activeItem.sellNO\">Your total price: \n\t\t\t\t\t<small>{{activeItem.sellNO * activeItem.price | currency : $}}\n\t\t\t\t\t</small>\n\t\t\t\t</h4>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-block btn-danger\">Add to Chat</button>\n\t\t\t\t\n\t\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [])
], ItemProfileComponent);
exports.ItemProfileComponent = ItemProfileComponent;
//# sourceMappingURL=item-profile.component.js.map