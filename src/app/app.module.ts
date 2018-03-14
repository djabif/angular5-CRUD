import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { EditPersonResolver } from './edit-person/edit-person.resolver';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './core/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatIconModule, MatSliderModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPersonComponent,
    AvatarDialogComponent,
    EditPersonComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSliderModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [FirebaseService, EditPersonResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
