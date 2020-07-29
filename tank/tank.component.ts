import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { TankModel } from './model';
import { ServiceGlobalService } from "../service-global.service";

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})

export class TankComponent implements OnInit, DoCheck {
  @Input() tank: TankModel;
  shoterTank;
  hasWin = false;

  constructor(
    private serv: ServiceGlobalService,
  ) {
   }

  ngOnInit(): void {
    console.log(this.tank)
    this.serv.getPopupSource().subscribe( result => {
      if(this.tank.id != result.id){
        if(result) {
          this.tank.health -= result.value;
        }
      }
    });
  }

  ngDoCheck(): void {    
    if(this.tank.health <= 0){      
     this.findWinner() 
    }    
  }

  shoot() {
    this.serv.popup({
      id: this.tank.id,
      value: Math.round(Math.random() * 10)
    });


    // this.serv.sbjCheakWin
  }

  findWinner() {
    this.tank.description = "The Looser !";
    this.tank.health = 0;

    this.hasWin = true;

    this.serv.sbjCheak({
      id: this.tank.id,
      type: this.tank.type,
      description: this.tank.description ,
      health: this.tank.health,
      imgSrc: this.tank.imgSrc
    })
  }

  supperShoot() {
    this.serv.popup({
      id: this.tank.id,
      value: 20,
    });
  }

  giveHelth() {
    this.tank.health += 10;
  }
}