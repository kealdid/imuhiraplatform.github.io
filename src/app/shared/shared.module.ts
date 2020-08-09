import { NgModule } from '@angular/core';
import{ FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatListModule, MatToolbarModule, MatDividerModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
