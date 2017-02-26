import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent
  }
];

export const routing = RouterModule.forRoot(routes);
