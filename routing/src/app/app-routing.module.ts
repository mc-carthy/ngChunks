import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },
    ] },
    // { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
        { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    // { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'page-not-found', component: ErrorPageComponent, data: { message: 'Page not found!'} },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        
        // Only to be used if we cannot configure our server
        // to return our index.html page in the event of a 404
        // RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}