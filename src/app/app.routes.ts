import { Routes } from '@angular/router';
import { SettingsComponent } from './home/settings/settings.component';
import { TodoComponent } from './home/todo/todo.component';
import { WorkingComponent } from './home/working/working.component';
import { CompleteComponent } from './home/complete/complete.component';
import { authGuard } from './services/user/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo', // Redirect to the 'todo' route if URL is empty
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate:[authGuard],
    children: [
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'todo',
        component: TodoComponent,
      },
      {
        path: 'working',
        component: WorkingComponent,
      },
      {
        path: 'complete',
        component: CompleteComponent
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  }
];