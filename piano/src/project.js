require=function z(t,o,c){function e(n,s){if(!o[n]){if(!t[n]){var a="function"==typeof require&&require;if(!s&&a)return a(n,!0);if(i)return i(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var l=o[n]={exports:{}};t[n][0].call(l.exports,function(z){var o=t[n][1][z];return e(o?o:z)},l,l.exports,z,t,o,c)}return o[n].exports}for(var i="function"==typeof require&&require,n=0;n<c.length;n++)e(c[n]);return e}({AudioManage:[function(z,t,o){"use strict";cc._RFpush(t,"8ccb2U1o7VBy6hpgU1fI8CK","AudioManage"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){this.audioPool=[]},playEffect:function(z){"false"!=ls.getItem(wl.effectStatus)&&z&&this._playSFX(z)},_playSFX:function(z){var t=cc.audioEngine.play(z,!1);this.audioPool.push(t)},update:function(){for(var z=0;z<this.audioPool.length;z++){var t=this.audioPool[z],o=cc.audioEngine.getState(t);o<0&&(this.audioPool.splice(z,1),z--)}}}),cc._RFpop()},{}],Block:[function(z,t,o){"use strict";cc._RFpush(t,"ed0a0L10slBzIQxpaSwZTuB","Block"),cc.Class({"extends":cc.Component,properties:{_type:null,_gameScript:null,_zz:null},init:function(z,t,o){this._zz=o,this._type=z,this._gameScript=t,this.node.on("touchstart",function(){if(!this._gameScript.isFail)if("white"===z)wl.log("white"),this.node.opacity=255,this._gameScript.isStart=!1,this._gameScript.isFail=!0,this.node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.tintTo(.1,255,0,0),cc.tintTo(.1,255,255,255)),4),cc.callFunc(function(){cc.director.loadScene("load")})));else{var t=this.node.name.split("#")[0];0==t&&(this._gameScript.isStart=!0),parseInt(t)!==this._gameScript._curTouchRow+1?wl.log("hahaha"):(this._gameScript.updateBlock(),this.node.color=wl.gray,cc.log(this._zz),0!==this._zz&&audio.playEffect(res[this._zz]))}}.bind(this))}}),cc._RFpop()},{}],Game:[function(z,t,o){"use strict";cc._RFpush(t,"97e4dwINLJO/oJrb/NDOZ+H","Game"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){size=cc.winSize,audio=cc.find("audioManage").getComponent("AudioManage"),this.init()},init:function(){},btnCallAudio:function(z){audio.playEffect(res.zz01)}}),cc._RFpop()},{}],Load:[function(z,t,o){"use strict";cc._RFpush(t,"a04e5PVkaFDjZb6wkj8UHG6","Load"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){cc.log("loadscene"),this.count=0,this._asset=["music/Piano/zz"],this._assetLen=88,this._load()},_load:function(){for(var z=1;z<=88;z++){var t="0";t=z<10?"0"+z:""+z;var o="music/Piano/zz"+t;cc.loader.loadRes(o,this._loadCallBack.bind(this))}},_loadCallBack:function(z,t){if(z)return void cc.log("Error url ["+z+"]");var o=t.substring(37,41);res[o]=t,this.count++,this.count>=this._assetLen&&(cc.log(res),cc.director.loadScene("game",function(){cc.log("load场景跳转成功")}))}}),cc._RFpop()},{}],MovePanel:[function(z,t,o){"use strict";cc._RFpush(t,"b128fFL3b9JebFQJ3MPWUDi","MovePanel");var c=null,e=null;cc.Class({"extends":cc.Component,properties:{blockPrefab:cc.Node,_curBottomRow:null,_newTopRow:null,_curTouchRow:-1,_startPosition:null,_soundArr:null,isStart:!1,_count:0,isFail:!1},onLoad:function(){this._delectNum=0,this.scBlock=0,this.black=null,c=this.blockPrefab.width,e=c/2,this._curBottomRow=0,this._newTopRow=9,this._startPosition=this.node.position,this._count=0;var z="zz46,zz51,zz53,zz55,zz53,zz51,zz55,zz53,zz46,zz46,zz43,zz48,zz50,zz51,zz50,zz48,zz51,zz50,zz43,zz46,zz48,zz46,zz46,zz44,zz44,zz51,zz43,zz43,zz53,zz51,zz53,zz55,zz56,zz55,zz55,zz53,zz51,zz48,zz53,zz46,zz51,zz53,zz55,zz53,zz51,zz55,zz53,zz51,zz46,zz55,zz48,zz50,zz51,zz50,zz48,zz51,zz50,zz43,zz46,zz48,zz46,zz46,zz44,zz44,zz51,zz53,zz55,zz51,zz48,zz50,zz51,zz48,zz51,zz60,zz58,zz58,zz53,zz51,zz58,zz55,zz55,zz53,zz51,zz50,zz51,zz50,zz51,zz48,zz43,zz48     zz43,zz43,zz44,zz46,zz46,zz44,zz43,zz41,zz39,zz39,zz41,zz43,zz43,zz41,zz41,zz43,zz43,zz44,zz46,zz46,zz44,zz43,zz41,zz39,zz39,zz41,zz43,zz41,zz39,zz39,zz41,zz41,zz43,zz39,zz41,zz43,zz44,zz43,zz39,zz41,zz43,zz44,zz43,zz41,zz39,zz41,szz34,zz43,zz43,zz44,zz46,zz46,zz44,zz43,zz41,zz39,zz39,zz41,zz43,zz41,zz39,zz39,zz46,zz46,zz43,zz41,zz43,zz36,zz41,zz43,zz46,zz43,zz41,zz46,zz46,zz43,zz41,zz43,zz36,zz41,zz43,zz46,zz41,zz39,zz39,zz41,zz43,zz46,zz48,zz46,zz43,zz46,zz43,zz43,zz41,zz41,zz39,zz41,zz39,zz41,zz39,zz41,zz41,zz43,zz46,zz43,zz43,zz46,zz46,zz43,zz41,zz43,zz36,zz41,zz43,zz46,zz41,zz46,zz46,zz43,zz41,zz43,zz34,zz41,zz43,zz46,zz41,zz39,zz39,zz41,zz43,zz46,zz48,zz46,zz43,zz46,zz43,zz43,zz41,zz41,zz34,zz43,zz41,zz41,zz39";this._soundArr=z.split(","),cc.log(this._soundArr),this.init()},init:function(){for(var z=0;z<this._newTopRow;z++)this.addBlock(z)},addBlock:function(z){for(var t=Math.floor(4*Math.random()),o=0;o<4;o++){var i=cc.instantiate(this.blockPrefab);t===o?(i.color=wl.black,i.getComponent("Block").init("black",this,this._soundArr[this._count++]),cc.log(this._count)):(i.getComponent("Block").init("white",this,0),i.opacity=0),i.parent=this.node,i.name=z+"#"+o,i.position=cc.pAdd(cc.pMult(cc.p(o,z),c),cc.p(e,e))}},move:function(){var z=cc.p(this._startPosition.x,this._startPosition.y+(this._curBottomRow+1)*-c);this.node.runAction(cc.sequence(cc.moveTo(.2,z),cc.callFunc(this.updateBlock.bind(this))))},updateBlock:function(){this.addBlock(this._newTopRow),this._newTopRow++,this._curTouchRow++,this._curBottomRow++},update:function(){if(this.isStart){this.node.y-=c/15;for(var z=0;z<4;z++){var t=this.node.getChildByName(this._delectNum+"#"+z),o=this.node.convertToWorldSpace(t.getPosition());if(o.y<0&&!t.color.equals(wl.black))wl.destroyNode(this.node.getChildByName(this._delectNum+"#"+z)),this.scBlock++,4==this.scBlock&&(this._delectNum++,this.scBlock=0);else if(o.y<0&&t.color.equals(wl.black)){this.isStart=!1;cc.p(this.node.x,this.node.y+c);this.node.runAction(cc.sequence(cc.moveBy(.2,0,e),cc.callFunc(function(){cc.log(t),t.runAction(cc.blink(2,3))},this)))}}}}}),cc._RFpop()},{}],WL:[function(z,t,o){"use strict";cc._RFpush(t,"eaa693ZpzND67OBVBVcwy/H","WL"),window.ls=cc.sys.localStorage,window.size=null,window.audio=null,window.res={},window.wl={white:cc.color(255,255,255,255),yellow:cc.color(255,255,0,255),blue:cc.color(0,0,255,255),green:cc.color(0,255,0,255),red:cc.color(255,0,0,255),magenta:cc.color(255,0,255,255),black:cc.color(0,0,0,255),orange:cc.color(255,127,0,255),gray:cc.color(166,166,166,255),game:"game",isShowLog:!0,effectStatus:"effectStatus",musicStatus:"musicStatus",initData:function(){ls.getItem(wl.game)||(ls.setItem(wl.game,"true"),ls.setItem(wl.effectStatus,"true"),ls.setItem(wl.musicStatus,"true"))},log:function(){if(wl.isShowLog!==!1){for(var z="#:",t=0;t<arguments.length;t++)z+=arguments[t]+";";cc.log(z)}},getItemInt:function(z){return parseInt(ls.getItem(z),10)},getItemFloat:function(z){return parseFloat(ls.getItem(z),10)},getRandomInt:function(z,t){return Math.floor(Math.random()*(t-z+1)+z)},getRandomFloat:function(z,t){var o=Math.random()*(t-z+1)+z;return Math.floor(100*o)/100},destroyNode:function(z){z&&z.parent&&(z.parent.removeChild(z),z.destroy())},setInteractable:function(z,t){z.getComponent(cc.Button).interactable=t},playMusicandEffect:function(z){cc.find("AudioManage").getComponent("audioManage").playEffect(z)}},cc._RFpop()},{}],aaa:[function(z,t,o){"use strict";cc._RFpush(t,"effb54N+AhMjaC4b3rqYSqW","aaa"),cc._RFpop()},{}]},{},["AudioManage","Game","Load","MovePanel","WL","Block","aaa"]);