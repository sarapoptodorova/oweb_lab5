import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';
import { Course, suzi } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(){}

  
  @Input()

 indeks:number=0;

 @Input()
 crs:Course=suzi;

 @Output('suzi')
 cuci=new EventEmitter<Course>();
onClick(){
  this.cuci.emit(this.crs);
}

  ngOnInit(){

  }

  onCrsViewed()
  {
    console.log("kart element");
  }
  klasi(){
    if(this.crs.category=="BEGINNER") return "beginner";
    else if(this.crs.category=="INTERMEDIATE") return "intermediate";
    else if(this.crs.category=="ADVANCED") return "advanced";
    else return "begin";
  }
}
