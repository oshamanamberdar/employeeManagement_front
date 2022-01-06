import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
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

public onOpenModel(employee: Employee, mode: string): void{
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none'
    button.setAttribute('data-toggle','model');
    if(mode === 'add') {
      button.setAttribute('data-target', 'addEmployeeModal')
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', 'addEmployeeModal')
    }
  if(mode === 'delete'){
    button.setAttribute('data-target', 'addEmployeeModal')
  }
}
}
