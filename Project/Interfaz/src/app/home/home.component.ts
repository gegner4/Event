import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { events } from '../interfaces/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myEvent:events[];

  constructor(private eventService: EventServiceService) { 
    this.getEvents();
  }


  filterDatos = '';


  getEvents(){
    this.eventService.get().subscribe((datos:events[])=>{
      this.myEvent=datos;
      },
      (error)=>{
        console.log(error);
        alert("Error al mostrar");
      }
      );
  }

  ngOnInit() {
  }

  delete(id){
    if(confirm("¿Seguro que desea eliminar este evento?")){
      this.eventService.delete(id).subscribe((data)=>{
        alert("Eliminado de forma correcto");
        this.getEvents();
      }, (error)=>{
        console.log(error);
  
      })

    }
   

  }

}
