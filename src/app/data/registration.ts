export interface Registration{
  name:string|null,
  notifications:boolean|null,
  gender:string|null,
  subscription:string|null,
  notes:string|null,
  date:string|null,
  password:string|null

}
//name of variables should match with form
//null also adde so that to string we can assign both string and null without any error
