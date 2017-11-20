import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Cloudinary } from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';

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
import { JourneysService } from './shared/services/journeys.service';
import { IsLogged } from './shared/global/isLogged';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { JourneyCardComponent } from './journey-card/journey-card.component';
import { ImageService } from './shared/services/image.service';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';
import { JourneyResolver } from './shared/services/journey.resolve';


const cloudConfig = {
  cloud_name: 'dzgtgeotp'
};

const cloudinaryLib = {
  Cloudinary: Cloudinary
};

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
    FooterComponent,
    AuthComponent,
    ModalComponent,
    ProfileComponent
  ],
  imports: [
    CloudinaryModule.forRoot(cloudinaryLib, cloudConfig),
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhZGyLlNuhBWwniCdhzckmou_2hRFkcpI'
    }),
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
    IsLogged,
    JourneyResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
