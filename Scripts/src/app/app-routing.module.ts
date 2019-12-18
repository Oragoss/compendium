import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CollectionNewComponent } from './collection-new/collection-new.component';
import { ItemNewComponent } from './item-new/item-new.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'collections', component: CollectionComponent},
  {path: 'collectionnew', component: CollectionNewComponent},
  {path: 'collection/:id', component: CollectionDetailComponent},
  {path: 'collection/:id/item/:id', component: ItemComponent},
  {path: 'collection/:id/itemnew', component: ItemNewComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  IndexComponent,
  CollectionComponent,
  CollectionDetailComponent,
  CollectionNewComponent,
  ItemComponent,
  ItemNewComponent,
  PageNotFoundComponent
];