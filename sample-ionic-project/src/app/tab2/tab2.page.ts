import { Component, OnInit } from '@angular/core';
import { IonicNativeStorageService } from 'src/shared/services/plugins/ionic-native-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private ionicNativeStorageService: IonicNativeStorageService) { }

  savedName$: Observable<string>;

  ngOnInit() {
    this.savedName$ = this.ionicNativeStorageService.getSavedNameData();
  }

}
