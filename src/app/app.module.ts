import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessageService } from './services/message.service';

const appRoutes: Routes = [
  { path: '', component: FeatureComponent },
  { path: 'dashboard', component: DashboardComponent },
];
@NgModule({
  declarations: [AppComponent, FeatureComponent, DashboardComponent],
  imports: [
    BrowserModule,
    FomanticUIModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
