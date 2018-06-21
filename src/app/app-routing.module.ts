import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actu', component: NewsComponent },
  { path: 'ajouter-livre', component: BookAddComponent},
  { path: 'mes-livres', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
