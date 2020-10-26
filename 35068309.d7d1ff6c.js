(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),a=(n(0),n(151)),i={title:"Pagination"},s={unversionedId:"data/pagination",id:"data/pagination",isDocsHomePage:!1,title:"Pagination",description:"Sometimes, you will have one or more views in your application where you need to display a list that contains too much data to be either fetched or displayed at once. Pagination is the most common solution to this problem, and Apollo Client has built-in functionality that makes it quite easy to do.",source:"@site/docs/data/pagination.md",slug:"/data/pagination",permalink:"/docs/data/pagination",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/data/pagination.md",version:"current",sidebar:"docs",previous:{title:"Network layer",permalink:"/docs/data/network"},next:{title:"Using Fragments",permalink:"/docs/data/fragments"}},c=[{value:"Using <code>fetchMore</code>",id:"using-fetchmore",children:[]},{value:"Offset-based",id:"offset-based",children:[]},{value:"Cursor-based",id:"cursor-based",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sometimes, you will have one or more views in your application where you need to display a list that contains too much data to be either fetched or displayed at once. Pagination is the most common solution to this problem, and Apollo Client has built-in functionality that makes it quite easy to do."),Object(a.b)("p",null,"There are basically two ways of fetching paginated data: numbered pages, and cursors. There are also two ways for displaying paginated data: discrete pages, and infinite scrolling. For a more in-depth explanation of the difference and when you might want to use one vs. the other, we recommend that you read our blog post on the subject: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.apollographql.com/understanding-pagination-rest-graphql-and-relay-b10f835549e7"}),"Understanding Pagination"),"."),Object(a.b)("p",null,"In this article, we'll cover the technical details of using Apollo to implement both approaches."),Object(a.b)("h2",{id:"using-fetchmore"},"Using ",Object(a.b)("inlineCode",{parentName:"h2"},"fetchMore")),Object(a.b)("p",null,"Apollo lets you do pagination with a method called ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/caching/interaction#incremental-loading-fetchmore"}),Object(a.b)("inlineCode",{parentName:"a"},"fetchMore")),". You need to specify what query and variables to use for the update, and how to merge the new query result with the existing data on the client. How exactly you do that will determine what kind of pagination you are implementing."),Object(a.b)("h2",{id:"offset-based"},"Offset-based"),Object(a.b)("p",null,"Offset based pagination - also called numbered pages - is a very common pattern, found on many websites, because it is usually the easiest to implement on the backend. In SQL for example, numbered pages can easily be generated by using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/8.2/static/queries-limit.html"}),"OFFSET and LIMIT"),"."),Object(a.b)("p",null,"Here is an example with numbered pages taken from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/apollographql/githunt-angular"}),"GitHunt"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { Apollo, QueryRef, gql } from 'apollo-angular';\n\nconst feedQuery = gql`\n  query Feed($type: FeedType!, $offset: Int, $limit: Int) {\n    currentUser {\n      login\n    }\n    feed(type: $type, offset: $offset, limit: $limit) {\n      id\n      # ...\n    }\n  }\n`;\n\n@Component({ ... })\nclass FeedComponent implements OnInit {\n  apollo: Apollo;\n  feedQuery: QueryRef<any>;\n  feed: any[];\n  type: string;\n  itemsPerPage: number = 10;\n\n  ngOnInit() {\n    this.feedQuery = this.apollo.watchQuery<any>({\n      query: feedQuery,\n      variables: {\n        type: this.type,\n        offset: 0,\n        limit: this.itemsPerPage,\n      },\n      fetchPolicy: 'network-only',\n    });\n\n    this.feed = this.feedQuery\n      .valueChanges\n      .subscribe(({data}) => {\n        this.feed = data.feed;\n      });\n  }\n\n  fetchMore() {\n    this.feedQuery.fetchMore({\n      // query: ... (you can specify a different query. feedQuery is used by default)\n      variables: {\n        offset: this.feed.length,\n      },\n      // We are able to figure out which offset to use because it matches\n      // the feed length, but we could also use state, or the previous\n      // variables to calculate this (see the cursor example below)\n      updateQuery: (prev, { fetchMoreResult }) => {\n        if (!fetchMoreResult) { return prev; }\n        return Object.assign({}, prev, {\n          feed: [...prev.feed, ...fetchMoreResult.feed],\n        });\n      },\n    });\n  }\n}\n")),Object(a.b)("p",null,"As you can see, ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," is accessible through the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryRef")," object."),Object(a.b)("p",null,"In the example above, ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," is a function which calls ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," with the length of the current feed as a variable. Whenever you don't pass a query argument to ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore"),", fetch more will use the original ",Object(a.b)("inlineCode",{parentName:"p"},"query")," again with new variables. Once the new data is returned from the server, the ",Object(a.b)("inlineCode",{parentName:"p"},"updateQuery")," function is used to merge it with the existing data, which will cause a re-render of your UI component."),Object(a.b)("p",null,"In the example above, the ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," function is called from the UI component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<loading *ngIf="loading"></loading>\n<div *ngIf="!loading">\n  <feed-entry\n    *ngFor="let entry of feed"\n    [entry]="entry"\n    [currentUser]="currentUser"\n    (onVote)="onVote($event)">\n  </feed-entry>\n\n  <a (click)="fetchMore()">Load more</a>\n\n</div>\n')),Object(a.b)("p",null,"One downside of pagination with numbered pages or offsets is that an item can be skipped or returned twice when items are inserted into or removed from the list at the same time. That can be avoided with cursor-based pagination."),Object(a.b)("h2",{id:"cursor-based"},"Cursor-based"),Object(a.b)("p",null,"In cursor-based pagination a cursor is used to keep track of where in the data set the next items should be fetched from. Sometimes the cursor can be quite simple and just refer to the ID of the last object fetched, but in some cases - for example lists sorted according to some criteria - the cursor needs to encode the sorting criteria in addition to the ID of the last object fetched. Cursor-based pagination isn't all that different from offset-based pagination, but instead of using an absolute offset, it points to the last object fetched and contains information about the sort order used. Because it doesn't use an absolute offset, it is more suitable for frequently changing datasets than offset-based pagination."),Object(a.b)("p",null,"In the example below, we use a ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," query to continuously load new comments, which then appear at the top. The cursor to be used in the ",Object(a.b)("inlineCode",{parentName:"p"},"fetchMore")," query is provided in the initial server response, and has to be updated whenever more data is fetched."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const moreComments = gql`\n  query moreComments($cursor: String) {\n    moreComments(cursor: $cursor) {\n      cursor\n      comments {\n        author\n        text\n      }\n    }\n  }\n`;\n\nclass FeedComponent {\n  feedQuery: QueryRef<any>;\n\n  static cursor: any;\n\n  // ...\n  fetchMore() {\n    this.feedQuery.fetchMore({\n      query: moreComments,\n      variables: {\n        // cursor is the initial cursor returned by the original query\n        // this.cursor is the cursor that we update via `updateQuery` below\n        cursor: FeedComponent.cursor,\n      },\n      // We are able to figure out which offset to use because it matches\n      // the feed length, but we could also use state, or the previous\n      // variables to calculate this (see the cursor example below)\n      updateQuery: (prev, { fetchMoreResult }) => {\n        const previousEntry = previousResult.entry;\n        const newComments = fetchMoreResult.comments.nextComments;\n\n        // update internal reference to cursor\n        FeedComponent.cursor = fetchMoreResult.cursor;\n\n        return {\n          title: previousEntry.title,\n          author: previousEntry.author,\n          // put promoted comments in front\n          comments: [...newComments, ...previousEntry.comments],\n        };\n      },\n    });\n  }\n  // ...\n}\n")))}u.isMDXComponent=!0}}]);