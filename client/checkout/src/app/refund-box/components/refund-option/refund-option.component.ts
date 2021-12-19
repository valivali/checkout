import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Constants from 'src/app/Constants';
import { Purchase } from 'src/app/models/purchase';
import { Refund } from 'src/app/models/refund';
import * as _ from 'lodash';

@Component({
  selector: 'app-refund-option',
  templateUrl: './refund-option.component.html',
  styleUrls: ['./refund-option.component.scss']
})
export class RefundOptionComponent implements OnInit {

  @Input() groupName!: string;
  @Input() purchase!: Purchase;
  @Input() refund!: Refund;
  @Input() selected!: Refund;
  @Input() index!: number;
  @Output() selectedOption: EventEmitter<Refund> = new EventEmitter();
  
  calculatedRefund: any = {};
  
  constructor() { }
  
  ngOnInit(): void {
    const i = _.toUpper(this.refund.name.split(' ')[0]);
    this.calculatedRefund.price = this.purchase.totalAmount + (this.refund.bonus ? this.refund.bonus * this.purchase.totalAmount / 100 : (this.refund.fee ? this.refund.fee * this.purchase.totalAmount * (-1)/ 100 : 0));
    this.calculatedRefund.subtitle = this.refund.bonus ? `${this.refund.bonus}% Bonus` : (this.refund.fee ? `${this.refund.fee}% Fee` : (this.refund.name.indexOf('Standard') > -1 ? 'Original payment method' : 'American Red Cross'));
    this.calculatedRefund.icon = Constants.ICONS;
    this.calculatedRefund.icon = this.calculatedRefund.icon[i] || Constants.ICONS.DEFAULT;
    this.calculatedRefund.selected = this.selected.name === this.refund.name;
    this.calculatedRefund = {...this.calculatedRefund, ...this.refund};
  }

  selectOption() {
    this.selectedOption.emit(this.refund);
  }
}
