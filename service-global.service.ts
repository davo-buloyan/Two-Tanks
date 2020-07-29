import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceGlobalService {
  isShoot: false;
  sbj = new BehaviorSubject<number>(0);
  
  constructor() { }
  popupSource = new BehaviorSubject<any>('');
  popup(component) {
    this.popupSource.next(component);
  }  
 

  sbjCheakWin = new BehaviorSubject<object>({
    id: 0,
      type: 'Sil',
      description: 'Ready to War',
      health: 80,
      imgSrc: ('../assets/Tank1.png')    
  });
  sbjCheak(component){
    this.sbjCheakWin.next(component)
  }

  getPopupSource() { return this.popupSource.asObservable() }
  getCheakWin() {return this.sbjCheakWin.asObservable()}


}
