import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listof-student',
  templateUrl: './listof-student.component.html',
  styleUrls: ['./listof-student.component.css']
})
export class ListofStudentComponent implements OnInit{
  constructor(){ }
  ngOnInit(): void {
  }  
  students:any[]=[
    
      {
        id:6,
        name:'Monika',
        gender:'Female',
        contactVia: 'Email',
        dob:new Date('10,11,2023'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/f.jpeg'
      },{
        id:1,
        name:'dinesh',
        gender:'male',
        contactVia: 'Email',
        dob:new Date('10,11,2023'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/ran1.jpeg'
      },
      {
        id:2,
        name:'umesh',
        gender:'male',
        contactVia: 'Email',
        dob:new Date('10,1,2020'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/download2.jpeg'
      },
      {
        id:3,
        name:'sanjeet',
        gender:'male',
        contactVia: 'Email',
        dob:new Date('2,06,2023'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/download3.jpeg'
      },
      {
        id:4,
        name:'rakesh',
        gender:'male',
        contactVia: 'Email',
        dob:new Date('1,01,2023'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/download6.jpeg'
      },
      {
        id:5,
        name:'vijay',
        gender:'male',
        contactVia: 'Email',
        dob:new Date('10,12,2014'),
        department:'IT',
        isActive: true,
        photopath:'assets/images/download5.jpeg'
      },
    ];
}



