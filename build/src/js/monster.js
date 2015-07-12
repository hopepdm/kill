KISSY.add("kill/monster",function(t,e,i,s){var a={P:"P",B:"B"},h=Hilo.Class.create({constructor:function(t){Hilo.Container.call(this,t),this.idleDir=a.P,this.onGoingPoints=[],this.r=10,this.collisionArea={minX:this.x-this.r,maxX:this.x+this.r,minY:this.y-this.r,maxY:this.y+this.r},s.showHit&&(this.background="rgba(0,255,0,.4)");var i=Hilo.TextureAtlas.createSpriteFrames([["state","0-1",e.get("monster1"),54,64,!0,300],["boss1","0",e.get("boss1"),74,72,!0,300],["walk","2-5",e.get("monster1"),54,64,!0,300],["die","6,1,6,1",e.get("monster1"),54,64,!0,100],["bosswalk","0-3",e.get("bosswalk"),85,85,!0,100]]),h={x:-22,y:-10,w:35,h:40};t.type&&"boss"==t.type&&(this.isboss=!0,h.x=0,h.y=0,h.w=60,h.h=72),this.display=new Hilo.Sprite({y:h.x,x:h.y,frames:i,loop:!0,timeBased:!0}),this.width=h.w,this.height=h.h,this.pivotX=.5*this.width,this.pivotY=.5*this.height,this.scaleX=1,this.scaleY=1,this.frame=0,this.addChild(this.display),this.isboss?(this.lastVx=this.vx=0,this.lastVy=this.vy=0,this.display.goto("bosswalk")):(void 0===t.isMove||t.isMove?(this.lastVx=this.vx=2+Math.random(),this.lastVy=this.vy=2+Math.random(),this.isMove=!0):(this.lastVx=this.vx=0,this.lastVy=this.vy=0,this.isMove=!1),this.display.goto("walk"))},Extends:Hilo.Container,die:function(){var t=this;this.isDie||(this.isDie=!0,this.display.goto("die"),this.display.interval=10,this.onUpdate=null,setTimeout(function(){var i=Hilo.TextureAtlas.createSpriteFrames([["state","0-5",e.get("monsterDie"),38,40,!1,100]]);t.display.removeFromParent(),t.display=new Hilo.Sprite({y:0,x:.5*t.width,pivotX:19,frames:i,loop:!0,timeBased:!0}),t.addChild(t.display),t.display.play(),setTimeout(function(){t.removeFromParent()},1e3)},300))},onUpdate:function(){var t=this;if(t.frame++,t.isboss){if(0==t.vx&&0==t.vy){for(var e=0,s=_game.playerArr.length;s>e;e++)if(!_game.playerArr[e].isDie){t.bossPig=_game.playerArr[e],t.bossDis=0;break}if(s==e)return i.fire("gameover",{}),void 0}if(t.bossPig&&t.bossPig.hitTestObject(t))t.vx=0,t.vy=0,i.fire("playerDied",{player:t.bossPig});else{var a=t.bossPig.x-t.x,h=t.bossPig.y-t.y,r=Math.sqrt(a*a+h*h),o=a/r*1,l=h/r*1;t.vx=o,t.vy=l,t.x+=t.vx,t.y+=t.vy,t.bossDis+=Math.sqrt(t.vx*t.vx+t.vy*t.vy)}}else if(t.isMove){for(var y,v=t.x-t.width/2,g=t.y-t.height/2,x=t.x+t.width/2,b=t.y+t.height/2,n=20,e=0,s=_game.qiangs.length;s>e;e++)if(y=_game.qiangs[e],y.hitTestObject(t)){if(t.x+=n,!y.hitTestObject(t)){t.vx=Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x-=n,t.x-=n,!y.hitTestObject(t)){t.vx=-Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x+=n,t.y+=n,!y.hitTestObject(t)){t.vy=Math.abs(t.vy);break}if(t.y-=n,t.y-=n,!y.hitTestObject(t)){t.vy=-Math.abs(t.vy);break}t.y+=n,t.vx=0,t.vy=0}v=t.x-t.width/2,g=t.y-t.height/2,x=t.x+t.width/2,b=t.y+t.height/2;for(var m,e=0,s=_game.bangArr.length;s>e;e++)if(m=_game.bangArr[e],v<_game.left&&(m.vx=-m.lastVx),g<_game.top&&(t.y=_game.top+t.height/2,m.vy=-m.lastVy),x>_game.right&&(t.x=_game.right-t.width/2,m.vx=-m.lastVx),b>_game.bottom&&(t.y=_game.bottom-t.height/2,m.vy=-m.lastVy),m.hitTestObject(t)){if(t.x+=n,!m.hitTestObject(t)){t.vx=Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x-=n,t.x-=n,!m.hitTestObject(t)){t.vx=-Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x+=n,t.y+=n,!m.hitTestObject(t)){t.vy=Math.abs(t.vy);break}if(t.y-=n,t.y-=n,!m.hitTestObject(t)){t.vy=-Math.abs(t.vy);break}t.y+=n,t.vx=0,t.vy=0}for(var e=0,s=_game.bangArr.length;s>e;e++)m=_game.bangArr[e],m.hitTestObject(t);for(var c=0,s=_game.qiangs.length;s>c;c++)y=_game.qiangs[c],y.hitTestObject(t);e==s&&c==s&&0==t.vx&&0==t.vy&&(t.vx=2+Math.random(),t.vy=2+Math.random()),_game.playerArr.forEach(function(e){e.hitTestObject(t)&&i.fire("playerDied",{player:e})}),this.x+=this.vx,this.y+=this.vy,t.lastVx=t.vx,t.lastVy=t.vy}else{for(var m,n=20,v=t.x-t.width/2,g=t.y-t.height/2,x=t.x+t.width/2,b=t.y+t.height/2,e=0,s=_game.bangArr.length;s>e;e++)if(m=_game.bangArr[e],v<_game.left&&(m.vx=-m.lastVx),g<_game.top&&(t.y=_game.top+t.height/2,m.vy=-m.lastVy),x>_game.right&&(t.x=_game.right-t.width/2,m.vx=-m.lastVx),b>_game.bottom&&(t.y=_game.bottom-t.height/2,m.vy=-m.lastVy),m.hitTestObject(t)){if(t.x+=n,!m.hitTestObject(t)){t.vx=Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x-=n,t.x-=n,!m.hitTestObject(t)){t.vx=-Math.abs(t.vx),t.scaleX=-t.scaleX;break}if(t.x+=n,t.y+=n,!m.hitTestObject(t)){t.vy=Math.abs(t.vy);break}if(t.y-=n,t.y-=n,!m.hitTestObject(t)){t.vy=-Math.abs(t.vy);break}t.y+=n,t.vx=0,t.vy=0}_game.playerArr.forEach(function(e){e.hitTestObject(t)&&i.fire("playerDied",{player:e})})}}});return h},{requires:["kill/resource","kill/mediator","kill/config"]});