import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { LightnerService } from 'src/app/services/lightner.service';

@Component({
  selector: 'app-lightner',
  templateUrl: './lightner.page.html',
  styleUrls: ['./lightner.page.scss'],
})
export class LightnerPage implements OnInit {
listWord=[];
  constructor(  private lightnerService:LightnerService) { }

  ngOnInit() {
    
this.lightnerService.getListLightner().then(list=>{
  this.listWord=list;
});

  }

}
