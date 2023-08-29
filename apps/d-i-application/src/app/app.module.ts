import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HierarchicalDIModule } from '@d-i/hierarchical-d-i';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    // DIInAngularModule,
    // ResolutionModifiersModule,
    // ProvidersViewprovidersModule,
    HierarchicalDIModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
