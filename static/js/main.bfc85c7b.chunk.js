(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{77:function(e,t,a){e.exports=a(89)},82:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/parallax.3e6de7d1.jpg"},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),o=(a(82),a(16)),l=a(51),m=a(11),s=a(10);function d(e){var t=e.id,a=e.itemName,n=e.itemDescription,c=e.imgUrl,r=e.setSelected,o=e.gf,l=e.v,m=e.featured,d=(e.sectionId,e.theme);return i.a.createElement(s.c.li,{className:"card ".concat(d),onClick:function(){r(t)},layoutId:"cardlist",key:"card-".concat(t)},i.a.createElement("div",{className:"card-content-container"},i.a.createElement(s.c.div,{className:"card-content",layoutId:"card-container-".concat(t)},i.a.createElement(s.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(t)},i.a.createElement("img",{className:"card-image",src:c,alt:""})),i.a.createElement(s.c.div,{className:"title-container",layoutId:"title-container-".concat(t)},i.a.createElement("div",null,i.a.createElement("h2",null,a),i.a.createElement("span",{className:"category"},n)),i.a.createElement("div",{className:"tags"},o?i.a.createElement("span",{className:"gluten-free"},"GF"):"",l?i.a.createElement("span",{className:"vegan"},"V"):"",m?i.a.createElement("span",{className:"featured"},"Featured"):"")))))}function u(e){var t=e.items,a=e.setSelected,n=e.selectedId,c=e.sectionId;return i.a.createElement("ul",{className:"card-list"},0!=c?t.map((function(e,t){return!e.featured&&e.section===c&&i.a.createElement(d,Object.assign({key:"".concat(c,"-").concat(t)},e,{setSelected:a,selectedId:n,sectionId:c,layout:!0}))})):t.map((function(e,t){return e.featured&&i.a.createElement(d,Object.assign({key:"featured-".concat(t)},e,{setSelected:a,selectedId:n,sectionId:c,layout:!0}))})))}var p=a(26),A=a(131),g=a(61),E=a.n(g),h=a(62),k=a.n(h),S=a(126),f=a(132),v=a(133),B=a(125),C=a(129),U=a(134),w=a(130);function x(e){var t=e.items,a=e.id,n=e.setSelected,c=e.sections,r=e.handleEditItem,l=e.handleDeleteItem,d=i.a.useState(t.find((function(e){return e.id===a}))),u=Object(o.a)(d,2),g=u[0],h=u[1],x=function(e){var t=e.target,a=t.value,n=t.name;h(Object(m.a)({},g,Object(p.a)({},n,a)))},I=function(e){h(Object(m.a)({},g,Object(p.a)({},e.target.name,e.target.checked)))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},style:{pointerEvents:"auto"},className:"overlay"},i.a.createElement("a",{onClick:function(){return n(null)}})),i.a.createElement("div",{className:"card-content-container open"},i.a.createElement(s.c.div,{className:"card-content",layoutId:"card-container-".concat(a)},i.a.createElement(s.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(a)},i.a.createElement("img",{className:"card-image",src:g.imgUrl,alt:""})),i.a.createElement(s.c.div,{className:"title-container",layoutId:"title-container-".concat(a)}),i.a.createElement(s.c.div,{className:"content-container",animate:!0},i.a.createElement("div",{className:"title-inputs"},i.a.createElement(A.a,{value:g.itemName,name:"itemName",label:"Name",variant:"standard",onChange:x}),i.a.createElement(A.a,{value:g.itemPrice?g.itemPrice:"",name:"itemPrice",onChange:x,label:"Price",variant:"standard"})),i.a.createElement(A.a,{value:g.itemDescription,name:"itemDescription",multiline:!0,rows:4,onChange:x,label:"Description",variant:"standard"}),i.a.createElement("div",{className:"title-inputs"},i.a.createElement("div",{className:"title-inputs column wide"},i.a.createElement(B.a,{className:"sections-select"},i.a.createElement(f.a,{id:"demo-simple-select-label"},"Menu Section"),i.a.createElement(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c.length>0?g.section:"",onChange:x,name:"section",variant:"standard"},c.map((function(e,t){return i.a.createElement(v.a,{value:e.id,key:e.id},e.name)})))),i.a.createElement(A.a,{value:g.imgUrl,name:"imgUrl",onChange:x,label:"Image Url",variant:"standard"})),i.a.createElement("div",{className:"title-inputs column"},i.a.createElement(U.a,{control:i.a.createElement(w.a,{checked:g.gf,onChange:I,name:"gf",color:"primary"}),label:"Gluten free"}),i.a.createElement(U.a,{control:i.a.createElement(w.a,{checked:g.v,onChange:I,name:"v",color:"primary"}),label:"Vegan"}),i.a.createElement(U.a,{control:i.a.createElement(w.a,{checked:g.featured,onChange:I,name:"featured",color:"primary"}),label:"Featured"}))),i.a.createElement("div",{className:"card-buttons"},i.a.createElement(S.a,{variant:"extended",color:"primary",onClick:function(){r(g),n(null)}},i.a.createElement("span",null,"Confirm",i.a.createElement("span",{className:"hidden-sm"}," edits"))),i.a.createElement("div",{className:"cancel-delete-buttons"},i.a.createElement("button",{onClick:function(e){e.preventDefault(),n(null)}},i.a.createElement(E.a,null),i.a.createElement("span",null,"Cancel")),i.a.createElement("button",{onClick:function(e){e.preventDefault(),l(g),n(null)}},i.a.createElement(k.a,null),i.a.createElement("span",null,"Delete"))))))))}var I=a(65),N=a.n(I),b=a(66),y=a.n(b),K=a(63),Q=a.n(K),j=a(64),q=a.n(j),F={show:{opacity:1,scale:1,transition:{delay:.3}},hide:{opacity:0,scale:0,transition:{delay:.3}}},D=function(e){var t=e.handleIncrementSection,a=e.handleDecrementSection,i=e.handleUpdateSectionName,c=e.section,r=e.numberSections,l=n.useState(!1),d=Object(o.a)(l,2),u=d[0],g=d[1],E=n.useState(c),h=Object(o.a)(E,2),k=h[0],f=h[1];return n.createElement(s.c.h2,{className:"section-header",layoutId:"cardList",key:"section-".concat(c.id)},u?n.createElement(A.a,{value:k.name,name:"name",onChange:function(e){var t=e.target,a=t.value,n=t.name;f(Object(m.a)({},k,Object(p.a)({},n,a)))},variant:"standard"}):c.name,n.createElement("div",{className:0!==c.id?"section-actions":"section-actions featured"},u?n.createElement(S.a,{color:"primary",size:"small",onClick:function(){i(k),g(!1)}},n.createElement(y.a,null)):n.createElement("span",null,n.createElement(s.c.span,{variants:F,animate:c.order!==r?"show":"hide"},n.createElement(S.a,{color:"primary",size:"small",onClick:function(){t(c)},className:c.order!==r?"":"no-pointer-events"},n.createElement(Q.a,null))),n.createElement(s.c.span,{variants:F,animate:1!==c.order?"show":"hide"},n.createElement(S.a,{color:"primary",size:"small",onClick:function(){a(c)},className:1!==c.order?"":"no-pointer-events"},n.createElement(q.a,null))),n.createElement(S.a,{color:"primary",size:"small",onClick:function(){g(!0)}},n.createElement(N.a,null)))),!u&&n.createElement(s.c.span,{className:"section-underline"}))},T=a(67),V=a(50),Y=a.n(V),J={hidden:{opacity:0,y:50,color:"#ffffff"},shown:{opacity:1,y:0,color:"#ffffff",transition:{duration:.5,when:"beforeChildren",staggerChildren:.2}}},R={display:"flex",alignItems:"center",justifyContent:"center",minHeight:550},O=function(){return i.a.createElement(T.Parallax,{blur:0,bgImage:a(87),bgImageAlt:"the cat",strength:400},i.a.createElement("div",{style:R},i.a.createElement("div",{className:"headerBG"}),i.a.createElement(s.c.div,{variants:J,initial:"hidden",animate:"shown",className:"headerTitle"},i.a.createElement(s.c.h1,{className:"title",variants:J},"Welcome to your menu"),i.a.createElement(s.c.h6,{className:"title",variants:J},"Click on an existing menu section or item to edit it."),i.a.createElement(s.c.div,{variants:J},i.a.createElement(S.a,{variant:"extended",color:"primary"},i.a.createElement(Y.a,null),i.a.createElement("i",null,"Add menu item")),i.a.createElement(S.a,{variant:"extended",color:"primary"},i.a.createElement(Y.a,null),i.a.createElement("i",null,"Add menu section"))))))},M=a(127),P=a(128),L=[{name:"Appetizers",order:1,id:1},{name:"Entrees",order:2,id:2},{name:"Desserts",order:3,id:3},{name:"Drinks",order:4,id:4}],z=[{itemName:"Pizza",section:2,itemPrice:25.95,itemDescription:"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://media4.s-nbcnews.com/j/newscms/2020_09/3246761/plain_pizza_f431dcc55520ce41f835a97a5383f171.fit-760w.jpg",id:1,gf:!0,v:!0,featured:!1},{itemName:"Burger",section:2,itemPrice:15.95,itemDescription:" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.foxvalleyfoodie.com/wp-content/uploads/2017/04/how-to-make-burger-patties-like-restaurant-feature.jpg",id:2,gf:!0,v:!0,featured:!1},{itemName:"Fries",section:1,itemPrice:9.99,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"data:image/jpeg;base64,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",id:3,gf:!0,v:!1,featured:!1},{itemName:"Sweet Potatoe Fries",section:1,itemPrice:11.95,itemDescription:"Lorem ipsum dolor sit amet, c aliqua.",imgUrl:"https://www.sprinkleofgreen.com/wp-content/uploads/2019/05/Curly-Sweet-Pot-Fries-3-of-3-copy.jpg",id:4,gf:!0,v:!1,featured:!1},{itemName:"Salad",section:1,itemPrice:11.95,itemDescription:"Lorem ipsum dolor sit amet, c aliqua.",imgUrl:"https://recipes.heart.org/-/media/aha/recipe/recipe-images/mediterranean-salad.jpg?h=636&la=en&mw=890&w=890&hash=8A95325FBD7890C243CFD1124CFBA7FA090E181B",id:12,gf:!0,v:!1,featured:!1},{itemName:"Breadsticks",section:1,itemPrice:11.95,itemDescription:"Lorem ipsum dolor sit amet, c aliqua.",imgUrl:"https://hips.hearstapps.com/del.h-cdn.co/assets/15/45/1024x682/gallery-1446653066-delish-thanksgiving-breadstick-toppings.jpg?resize=480:*",id:13,gf:!0,v:!1,featured:!1},{itemName:"Soup",section:1,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetueiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/1/2/FNM_120110-Ask-Ellie-001_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580138506301.jpeg",id:5,gf:!1,v:!0,featured:!0},{itemName:"Panini",section:2,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua.",imgUrl:"https://photos.bigoven.com/recipe/hero/pepporoni-panini-sandwich.jpg?h=300&w=300",id:6,gf:!0,v:!1,featured:!0},{itemName:"Rainbow Cake",section:3,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://static01.nyt.com/images/2019/05/30/dining/ejm-rainbow-cake-sliced/ejm-rainbow-cake-sliced-articleLarge.jpg",id:7,gf:!0,v:!0,featured:!1},{itemName:"Creme Brulee",section:3,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",imgUrl:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/EA0914_creme-brulee_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539982692.jpeg",id:11,gf:!0,v:!0,featured:!1},{itemName:"Pasta",section:2,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://ohsheglows.com/gs_images/2020/05/IMG_5643-256x256.jpg",id:8,gf:!1,v:!1,featured:!1},{itemName:"Soda",section:4,itemPrice:15.95,itemDescription:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.cohenmedical.com/wp-content/uploads/2020/06/soda3.jpg",id:9,gf:!0,v:!0,featured:!1},{itemName:"Beer",section:4,itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://cdn.britannica.com/96/90096-050-514D5088/Glasses-beer-bar-Brussels.jpg",id:10,gf:!1,v:!0,featured:!1}],W=(a(88),Object(M.a)({palette:{primary:{light:"#60D7A4",main:"#3cc68a",dark:"#029b59",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}})),G=function(e,t){switch(t.type){case"add":var a=e.sort((function(e,t){return e.id-t.id})),n=a[a.length-1].id+1,i=Object(m.a)({},t.item,{id:n});return[].concat(Object(l.a)(e),[i]);case"remove":return e.filter((function(e){return e.id!==t.item.id}));case"update":return e.map((function(e){return e.id===t.item.id?t.item:e}));default:return e}},X=function(e,t){switch(t.type){case"add":var a=e[e.length-1]?e[e.length-1].id+1:1,n=Object(m.a)({},t.section,{id:a}),i=e.map((function(e){return e.order=e.order>=t.section.order?e.order+1:e.order,e}));return(i=[].concat(Object(l.a)(i),[n])).sort((function(e,t){return e.order-t.order}));case"remove":return e.map((function(e){return e.order=e.order>=t.section.order?e.order-1:e.order,e})).filter((function(e){return e.id!==t.section.id}));case"updateName":return e.map((function(e){return t.section.id===e.id?Object(m.a)({},e,{name:t.section.name}):e}));case"increment":return t.section.order===e.length?e:e.map((function(e){return e.order===t.section.order?Object(m.a)({},e,{order:e.order+1}):e.order===t.section.order+1?Object(m.a)({},e,{order:e.order-1}):e}));case"decrement":return 1===t.section.order?e:e.map((function(e){return e.order===t.section.order?Object(m.a)({},e,{order:e.order-1}):e.order===t.section.order-1?Object(m.a)({},e,{order:e.order+1}):e}));default:return e}};var Z=function(){var e=i.a.useReducer(G,z),t=Object(o.a)(e,2),a=t[0],n=t[1],c=i.a.useState(!1),r=Object(o.a)(c,2),l=r[0],m=r[1],d=i.a.useReducer(X,L),p=Object(o.a)(d,2),A=p[0],g=p[1],E=i.a.useState(null),h=Object(o.a)(E,2),k=h[0],S=h[1],f=function(e){m(null!==e),S(e)};return i.a.createElement("div",{className:"App"},i.a.createElement(P.a,{theme:W},i.a.createElement(O,null),i.a.createElement(s.c.div,{className:"grid-container",animate:"shown",initial:"hidden",variants:{hidden:{opacity:0,scale:.2},shown:{opacity:1,scale:1,transition:{duration:.3,when:"beforeChildren",staggerChildren:.15}}}},i.a.createElement(s.b,{type:"crossfade"},i.a.createElement(s.a,null,k&&l&&i.a.createElement(x,{key:"item",sections:A,items:a,id:k,setSelected:f,handleEditItem:function(e){n({type:"update",item:e})},handleDeleteItem:function(e){setTimeout((function(){n({type:"remove",item:e})}),500)}})),function(e){return i.a.createElement("div",{key:"section-block-featured",className:"featured-section"},i.a.createElement(D,{key:"section-component-featured",section:{id:0,name:"Featured Menu Items",order:0},handleIncrementSection:function(){},handleDecrementSection:function(){},handleUpdateSectionName:function(){},numberSections:A.length}),i.a.createElement(u,{items:e,setSelected:f,selectedId:k,sectionId:0}))}(a),function(e){return A.sort((function(e,t){return e.order-t.order})).map((function(t,a){return i.a.createElement("div",{key:"section-block-".concat(t.id)},i.a.createElement(D,{key:"section-component-".concat(t.id),section:t,numberSections:A.length,handleIncrementSection:function(e){g({type:"increment",section:e})},handleDecrementSection:function(e){g({type:"decrement",section:e})},handleUpdateSectionName:function(e){g({type:"updateName",section:e})}}),i.a.createElement(u,{items:e,setSelected:f,selectedId:k,sectionId:t.id}))}))}(a)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.bfc85c7b.chunk.js.map