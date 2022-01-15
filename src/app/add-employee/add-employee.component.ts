import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {ObjectUtil} from "../ObjectUtil";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:  FormGroup;
  employee= new Employee();
  employees: any
  @Input() formValue: Employee;
  constructor(private router: ActivatedRoute,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formMaker();
    if(!ObjectUtil.isEmpty(this.formValue)){
      this.employee = this.formValue;
      this.formMaker();
    }
    this.employeeService.getData(this.router.snapshot.params.id,).subscribe((response)=>{
      console.log(response)
      this.employeeForm = new FormGroup({
        name: new FormControl(response['name']),
        email: new FormControl(response['email']),
        phone: new FormControl(response['phone']),
        jobTitle: new FormControl(response['jobTitle']),
      })

    })

  }
save(){
  this.employeeService.getCurrentDate(this.employeeForm.value,this.router.snapshot.params.id ).subscribe((response)=>{
    console.log('updated value',response)
  })
}
  onSubmit(){
    this.employee.name= this.employeeForm.get('name')?.value;
    this.employee.email= this.employeeForm.get('email')?.value;
    this.employee.phone= this.employeeForm.get('phone')?.value;
    this.employee.jobTitle= this.employeeForm.get('jobTitle')?.value;
    this.employee.imageUrl = this.employeeForm.get('imageUrl')?.value;
  }
  formMaker(){
    this.employeeForm = this.formBuilder.group({
      name: [undefined],
      phone: [undefined],
      email: [undefined],
      jobTitle: [undefined],
      imageUrl: [undefined]
    })
  }

}
