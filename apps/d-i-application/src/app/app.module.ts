import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BookPaperParentModule, CustomDIModule } from '@d-i/custom-d-i';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    CustomDIModule,
    CustomDIModule.forRoot(),
    CustomDIModule.forChild(),
    BookPaperParentModule,
    // DIInAngularModule,
    // ResolutionModifiersModule,
    // ProvidersViewprovidersModule,
    // HierarchicalDIModule,
    // DIInActionModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
