import { NgModule } from '@angular/core';
import { RegistrationComponent } from './components/regsitration/regsitration.component';
import { RegistrationRoutingModule } from './regsitration.routes';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './containers/create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegistrationComponent,CreateAccountComponent],
  providers: [],
  imports: [RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class RegistrationModule {}
