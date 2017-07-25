import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { DemoComponent } from './demo/demo.component';
import { CallsComponent } from './calls/calls.component'

const arr : Routes = [
    {path:'' , redirectTo:'demo',pathMatch:'full'},
    {path:'demo', component:DemoComponent},
    {path:'product', component:FirstComponent},
    {path:'calls', component:CallsComponent}
];

export const routing = RouterModule.forRoot(arr);