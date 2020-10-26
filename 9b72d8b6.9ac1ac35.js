(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(i,".").concat(d)]||p[d]||l[d]||r;return n?a.a.createElement(b,s(s({ref:t},m),{},{components:n})):a.a.createElement(b,s({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),r=(n(0),n(151)),i={title:"Optimistic UI"},s={unversionedId:"features/optimistic-ui",id:"version-1.0/features/optimistic-ui",isDocsHomePage:!1,title:"Optimistic UI",description:"As explained in the mutations section, optimistic UI is a pattern that you can use to simulate the results of a mutation and update the UI even before receiving a response from the server. Once the response is received from the server, optimistic result is thrown away and replaced with the actual result.",source:"@site/versioned_docs/version-1.0/features/optimistic-ui.md",slug:"/features/optimistic-ui",permalink:"/docs/1.0/features/optimistic-ui",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/features/optimistic-ui.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Direct Cache Access",permalink:"/docs/1.0/features/caching"},next:{title:"Updating the Store",permalink:"/docs/1.0/features/cache-updates"}},c=[{value:"Basic optimistic UI",id:"basic-optimistic-ui",children:[]},{value:"Adding to a list",id:"adding-to-a-list",children:[]}],m={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As explained in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.0/basics/mutations#optimistic-ui"}),"mutations")," section, optimistic UI is a pattern that you can use to simulate the results of a mutation and update the UI even before receiving a response from the server. Once the response is received from the server, optimistic result is thrown away and replaced with the actual result."),Object(r.b)("p",null,"Optimistic UI provides an easy way to make your UI respond much faster, while ensuring that the data becomes consistent with the actual response when it arrives."),Object(r.b)("h2",{id:"basic-optimistic-ui"},"Basic optimistic UI"),Object(r.b)("p",null,'Let\'s say we have an "edit comment" mutation, and we want the UI to update immediately when the user submits the mutation, instead of waiting for the server response. This is what the ',Object(r.b)("inlineCode",{parentName:"p"},"optimisticResponse")," parameter to the ",Object(r.b)("inlineCode",{parentName:"p"},"mutate")," method provides."),Object(r.b)("p",null,"The main way to get GraphQL data into your UI components with Apollo is to use a query, so if we want our optimistic response to update the UI, we have to make sure to return an optimistic response that will update the correct query result. Learn more about how to do this with the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.0/features/cache-updates#normalization-with-dataidfromobject"}),Object(r.b)("inlineCode",{parentName:"a"},"dataIdFromObject"))," option."),Object(r.b)("p",null,"Here's what this looks like in the code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"\nconst updateComment = gql`\n  mutation updateComment($commentId: ID!, $commentContent: String!) {\n    updateComment(commentId: $commentId, commentContent: $commentContent) {\n      id\n      __typename\n      content\n    }\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  submit({ commentId, commentContent }) {\n    this.apollo.mutate({\n      variables: { commentId, commentContent },\n      optimisticResponse: {\n        __typename: 'Mutation',\n        updateComment: {\n          id: commentId,\n          __typename: 'Comment',\n          content: commentContent,\n        },\n      },\n    }).subscribe();\n  }\n}\n")),Object(r.b)("p",null,"We select ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," because that's what our ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," uses to determine a globally unique object ID. We need to make sure to provide the right values for those fields, so that Apollo knows what object we are referring to."),Object(r.b)("h2",{id:"adding-to-a-list"},"Adding to a list"),Object(r.b)("p",null,"In the example above, we showed how to seamlessly edit an existing object in the store with an optimistic mutation result. However, many mutations don't just update an existing object in the store, but they insert a new one."),Object(r.b)("p",null,"In that case we need to specify how to integrate the new data into existing queries, and thus our UI. You can read in detail about how to do that in the article about ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.0/features/cache-updates"}),"controlling the store"),"--in particular, we can use the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," method to insert a result into an existing query's result set. ",Object(r.b)("inlineCode",{parentName:"p"},"update")," works exactly the same way for optimistic results and the real results returned from the server."),Object(r.b)("p",null,"Here is a concrete example from GitHunt, which inserts a comment into an existing list of comments."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import CommentAppQuery from '../queries/CommentAppQuery';\n\nconst SUBMIT_COMMENT_MUTATION = gql`\n  mutation submitComment($repoFullName: String!, $commentContent: String!) {\n    submitComment(repoFullName: $repoFullName, commentContent: $commentContent) {\n      postedBy {\n        login\n        html_url\n      }\n      createdAt\n      content\n    }\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  submit({ repoFullName, commentContent }) {\n    this.apollo.mutate({\n      variables: { repoFullName, commentContent },\n      optimisticResponse: {\n        __typename: 'Mutation',\n        submitComment: {\n          __typename: 'Comment',\n          postedBy: ownProps.currentUser,\n          createdAt: +new Date,\n          content: commentContent,\n        },\n      },\n      update: (proxy, { data: { submitComment } }) => {\n        // Read the data from our cache for this query.\n        const data = proxy.readQuery({ query: CommentAppQuery });\n        // Add our comment from the mutation to the end.\n        data.comments.push(submitComment);\n        // Write our data back to the cache.\n        proxy.writeQuery({ query: CommentAppQuery, data });\n      },\n    }).subscribe();\n  }\n}\n")))}u.isMDXComponent=!0}}]);