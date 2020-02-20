import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IonicNativeStorageService } from '../../shared/services/plugins/ionic-native-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private ionicNativeStorageService: IonicNativeStorageService) { }

  savedName$: Observable<string>;

  ngOnInit() {
    this.savedName$ = this.ionicNativeStorageService.getSavedNameData();
  }

  onBtnClick(insertedName: string) {
    this.ionicNativeStorageService.setSavedNameData(insertedName);
  }

}
