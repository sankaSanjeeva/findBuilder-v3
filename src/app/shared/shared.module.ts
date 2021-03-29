import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from './pipes';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, SearchPipe, FormsModule]
})
export class SharedModule { }
