import {Component, Injectable, Input, OnInit, Optional} from '@angular/core';
import {Employee} from "./employee";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ObjectUtil} from "./ObjectUtil";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  employees: Employee[] | undefined;
  closeResult = '';
  employee: Employee = new Employee();
  @Input() formValue: Employee;


  employeeForm: FormGroup;


  constructor(private employeeService: EmployeeService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private http: HttpClient) {
  }



  ngOnInit() {
    this.getEmployees();
    this.formMaker();
    if(!ObjectUtil.isEmpty(this.formValue)){
      this.employee = this.formValue;
      this.formMaker();
    }
  }


  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

   getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
save(){
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((response)=>{
    this.modalService.dismissAll();
    })
}

edit(){

}
}
