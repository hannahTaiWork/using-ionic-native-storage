# Using Ionic Native Storage
A brief note for using Ionic Native Storage.

## Before You Start
Make sure your Ionic project could run on browser and emulator.
- Run `ionic serve`
- Run `ionic cap run android -l --external`. (Run `ionic build` at least once before.)
- Run `ionic cap run ios -l`. (Run `ionic build` at least once before.)

## Install
- cd to [sample-ionic-project].
- Run `ionic cordova plugin add cordova-plugin-nativestorage`.
- Run `npm install @ionic-native/native-storage`.

## Register
- Open [sample-ionic-project/src/app/app.module.ts].
- `import { NativeStorage } from '@ionic-native/native-storage/ngx';`.
- Add `NativeStorage` in providers.

## Usage
- `import { NativeStorage } from '@ionic-native/native-storage/ngx';`.
- `constructor(private nativeStorage: NativeStorage) { }`.
- Call NativeStorage's method.
  ```
  this.nativeStorage.setItem('SAVED_NAME', 'Vivian')
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

  this.nativeStorage.getItem('SAVED_NAME')
  .then(
    data => console.log(data),
    error => console.error(error)
  );
  ```

## Find Stored Datas
### Android
- In Android Studio's Device File Explorer, open [/data/data/<*appId*>/shared_prefs/NativeStorage.xml].
- The stored item and value saved as key-value pairs in the xml file.
  ```
  <?xml version='1.0' encoding='utf-8' standalone='yes' ?>
  <map>
      <string name="SAVED_NAME">"Vivian"</string>
  </map>
  ```
### iOS
- When running on Xcode, the first line in console output shows something like below. It helps identifying device and application's UUID.
  ```
  2020-02-20 15:09:30.894036+0800 App[46739:596680] DiskCookieStorage changing policy from 2 to 0, cookie file: file:///Users/<user>/Library/Developer/CoreSimulator/Devices/<Device UUID>/data/Containers/Data/Application/<Application UUID>/Library/Cookies/<appId>.binarycookies
  ```
- Open [~/Library/Developer/CoreSimulator/Devices/<*Device UUID*>/data/Containers/Data/Application/<*Application UUID*>/Library/Preferences/<*appId*>.plist].
- The stored item and value saved as key-value pairs in the plist file.

### Web
- Cordova plugin NativeStorage on browser support is only for testing purposes.

## Run on Capacitor
- Run `ionic cap sync` to add the plugin.
- Run `ionic serve`.
- Run `ionic cap run android -l --external`.
- Run `ionic cap run ios -l`.

# Download this project
- cd to [sample-ionic-project].
- `npm i`.
- `ionic build`.
- Run `ionic cap add android` and `ionic cap add ios`.
- Run `ionic serve`, `ionic cap run android -l --external`, `ionic cap run ios -l`.