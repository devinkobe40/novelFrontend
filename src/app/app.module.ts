import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

// COMPONENTS
import { HomepageComponent } from './homepage/homepage.component';
import { NovelInformationComponent } from './novel-information/novel-information.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { MessageComponent } from './message/message.component';
import { CircleComponent } from './circle/circle.component';
import { ProfileRegisterComponent } from './profile-register/profile-register.component';
import { HeaderComponent } from './header/header.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NovelInformationComponent,
    ProfileComponent,
    AboutComponent,
    MessageComponent,
    CircleComponent,
    WorksComponent,
    ProfileRegisterComponent,
    HeaderComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
  ],
  entryComponents: [
    ProfileRegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
