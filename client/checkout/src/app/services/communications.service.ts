import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import myConfig from '../Constants';
import { BehaviorSubject } from 'rxjs';
import { Refund } from '../models/refund';
import { ModalsService } from './modals.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private refundsSubject$ = new BehaviorSubject<Refund[]>([]);
  refundOptionList = this.refundsSubject$.asObservable();

  constructor(private http: HttpClient, private modalService: ModalsService) { }

  getRefundOptions() {
    this.http.get(`${myConfig.SERVER_URL}/api/getCheckoutDetails`).subscribe((res: any) => {
      this.refundsSubject$.next(res);
    });
  }

  submitRefundRequest(purchase_id: string, data: any) {
    this.http.post(`${myConfig.SERVER_URL}/api/refundRequestSubmission/${purchase_id}`, data).subscribe((res: any) => {
      this.modalService.fireToastNotification('Wanted to let you know', 'Refund request submitted successfully.', 1);
    });
  }
}
