import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog, SnackbarComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatRadioModule, MatSelectModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { MatCheckboxModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatProgressSpinnerModule, MatDividerModule } from '@angular/material';
import { MatProgressBarModule, MatRippleModule, MatExpansionModule, MatGridListModule, MatListModule } from '@angular/material';
import { MatStepperModule, MatTabsModule, MatTreeModule, MatBottomSheetModule, MatSnackBarModule } from '@angular/material';
import { MatDialogModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [BottomSheetOverviewExampleSheet],
  entryComponents: [AppComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog, SnackbarComponent]
})
export class AppModule { }
