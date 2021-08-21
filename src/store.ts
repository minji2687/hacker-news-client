import {NewsFeed} from './types';

class Store{

    private feeds:NewsFeed[];
    private _currentPage:number;

    constructor(){
        this.feeds = [];
        this._currentPage = 1
    }

    get currentPage(){
        return this._currentPage;
    }

    set currentPage(page:number){
        if(page <= 0) return;
        this._currentPage = page
    }

    get nextPage():number{
        return this._currentPage + 1 
    }

    get prevPage():number{
        return this._currentPage > 1 ? this.currentPage - 1 : 1
    }

    get numberOfFeed(){
        return this.feeds.length;
    }

    get hasFeed():boolean{
        return this.feeds.length > 0 
    }

    getAllFeeds():NewsFeed[]{
        return this.feeds;
    }

    getFeed(position:number){
        return this.feeds[position]
    }
 
    setFeeds(feeds:NewsFeed[]):void{
        this.feeds = feeds.map(feed => {
            return { 
                ...feed,
                read:false
                }
            }
        )
    }
    makeRead(id:number){
        const feed = this.feeds.find((feed:NewsFeed) => feed.id === id)
        if(feed){
            feed.read = true
        }
    }

}