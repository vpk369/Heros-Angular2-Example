import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';


import { InnerComponentDataBinding } from './parent-child/inner';
import { OuterComponentDataBinding2 } from './parent-child/outer';


import {ChildSiblingComponent} from './siblings/child-sibling.component'
import {ChildComponent} from './siblings/child.component'
import {ParentComponent} from './siblings/parent.component'
import {SharedService} from './siblings/shared.service'

import { OrderBy }    from './orderBy.pipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    InnerComponentDataBinding,
    OuterComponentDataBinding2,
    ParentComponent,
    ChildComponent,
    ChildSiblingComponent,
    
    OrderBy
  ],
  providers: [ HeroService, SharedService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
