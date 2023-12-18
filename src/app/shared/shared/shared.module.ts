import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular/ui/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSidenavModule,
    DxButtonModule,
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class SharedModule { }
export class AppModule { }

