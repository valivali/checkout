import { Injectable } from '@angular/core';
import { ConfirmBoxInitializer, ToastNotificationInitializer, ToastProgressBarEnum } from '@costlydeveloper/ngx-awesome-popup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  confirmBox: Observable<any> = new Observable();
  toastNotification: Observable<any> = new Observable();

  constructor() { }

  openConfirmBox(title: string = '', message: string = '', type: number = 0, animation_in:any = 'zoomIn', animation_out:any = 'zoomOut') {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle(title);
    newConfirmBox.setMessage(message);

    newConfirmBox.setConfig({
      LayoutType: type, // DialogLayoutDisplay.INFO -SUCCESS - 1 | INFO - 2 | NONE - 0 | DANGER - 4 | WARNING - 3
      AnimationIn: animation_in, // AppearanceAnimation.ZOOM_IN - BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      AnimationOut: animation_out // DisappearanceAnimation.ZOOM_OUT - BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    });

    this.confirmBox = newConfirmBox.openConfirmBox$();
  }

  fireToastNotification(title: string = '', message: string = '', type: number = 0) {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle(title);
    newToastNotification.setMessage(message);

    newToastNotification.setConfig({
        LayoutType: type, // LayoutDisplay.WARNING - SUCCESS - 1 | INFO - 2 | NONE - 0 | DANGER - 4 | WARNING - 5
        AutoCloseDelay: 10000,
        ProgressBar: ToastProgressBarEnum.DECREASE
    });

    this.toastNotification = newToastNotification.openToastNotification$();
  }
}
