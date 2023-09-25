import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.page.html',
  styleUrls: ['./part-details.page.scss'],
})
export class PartDetailsPage implements OnInit {

  translate = "سلام من ترجمه هستم ";
  words="Hello, I am a translator"
  value;
  constructor() { }

  ngOnInit() {
    this.value = this.translate.split(' ').map(t => {
      
      return '<span>' + t + '</span>'
    }).join(' ')
  }

  clickSpan(input , e:MouseEvent){

    if ((e.target as HTMLElement).tagName === 'SPAN') { 
      let target = e.target as HTMLElement;
      alert(target.innerHTML)
    }
  }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}
