import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { events } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  
  API_ENDPOINT= 'http://127.0.0.1:8000/api';

  constructor(private httpCliente:HttpClient) { }
get(){
  return this.httpCliente.get(this.API_ENDPOINT+'/events');
}
  save(event:events){
    //Header es para peticiones post
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpCliente.post(this.API_ENDPOINT+"/events", event,{headers:headers});


  }

  put(event){
    //Header es para peticiones post
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpCliente.put(this.API_ENDPOINT+"/events/"+event.id, event,{headers:headers});


  }

  delete(id){
    return this.httpCliente.delete(this.API_ENDPOINT+'/events/'+id);
  }

}

