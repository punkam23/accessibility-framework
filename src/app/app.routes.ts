import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PricingComponent} from './pricing/pricing.component';
import {FeaturesComponent} from './features/features.component';

export const routes: Routes = [
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '', redirectTo: '/features', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
