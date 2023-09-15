import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInputComponentComponent } from './my-input-component/my-input-component/my-input-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'input',
    component: MyInputComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
