import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FolderServiceService } from '../../../stockage/folder/service/folder-service.service';
import { Stockage_folder } from '../../../stockage/models/stockage_folder';

@Component({
  selector: 'app-stockage-home',
  templateUrl: './stockage-home.component.html',
  styleUrls: ['./stockage-home.component.scss']
})
export class StockageHomeComponent implements OnInit {

  @Input() currentUser !: User;
  stockage_folder: Stockage_folder[] = [];


  constructor(
    private stockageFolderService: FolderServiceService,

  ) { }

  ngOnInit(): void {
    this.getAllFolder();

  }

  getAllFolder() {
    setTimeout(() => {
      this.stockageFolderService.getAll(this.currentUser.id_user).subscribe(resp => {
        this.stockage_folder = resp;
      });
    }, 200);
  }
}
