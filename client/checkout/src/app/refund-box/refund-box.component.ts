import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from '../models/purchase';
import { Refund } from '../models/refund';

@Component({
  selector: 'app-refund-box',
  templateUrl: './refund-box.component.html',
  styleUrls: ['./refund-box.component.scss']
})
export class RefundBoxComponent implements OnInit {

  @Input() refundOptions!: Refund[];
  @Input() purchase!: Purchase;
  selectedRefund!: Refund;

  constructor() { }

  ngOnInit(): void {
    this.selectedRefund = this.refundOptions[0];
  }

  markSelected(selected: Refund) {
    this.selectedRefund = selected;
  }
}
