import { Component,  DoCheck, OnInit, } from '@angular/core';
import { TankModel } from './tank/model';
import { ServiceGlobalService } from "./service-global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  tankOneData: TankModel = new TankModel();
  tankTwoData: TankModel = new TankModel();
  title = 'Tanks Buttle';
  constructor(
    private serv: ServiceGlobalService,
  ) {
    this.tankOneData = {
      id: 1,
      type: 'Tiger',
      description: 'Ready to War',
      health: 80,
      imgSrc: ('../assets/Tank1.png')
    };
    
    this.tankTwoData = {
      id: 2,
      type: 'T-90',
      description: 'Ready to War',
      health: 40,
      imgSrc: ('../assets/Tank2.png')
    };
  }

  ngOnInit(): void {
    this.serv.getCheakWin().subscribe(res => {      
      if(this.tankOneData.id === res['id']){
        this.tankTwoData.description = "THE WINNER !!!";
        this.title = this.tankTwoData.type
      } else  if (this.tankTwoData.id === res['id']) {
        this.tankOneData.description = "THE WINNER !!!";
        this.title = this.tankOneData.type
      }
    })
  }

  ngDoCheck(): void {
    // if(this.tankOneData.health <= 0){
    //   this.tankTwoData.description = "The WINNER !!"
    //   this.title = ('The Winner is ' + this.tankTwoData.type)
    // }
    // if(this.tankTwoData.health <= 0){
    //   this.tankOneData.description = "The WINNER !!"
    //   this.title =('The Winner is ' + this.tankOneData.type)
    // }  
  }
}
