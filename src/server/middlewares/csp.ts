import {RequestHandler} from 'express';
import {DATA, expressCspHeader, INLINE, SELF, EVAL} from 'express-csp-header';


export const cspHeader: RequestHandler = expressCspHeader({
  directives: {
    'default-src': [SELF, 'https://ya-praktikum.tech'],
    'script-src': [SELF, INLINE, EVAL, 'https://ya-praktikum.tech'],
    'style-src': [SELF, INLINE, 'https://fonts.googleapis.com'],
    'font-src': [SELF, 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
    'img-src': [SELF, INLINE, DATA, 'https://ya-praktikum.tech'],
    'worker-src': [SELF, 'https://ya-praktikum.tech'],
  }
});
