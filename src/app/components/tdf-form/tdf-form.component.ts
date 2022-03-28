import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { Registration } from 'src/app/data/registration';
import {NgbDateStruct, NgbCalendar, NgbDatepicker,NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import { CompileShallowModuleMetadata } from '@angular/compiler';
//date
// @Injectable()
// export class CustomAdapter extends NgbDateAdapter<string> {

//   readonly DELIMITER = '-';

//   fromModel(value: string | null): NgbDateStruct | null {

//     let temp=10;
//     if (value) {
//       let date = value.split(this.DELIMITER);
//       switch(date[1]){
//         case "Jan":{
//           temp=1;
//           break;
//         }
//         case "Feb":{
//           temp=2;
//           break;
//         }
//         case "Mar":{
//           temp=3;
//           break;
//         }
//         case "Apr":{
//           temp=4;
//           break;
//         }
//         case "May":{
//           temp=5;
//           break;
//         }
//         case "Jun":{
//           temp=6;
//           break;
//         }
//         case "Jul":{
//           temp=7;
//           break;
//         }
//         case "Aug":{
//           temp=8;
//           break;
//         }
//         case "Sep":{
//           temp=9;
//           break;
//         }
//         case "Oct":{
//           temp=10;
//           break;
//         }
//         case "Nov":{
//           temp=11;
//           break;
//         }
//         default:{
//           temp=12;
//           break;
//         }
//       }

//       return {
//         day : parseInt(date[0], 10),
//         month : temp,
//         year : parseInt(date[2], 10)
//       };
//     }
//     return null;
//   }

//   toModel(date: NgbDateStruct | null): string | null {
//     let temp:any;

//     let ans=date ? new DatePipe('en-US').transform(new Date(Date.UTC(date?.year,date?.month-1,date?.day,0,0,0)),'dd/MMM/yyyy'):null;
//     alert(ans+"date returned");
//     temp=date?.month;
//     let mon="";
//     switch(temp)
//     {
//       case 1:{
//         mon="Jan";
//         break;
//       }
//       case 2:{
//         mon="Feb";
//         break;
//       }
//       case 3:{
//         mon="Mar";
//         break;
//       }
//       case 4:{
//         mon="Apr";
//         break;
//       }
//       case 5:{
//         mon="May";
//         break;
//       }
//       case 6:{
//         mon="Jun";
//         break;
//       }
//       case 7:{
//         mon="Jul";
//         break;
//       }
//       case 8:{
//         mon="Aug";
//         break;
//       }
//       case 9:{
//         mon="Sep";
//         break;
//       }
//       case 10:{
//         mon="Oct";
//         break;
//       }
//       case 11:{
//         mon="Nov";
//         break;
//       }
//       default:{
//         mon="Dec";
//         break;
//       }
//     }
//     //return ans ? ans : null;
//     return date ? date.day + this.DELIMITER + mon + this.DELIMITER + date.year : null;
//   }
// }

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string{
    let ans=date ? new DatePipe('en-US').transform(new Date(Date.UTC(date?.year,date?.month-1,date?.day,0,0,0)),'dd/MMM/yyyy'):null;
    console.log(ans);
    return ans ? ans: '';
  }
}

@Component({
  selector: 'app-tdf-form',
  templateUrl: './tdf-form.component.html',
  styleUrls: ['./tdf-form.component.css'],
  providers: [

    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class TdfFormComponent implements OnInit {


  //create data model for forms
  //data folder created ..it will contain interface
  //create file registration.ts


  //include the interfave here
  //create data model for forms
  //data folder created ..it will contain interface
  //create file registration.ts
  //include the interfave here

  //set default values
  /*
  registration: Registration={
    name:"suhan",
    notifications:null,
    gender:"Male",   //value in radio button has value="Male" so here also make M capital
    subscription:"Annual",
    notes:"some notes",
    date:"24/04/1998",
    password:"hello"
  };
  */
  //obj of Regist.
  //create data model for forms
  //data folder created ..it will contain interface
  //create file registration.ts
  //include the interfave here
  //create data model for forms
  //data folder created ..it will contain interface
  //create file registration.ts
  //include the interfave here
  //set default values
  /*
  registration: Registration={
    name:"suhan",
    notifications:null,
    gender:"Male",   //value in radio button has value="Male" so here also make M capital
    subscription:"Annual",
    notes:"some notes",
    date:"24/04/1998",
    password:"hello"
  };
  */
  //obj of Regist.
  datePick!: NgbDateStruct;
  final:any;
  model2!: string;
  model!: NgbDateStruct;
  registration: Registration = {
    name: null,
    notifications: null,
    gender: null,   //value in radio button has value="Male" so here also make M capital
    subscription: null,
    notes: null,
    date: null,
    password: null
  };
  public errorList=["hi","how"];
public temp="hello ";
imageSteps=["biometeric data","personal","authenticity"];

  constructor(private dataService: DataService,private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log('onSubmit', form.valid); //in console returns onsubmit false if form is invalid
    //if form valid then sub,it form


    console.log("date submitted",this.model2);
    //after completing all the frm validations  u need to post data
    //inside data folder create a service
    //subscribe the service and access its m/d also inject the service

    this.dataService.postRegistrationForm(this.registration).subscribe(
      data => {
        console.log("successfully submitted", data);
      },
      error => {
        console.log("some error incurred", error);
      }
    );

  }

  onDateSelect(event:any)
  {
    let year =event.year;
    let month=event.month;
    let day=event.day;
     this.final =year+"-"+month;
  }
  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }


}
