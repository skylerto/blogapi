import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Posts } from './posts.component';
import { Navbar } from './navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


bootstrap(Navbar);
bootstrap(AppComponent, [ROUTER_DIRECTIVES]);
bootstrap(Posts, [HTTP_PROVIDERS, ROUTER_DIRECTIVES]);
