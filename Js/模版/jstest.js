var rule={     
    title:'320影视',
    //host:'https://www.xdn8.com',
    host:'https://www.yucjit.org',
    //host:'https://320m.com',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    //class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
    //cate_exclude:'演员',
    class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧',
    class_url:'1&2&3&4&34&13&14&16&15',  
    推荐:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    一级:'.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    //二级:{"title":"h1&&Text;","img":".lazyload&&data-original","desc":";;.module-info-item:eq(4) p&&Text;.module-info-item:eq(3) div&&Text;.module-info-item:eq(1) a&&Text","content":".show-desc&&Text","tabs":'#y-playList&&span',"lists":".module-play-list:eq(#id) a"},     
    二级:{"title":"h1&&Text;.module-info-tag-link:eq(2)&&Text","img":".lazyload&&data-original","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text;.module-info-content&&.module-info-item:eq(1)&&.module-info-item-content&&Text","content":".module-info-introduction-content&&Text","tabs":".module-tab-items-box:eq(0)&&.module-tab-item","lists":".module-list:eq(#id)&&.module-play-list-content a"}, 
    搜索:'.module-card-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href', 
}
