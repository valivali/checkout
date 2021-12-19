import { Component, Input, OnInit } from '@angular/core';
import { ConfirmBoxResponse } from '@costlydeveloper/ngx-awesome-popup/ngx-awesome-popup/types/confirm-box/core/classes';
import { Purchase } from 'src/app/models/purchase';
import { Refund } from 'src/app/models/refund';
import { ServicesService } from 'src/app/services/communications.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-selected-summary',
  templateUrl: './selected-summary.component.html',
  styleUrls: ['./selected-summary.component.scss']
})
export class SelectedSummaryComponent implements OnInit {
  @Input() purchase!: Purchase;
  @Input() set selectedRefund(sr: Refund) {
    this.chosenRefund = sr;
    this.additionalAdjustment = (sr.bonus ? sr.bonus : (sr.fee ? sr.fee : (sr.name.indexOf('Donation') > -1 ? 5 : 0)));
    this.calculatedTotalPrice = this.purchase.totalAmount + (sr.name.indexOf('Donation') > -1 ? 5 : (sr.bonus ? sr.bonus * this.purchase.totalAmount / 100 : (sr.fee ? sr.fee * this.purchase.totalAmount * (-1)/ 100 : 0)));
  };

  chosenRefund!: Refund;
  additionalAdjustment: number = 0;
  calculatedTotalPrice: number = 0;

  constructor(private communicationService: ServicesService, private modalService: ModalsService) { }

  ngOnInit(): void {
  }

  submitRefundRequest() {
    this.modalService.openConfirmBox('Confirmation', 'Are you sure about the selected refund method?', 3);
    this.modalService.confirmBox.subscribe((res: ConfirmBoxResponse) => {
      if (res.Success) {
        this.communicationService.submitRefundRequest(this.purchase.id, this.chosenRefund);
      }
    });
  }

}
