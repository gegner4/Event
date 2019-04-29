import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEventComponent } from './form-event/form-event.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AlertModule,BsDropdownModule } from 'ngx-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';

const routes:Route[]=[
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'FormEvent', component:FormEventComponent},
  {path: 'FormEvent/:id', component:FormEventComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormEventComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
