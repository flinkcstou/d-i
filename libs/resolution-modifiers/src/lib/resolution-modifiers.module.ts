import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { HostComponent } from './host/host.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostDirective } from './host/host.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ResolutionModifiersComponent],
  declarations: [
    ResolutionModifiersComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
    HostDirective
  ],
  bootstrap: [ResolutionModifiersComponent],
})
export class ResolutionModifiersModule {
}
