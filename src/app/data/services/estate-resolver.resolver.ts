import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Estate } from '../models/estate.model';
import { EstateService } from './estate.service';

@Injectable({
    providedIn: 'root'
})
export class EstateResolver implements Resolve<Estate> {

    constructor(private estateService: EstateService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.estateService.findById(route.params.id);
    }
}