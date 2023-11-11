import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListofStudentComponent } from './listof-student/listof-student.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'list',component:ListofStudentComponent},
  {path:'home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'create',component:CreateStudentComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'',redirectTo:'list',pathMatch:'full'} // if you dont click so automatically show bydefaults list only
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
