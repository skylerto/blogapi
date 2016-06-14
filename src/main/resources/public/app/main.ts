import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Posts } from './posts.component';

bootstrap(AppComponent);
bootstrap(Posts, [HTTP_PROVIDERS]);
