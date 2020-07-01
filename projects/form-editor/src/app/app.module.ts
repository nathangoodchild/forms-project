import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormViewModule, FormViewService } from 'form-view';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEditorContainerComponent } from './components/form-editor-container/form-editor-container.component';
import { ReferenceDataService } from './services/reference-data.service';
import { FormEditorComponent } from './components/form-editor/form-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEditorContainerComponent,
    FormEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormViewModule,
  ],
  providers: [ReferenceDataService, FormViewService],
  bootstrap: [AppComponent],
})
export class AppModule {}
