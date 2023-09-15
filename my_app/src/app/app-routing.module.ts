import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInputComponentComponent } from 'src/my-input-component/my-input-component/my-input-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyInputComponentComponent,
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
