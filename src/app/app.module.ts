import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';

import { AppComponent } from './app.component';
import { JourneysComponent } from './journeys/journeys.component';
import { JourneyComponent } from './journey/journey.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { StorageService } from './shared/services/storage.service';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { JourneysService } from './journeys/journeys.service';
import { IsLogged } from './shared/global/isLogged';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { JourneyCardComponent } from './journey-card/journey-card.component';
import { ImageService } from './shared/services/image.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneysComponent,
    JourneyComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    LoginComponent,
    PolaroidComponent,
    JourneyCardComponent,
    FooterComponent
  ],
  imports: [
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dzgtgeotp'}),
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    StorageService,
    UserService,
    JourneysService,
    ImageService,
    IsLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
