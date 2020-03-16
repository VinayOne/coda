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

  jsonData: any = [
    {'id': 11111, 'policyId': 12345, 'GroupId': 12345, 'ssn': 12345, 'lastName': 'Doe', firstName: 'John', 'inNetworkDeductable': 100, 'outNetworkDeductable': 200, 'difference': 100 },
    {'id': 22222, 'policyId': 12345, 'GroupId': 12345, 'ssn': 12345, 'lastName': 'Smith', firstName: 'Jon', 'inNetworkDeductable': 200, 'outNetworkDeductable': 100, 'difference': 200 }
  ]

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
      //const result = this.jsonData.filter((item) => {
      //  item.userId == this.memberSearchForm.value.membersId;
      //})

      this.membersForm.setValue({
        userId: this.memberSearchForm.value.membersId,
        policyId: '',
        GroupId: '',
        ssn: '',
        lastName: '',
        firstName: '',
        inNetworkDeductable: '',
        outNetworkDeductable: '',
        difference: '',
      })
       console.log(this.membersForm.value.userId);

    }
  }

}
