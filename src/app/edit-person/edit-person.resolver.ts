import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../core/firebase.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class EditPersonResolver implements Resolve<any> {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let personId = route.paramMap.get('id');
      debugger
      this.firebaseService.getPerson(personId)
      .then(data => {
          data.id = personId;
          resolve({
            person: data
          })
      });
    })
  }
}
