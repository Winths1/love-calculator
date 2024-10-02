import { CanMatchFn } from '@angular/router';

export const resultIdMatchGuard: CanMatchFn = (route, segments) => {
  const id = segments[0];
  if (!id) return false;

  return /^[0-9]+$/.test(id.toString());
};
