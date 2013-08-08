/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.2.2
 Updated: 2013-08-08

 Requires jQuery 1.5 or higher
*/
(function(k){var ta=typeof define=="function"&&define.amd&&(define(["jquery"],k)||true),U=!ta&&typeof module=="object"&&typeof module.exports=="object"&&(module.exports=k);!ta&&!U&&k()})(function(){return jQuery.reel||function(k,ta,U,s){function Yb(e){return q.instances.push(e[0])&&e}function Zb(e){return(q.instances=q.instances.not(Ja(e.attr(X))))&&e}function Y(e){return q.instances.first().data(e)}function $b(e){return"data:image/gif;base64,R0lGODlh"+e}function Z(e){return"<"+e+"/>"}function w(e){return"."+
(e||"")}function Ka(e){return e.replace(ua,q.cdn)}function va(e){return"url('"+eb(e)+"')"}function Ab(e,j){return typeof j==fb?j[e]:j}function wa(e,j,o){return gb(e,La(j,o))}function Ma(e,j){return K(e)*(j?-1:1)}function Na(e){return la?e.touch||e.originalEvent.touches[0]:e}function A(e){return e===s?0:typeof e==hb?e:e+"px"}function Ja(e){return"#"+e}function ac(e,j,o){for(;e.length<j;)e=o+e;return e}function eb(e){return encodeURI(decodeURI(e))}function ib(e){return q.re.array.exec(e)?e.split(q.re.array):
e}function Bb(e){return typeof e==hb?e:k.each(e,function(j,o){e[j]=o?+o:s})}function Cb(e){try{console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")}catch(j){}return e}if(!(!k||+k().jquery.replace(".",V).substr(0,2)<15)){var q=k.reel={version:"1.2.2",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,scrollable:true,steppable:true,throwable:true,wheelable:true,cw:false,revolution:s,stitched:0,directional:false,row:1,rows:0,orbital:0,vertical:false,
inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:s,images:"",path:"",preload:"fidelity",speed:0,delay:0,timeout:2,duration:s,rebound:0.5,entry:s,opening:0,brake:0.23,velocity:0,tempo:36,laziness:6,cursor:s,hint:"",indicator:0,klass:"",preloader:2,area:s,attr:{},annotations:s,graph:s,monitor:s,step:s,steps:s},scan:function(){return k(w(B)+":not("+w(jb)+" >)").each(function(e,j){e=k(j);j=e.data();j.images=ib(j.images);var o={};k(w(Db)+"[data-for="+e.attr(X)+"]").each(function(t,
r){t=k(r);r=t.data();r.x=Bb(ib(r.x));r.y=Bb(ib(r.y));var b=t.attr(X);r.node=t.removeData();o[b]=r});j.annotations=o;e.removeData().reel(j)})},fn:{reel:function(){var e=arguments,j=k(this),o=j.data(),t=e[0]||{},r=e[1];if(typeof t=="object"){var b=k.extend({},q.def,t);e=j.filter(kb).unreel().filter(function(){var i=k(this),g=b.attr,d=g.src||i.attr("src"),D=g.width||i.width();i=g.height||i.height();if(d&&D&&i)return true});var $=[];b.step&&(b.frame=b.step);b.steps&&(b.frames=b.steps);e.each(function(){var i=
k(this),g=function(a,c){return i.reel(a,c)&&i.data(a)},d=function(a){return i.reel(a)},D={setup:function(){if(!(i.hasClass(B)&&i.parent().hasClass(jb))){g(xa,b);var a=i.attr(b.attr).attr("src"),c=g(X,i.attr(X)||i.attr(X,B+"-"+ +new Date).attr(X)),f=i.attr(ma),h=k.extend({},i.data()),l=g(fa,b.images||[]),p=b.stitched,m=b.loops,n=b.orbital,x=b.revolution,C=b.rows,u=b.footage,H={x:i.width(),y:i.height()},v=g(L,n&&u||C<=1&&l.length||b.frames),ga=C>1||n;g(Oa,Ab("x",x)||p/2||H.x*2);g(Eb,!ga?0:Ab("y",x)||
(C>3?H.y:H.y/(5-C)));C=p?1:na(v/u);c=Ja(c+b.suffix);x=i[0].className||V;u=k(Z(ya),{id:c.substr(1),"class":x+E+jb+E+Fb+"0"});u=i.wrap(u.addClass(b.klass)).attr({"class":B});$.push(Yb(u)[0]);u=u.parent().bind(D.instance);g(lb,l.length?V:b.image||a.replace(q.re.image,"$1"+b.suffix+".$2"));g(Gb,[]);g(Hb,b.spacing);g(W,null);g(z,null);g(za,null);g(oa,null);g(mb,C);g(J,H);g(Pa,1/(v-(m&&!p?0:1)));g(Ib,p-(m?0:H.x));g(nb,0);g(Jb,c);g(M,g(Aa,b.speed)<0);g(ha,0);g(pa,b.vertical);g(O,0);g(qa,Ma(1,!b.cw&&!p));
g(Qa,{});g(Ba,false);g(Ra,g(ob,0));g(Sa,g(Ta,0));g(Ca,false);g(pb,false);g(aa,false);g(Kb,b.brake);g(qb,!!n);g(ba,b.tempo/(q.lazy?b.laziness:1));g(ra,-1);g(Ua,-1);g(Va,b.annotations||u.unbind(w(Va))&&{});g(Lb,{src:a,classes:x,style:f||V,data:h});b.steppable||u.unbind("up.steppable");b.indicator||u.unbind(".indicator");F(V,{width:H.x,height:H.y,overflow:rb,position:"relative"});F(ia+E+w(B),{display:Mb});P.bind(D.pool);i.trigger("setup")}},instance:{teardown:function(){var a=i.data(Lb);i.parent().unbind(D.instance);
d(ma).remove();d(Wa).unbind(Q);Zb(i.unbind(Q).removeData().siblings().unbind(Q).remove().end().attr({"class":a.classes,src:a.src,style:a.style}).data(a.data).unwrap());Xa();P.unbind(D.pool);ca.unbind(da)},setup:function(){function a(n){return i.trigger("down",[Na(n).clientX,Na(n).clientY,n])&&n.give}function c(n,x){return!x||i.trigger("wheel",[x,n])&&n.give}var f=d(J);d(L);i.attr(X);var h=b.rows,l=b.stitched,p=i.parent(),m=g(Wa,k(b.area||p));h=b.rows||1;F(E+w(B),{MozUserSelect:Da,WebkitUserSelect:Da});
if(la){F(E+w(B),{WebkitBackgroundSize:d(fa).length?!l?s:A(l)+E+A(f.y):l&&A(l)+E+A((f.y+b.spacing)*h-b.spacing)||A((f.x+b.spacing)*b.footage-b.spacing)+E+A((f.y+b.spacing)*d(mb)*h*(b.directional?2:1)-b.spacing)});m.bind(bc,a)}else{l=b.cursor;f=l==Nb?cc:l||dc;l=l==Nb?ec+E+"!important":s;F(V,{cursor:Ka(f)});F(w(sb),{cursor:"wait"});F(w(Ya)+ia+w(Ya)+" *",{cursor:Ka(l||f)},true);m.bind(b.wheelable?fc:null,c).bind(b.clickfree?gc:hc,a).bind(ic,function(){return false})}b.hint&&m.attr("title",b.hint);b.indicator&&
p.append(Ea("x"));h>1&&b.indicator&&p.append(Ea("y"));b.monitor&&p.append(Ob=k(Z(ya),{"class":Pb}))&&F(E+w(Pb),{position:Za,left:0,top:0});F(E+w(tb),{display:Da})},preload:function(){function a(v,ga){setTimeout(function(){ga.parent().length&&ga.attr({src:eb(v)})},(C-x.length)*2)}var c=d(J),f=i.parent(),h=d(fa),l=!h.length,p=d(L),m=b.footage,n=q.preload[b.preload]||q.preload[q.def.preload],x=l?[d(lb)]:n(h.slice(0),b,d),C=x.length;g(O,l?0.5:0);h=[];f.addClass(sb).append(ja());g(ma,d(ma)||k("<"+ma+' type="text/css">'+
F.rules.join("\n")+"</"+ma+">").prependTo(ub));for(i.trigger("stop");x.length;){n=b.path+x.shift();var u=c.x*(!l?1:m),H=c.y*(!l?1:p/m)*(!b.directional?1:2);u=k(Z(kb)).attr({"class":tb,width:u,height:H}).appendTo(f);u.bind("load error abort",function(v){v.type!="load"&&i.trigger(v.type);return!!k(this).parent().length&&i.trigger("preloaded")&&false});a(n,u);h.push(n)}g(Gb,h)},preloaded:function(){var a=d(fa).length||1,c=g(O,La(d(O)+1,a));if(c===a){i.parent().removeClass(sb).unbind(O,D.instance.preloaded);
i.trigger("loaded")}c===1&&i.trigger("frameChange",[s,d(W)])},loaded:function(){d(fa).length>1||i.css({backgroundImage:va(b.path+d(lb))}).attr({src:Ka(Qb)});b.stitched&&i.attr({src:Ka(Qb)});d(pb)||g(ha,b.velocity||0)},opening:function(){if(!b.opening)return i.trigger("openingDone");g(aa,true);g(vb,!d(Aa));var a=b.entry||b.speed,c=d(z),f=b.opening;g(z,c-a*f);g(ra,na(f*Y(ba)))},openingDone:function(){g(Fa,false);g(aa,false);var a=ea+w(aa);P.unbind(a,D.pool[a]);if(b.delay>0)R=setTimeout(function(){i.trigger("play")},
b.delay*1E3);else i.trigger("play")},play:function(a,c){c=c?g(Aa,c):d(Aa)*Ma(1,d(M));(a=b.duration)&&g(Ua,na(a*Y(ba)));g(M,c<0);c=g(Fa,!!c);g(vb,!c);wb()},pause:function(){I()},stop:function(){var a=g(vb,true);g(Fa,!a)},down:function(a,c,f,h){function l(m){return i.trigger("pan",[Na(m).clientX,Na(m).clientY,m])&&m.give}function p(m){return i.trigger("up",[m])&&m.give}if(!(h&&h.button!=jc&&!b.clickfree))if(b.draggable){g(Ba,d(W));a=b.clickfree;g(ha,0);$a=ab(d(Oa),c,f);la||h&&h.preventDefault();I();
Xa();S=0;k(Rb,ca).addClass(Ya);la?ca.bind(kc,l).bind(lc+E+mc,p):(a?d(Wa):ca).bind(nc,l).bind(a?oc:pc,p)}},up:function(){g(Ba,false);g(Ca,false);var a=b.throwable,c=K(Ga[0]+Ga[1])/60;T=g(ha,!a?0:a===true?c:La(a,c))?1:0;I();Xa();k(Rb,ca).removeClass(Ya);(b.clickfree?d(Wa):ca).unbind(da)},pan:function(a,c,f,h){if(b.draggable&&xb){xb=false;I();var l=b.rows,p=b.orbital;a=la&&!d(Ca)&&l<=1&&!p&&b.scrollable;var m={x:c-$a.x,y:f-$a.y};if(h&&a&&K(m.x)<K(m.y))return h.give=true;if(K(m.x)>0||K(m.y)>0){h&&(h.give=
false);S=gb(m.x,m.y);$a={x:c,y:f};h=d(Oa);a=d(Qa);var n=d(pa),x=g(z,Sb(n?f-a.y:c-a.x,d(Ra),h,d(Sa),d(Ta),d(qa),n?f-a.y:c-a.x));g(Ca,d(Ca)||d(W)!=d(Ba));(m=Tb(n?m.y:m.x||0))&&g(M,m<0);if(p&&d(qb)){g(pa,K(f-a.y)>K(c-a.x));a=ab(h,c,f)}if(l>1){d(J);l=d(Eb);p=d(ob);m=-p*l;g(oa,q.math.envelope(f-a.y,p,l,m,m+l,-1))}!(x%1)&&!b.loops&&ab(h,c,f)}}},wheel:function(a,c,f){if(c){y=true;a=na(ka.sqrt(K(c))/2);a=Ma(a,c>0);c=0.0833*d(Oa);ab(c);a&&g(M,a<0);g(ha,0);g(z,Sb(a,d(Ra),c,d(Sa),d(Ta),d(qa)));f&&f.preventDefault();
f&&(f.give=false);I();i.trigger("up",[f])}},fractionChange:function(a,c,f){if(c!==s)return Cb(g(z,c));a=1+bb(f/d(Pa));c=b.rows>1;f=b.orbital;g(qb,!!f&&(a<=f||a>=b.footage-f+2));if(c)a+=(d(za)-1)*d(L);g(W,a)},tierChange:function(a,c,f){if(c===s){a=g(za,N(Ha(f,1,b.rows)));c=d(L);f=d(W)%c||c;g(W,f+a*c-c)}},rowChange:function(a,c,f){if(c!==s)return g(za,c);g(oa,1/(b.rows-1)*(f-1))},frameChange:function(a,c,f){if(c!==s)return Cb(g(W,c));this.className=this.className.replace(q.re.frame_klass,Fb+f);var h=
d(L);c=b.rows;a=b.path;var l=f%h||h,p=!!d(O),m=((f-l)/h+1-1)/(c-1),n=N(Ha(m,1,c)),x=d(za);p&&n===x?d(oa):g(oa,m);l=La((l-1)/(h-1),0.9999);m=x*h-h;h=N(Ha(l,m+1,m+h));m=K((d(z)||0)-l)<1/(d(L)-1);p&&h===f&&m?d(z):g(z,l);var C=b.footage;if(b.orbital&&d(pa)){f=b.inversed?C+1-f:f;f+=C}m=b.horizontal;var u=b.stitched;h=d(fa);var H=!h.length||b.stitched;n=d(Hb);var v=d(J);if(H){if(u){f=g(nb,N(Ha(l,0,d(Ib)))%u);c=c<=1?0:(v.y+n)*(c-x);f=[A(-f),A(-c)];(c=h.length>1&&h[x-1])&&i.css("backgroundImage").search(a+
c)<0&&i.css({backgroundImage:va(a+c)})}else{a=f%C-1;a=a<0?C-1:a;f=bb((f-0.1)/C);f+=c>1?0:d(M)?0:!b.directional?0:d(mb);f=f*((m?v.y:v.x)+n);a=a*((m?v.x:v.y)+n);f=h.length?[0,0]:m?[A(-a),A(-f)]:[A(-f),A(-a)]}i.css({backgroundPosition:f.join(E)})}else{f=h[f-1];p&&i.attr({src:eb(a+f)})}},"imageChange imagesChange":function(){ja.$.remove();i.siblings(w(tb)).remove();i.parent().bind(O,D.instance.preloaded);P.bind(ea+w(cb),D.pool[ea+w(cb)]);i.trigger("preload")},"fractionChange.indicator":function(a,c,f){if(c===
s&&b.indicator){c=d(J);a=b.indicator;var h=b.orbital;c=h&&d(pa)?c.y:c.x;h=h?b.footage:b.images.length||d(L);h=na(c/h);c-=h;f=N(Ha(f,0,c));f=!b.cw||b.stitched?f:c-f;Ea.$x.css(d(pa)?{left:0,top:A(f),bottom:Ub,width:a,height:h}:{bottom:0,left:A(f),top:Ub,width:h,height:a})}},"tierChange.indicator":function(a,c,f){if(c===s&&b.rows>1&&b.indicator){var h=d(J).y;a=b.indicator;c=na(h/b.rows);h-=c;f=N(f*h);Ea.$y.css({left:0,top:f,width:a,height:c})}},"setup.annotations":function(){d(J);var a=i.parent();k.each(d(Va),
function(c,f){var h=typeof f.node==hb?k(f.node):f.node||{};h=h.jquery?h:k(Z(ya),h);h=h.attr({id:c}).addClass(Db);var l=f.image?k(Z(kb),f.image):k(),p=f.link?k(Z("a"),f.link).click(function(){return false}):k();F(Ja(c),{display:Da,position:Za},true);f.image||f.link&&h.append(p);f.link||f.image&&h.append(l);f.link&&f.image&&h.append(p.append(l));h.appendTo(a)})},"frameChange.annotations":function(a,c,f){var h=d(J),l=b.stitched,p=d(nb);d(O)&&c===s&&k.each(d(Va),function(m,n){m=k(Ja(m));var x=n.start||
1,C=n.end,u=f-1,H=n.at?n.at[u]=="+":false;u=n.at?u:u-x+1;var v=typeof n.x!=fb?n.x:n.x[u],ga=typeof n.y!=fb?n.y:n.y[u];n=v!==s&&ga!==s&&(n.at?H:u>=0&&(!C||u<=C-x));if(l){x=v>l-h.x&&p>=0&&p<h.x;v=!(v<h.x&&p>l-h.x)?v:v+l;v=!x?v:v-l;v-=p}v={display:n?Mb:Da,left:A(v),top:A(ga)};m.css(v)})},"up.annotations":function(a,c){if(!(S>10||y)){a=k(c.target);c=a.is("a")?a:a.parents("a");a=c.attr("href");c=c.attr("target")||"self";if(a)S=c=="_blank"?!!ta.open(a):!!(ta[c].location.href=a)}},"up.steppable":function(){S||
y||i.trigger(d(Qa).x-i.offset().left>0.5*d(J).x?"stepRight":"stepLeft")},"stepLeft stepRight":function(){I()},stepLeft:function(){g(M,false);g(z,d(z)-d(Pa)*d(qa))},stepRight:function(){g(M,true);g(z,d(z)+d(Pa)*d(qa))},"setup.fu":function(){g(W,b.frame+(b.row-1)*d(L));i.trigger("preload")},"wheel.fu":function(){y=false},"clean.fu":function(){i.trigger("teardown")},"loaded.fu":function(){i.trigger("opening")}},pool:{"tick.reel.preload":function(){var a=d(J),c=qc(ja.$.css(rc)),f=d(fa).length||1,h=N(1/
f*d(O)*a.x);ja.$.css({width:c+(h-c)/3+1});if(d(O)===f&&c>a.x-1){ja.$.fadeOut(300,function(){ja.$.remove()});P.unbind(ea+w(cb),D.pool[ea+w(cb)])}},"tick.reel":function(a){var c=d(ha),f=Y(ba),h=b.monitor;if(T){c=c-d(Kb)/f*T;c=g(ha,c>0.1?c:(T=G=0))}h&&Ob.text(d(h));c&&T++;G&&G++;Tb(0);xb=true;if(G&&!c)return sa(a);if(d(Ba))return sa(a,I());if(!(d(ra)>0)){if(!b.loops&&b.rebound){!G&&!(d(z)%1)?yb++:(yb=0);yb>=b.rebound*1E3/f&&g(M,!d(M))}a=d(qa)*Ma(1,d(M));f=d(Ua);c=(!d(Fa)||!f?c:K(d(Aa))+c)/Y(ba);g(z,
d(z)-c*a);f=!b.duration?f:f>0&&g(Ua,f-1);!f&&d(Fa)&&i.trigger("stop")}},"tick.reel.opening":function(){if(d(aa)){var a=(b.entry||b.speed)/Y(ba)*(b.cw?-1:1),c=g(ra,d(ra)-1);g(z,d(z)+a);c||i.trigger("openingDone")}}}},sa=function(a,c){return a.stopImmediatePropagation()||c},G,T=0,wb=function(){return G=0},I=function(){clearTimeout(R);P.unbind(ea+w(aa),D.pool[ea+w(aa)]);g(ra,0);g(pb,true);return G=-b.timeout*Y(ba)},S=0,y=false,R,Ob=k(),ja=function(){var a=b.preloader;F(E+w(Vb),{position:Za,left:0,top:d(J).y-
a,height:a,overflow:rb,backgroundColor:"#000"});return ja.$=k(Z(ya),{"class":Vb})},Ea=function(a){F(E+w(Wb)+w(a),{position:Za,width:0,height:0,overflow:rb,backgroundColor:"#000"});return Ea["$"+a]=k(Z(ya),{"class":Wb+E+a})},F=function(a,c,f){function h(l){var p=[];k.each(l,function(m,n){p.push(m.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+A(n)+";")});return"{"+p.join(V)+"}"}f=f?V:d(Jb);a=a.replace(/^/,f).replace(ia,ia+f);return F.rules.push(a+h(c))&&c},yb=0,$a={x:0,y:0},Tb=function(a){return Ga.push(a)&&
Ga.shift()&&a},Xa=function(){return Ga=[0,0]},Ga=Xa(),Sb=b.graph||q.math[b.loops?"hatch":"envelope"],ab=function(a,c,f){var h=g(Ra,d(z));g(ob,d(oa));var l=b.loops;g(Sa,l?0:-h*a);g(Ta,l?a:a-h*a);return c&&g(Qa,{x:c,y:f})||s},xb=true,ca=P;try{if(P[0]!=top.document)ca=P.add(top.document)}catch(uc){}top===self?k():function(a){k("iframe",ca.last()).each(function(){try{if(k(this).contents().find(ub).html()==k(ub).html())return(a=k(this))&&false}catch(c){}});return a}();F.rules=[];D.setup()});db=db||function i(){var g=
+new Date,d=Y(ba);if(!d)return db=null;P.trigger(ea);q.cost=(+new Date+q.cost-g)/2;return db=setTimeout(i,gb(4,1E3/d-q.cost))}();return k($)}else if(typeof t=="string")if(e.length==1){r=o[t];j.trigger("recall",[t,r]);return r}else{if(r!==s){q.normal[t]&&(r=q.normal[t](r,o));if(o[t]===s)o[t]=r;else if(o[t]!==r)j.trigger(t+"Change",[s,o[t]=r])}return j.trigger("store",[t,r])}},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,
/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],array:/ *, */,touchy_agent:/iphone|ipod|ipad|android|fennec|rim tablet/i,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.cz/",math:{envelope:function(e,j,o,t,r,b){return j+wa(t,r,-e*b)/o},hatch:function(e,j,o,t,r,b){e=(e<t?r:0)+e%r;e=j+-e*b/o;return e-bb(e)},interpolate:function(e,j,o){return j+e*(o-j)}},preload:{fidelity:function(e,
j,o){function t(g,d,D){function sa(R){for(;!(R>=1&&R<=I);)R+=R<1?+I:-I;return i[D+R]||(i[D+R]=!!G.push(R))}if(!g.length)return[];var G=[],T=4*d,wb=j.frame,I=g.length;d=true;for(var S=I/T,y=0;y<T;y++)sa(wb+N(y*S));for(;S>1;){y=0;T=G.length;S/=2;for(d=!d;y<T;y++)sa(G[y]+(d?1:-1)*N(S))}for(y=0;y<=I;y++)sa(y);for(y=0;y<G.length;y++)G[y]=g[G[y]-1];return G}var r=j.orbital,b=r?2:j.rows||1,$=r?j.footage:o(L);o=(j.row-1)*$;r=[].concat(e);var i=new Array(e.length+1);e=b<2?[]:r.slice(o,o+$);return t(e,1,o).concat(t(r,
b,0))},linear:function(e){return e}},normal:{fraction:function(e,j){if(e===null)return e;return j[xa].loops?e-bb(e):wa(0,1,e)},tier:function(e){if(e===null)return e;return wa(0,1,e)},row:function(e,j){if(e===null)return e;return N(wa(1,j[xa].rows,e))},frame:function(e,j){if(e===null)return e;var o=j[xa];j=j[L]*(o.orbital?2:o.rows||1);e=N(o.loops?e%j||j:wa(1,j,e));return e<0?e+j:e},images:function(e,j){var o=q.re.sequence.exec(e);return!o?e:q.sequence(o,j[xa])}},sequence:function(e,j){if(e.length<=
1)return j.images;var o=[],t=j.orbital,r=e[1],b=e[2],$=+e[4]||1,i=t?2:j.rows||1;j=t?j.footage:j.stitched?1:j.frames;i=+(e[5]||i*j)-$;e=+e[7]||1;for(j=0;j<=i;){o.push(r.replace(b,ac($+j+V,b.length,"0")));j+=e}return o},instances:k(),leader:Y,cost:0},P=k(U);U=navigator.userAgent;var Ia=q.re.ua[0].exec(U)||q.re.ua[1].exec(U)||q.re.ua[2].exec(U),Xb=+Ia[2].split(".").slice(0,2).join(".");Ia=Ia[1]=="MSIE";var sc=!(Ia&&Xb<8),db,B="reel",jb=B+"-overlay",Wb=B+"-indicator",Vb=B+"-preloader",tb=B+"-cached",
Pb=B+"-monitor",Db=B+"-annotation",Ya=B+"-panning",sb=B+"-loading",Fb="frame-",ka=Math,N=ka.round,bb=ka.floor,na=ka.ceil,La=ka.min,gb=ka.max,K=ka.abs,qc=parseInt,Ha=q.math.interpolate,Va="annotations",Wa="area",Ub="auto",Lb="backup",M="backwards",Pa="bit",Kb="brake",Gb="cached",qb="center",Ba="clicked",Qa="clicked_location",Ra="clicked_on",ob="clicked_tier",qa="cwish",J="dimensions",z="fraction",W="frame",L="frames",Ta="hi",rb="hidden",lb="image",fa="images",aa="opening",ra=aa+"_ticks",Sa="lo",xa=
"options",Fa="playing",O="preloaded",Ca="reeling",pb="reeled",Oa="revolution",Eb="revolution_y",za="row",mb="rows",Hb="spacing",Aa="speed",Jb="stage",nb="stitched_shift",Ib="stitched_travel",vb="stopped",ma="style",ba="tempo",Ua="ticks",oa="tier",ha="velocity",pa="vertical",Q=w(B),da=w("pan")+Q,ic="dragstart"+Q,hc="mousedown"+Q,gc="mouseenter"+Q,oc="mouseleave"+da,nc="mousemove"+da,pc="mouseup"+da,fc="mousewheel"+Q,ea="tick"+Q,mc="touchcancel"+da,lc="touchend"+da,bc="touchstart"+Q,kc="touchmove"+
da,V="",E=" ",ia=",",Za="absolute",Mb="block",ua="@CDN@",ya="div",Nb="hand",ub="head",Rb="html",X="id",kb="img",zb="jquery."+B,Da="none",fb="object",cb="preload",hb="string",rc="width",Qb=sc?$b("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):ua+"blank.gif",dc=va(ua+zb+".cur")+ia+"move",cc=va(ua+zb+"-drag.cur")+ia+"move",ec=va(ua+zb+"-drag-down.cur")+ia+"move",la=q.touchy=q.re.touchy_agent.test(U);q.lazy=q.re.lazy_agent.test(U);var jc=la?s:Ia&&Xb<9?1:0,tc=k.cleanData;k.cleanData=function(e){tc(k(e).each(function(){k(this).triggerHandler("clean")}))};
k.extend(k.fn,q.fn);k(q.scan);return q}}(jQuery,window,document)});
