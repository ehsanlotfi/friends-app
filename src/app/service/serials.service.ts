import { Injectable } from '@angular/core';
import { IPartsSerials, ISerials } from '../models/serials.model';

@Injectable({
  providedIn: 'root'
})
export class SerialsService {

  constructor() { }
  listSerials: Array<ISerials> = [
    {
      id: '1',
      name: 'fsdf',
      img: 's1.jpg',
      title: 'sdfsdfsdfsdf',
      content: 'xsdfa',
      date: 'jun'
    },
    {
      id: '2',
      name: 'awedqwe',
      img: 's2.jpg',
      title: 'sdfsdfsdsgfdtghjhdfsdf',
      content: 'zxcvzxcasdfsd',
      date: 'jun'
    },
    {
      id: '3',
      name: 'cvcx',
      img: 's3.jpg',
      title: 'sdfsdfsdsgfdtghjhdfsdf',
      content: '',
      date: 'jun'
    },
    {
      id: '4',
      name: 'zDXczXc',
      img: 's4.jpg',
      title: 'sdfsdfsdsgfdtghjhdfsdf',
      content: '',
      date: 'jun'
    }
  ];

  listPartOfSerials: Array<IPartsSerials> = [
    {
      pId: '1',
      id: '1',
      img: 's1.jpg',
      season: 'فصل:1',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '2',
      img: 's1.jpg',
      season: 'فصل:2',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '3',
      img: 's1.jpg',
      season: 'فصل:3',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '4',
      img: 's1.jpg',
      season: 'فصل:4',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '5',
      img: 's1.jpg',
      season: 'فصل:5',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '6',
      img: 's1.jpg',
      season: 'فصل:6',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '7',
      img: 's1.jpg',
      season: 'فصل:7',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '8',
      img: 's1.jpg',
      season: 'فصل:8',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    },
    {
      pId: '1',
      id: '9',
      img: 's1.jpg',
      season: 'فصل:9',
      title: 'دورهمی دوستان',
      publishDate: '24 سپتامبر 1994',
    }

  ]
  getAllSerials(): Array<ISerials> {
    return this.listSerials;
  }
  getSerialsById(id:string): ISerials {
    return this.listSerials.find(f=>f.id==id);
  }
  getAllPartOfSerials(pId:string): Array<IPartsSerials> {
    return this.listPartOfSerials.filter(f=>f.pId==pId);;
  }

  getPartsDetailsOfSerials(id: string) {

  }

}
