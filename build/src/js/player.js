KISSY.add("kill/player",function(t,i,h,e,s){var a=Hilo.Class,l=Hilo.Container,r=Hilo.Sprite,y=(Hilo.Bitmap,window._Player=a.create({Extends:l,constructor:function(t){y.superclass.constructor.call(this,t),s.showHit&&(this.background="rgba(111,0,255,.3)"),this.playerNum=t.playerNum,this.width=this.height=44,this.pivotX=22;var h=i.get("player"+(this.playerNum+1)),e=Hilo.TextureAtlas.createSpriteFrames([["push","0,1",h,51,49,!0,300],["state","2",h,51,49,!0,300],["walk","3,4",h,51,49,!0,300],["win","5,6",h,51,49,!0,300]]);this.display=new r({x:-5,y:-5,frames:e,loop:!0,timeBased:!0}),this.addChild(this.display),this.play("walk"),this.bangArr=_game.bangArr,this.width=41,this.height=39,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height},play:function(t){this._currentAnim!==t&&(this._currentAnim=t,this.display.goto(t))},die:function(){var t=this;if(!this.isDie){this.isDie=!0,this.onUpdate=null,this.display.removeFromParent();var h=Hilo.TextureAtlas.createSpriteFrames([["die","0-7",i.get("playerDie"+(this.playerNum+1)),79,49,!1,200]]);this.display=new r({frames:h,loop:!0,timeBased:!0}),this.addChild(this.display),this.display.play(),setTimeout(function(){t.display.removeFromParent(),e.fire("playerGameOver",{player:t})},2e3)}},getInput:function(t){return h[t+this.playerNum]},onUpdate:function(){var t=this,i=3;this.vy=t.getInput("up")?-i:t.getInput("down")?i:0,this.vx=t.getInput("left")?-i:t.getInput("right")?i:0,this.vx>0?this.scaleX=-1:this.vx<0&&(this.scaleX=1),this.x+=this.vx,this.y+=this.vy,this.x+this.halfWidth>_game.right?this.x=_game.right-this.halfWidth:this.x-this.halfWidth<_game.left&&(this.x=_game.left+this.halfWidth),this.y+this.height>_game.bottom?this.y=_game.bottom-this.height:this.y<_game.top&&(this.y=_game.top);var h=t.getInput("hold");h?this.play("push"):this.vx||this.vy?this.play("walk"):this.play("state"),this.bangArr.forEach(function(i){var e=t.x-t.halfWidth,s=t.x+t.halfWidth,a=t.y,l=t.y+t.height,r=i.x,y=i.x+i.width,n=i.y,o=i.y+i.height,p=20,v=r-p,d=y+p,u=n-p,x=o+p;d>=e&&s>=v&&x>=a&&l>=u&&(i["lastNear"+t.playerNum]=t),i.hitTestObject(t)?(a!=o&&l!=n&&(s>r&&r>e?((t.vx>0||i.lastVx<0)&&(t.x=r-t.halfWidth),h&&t.vx>0&&(t.x+=t.vx,i.vx+=s-r)):y>e&&s>y&&((t.vx<0||i.lastVx>0)&&(t.x=y+t.halfWidth),h&&t.vx<0&&(t.x+=t.vx,i.vx+=e-y))),e!=y&&s!=r&&(l>n&&n>a?((t.vy>0||i.lastVy<0)&&(t.y=n-t.height),h&&t.vy>0&&(t.y+=t.vy,i.vy+=l-n)):o>a&&l>o&&((t.vy<0||i.lastVy>0)&&(t.y=o),h&&t.vy<0&&(t.y+=t.vy,i.vy+=a-o)))):i["lastNear"+t.playerNum]==t&&(h?(a!=o&&l!=n&&(e>=y&&t.vx>0?i.vx+=t.vx:r>=s&&t.vx<0&&(i.vx+=t.vx)),e!=y&&s!=r&&(a>=o&&t.vy>0?i.vy+=t.vy:n>=l&&t.vy<0&&(i.vy+=t.vy))):i["lastNear"+t.playerNum]=!1)})}}));return e.on("playerDied",function(t){s.god||t.player.die()}),y},{requires:["kill/resource","kill/input","kill/mediator","kill/config"]});