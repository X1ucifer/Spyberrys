_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"60Bi":function(e,s,c){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=function(){function e(e,s){for(var c=0;c<s.length;c++){var t=s[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(s,c,t){return c&&e(s.prototype,c),t&&e(s,t),s}}(),a=n(c("q1tI")),i=n(c("Si88"));function n(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function s(e){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s);var c=function(e,s){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!==typeof s&&"function"!==typeof s?e:s}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return c.state={isOpen:!1},c.closeModal=c.closeModal.bind(c),c.updateFocus=c.updateFocus.bind(c),c}return function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(e,s):e.__proto__=s)}(s,e),t(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var s="";for(var c in e)e.hasOwnProperty(c)&&null!==e[c]&&(s+=c+"="+e[c]+"&");return s.substr(0,s.length-1)}},{key:"getYoutubeUrl",value:function(e,s){return"//www.youtube.com/embed/"+s+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,s){return"//player.vimeo.com/video/"+s+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,s){return"//player.youku.com/embed/"+s+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,s){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,s):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,s):"youku"===e.channel?this.getYoukuUrl(e.youku,s):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var s=e.split(":"),c=Number(s[0]);return 100*Number(s[1])/c+"%"}},{key:"render",value:function(){var e=this,s={paddingBottom:this.getPadding(this.props.ratio)};return a.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?a.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(s){e.modal=s},onKeyDown:e.updateFocus},a.default.createElement("div",{className:e.props.classNames.modalVideoBody},a.default.createElement("div",{className:e.props.classNames.modalVideoInner},a.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:s},a.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(s){e.modalbtn=s},onKeyDown:e.updateFocus}),e.props.children||a.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),s}(a.default.Component);s.default=l,l.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},"6tuT":function(e,s,c){"use strict";var t=c("nKUr"),a=(c("q1tI"),c("YFqc")),i=c.n(a);s.a=function(){return Object(t.jsx)("div",{className:"blog-area ptb-100",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsxs)("div",{className:"section-title",children:[Object(t.jsx)("span",{className:"sub-title",children:"News and Blogs"}),Object(t.jsx)("h2",{children:"Our Latest Publications"}),Object(t.jsx)("p",{children:"We always give extra care to our student's skills improvements and feel excited to share our latest research and learnings!"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(t.jsxs)("div",{className:"single-blog-post",children:[Object(t.jsx)("div",{className:"post-image",children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{className:"d-block",children:Object(t.jsx)("img",{src:"/images/blog/blog1.jpg",alt:"image"})})})}),Object(t.jsxs)("div",{className:"post-content",children:[Object(t.jsx)(i.a,{href:"#",children:Object(t.jsx)("a",{className:"category",children:"Education"})}),Object(t.jsx)("h3",{children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{children:"University Admissions Could Face Emergency Controls"})})}),Object(t.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(t.jsx)("li",{children:Object(t.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(t.jsx)("img",{src:"/images/user1.jpg",className:"rounded-circle",alt:"image"}),Object(t.jsx)("span",{children:"Alex Morgan"})]})}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"flaticon-calendar"})," April 30, 2020"]})]})]})]})}),Object(t.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(t.jsxs)("div",{className:"single-blog-post",children:[Object(t.jsx)("div",{className:"post-image",children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{className:"d-block",children:Object(t.jsx)("img",{src:"/images/blog/blog2.jpg",alt:"image"})})})}),Object(t.jsxs)("div",{className:"post-content",children:[Object(t.jsx)(i.a,{href:"#",children:Object(t.jsx)("a",{className:"category",children:"Online"})}),Object(t.jsx)("h3",{children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{children:"Online Learning Can Prepare Students For A Fast-Changing"})})}),Object(t.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(t.jsx)("li",{children:Object(t.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(t.jsx)("img",{src:"/images/user2.jpg",className:"rounded-circle",alt:"image"}),Object(t.jsx)("span",{children:"Sarah Taylor"})]})}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"flaticon-calendar"})," April 29, 2020"]})]})]})]})}),Object(t.jsx)("div",{className:"col-lg-4 col-md-6 offset-lg-0 offset-md-3",children:Object(t.jsxs)("div",{className:"single-blog-post",children:[Object(t.jsx)("div",{className:"post-image",children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{className:"d-block",children:Object(t.jsx)("img",{src:"/images/blog/blog3.jpg",alt:"image"})})})}),Object(t.jsxs)("div",{className:"post-content",children:[Object(t.jsx)(i.a,{href:"#",children:Object(t.jsx)("a",{className:"category",children:"Learning"})}),Object(t.jsx)("h3",{children:Object(t.jsx)(i.a,{href:"/single-blog-1",children:Object(t.jsx)("a",{children:"As Learning Moves Online, Trigger Warnings Must Too"})})}),Object(t.jsxs)("ul",{className:"post-content-footer d-flex justify-content-between align-items-center",children:[Object(t.jsx)("li",{children:Object(t.jsxs)("div",{className:"post-author d-flex align-items-center",children:[Object(t.jsx)("img",{src:"/images/user3.jpg",className:"rounded-circle",alt:"image"}),Object(t.jsx)("span",{children:"David Warner"})]})}),Object(t.jsxs)("li",{children:[Object(t.jsx)("i",{className:"flaticon-calendar"})," April 28, 2020"]})]})]})]})}),Object(t.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(t.jsx)("div",{className:"blog-post-info",children:Object(t.jsxs)("p",{children:["Get into details now?\u200b ",Object(t.jsx)(i.a,{href:"/blog-1",children:Object(t.jsx)("a",{children:"View all posts"})})]})})})]})]})})}},ZZEy:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elearning",function(){return c("nZju")}])},nZju:function(e,s,c){"use strict";c.r(s);var t=c("o0o1"),a=c.n(t),i=c("HaE+"),n=c("nKUr"),l=c("q1tI"),r=c.n(l),o=c("YFqc"),d=c.n(o),j=function(e){var s=e.courses;return Object(n.jsx)("div",{className:"main-banner",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsxs)("div",{className:"main-banner-content",children:[Object(n.jsx)("h1",{children:"The World\u2019s Leading Distance Learning Provider"}),Object(n.jsx)("p",{children:"Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eDemy can offer you to enjoy the beauty of eLearning!"}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsxs)("a",{className:"default-btn",children:[Object(n.jsx)("i",{className:"flaticon-user"})," Join For Free ",Object(n.jsx)("span",{})]})})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsxs)("div",{className:"main-banner-courses-list",children:[Object(n.jsx)("div",{className:"row",children:s.map((function(e){return Object(n.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(n.jsxs)("div",{className:"single-courses-box",children:[Object(n.jsxs)("div",{className:"courses-image",children:[Object(n.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(n.jsx)("a",{className:"d-block image",children:Object(n.jsx)("img",{src:e.profilePhoto,alt:e.title})})}),Object(n.jsx)(d.a,{href:"#",children:Object(n.jsx)("a",{className:"fav",children:Object(n.jsx)("i",{className:"flaticon-heart"})})}),Object(n.jsxs)("div",{className:"price shadow",children:["$",e.price]})]}),Object(n.jsxs)("div",{className:"courses-content",children:[Object(n.jsxs)("div",{className:"course-author d-flex align-items-center",children:[Object(n.jsx)("img",{src:"".concat(e.user.profilePhoto?e.user.profilePhoto:"/images/user1.jpg"),className:"rounded-circle",alt:e.user.name}),Object(n.jsx)("span",{children:e.user.name})]}),Object(n.jsx)("h3",{children:Object(n.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(n.jsx)("a",{children:e.title})})}),Object(n.jsx)("p",{children:e.overview.slice(0,100)}),Object(n.jsxs)("ul",{className:"courses-box-footer d-flex justify-content-between align-items-center",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"flaticon-agenda"})," ",parseInt(e.lessons)," Lessons"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"flaticon-people"})," ",e.enroled_courses.length," Students"]})]})]})]})},e.id)}))}),Object(n.jsx)("div",{className:"banner-shape1",children:Object(n.jsx)("img",{src:"/images/banner-shape1.png",alt:"image"})}),Object(n.jsx)("div",{className:"banner-shape2",children:Object(n.jsx)("img",{src:"/images/banner-shape2.png",alt:"image"})}),Object(n.jsx)("div",{className:"banner-shape3",children:Object(n.jsx)("img",{src:"/images/banner-shape3.png",alt:"image"})})]})})]})})})},m=c("rePB"),b=c("ODXe"),h=c("Vvt1"),u=c.n(h);function O(e,s){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),c.push.apply(c,t)}return c}function g(e){for(var s=1;s<arguments.length;s++){var c=null!=arguments[s]?arguments[s]:{};s%2?O(Object(c),!0).forEach((function(s){Object(m.a)(e,s,c[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):O(Object(c)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(c,s))}))}return e}var p=u()((function(){return c.e(3).then(c.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["..\\components\\eLearningSchool\\Partner.js -> react-owl-carousel3"]}}),x={loop:!0,nav:!0,margin:60,dots:!1,autoplayHoverPause:!0,autoplay:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:3,margin:20},600:{items:3},768:{items:4,margin:30},1e3:{items:6}}},f=function(){var e=r.a.useState(!1),s=Object(b.a)(e,2),c=s[0],t=s[1];return r.a.useEffect((function(){t(!0)}),[]),Object(n.jsx)("div",{className:"partner-area pt-100 pb-70 border-bottom",children:Object(n.jsx)("div",{className:"container",children:c?Object(n.jsxs)(p,g(g({className:"partner-slides owl-carousel owl-theme"},x),{},{children:[Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner1.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner2.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner3.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner4.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner5.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner6.png",alt:"image"})}),Object(n.jsx)("div",{className:"single-partner-item",children:Object(n.jsx)("img",{src:"/images/partner/partner4.png",alt:"image"})})]})):""})})},v=function(){return Object(n.jsx)("div",{className:"features-area pt-100 pb-70",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("span",{className:"sub-title",children:"Education for everyone"}),Object(n.jsx)("h2",{children:"Affordable Online Courses and Learning Opportunities\u200b"}),Object(n.jsx)("p",{children:"Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!"})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3 col-sm-6 col-md-6",children:Object(n.jsxs)("div",{className:"single-features-box",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"flaticon-brain-process"})}),Object(n.jsx)("h3",{children:"Learn the Latest Top Skills"}),Object(n.jsx)("p",{children:"Learning top skills can bring an extra-ordinary outcome in a career."}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{className:"link-btn",children:"Start Now!"})})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-sm-6 col-md-6",children:Object(n.jsxs)("div",{className:"single-features-box",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"flaticon-computer"})}),Object(n.jsx)("h3",{children:"Learn in Your Own Pace"}),Object(n.jsx)("p",{children:"Everyone prefers to enjoy learning at their own pace & that gives a great result."}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{className:"link-btn",children:"Start Now!"})})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-sm-6 col-md-6",children:Object(n.jsxs)("div",{className:"single-features-box",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"flaticon-shield-1"})}),Object(n.jsx)("h3",{children:"Learn From Industry Experts"}),Object(n.jsx)("p",{children:"Experienced teachers can assist in learning faster with their best approaches!"}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{className:"link-btn",children:"Start Now!"})})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-sm-6 col-md-6",children:Object(n.jsxs)("div",{className:"single-features-box",children:[Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("i",{className:"flaticon-world"})}),Object(n.jsx)("h3",{children:"Enjoy Learning From Anywhere"}),Object(n.jsx)("p",{children:"We are delighted to give you options to enjoy learning from anywhere in the world."}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{className:"link-btn",children:"Start Now!"})})]})})]})]})})},N=function(){return Object(n.jsxs)("div",{className:"about-area bg-fef8ef ptb-100",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)("div",{className:"about-image",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6 col-6",children:Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"/images/about-img1.png",alt:"image"})})}),Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6 col-6",children:Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"/images/about-img2.png",alt:"image"})})}),Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6 col-6",children:Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"/images/about-img3.png",alt:"image"})})}),Object(n.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6 col-6",children:Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"/images/about-img4.png",alt:"image"})})})]})})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsxs)("div",{className:"about-content",children:[Object(n.jsx)("span",{className:"sub-title",children:"Online learning"}),Object(n.jsx)("h2",{children:"Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!"}),Object(n.jsx)("p",{children:"We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!"}),Object(n.jsxs)("ul",{className:"features-list",children:[Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"flaticon-experience"})," Expert Trainers"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"flaticon-time-left"})," Lifetime Acces"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"flaticon-tutorials"})," Remote Learning"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"flaticon-self-growth"})," Self Development"]})})]}),Object(n.jsx)(d.a,{href:"/courses-1",children:Object(n.jsxs)("a",{className:"default-btn",children:[Object(n.jsx)("i",{className:"flaticon-user"})," View All Courses ",Object(n.jsx)("span",{})]})})]})})]})}),Object(n.jsx)("div",{className:"shape1",children:Object(n.jsx)("img",{src:"/images/shape1.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape2",children:Object(n.jsx)("img",{src:"/images/shape2.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape3",children:Object(n.jsx)("img",{src:"/images/shape3.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape4",children:Object(n.jsx)("img",{src:"/images/shape4.png",alt:"image"})})]})},y=function(e){var s=e.courses;return Object(n.jsx)("div",{className:"courses-area ptb-100",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("span",{className:"sub-title",children:"Learn At Your Own Pace"}),Object(n.jsx)("h2",{children:"eDemy Popular Courses"}),Object(n.jsx)("p",{children:"Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!"})]}),Object(n.jsxs)("div",{className:"row",children:[s?s.map((function(e){return Object(n.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(n.jsxs)("div",{className:"single-courses-box",children:[Object(n.jsxs)("div",{className:"courses-image",children:[Object(n.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(n.jsx)("a",{className:"d-block image",children:Object(n.jsx)("img",{src:e.profilePhoto,alt:e.title})})}),Object(n.jsx)(d.a,{href:"#",children:Object(n.jsx)("a",{className:"fav",children:Object(n.jsx)("i",{className:"flaticon-heart"})})}),Object(n.jsxs)("div",{className:"price shadow",children:["$",e.price]})]}),Object(n.jsxs)("div",{className:"courses-content",children:[Object(n.jsxs)("div",{className:"course-author d-flex align-items-center",children:[Object(n.jsx)("img",{src:"".concat(e.user.profilePhoto?e.user.profilePhoto:"/images/user1.jpg"),className:"rounded-circle",alt:e.user.name}),Object(n.jsx)("span",{children:e.user.name})]}),Object(n.jsx)("h3",{children:Object(n.jsx)(d.a,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:Object(n.jsx)("a",{children:e.title})})}),Object(n.jsx)("p",{children:e.overview.slice(0,100)}),Object(n.jsxs)("ul",{className:"courses-box-footer d-flex justify-content-between align-items-center",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"flaticon-agenda"})," ",parseInt(e.lessons)," Lessons"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"flaticon-people"})," ",e.enroled_courses.length," Students"]})]})]})]})},e.id)})):Object(n.jsx)("h2",{children:"Empty"}),Object(n.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(n.jsx)("div",{className:"courses-info",children:Object(n.jsxs)("p",{children:["Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. ",Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{children:"Register Free Now!"})}),"."]})})})]})]})})},w=function(){return Object(n.jsx)("div",{className:"funfacts-list",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{className:"single-funfacts-box",children:[Object(n.jsx)("h3",{children:"1,926"}),Object(n.jsx)("p",{children:"Finished Sessions"})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{className:"single-funfacts-box",children:[Object(n.jsx)("h3",{children:"3,279"}),Object(n.jsx)("p",{children:"Enrolled Learners"})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{className:"single-funfacts-box",children:[Object(n.jsx)("h3",{children:"250"}),Object(n.jsx)("p",{children:"Online Instructors"})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:Object(n.jsxs)("div",{className:"single-funfacts-box",children:[Object(n.jsx)("h3",{children:"100%"}),Object(n.jsx)("p",{children:"Satisfaction Rate"})]})})]})})},k=c("60Bi"),P=c.n(k),S=function(){var e=r.a.useState(!0),s=Object(b.a)(e,2),c=s[0],t=s[1];return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("div",{className:"video-box",children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"/images/video-img1.jpg",className:"shadow",alt:"image"})}),Object(n.jsx)(d.a,{href:"#play-video",children:Object(n.jsx)("a",{onClick:function(e){e.preventDefault(),t(!c)},className:"video-btn popup-youtube",children:Object(n.jsx)("i",{className:"flaticon-play"})})}),Object(n.jsx)("div",{className:"shape10",children:Object(n.jsx)("img",{src:"/images/shape9.png",alt:"image"})})]}),Object(n.jsx)(P.a,{channel:"youtube",isOpen:!c,videoId:"bk7McNUjWgw",onClose:function(){return t(!c)}})]})};function E(e,s){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),c.push.apply(c,t)}return c}function D(e){for(var s=1;s<arguments.length;s++){var c=null!=arguments[s]?arguments[s]:{};s%2?E(Object(c),!0).forEach((function(s){Object(m.a)(e,s,c[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):E(Object(c)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(c,s))}))}return e}var F=u()((function(){return c.e(3).then(c.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["..\\components\\About\\FeedbackSliderWithFunFacts.js -> react-owl-carousel3"]}}),L={loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!0,animateOut:"fadeOut",items:1,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"]},_=function(){var e=r.a.useState(!1),s=Object(b.a)(e,2),c=s[0],t=s[1];return r.a.useEffect((function(){t(!0)}),[]),Object(n.jsxs)("div",{className:"funfacts-and-feedback-area ptb-100",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsxs)("div",{className:"feedback-content",children:[Object(n.jsx)("span",{className:"sub-title",children:"Distance learning"}),Object(n.jsx)("h2",{children:"Flexible Study at Your Own Pace, According to Your Own Needs"}),Object(n.jsx)("p",{children:"With the eDemy, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go."}),c?Object(n.jsxs)(F,D(D({className:"feedback-slides owl-carousel owl-theme"},L),{},{children:[Object(n.jsxs)("div",{className:"single-feedback-item",children:[Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),Object(n.jsxs)("div",{className:"client-info d-flex align-items-center",children:[Object(n.jsx)("img",{src:"/images/user1.jpg",className:"rounded-circle",alt:"image"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h3",{children:"John Smith"}),Object(n.jsx)("span",{children:"Python Developer"})]})]})]}),Object(n.jsxs)("div",{className:"single-feedback-item",children:[Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),Object(n.jsxs)("div",{className:"client-info d-flex align-items-center",children:[Object(n.jsx)("img",{src:"/images/user2.jpg",className:"rounded-circle",alt:"image"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h3",{children:"Sarah Taylor"}),Object(n.jsx)("span",{children:"PHP Developer"})]})]})]}),Object(n.jsxs)("div",{className:"single-feedback-item",children:[Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),Object(n.jsxs)("div",{className:"client-info d-flex align-items-center",children:[Object(n.jsx)("img",{src:"/images/user1.jpg",className:"rounded-circle",alt:"image"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h3",{children:"David Warner"}),Object(n.jsx)("span",{children:"QA Developer"})]})]})]})]})):"",Object(n.jsx)("div",{className:"feedback-info",children:Object(n.jsxs)("p",{children:["Not a member yet?\u200b ",Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsx)("a",{children:"Register Now"})})]})})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)(w,{})}),Object(n.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(n.jsx)(S,{})})]})}),Object(n.jsx)("div",{className:"shape2",children:Object(n.jsx)("img",{src:"/images/shape2.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape3",children:Object(n.jsx)("img",{src:"/images/shape3.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape4",children:Object(n.jsx)("img",{src:"/images/shape4.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape9",children:Object(n.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})},C=function(){return Object(n.jsx)("div",{className:"get-instant-courses-area",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"get-instant-courses-inner-area",children:[Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-8 col-md-12",children:Object(n.jsxs)("div",{className:"get-instant-courses-content",children:[Object(n.jsx)("span",{className:"sub-title",children:"Get Instant Access to The Free"}),Object(n.jsx)("h2",{children:"Self Development Course"}),Object(n.jsx)("p",{children:"eDemy Self Development Course can assist you in bringing the significant changes in personal understanding and reshaping the confidence to achieve the best from your career! We trust that learning should be enjoyable, and only that can make substantial changes to someone!"}),Object(n.jsx)(d.a,{href:"/profile-authentication",children:Object(n.jsxs)("a",{className:"default-btn",children:[Object(n.jsx)("i",{className:"flaticon-user"})," Start For Free ",Object(n.jsx)("span",{})]})})]})}),Object(n.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(n.jsxs)("div",{className:"get-instant-courses-image",children:[Object(n.jsx)("img",{src:"/images/man.jpg",alt:"image"}),Object(n.jsx)("div",{className:"shape7",children:Object(n.jsx)("img",{src:"/images/shape4.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape6",children:Object(n.jsx)("img",{src:"/images/shape6.png",alt:"image"})})]})})]}),Object(n.jsx)("div",{className:"shape5",children:Object(n.jsx)("img",{src:"/images/shape5.png",alt:"image"})})]})})})},V=c("6tuT"),A=function(){return Object(n.jsxs)("div",{className:"view-all-courses-area bg-fef8ef",children:[Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsxs)("div",{className:"view-all-courses-content",children:[Object(n.jsx)("span",{className:"sub-title",children:"Distance learning"}),Object(n.jsx)("h2",{children:"Feel Like You Are Attending Your classNamees Physically!"}),Object(n.jsx)("p",{children:"eDemy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills."}),Object(n.jsx)(d.a,{href:"/courses-1",children:Object(n.jsxs)("a",{className:"default-btn",children:[Object(n.jsx)("i",{className:"flaticon-agenda"})," View Courses ",Object(n.jsx)("span",{})]})})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)("div",{className:"view-all-courses-image",children:Object(n.jsx)("img",{src:"/images/man-with-laptop.png",alt:"image"})})})]})}),Object(n.jsx)("div",{className:"shape1",children:Object(n.jsx)("img",{src:"/images/shape1.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape9",children:Object(n.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})},T=function(){return Object(n.jsxs)("div",{className:"premium-access-area ptb-100",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"premium-access-content",children:[Object(n.jsx)("span",{className:"sub-title",children:"Affordable Certification"}),Object(n.jsx)("h2",{children:"Get Your Quality Skills Certificate Through Online Exam"}),Object(n.jsx)("p",{children:"Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!"}),Object(n.jsx)(d.a,{href:"/membership-levels",children:Object(n.jsxs)("a",{className:"default-btn",children:[Object(n.jsx)("i",{className:"flaticon-user"})," Get Started Now ",Object(n.jsx)("span",{})]})})]})}),Object(n.jsx)("div",{className:"shape3",children:Object(n.jsx)("img",{src:"/images/shape3.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape4",children:Object(n.jsx)("img",{src:"/images/shape4.png",alt:"image"})}),Object(n.jsx)("div",{className:"shape8",children:Object(n.jsx)("img",{src:"/images/shape7.png",alt:"image"})})]})},Y=c("vDqi"),I=c.n(Y),M=c("rjN7"),W=function(e){var s=e.courses;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(j,{courses:s.slice(0,2)}),Object(n.jsx)(f,{}),Object(n.jsx)(v,{}),Object(n.jsx)(N,{}),Object(n.jsx)(y,{courses:s}),Object(n.jsx)(_,{}),Object(n.jsx)(C,{}),Object(n.jsx)(V.a,{}),Object(n.jsx)(A,{}),Object(n.jsx)(T,{})]})};W.getInitialProps=Object(i.a)(a.a.mark((function e(){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(M.a,"/api/v1/courses/homepage-courses"),e.next=3,I.a.get(s);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));s.default=W}},[["ZZEy",0,2,1,4,5,6]]]);