import {
  QueryClient,
  provideTanStackQuery,
} from '@tanstack/angular-query-experimental'
import type { Route } from '@angular/router'

export const routes: Array<Route> = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./components/basic-devtools-panel-example.component'),
    providers: [provideTanStackQuery(new QueryClient())],
  },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./components/lazy-load-devtools-panel-example.component'),
    providers: [provideTanStackQuery(new QueryClient())],
  },
]
