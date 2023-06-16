import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, FormStyle } from '@angular/common';
import{ FormsModule, ReactiveFormsModule, Validators }from'@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { CrimsComponent } from './crims/crims.component';
import { DocmentsComponent } from './docments/docments.component';
import { WebcamModule } from 'ngx-webcam';
import { LowComponent } from './low/low.component';
import { NotfondpageComponent } from './notfondpage/notfondpage.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule}from'@angular/common/http';
import { PageserveciseComponent } from './pageservecise/pageservecise.component';
import { PageaimsComponent } from './pageaims/pageaims.component';
import { PagecreatorComponent } from './pagecreator/pagecreator.component';
import { PageaboutcontainerComponent } from './pageaboutcontainer/pageaboutcontainer.component';
import { SlicationPipe } from './slication.pipe';
import { CriminalservicesComponent } from './criminalservices/criminalservices.component';
import { RealestateservicesComponent } from './realestateservices/realestateservices.component';
import { LostsComponent } from './losts/losts.component';
import { LostedpeobleComponent } from './lostedpeoble/lostedpeoble.component';
import { LostedoneComponent } from './lostedone/lostedone.component';
import { SearchPipe } from './search.pipe';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { SuccessprocessComponent } from './successprocess/successprocess.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgwWowModule } from 'ngx-wow';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CamComponent } from './cam/cam.component';
import { LostedOneDetailsComponent } from './losted-one-details/losted-one-details.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLostedComponent } from './user-losted/user-losted.component';
import { LostedObjectsComponent } from './losted-objects/losted-objects.component';
import { LostedObectedFormComponent } from './losted-obected-form/losted-obected-form.component';
import { LostedObectedPageComponent } from './losted-obected-page/losted-obected-page.component';
import { UserobjectsComponent } from './userobjects/userobjects.component';
import { CriminalanalogyComponent } from './criminalanalogy/criminalanalogy.component';
import { PoliceReportsComponent } from './police-reports/police-reports.component';
import { CarReportComponent } from './car-report/car-report.component';
import { MobileReportComponent } from './mobile-report/mobile-report.component';
import { ObjectsReportComponent } from './objects-report/objects-report.component';
import { UserCrimrinalAnalogComponent } from './user-crimrinal-analog/user-crimrinal-analog.component';
import { UserMobileRebortComponent } from './user-mobile-rebort/user-mobile-rebort.component';
import { UserCarsRebortComponent } from './user-cars-rebort/user-cars-rebort.component';
import { UserLostsRebortComponent } from './user-losts-rebort/user-losts-rebort.component';
import { UserObjectRebortComponent } from './user-object-rebort/user-object-rebort.component';
import { RebortComponent } from './rebort/rebort.component';
import { MohamedComponent } from './mohamed/mohamed.component';
import { ObjectsPipe } from './objects.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactusComponent,
    ServicesComponent,
    CrimsComponent,
    DocmentsComponent,
    LowComponent,
    NotfondpageComponent,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    ComplaintsComponent,
    RegisterComponent,
    PageserveciseComponent,
    PageaimsComponent,
    PagecreatorComponent,
    PageaboutcontainerComponent,
    SlicationPipe,
    CriminalservicesComponent,
    RealestateservicesComponent,
    LostsComponent,
    LostedpeobleComponent,
    LostedoneComponent,
    SearchPipe,
    AdddetailsComponent,
    SuccessprocessComponent,
    CamComponent,
    LostedOneDetailsComponent,
    UserPageComponent,
    UserLostedComponent,
    LostedObjectsComponent,
    LostedObectedFormComponent,
    LostedObectedPageComponent,
    UserobjectsComponent,
    CriminalanalogyComponent,
    PoliceReportsComponent,
    CarReportComponent,
    MobileReportComponent,
    ObjectsReportComponent,
    UserCrimrinalAnalogComponent,
    UserMobileRebortComponent,
    UserCarsRebortComponent,
    UserLostsRebortComponent,
    UserObjectRebortComponent,
    RebortComponent,
    MohamedComponent,
    ObjectsPipe,
    WelcomeComponent,
    
    
  ],
  imports: [
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule, 
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgwWowModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    CarouselModule,
    WebcamModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
