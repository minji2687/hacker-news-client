
// import Store from './store';

import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types'

const store = new Store();

declare global{
  interface window{
    store : Store;
  }
}


const router :Router = new Router()
const newsFeedView = new NewsFeedView('root',store);
const newsDetailView = new NewsDetailView('root',store);


router.setDefaultPage(newsFeedView)
router.addRoutePath('/page/',newsFeedView, /page\/(\d+)/)
router.addRoutePath('/show/',newsDetailView, /show\/(\d+)/)

router.go()




