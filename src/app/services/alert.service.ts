import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: ToastrService) { }


  public showSuccess(title : string, desc : string): void {
    this.toastrService.success(desc, title);
  }

  public showInfo(title : string, desc : string): void {
    this.toastrService.info(desc, title);
  }

  public showWarning(title : string, desc : string): void {
    this.toastrService.warning(desc, title);
  }

  public showError(title : string, desc : string): void {
    this.toastrService.error(desc, title);
  }
}
