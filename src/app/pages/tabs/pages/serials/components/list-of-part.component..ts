import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IPartsSerials, ISerials } from 'src/app/models/serials.model';
import { SerialsService } from 'src/app/service/serials.service';

@Component({
  selector: 'app-list-of-part',
  templateUrl: './list-of-part.component.html',
  styleUrls: ['./list-of-part.component.scss']
})
export class listOfPartComponent {
  listParts:Array<IPartsSerials>=[];
  serialId:string;
  constructor(
    private service:SerialsService,
    private nav: NavController,
  ) {
   }
@Input() set pId(id:string){
  
  if(id){
    this.listParts= this.service.getAllPartOfSerials(id);
    this.serialId=id;
  }
//this.service.
}
goToPartDetails(id:string){
 
  this.nav.navigateForward(['tabs/tabs/serials/part-details',this.serialId,id]);
}


}
