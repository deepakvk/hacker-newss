import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
  
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  exports:[
   MatPaginatorModule
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
	MatTableModule,
	MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [NewsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
