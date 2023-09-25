import { Component, Input } from '@angular/core';
import { IPartsSerials, ISerials } from 'src/app/models/serials.model';
import { SerialsService } from 'src/app/service/serials.service';

@Component({
  selector: 'app-list-of-part',
  templateUrl: './list-of-part.component.html',
  styleUrls: ['./list-of-part.component.scss']
})
export class listOfPartComponent {
  listParts:Array<IPartsSerials>=[];
  constructor(
    private service:SerialsService,
  ) {
   }
@Input() set pId(id:string){
  
  if(id){
    this.listParts= this.service.getAllPartOfSerials(id)
  }
//this.service.
}



}
