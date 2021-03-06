import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent implements OnInit {

  constructor(private afs: AngularFirestore,private toastr: ToastrService) { }
  usersAddForm = new FormGroup({
    UserName: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    Confirm_Password: new FormControl('',Validators.required),     
  });

  onClick(formData){
    this.afs.collection('OtherUsers/').add({
      password: formData.Password ,
      userName:formData.UserName,
      userType: 0
    }).then( res => { 
      this.toastr.success("Succesfully Submitted!");
    }, err=> {
      console.log(err);
    });
    
 }
  ngOnInit() {
  }

}
