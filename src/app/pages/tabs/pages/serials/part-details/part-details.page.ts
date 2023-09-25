import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.page.html',
  styleUrls: ['./part-details.page.scss'],
})
export class PartDetailsPage implements OnInit {
wordSelected:string;
segId:string="en"
  translate = "سلام من ترجمه هستم ";
  words="Hello, I am a translator"
  value;
  constructor() {}

  ngOnInit() {
    this.value = this.words.split(' ').map(t => {
      
      return '<span>' + t + '</span>'
    }).join(' ')
  }

  clickSpan(input , e:MouseEvent){

    if ((e.target as HTMLElement).tagName === 'SPAN') { 
      let target = e.target as HTMLElement;
      this.wordSelected=target.innerHTML
    
    }
  }



}
