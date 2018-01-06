import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { StorageService } from './../services/storage.service';

@Injectable()
export class IsNotLogged implements CanActivate {

    constructor(
        private router: Router,
        private storageService: StorageService
    ) {}

    canActivate() {
        const isNotLogged = !this.storageService.get('user_id');

        if (isNotLogged) {
            return true;
        } else {
            this.router.navigateByUrl('landing');
        }
    }
}