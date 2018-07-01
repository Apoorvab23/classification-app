import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { FilterPipe } from './filter-pipe';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ClassificationItemService } from './ClassificationItem.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClassificationItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
