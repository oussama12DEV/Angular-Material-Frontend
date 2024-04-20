import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit ,AfterViewInit{

  public students:any;
  public datasource : any;
  public displayedColumns =["id","firstname","lastname","payment"];
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
 constructor(private router :Router) {
 }
  ngOnInit(): void {
    this.students=[];
    for(let i:number = 1;i<100;i++) {
      this.students.push({
        id : i,
        FirsTname : Math.random().toString(20),
        LasTname : Math.random().toString(20),

      });
    }
    this.datasource = new MatTableDataSource(this.students)
  }
  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;

  }


  searchstudent(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.datasource.filter = value;
  }

  getpayment(element:any) {
    this.router.navigateByUrl("/payement")
  }
}
