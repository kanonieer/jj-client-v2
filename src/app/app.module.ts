import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Cloudinary } from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ModalPolaroidComponent } from './modal-polaroid/modal-polaroid.component';
import { RegisterComponent } from './register/register.component';
import { ImagesResolver } from './shared/services/images.resolve';
import { FbService } from './shared/services/fb.service';
import { MapComponent } from './map/map.component';
import { FavouriteImagesResolver } from './shared/services/favouriteImages.resolve';


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
    ProfileComponent,
    ModalPolaroidComponent,
    RegisterComponent,
    MapComponent
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
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center'
    })
  ],
  providers: [
    AuthService,
    StorageService,
    UserService,
    JourneysService,
    ImageService,
    FbService,
    IsLogged,
    JourneyResolver,
    ImagesResolver,
    FavouriteImagesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
