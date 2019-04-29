import { Component, OnInit } from '@angular/core';
import { events } from '../interfaces/event';
import { EventServiceService } from '../services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {
  event:events={
    id:null,
    title: null,
    start_date: null,
    end_date: null,
    start_time: null,
    end_time:null,

  };

  eventos:events[];
  id:any;
  editing:boolean;
  constructor(private eventService: EventServiceService, private activateRoute:ActivatedRoute, private navegar:Router) { 
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.editing=true;
      this.eventService.get().subscribe((data:events[])=>{
        this.eventos=data;
        this.event=this.eventos.find((m)=>{return m.id==this.id});

      },(error)=>{
        console.log(error);
      })
    }
    else{
      this.editing=false;
    }
   }

  ngOnInit() {
  }

  saveEvent(){
    
    if (this.editing) {

      this.eventService.put(this.event).subscribe((datos)=>{
        console.log(datos);
        alert("Se editó de forma correcta");
      },(error)=>{
        console.log(error);
        alert("Ocurrio un error");
      })
      
    } else {
      this.eventService.save(this.event).subscribe((datos)=>{
        console.log(datos);
        alert("Se guardo de forma correcta");
        this.navegar.navigate(['home']);

      },(error)=>{
        console.log(error);
        alert("Ocurrio un error");
      });
    }




  }


}
