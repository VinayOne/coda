import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CommonService } from 'src/app/shared/common.service';
import { Reconciliation } from 'src/app/model/reconciliation';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  submitted = false;
  membersForm: FormGroup;
  memberSearchForm : FormGroup;
  
  constructor(private commonService:CommonService) { 
    this.mainForm(); 
    this.memberSearch();
   }

  ngOnInit(): void {
  }

  memberSearch(){
    this.memberSearchForm = new FormGroup({
      membersId: new FormControl('')
    })
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
    if (!this.memberSearchForm.valid) {
      return false;
    } else {
      let id = this.memberSearchForm.value.membersId;
      this.commonService.getMember(id).subscribe(data => {
        this.membersForm.setValue({
          userId: data.id,
          policyId: data.policyId,
          GroupId: data.GroupId,
          ssn: data.ssn,
          lastName: data.lastName,
          firstName: data.firstName,
          inNetworkDeductable: data.inNetworkDeductable,
          outNetworkDeductable: data.outNetworkDeductable,
          difference: data.difference,
        })
      }, (error) => {
        console.log(error)
      })
    }
  }

}
