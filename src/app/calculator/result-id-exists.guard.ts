import { CanActivateFn, Router } from '@angular/router';
import { LoveService } from '../love.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const resultIdExistsGuard: CanActivateFn = (route, state) => {
  const {id} = route.params

  const service = inject(LoveService)
  const router = inject(Router)

  // const result = service.get(id)
  // if (!result) return router.createUrlTree(['/'])
  // return true;

  return service.get(id).pipe(
    map(
      res => {
        console.log(res);

        return true
      }
    ),
    catchError( err => {
      console.error(err);
      return of(router.createUrlTree(['/']))
    })
  );
};
