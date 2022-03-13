import { NgModule } from '@angular/core';
import { RegistrationComponent } from './components/regsitration/regsitration.component';
import { RegistrationRoutingModule } from './regsitration.routes';

@NgModule({
  declarations: [RegistrationComponent],
  providers: [],
  imports: [RegistrationRoutingModule],
})
export class RegistrationModule {}
