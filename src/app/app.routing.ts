import { RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { JourneysComponent } from './journeys/journeys.component';
import { JourneyComponent } from './journey/journey.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { IsLogged } from './shared/global/isLogged';
import { JourneyResolver } from './shared/services/journey.resolve';
import { ImagesResolver } from './shared/services/images.resolve';
import { RegisterComponent } from './register/register.component';
import { FavouriteImagesResolver } from './shared/services/favouriteImages.resolve';

export const routing = RouterModule.forRoot([

    { path: '', redirectTo: 'journeys', pathMatch: 'full' },
    { path: 'landing', component: HomeComponent },
    { path: 'authorize', component: AuthComponent },
    {
        path: 'favourite',
        component: GalleryComponent,
        canActivate: [IsLogged],
        resolve: { images: FavouriteImagesResolver }
    },
    { path: 'journeys', component: JourneysComponent, canActivate: [IsLogged] },
    {
        path: 'journeys/:id', component: JourneyComponent,
        resolve: { journey: JourneyResolver, images: ImagesResolver },
        canActivate: [IsLogged]
    },
    { path: 'about', component: AboutComponent, canActivate: [IsLogged] },
    { path: 'profile', component: ProfileComponent, canActivate: [IsLogged]},
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'journeys' }

]);
