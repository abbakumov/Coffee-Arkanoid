var Game;Game=function(){function t(){this.init(),this.start()}return t.prototype.init=function(){return this.gameField=new GameField,this.ball=new Ball({x:5,y:14},this.gameField,{x:-1,y:-1}),this.player=new Player({x:3,y:15},this.gameField,5),this.initInputManager(),this.initBricks()},t.prototype.start=function(t){var n;return null==t&&(t=5),n=1e3/t,setInterval(function(t){return function(){return t.gameStep()}}(this),n)},t.prototype.gameStep=function(){return this.ball.vectorMove()},t.prototype.initBricks=function(){var t,n,e,i;for(i=[],t=e=0;11>=e;t=++e)i.push(function(){var e,i;for(i=[],n=e=0;6>=e;n=++e)i.push(new Brick({x:t,y:n},this.gameField));return i}.call(this));return i},t.prototype.initInputManager=function(){return this.inputManager=new InputManager,this.inputManager.on("move",this.move.bind(this))},t.prototype.move=function(t){return this.player.move(t)},t}(),window.onload=function(){return new Game};
var GameField;GameField=function(){function e(e){this.size=e||{x:12,y:16},this.fieldView=new ViewField(this.size),this.cells=this._createCells()}return e.prototype._createCells=function(){var e,t,l,s,i;for(i=[],e=l=0,s=this.size.x;s>=0?s>l:l>s;e=s>=0?++l:--l)i.push(function(){var e,l,s;for(s=[],t=e=0,l=this.size.y;l>=0?l>e:e>l;t=l>=0?++e:--e)s.push({status:0,gameObject:null});return s}.call(this));return i},e.prototype.getCellStatus=function(e){return this.checkCell(e)?this.cells[e.x][e.y].status:-1},e.prototype.getCellObject=function(e){return this.checkCell(e)?this.cells[e.x][e.y].gameObject:-1},e.prototype.clearCell=function(e){var t;return this.checkCell(e)?(t=this.cells[e.x][e.y],t.status=0,t.gameObject=null,this.fieldView.setCellStatus({x:e.x,y:e.y},0),!0):!1},e.prototype.setObjectToCell=function(e,t){var l;return this.checkCell(t)?(l=this.cells[t.x][t.y],l.status=1,l.gameObject=e,this.fieldView.setCellStatus({x:t.x,y:t.y},1),!0):!1},e.prototype.checkCell=function(e){return this.cells[e.x]&&this.cells[e.x][e.y]?!0:!1},e}();
var GameObject;GameObject=function(){function t(t,e){this.position=t,this.gameField=e,this.spawn()}return t.prototype.spawn=function(){return this.gameField.setObjectToCell(this,this.position)},t.prototype.destroy=function(){return this.gameField.clearCell(this.position)},t.prototype.move=function(){return!1},t.prototype.strike=function(){return!1},t}();
var Ball,__hasProp={}.hasOwnProperty,__extends=function(t,o){function i(){this.constructor=t}for(var e in o)__hasProp.call(o,e)&&(t[e]=o[e]);return i.prototype=o.prototype,t.prototype=new i,t.__super__=o.prototype,t};Ball=function(t){function o(t,i,e){this.position=t,this.gameField=i,this.vector=e,o.__super__.constructor.apply(this,arguments)}return __extends(o,t),o.prototype.move=function(t){var o;return o={x:this.position.x+t.x,y:this.position.y+t.y},this.gameField.checkCell(o)?this.step(o):void 0},o.prototype.vectorMove=function(){var t;return t=this._checkDirection(),0===t?this.step():(this._attack(t),this._rebound(t),this.vectorMove())},o.prototype.step=function(t){return t||(t={x:this.position.x+this.vector.x,y:this.position.y+this.vector.y}),this.destroy(),this.position=t,this.spawn()},o.prototype._checkDirection=function(){var t,o,i,e,r;for(o=[{x:this.vector.x,y:0},{x:0,y:this.vector.y},this.vector],e=0,r=o.length;r>e;e++)if(i=o[e],t={x:this.position.x+i.x,y:this.position.y+i.y},0!==this.gameField.getCellStatus(t))return t;return 0},o.prototype._rebound=function(t){var o;return o={x:t.x-this.position.x,y:t.y-this.position.y},0!==o.x&&(this.vector.x*=-1),0!==o.y?this.vector.y*=-1:void 0},o.prototype._attack=function(t){var o;return o=this.gameField.getCellObject(t),null!==o&&-1!==o&&o.strike?o.strike():void 0},o}(GameObject);
var Brick,__hasProp={}.hasOwnProperty,__extends=function(t,r){function o(){this.constructor=t}for(var e in r)__hasProp.call(r,e)&&(t[e]=r[e]);return o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype,t};Brick=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return __extends(r,t),r.prototype.strike=function(){return this.destroy()},r}(GameObject);
var Player,__hasProp={}.hasOwnProperty,__extends=function(t,i){function o(){this.constructor=t}for(var e in i)__hasProp.call(i,e)&&(t[e]=i[e]);return o.prototype=i.prototype,t.prototype=new o,t.__super__=i.prototype,t};Player=function(t){function i(t,o,e){this.position=t,this.gameField=o,this.size=e,i.__super__.constructor.apply(this,arguments)}return __extends(i,t),i.prototype.spawn=function(){var t,i,o;for(t=i=0,o=this.size;o>=0?o>=i:i>=o;t=o>=0?++i:--i)if(!this.gameField.setObjectToCell(this,{y:this.position.y,x:this.position.x+t}))return!1;return!0},i.prototype.destroy=function(){var t,i,o,e;for(e=[],t=i=0,o=this.size;o>=0?o>=i:i>=o;t=o>=0?++i:--i)e.push(this.gameField.clearCell({y:this.position.y,x:this.position.x+t}));return e},i.prototype.move=function(t){var i,o,e;for(i=o=0,e=this.size;e>=0?e>=o:o>=e;i=e>=0?++o:--o)if(!this.gameField.checkCell({y:this.position.y,x:this.position.x+i+t}))return!1;return this._moveObjectOnPlatform(t),this.destroy(),this.position.x+=t,this.spawn()},i.prototype._moveObjectOnPlatform=function(t){var i,o,e,s,r;for(r=[],o=e=0,s=this.size;s>=0?s>=e:e>=s;o=s>=0?++e:--e){if(i=this.gameField.getCellObject({x:this.position.x+o,y:this.position.y-1}),-1!==i&&null!==i){i.move({x:t,y:0});break}r.push(void 0)}return r},i}(GameObject);
var InputManager;InputManager=function(){function n(){this.events={},this.listen()}return n.prototype.on=function(n,t){return this.events[n]||(this.events[n]=[]),this.events[n].push(t)},n.prototype.run=function(n,t){var e;return e=this.events[n],e?e.forEach(function(n){return n(t)}):void 0},n.prototype.listen=function(){var n;return n={39:1,37:-1,68:1,65:-1},document.addEventListener("keydown",function(t){return function(e){var r;return r=n[e.which],r?(e.preventDefault(),t.run("move",r)):void 0}}(this))},n}();
var ViewCell,ViewField;ViewField=function(){function t(t){this.size=t,this._initCells()}return t.prototype._initCells=function(){var t,e,i,n,s,r;for(this.cells=[],r=[],i=n=0,s=this.size.y;s>=0?s>n:n>s;i=s>=0?++n:--n)r.push(function(){var n,s,r;for(r=[],e=n=0,s=this.size.x;s>=0?s>n:n>s;e=s>=0?++n:--n)t=new ViewCell({y:i,x:e}),t.deactivate(),r.push(this.cells.push(t));return r}.call(this));return r},t.prototype._getCell=function(){var t;if(!(arguments.length>2||0===arguments.length||(t=function(){switch(arguments.length){case 1:return arguments[0];case 2:return{x:arguments[0],y:arguments[1]}}}.apply(this,arguments),t.x>this.size.x||t.y>this.size.y)))return this.cells[t.y*this.size.x+t.x]},t.prototype.setCellStatus=function(t,e){return t=this._getCell(t),e?t.activate():t.deactivate()},t.prototype.clear=function(){var t,e,i,n,s;for(n=this.cells,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.deactivate());return s},t}(),ViewCell=function(){function t(t){this.DOMcell=document.querySelectorAll(".game-field tr")[t.y].children[t.x]}return t.prototype.activate=function(){return this.DOMcell.className="active"},t.prototype.deactivate=function(){return this.DOMcell.className=""},t}();