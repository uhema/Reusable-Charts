import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { MainRoute } from './Routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './Services/userdata.service';
import { UserlistpageComponent } from './userlistpage/userlistpage.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdataComponent } from './userdata/userdata.component';
import { ListService } from './Services/list.service';
import { ValidatorComponent } from './validator/validator.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductService } from './Services/product.service';
import { ChartsComponent } from './charts/charts.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserlistpageComponent,
    FormComponent,
    UserdataComponent,
    ValidatorComponent,
    LoginpageComponent,
    ChartsComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(MainRoute),
    HttpClientModule,
    ChartsModule

   
  ],
  exports: [ ChartsModule],
  providers: [ UserdataService,
  ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
