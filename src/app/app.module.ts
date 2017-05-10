import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VisModule } from 'ng2-vis';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TreeComponent } from './tree/tree.component';
import { TreeLoaderComponent } from './tree-loader/tree-loader.component';
import { TreeProviderService } from './tree-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeLoaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    VisModule,
    HttpModule
  ],
  providers: [TreeProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
