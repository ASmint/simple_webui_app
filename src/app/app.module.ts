import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksService } from './common/services/tasks.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WinAuthInterceptor } from './common/interceptors/winauth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WinAuthInterceptor,
      multi: true
    },
    TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
