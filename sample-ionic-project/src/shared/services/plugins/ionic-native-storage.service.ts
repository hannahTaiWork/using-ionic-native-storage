import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Subject, Observable } from 'rxjs';

export enum IonicNativeStorageKeys {
    SAVED_NAME,
}

@Injectable({
    providedIn: 'root'
})
export class IonicNativeStorageService {

    savedNameSubject: Subject<string>;
    savedName$: Observable<string>;

    constructor(private nativeStorage: NativeStorage) {
        this.savedNameSubject = new Subject<string>();
        this.savedName$ = this.savedNameSubject.asObservable();
    }

    setSavedNameData(value: string) {
        this.setData(IonicNativeStorageKeys.SAVED_NAME, value).then(x => {
            this.savedNameSubject.next(x);
        });
    }

    getSavedNameData() {
        this.getData(IonicNativeStorageKeys.SAVED_NAME).then(x => {
            this.savedNameSubject.next(x);
        });
        return this.savedName$;
    }

    async setData(key: IonicNativeStorageKeys, value: any) {
        const keyName = IonicNativeStorageKeys[key];
        this.nativeStorage.setItem(keyName, value)
            .then(
                () => console.log(`You set key=${keyName} in the ionic storage. Value=${JSON.stringify(value)}`),
                error => console.error('Error setitem', error)
            );
        return value;
    }

    async getData(key: IonicNativeStorageKeys) {
        const keyName = IonicNativeStorageKeys[key];
        return this.nativeStorage.getItem(keyName)
            .then(
                val => {
                    console.log(`You got key=${keyName} from the ionic storage. Value=${JSON.stringify(val)}`);
                    return val;
                },
                error => console.error('Error getitem', error)
            );
    }

}
