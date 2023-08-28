import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ResolutionModifiersModule } from '@d-i/resolution-modifiers';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    // ProvidersViewprovidersModule,
    // HierarchicalDIModule,
    // DIInAngularModule,
    ResolutionModifiersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
