import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrestaPipe} from './src/presta.pipe';
import {PrestaService} from './src/presta.service';
import {PrestaConfiguration} from './src/presta.interfaces';
import {PrestaImage} from './src/presta.components';

export * from './src/presta.pipe';
export * from './src/presta.service';
export * from './src/presta.interfaces';
export * from './src/presta.components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrestaPipe,
    PrestaImage
  ],
  exports: [
    PrestaPipe,
    PrestaImage
  ]
})
export class PrestaModule {
  static forRoot(prestaConfiguration: PrestaConfiguration): ModuleWithProviders {
    return {
      ngModule: PrestaModule,
      providers: [
        PrestaService,
        {provide: 'prestaConfiguration', useValue: prestaConfiguration}
      ]
    };
  }
}
