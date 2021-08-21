  export interface Store {
    currentPage:number;
    feeds:NewsFeed[];
  }
  
  export interface News {
    readonly id:number;
    readonly time_ago:string;
    readonly title:string;
    readonly url:string;
    readonly user:string;
    readonly content:string,
  }
  
  export interface NewsFeed extends News {
    readonly comments_count:number;
    readonly points:number;
    read?:boolean;
  }
  
  export interface NewsDetail extends News {
    readonly comments: NewsComments[];
  }
  
  export interface NewsComments extends News {
    readonly comments:NewsComments[],
    readonly level:number
  }
  
  export interface RouteInfo{
    path:string;
    page:View;
  }
