import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ISerials } from 'src/app/models/serials.model';
import { SerialsService } from 'src/app/service/serials.service';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.page.html',
  styleUrls: ['./serials.page.scss'],
})
export class SerialsPage implements OnInit {
listSerials:Array<ISerials>=new Array<ISerials>()
  constructor(private service:SerialsService,
    private nav: NavController,
    ) { }

  ngOnInit() {
    this.listSerials=this.service.getAllSerials();
  }
  goToDetails(id:string){
 
    this.nav.navigateForward(['tabs/tabs/serials/serial-details',id]);
  }

}
