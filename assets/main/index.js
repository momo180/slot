System.register("chunks:///_virtual/laba.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,r,n,o,l,a,u,c,s,f,p,b,h,y,m,g,w,v,k;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Prefab,u=e.Node,c=e.NodePool,s=e.Sprite,f=e.Label,p=e.Button,b=e.AudioSource,h=e.AudioClip,y=e.instantiate,m=e.tween,g=e.Vec3,w=e.Quat,v=e.Tween,k=e.Component}],execute:function(){var S,P,L,d,z,B,C,N,M,O,A,x,R,T,E,I,_,j,D,F,H,Y,G,J,Q,V,q,K,U,W,X,Z,$,ee,te,ie,re,ne,oe,le,ae,ue,ce,se,fe,pe,be,he,ye,me,ge,we,ve,ke,Se,Pe,Le,de,ze,Be,Ce,Ne,Me;o._RF.push({},"288b9wy+9JGL4MRtYC4gtYr","laba",void 0);var Oe=l.ccclass,Ae=l.property,xe=100,Re=0,Te=!0,Ee=[],Ie=250,_e=-200,je=!1,De=0,Fe=3,He=-1;e("Test",(S=Oe("Test"),P=Ae(a),L=Ae(u),d=Ae(c),z=Ae(u),B=Ae(u),C=Ae(s),N=Ae(s),M=Ae(s),O=Ae(f),A=Ae(f),x=Ae(u),R=Ae(u),T=Ae(p),E=Ae(u),I=Ae(p),_=Ae(u),j=Ae(u),D=Ae(p),F=Ae(b),H=Ae(h),Y=Ae(b),G=Ae(h),J=Ae(b),Q=Ae(h),V=Ae(b),q=Ae(h),K=Ae(b),U=Ae(h),W=Ae(b),X=Ae(h),S((ee=t(($=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,r(n(t),"numLayoutPrefab",ee,n(t)),r(n(t),"allLayoutNode",te,n(t)),r(n(t),"prefabPool",ie,n(t)),r(n(t),"winParticle",re,n(t)),r(n(t),"winParticle2",ne,n(t)),r(n(t),"light1",oe,n(t)),r(n(t),"light2",le,n(t)),r(n(t),"light3",ae,n(t)),r(n(t),"moneyPlayerLabel",ue,n(t)),r(n(t),"moneyBetLabel",ce,n(t)),r(n(t),"rocker",se,n(t)),r(n(t),"moneyLack",fe,n(t)),r(n(t),"moneyLackButton",pe,n(t)),r(n(t),"kPic",be,n(t)),r(n(t),"kButton",he,n(t)),r(n(t),"tip",ye,n(t)),r(n(t),"rulue",me,n(t)),r(n(t),"rulueButton",ge,n(t)),r(n(t),"betSource",we,n(t)),r(n(t),"betClip",ve,n(t)),r(n(t),"rollSource",ke,n(t)),r(n(t),"rollClip",Se,n(t)),r(n(t),"moneySource",Pe,n(t)),r(n(t),"moneyClip",Le,n(t)),r(n(t),"winSource",de,n(t)),r(n(t),"winClip",ze,n(t)),r(n(t),"loseSource",Be,n(t)),r(n(t),"loseClip",Ce,n(t)),r(n(t),"fireSource",Ne,n(t)),r(n(t),"fireClip",Me,n(t)),t}i(t,e);var o=t.prototype;return o.onLoad=function(){this.prefabPool=new c,Ee=[];var e=y(this.numLayoutPrefab);this.eachHeight=e.height/11,this.prefabPool.put(e),Fe=3,this.moneyPlayerLabel.string=xe.toString(),this.moneyBetLabel.string=Re.toString()},o.getNumStr=function(){var e=Math.floor(999*Math.random())+1;if((Math.floor(3*Math.random())+1)%3==0){var t=(Math.floor(9*Math.random())+1).toString();e=parseInt(t+t+t)}var i=(Array(3).join("0")+e).slice(-3),r=Array.from(i),n=Array.from(new Set(r));return 3!=(Fe=n.length)&&(r[0]==r[1]&&r[1]==r[2]||r[0]==r[1]||r[0]==r[2]?He=Number(r[0]):r[0]==r[1]||r[1]==r[2]?He=Number(r[1]):r[1]!=r[2]&&r[0]!=r[2]||(He=Number(r[2]))),i},o.tipBtn=function(){this.rulue.active=!0},o.rulueBtn=function(){this.rulue.active=!1},o.startBtn=function(){if(1==Te&&Re>0)if(v.stopAll(),this.rollSource.playOneShot(this.rollClip,1),xe<Re)this.hideRocker(),this.moneyLack.active=!0;else{xe-=Re,this.moneyPlayerLabel.string=xe.toString();var e=m(this.rocker),t=new w;w.fromEuler(t,-30,0,0);var i=new w;w.fromEuler(i,0,0,0),e.to(.1,{rotation:t}).delay(.05).to(.1,{rotation:i}),e.start(),He=-1,this.winParticle.active=!1,this.winParticle2.active=!1,this.allLayoutNode.active=!0,Te=!1,Fe=3,je=!1,this.allLayoutNode.removeAllChildren();for(var r=0;r<Ee.length;r++)Ee[r].setPosition(0,0),this.prefabPool.put(Ee[r]);Ee=[];var n=this.getNumStr(),o=Number(n);if(!isNaN(o)){for(var l=0;l<n.length;l++)Ee.push(this.getNewPrefab());for(var a=0;a<n.length;a++)Ee[a].position=new g(Ee[a].position.x,Math.floor(250*Math.random())-200,0),this.roll(n[a],Ee[a],n)}}},o.moneyBetBtn=function(){if(xe>0){if(this.moneyLack.active=!1,xe<Re)this.hideRocker(),this.moneyLack.active=!0;else if(this.betSource.playOneShot(this.betClip,1),0==this.rocker.active){this.rocker.active=!0;for(var e=m(this.rocker),t=1;t<5;t++)e.to(.02,{position:new g(this.rocker.position.x,this.rocker.position.y+10*t,0)},{easing:"backIn"});e.start()}Re<xe?(Re+=10,this.moneyBetLabel.string=Re.toString()):(Re=0,this.moneyBetLabel.string=Re.toString(),this.hideRocker())}else this.moneyLack.active=!0},o.hideRocker=function(){this.rocker.active=!1,this.rocker.position=new g(this.rocker.position.x,-140.305,0)},o.stopBtn=function(){console.log("按下暫停"),je=!0,console.log("prefabArray:",Ee),Ee.forEach((function(e,t){e.position=new g(e.position.x,e.position.y,0)}))},o.moneyLackBtn=function(){Re=0,this.moneyBetLabel.string=Re.toString(),this.kPic.active=!0;var e=this;if(xe<100){this.moneySource.playOneShot(this.moneyClip,1);for(var t=function(t){setTimeout((function(){xe+=10,e.moneyPlayerLabel.string=xe.toString(),5==t&&e.kBtn()}),1e3*t)},i=1;i<=5;i++)t(i)}},o.kBtn=function(){this.kPic.active=!1,this.moneyLack.active=!1},o.roll=function(e,t,i){for(var r=this,n=t.position.y,o=t.position.y,l=0,a=0;a<500;a++)setTimeout((function(){if(l++,o<=n&&n<Ie?(o=n,n++):o<n&&n==Ie&&n>_e||o>n&&n<=Ie&&n>_e?(o=n,n--):o>n&&n==_e&&n<Ie&&(o=n,n++),0==je&&(t.position=new g(t.position.x,n,0),500==l))for(var a=function(n){setTimeout((function(){De++,t.position=new g(t.position.x,e>5?50*e-(250+20*n):50*e-(250-20*n),0),18==De&&r.judge(i)}),10*(6-n))},u=5;u>=0;u--)a(u)}),3*a)},o.judge=function(e){this.rollSource.stop();var t=this;if(3!=Fe){this.winSource.playOneShot(this.winClip,1);var i=new w;w.fromEuler(i,0,100,0);var r=new w;w.fromEuler(r,0,0,0);for(var n=0;n<3;n++)if(e[n]==He){for(var o=m(t["light"+(n+1)].node),l=0;l<20;l++)o.to(.1,{rotation:i}).to(.1,{rotation:r});o.start()}if(1==Fe){this.fireSource.playOneShot(this.fireClip,1),this.winParticle.active=!0,this.winParticle2.active=!0;var a=m(t.winParticle),u=m(t.winParticle2),c=.02;a.show().to(c,{position:new g(0,150,0)});for(var s=1;s<10;s++)a.to(c,{position:new g(0+10*s,150+10*s,0)},{easing:"backOut"});for(var f=10;f<20;f++)a.to(c,{position:new g(0+10*f,150+10*(20-f),0)},{easing:"backIn"});for(var p=19;p<100;p++)a.to(c,{position:new g(0+(190+p),150+10*(20-p),0)},{easing:"backIn"});a.to(c,{position:new g(0,150,0)}).delay(2).hide().start();u.show().to(c,{position:new g(0,150,0)});for(var b=1;b<10;b++)u.to(c,{position:new g(0-10*b,150+10*b,0)},{easing:"backOut"});for(var h=10;h<20;h++)u.to(c,{position:new g(0-10*h,150+10*(20-h),0)},{easing:"backOut"});for(var y=19;y<100;y++)u.to(c,{position:new g(0-(190+y),150+10*(20-y),0)},{easing:"backOut"});u.to(c,{position:new g(0,150,0)}).delay(2),u.hide(),u.start(),xe+=3*Re,this.moneyPlayerLabel.string=xe.toString()}else xe+=2*Re,this.moneyPlayerLabel.string=xe.toString()}else this.loseSource.playOneShot(this.loseClip,1);Te=!0,De=0},o.getNewPrefab=function(){var e=null;return e=this.prefabPool.size()>0?this.prefabPool.get():y(this.numLayoutPrefab),this.allLayoutNode.addChild(e),e},t}(k)).prototype,"numLayoutPrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t($.prototype,"allLayoutNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t($.prototype,"prefabPool",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=t($.prototype,"winParticle",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t($.prototype,"winParticle2",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),oe=t($.prototype,"light1",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),le=t($.prototype,"light2",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ae=t($.prototype,"light3",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ue=t($.prototype,"moneyPlayerLabel",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ce=t($.prototype,"moneyBetLabel",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),se=t($.prototype,"rocker",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),fe=t($.prototype,"moneyLack",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),pe=t($.prototype,"moneyLackButton",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),be=t($.prototype,"kPic",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),he=t($.prototype,"kButton",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ye=t($.prototype,"tip",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),me=t($.prototype,"rulue",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ge=t($.prototype,"rulueButton",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),we=t($.prototype,"betSource",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ve=t($.prototype,"betClip",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ke=t($.prototype,"rollSource",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Se=t($.prototype,"rollClip",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Pe=t($.prototype,"moneySource",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Le=t($.prototype,"moneyClip",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),de=t($.prototype,"winSource",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ze=t($.prototype,"winClip",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Be=t($.prototype,"loseSource",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ce=t($.prototype,"loseClip",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ne=t($.prototype,"fireSource",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Me=t($.prototype,"fireClip",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=$))||Z));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./laba.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});