import { Component, OnInit } from '@angular/core';
import { Purchase } from './models/purchase';
import { Refund } from './models/refund';
import { ServicesService } from './services/communications.service';
import * as _ from 'lodash';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'checkout';
  refundOptionList: Refund[] = [];
  purchaseToRefund: any = {};
  headPhonesIcon = faHeadphonesAlt;

  constructor(private communicationService: ServicesService) {}
  
  async ngOnInit(): Promise<any> {
    this.communicationService.refundOptionList.subscribe((refundData: any) => {
      this.refundOptionList = refundData.refundMethods?.map((rm: Refund) => ({...rm, name: _.startCase(rm.name)}) );
      this.purchaseToRefund = refundData.refund;
      console.log(this.refundOptionList);
    });
    this.communicationService.getRefundOptions();
  }
}
