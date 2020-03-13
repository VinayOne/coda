import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  submitted = false;
  membersForm: FormGroup;


  constructor(private commonService:CommonService) { this.mainForm(); }

  ngOnInit(): void {
  }

  mainForm() {
    this.membersForm = new FormGroup({
      userId : new FormControl(''),
      policyId : new FormControl(''),
      GroupId : new FormControl(''),
      ssn : new FormControl(''),
      lastName : new FormControl(''),
      firstName : new FormControl(''),
      inNetworkDeductable : new FormControl(''),
      outNetworkDeductable : new FormControl(''),
      difference : new FormControl(''),
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.membersForm.valid) {
      return false;
    } else {
      
    }
  }

}
