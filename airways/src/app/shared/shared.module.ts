import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconLabelComponent } from './components/icon-label/icon-label.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { AirportsFormComponent } from './components/airports-form/airports-form.component';
import { AirportsFilterPipe } from '@main/pipes/airports-filter.pipe';
import { DateFormComponent } from './components/date-form/date-form.component';

@NgModule({
  declarations: [
    IconLabelComponent,
    AirportsFormComponent,
    AirportsFilterPipe,
    DateFormComponent,
  ],
  imports: [
    MatDividerModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatStepperModule,
    FormsModule,
  ],
  exports: [
    MatDividerModule,
    IconLabelComponent,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatStepperModule,
    AirportsFormComponent,
    DateFormComponent,
  ],
})
export class SharedModule {}
