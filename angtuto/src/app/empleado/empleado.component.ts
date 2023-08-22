import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>aqui va un empelado!</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Ruben";
  apellido="Silva";
  edad=25;
  empresa="Softek"
  constructor(){}

  ngOnInit(): void {
      
  }
}
