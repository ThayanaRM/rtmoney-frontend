import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faMask,
  faSpinner,
  faHome,
  faPeopleCarry,
  faSign,
  faSignInAlt,
  faUser,
  faUserFriends,
  faTools,
  faTag
} from '@fortawesome/free-solid-svg-icons';
@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faMask,
      faSpinner,
      faHome,
      faPeopleCarry,
      faSign,
      faSignInAlt,
      faUser,
      faUserFriends,
      faTools,
      faTag
    );
  }
}
