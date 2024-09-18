import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {RootContentModule} from '../../../../libs/custom-d-i/src/lib/issues/root-content/root-content.module';
import {TodoSelectModule} from '@d-i/custom-d-i';
import {ProvidersViewprovidersModule} from '@d-i/providers-viewproviders';
import {HierarchicalDIModule} from '@d-i/hierarchical-d-i';
import {DIInActionModule} from '@d-i/d-i-in-action';
import {ReferenceModule} from '@d-i/ref';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*    CustomDIModule,
        CustomDIModule.forRoot(),
        CustomDIModule.forChild(),*/
    // BookPaperParentModule,
    // SelectModule,
    // TodoSelectModule,
    // BookPaperBackModule,
    // BookPaperGrandModule,
    // BookPaperParentContentModule,
    // AbstractFactoryPatternModule,
    // DIForwardRefModule,
    // ComponentSelectorModule,
    RootContentModule,
    TodoSelectModule,
    ProvidersViewprovidersModule,
    HierarchicalDIModule,
    DIInActionModule,
    ReferenceModule,
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
