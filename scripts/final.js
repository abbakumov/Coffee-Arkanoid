var GameField;GameField=function(){function e(e){this.size=e||{x:12,y:16},this.fieldView=new ViewField(this.size),this.cells=this._createCells()}return e.prototype._createCells=function(){var e,t,l,s,i;for(i=[],e=l=0,s=this.size.x;s>=0?s>l:l>s;e=s>=0?++l:--l)i.push(function(){var e,l,s;for(s=[],t=e=0,l=this.size.y;l>=0?l>e:e>l;t=l>=0?++e:--e)s.push({status:0,gameObject:null});return s}.call(this));return i},e.prototype.getCellStatus=function(e){return this.checkCell(e)?this.cells[e.x][e.y].status:-1},e.prototype.getCellObject=function(e){return this.checkCell(e)?this.cells[e.x][e.y].gameObject:-1},e.prototype.clearCell=function(e){var t;return this.checkCell(e)?(t=this.cells[e.x][e.y],t.status=0,t.gameObject=null,this.fieldView.setCellStatus({x:e.x,y:e.y},0),!0):!1},e.prototype.setObjectToCell=function(e,t){var l;return this.checkCell(t)?(l=this.cells[t.x][t.y],l.status=1,l.gameObject=e,this.fieldView.setCellStatus({x:t.x,y:t.y},1),!0):!1},e.prototype.checkCell=function(e){return this.cells[e.x]&&this.cells[e.x][e.y]?!0:!1},e}();
var GameObject;GameObject=function(){function t(t,e){this.position=t,this.gameField=e,this.spawn()}return t.prototype.spawn=function(){return this.gameField.setObjectToCell(this,this.position)},t.prototype.destroy=function(){return this.gameField.clearCell(this.position)},t.prototype.move=function(){return!1},t.prototype.strike=function(){return!1},t}();
var Ball,__hasProp={}.hasOwnProperty,__extends=function(t,o){function i(){this.constructor=t}for(var e in o)__hasProp.call(o,e)&&(t[e]=o[e]);return i.prototype=o.prototype,t.prototype=new i,t.__super__=o.prototype,t};Ball=function(t){function o(t,i,e){this.position=t,this.gameField=i,this.vector=e,o.__super__.constructor.apply(this,arguments)}return __extends(o,t),o.prototype.move=function(t){var o;return o={x:this.position.x+t.x,y:this.position.y+t.y},this.gameField.checkCell(o)?this.step(o):void 0},o.prototype.vectorMove=function(){var t;return t=this._checkDirection(),0===t?this.step():(this._attack(t),this._rebound(t),this.move())},o.prototype.step=function(t){return t||(t={x:this.position.x+this.vector.x,y:this.position.y+this.vector.y}),this.destroy(),this.position=t,this.spawn()},o.prototype._checkDirection=function(){var t,o,i,e,r;for(o=[{x:this.vector.x,y:0},{x:0,y:this.vector.y},this.vector],e=0,r=o.length;r>e;e++)if(i=o[e],t={x:this.position.x+i.x,y:this.position.y+i.y},0!==this.gameField.getCellStatus(t))return t;return 0},o.prototype._rebound=function(t){var o;return o={x:t.x-this.position.x,y:t.y-this.position.y},0!==o.x&&(this.vector.x*=-1),0!==o.y?this.vector.y*=-1:void 0},o.prototype._attack=function(t){var o;return o=this.gameField.getCellObject(t),null!==o&&-1!==o&&o.strike?o.strike():void 0},o}(GameObject);
var Brick,__hasProp={}.hasOwnProperty,__extends=function(t,r){function o(){this.constructor=t}for(var e in r)__hasProp.call(r,e)&&(t[e]=r[e]);return o.prototype=r.prototype,t.prototype=new o,t.__super__=r.prototype,t};Brick=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return __extends(r,t),r.prototype.strike=function(){return this.destroy()},r}(GameObject);
var Player,__hasProp={}.hasOwnProperty,__extends=function(t,o){function i(){this.constructor=t}for(var e in o)__hasProp.call(o,e)&&(t[e]=o[e]);return i.prototype=o.prototype,t.prototype=new i,t.__super__=o.prototype,t};Player=function(t){function o(t,i,e){this.position=t,this.gameField=i,this.size=e,o.__super__.constructor.apply(this,arguments)}return __extends(o,t),o.prototype.spawn=function(){var t,o,i;for(t=o=0,i=this.size;i>=0?i>=o:o>=i;t=i>=0?++o:--o)if(!this.gameField.setObjectToCell(this,{y:this.position.y,x:this.position.x+t}))return!1;return!0},o.prototype.destroy=function(){var t,o,i,e;for(e=[],t=o=0,i=this.size;i>=0?i>=o:o>=i;t=i>=0?++o:--o)e.push(this.gameField.clearCell({y:this.position.y,x:this.position.x+t}));return e},o.prototype.move=function(t){var o,i,e;for(o=i=0,e=this.size;e>=0?e>=i:i>=e;o=e>=0?++i:--i)if(!this.gameField.checkCell({y:this.position.y,x:this.position.x+o+t}))return!1;return this.destroy(),this.position.x+=t,this.spawn()},o.prototype._moveObjectssOnPlatform=function(){},o}(GameObject);
var ViewCell,ViewField;ViewField=function(){function t(t){this.size=t,this._initCells()}return t.prototype._initCells=function(){var t,e,i,n,s,r;for(this.cells=[],r=[],i=n=0,s=this.size.y;s>=0?s>n:n>s;i=s>=0?++n:--n)r.push(function(){var n,s,r;for(r=[],e=n=0,s=this.size.x;s>=0?s>n:n>s;e=s>=0?++n:--n)t=new ViewCell({y:i,x:e}),t.deactivate(),r.push(this.cells.push(t));return r}.call(this));return r},t.prototype._getCell=function(){var t;if(!(arguments.length>2||0===arguments.length||(t=function(){switch(arguments.length){case 1:return arguments[0];case 2:return{x:arguments[0],y:arguments[1]}}}.apply(this,arguments),t.x>this.size.x||t.y>this.size.y)))return this.cells[t.y*this.size.x+t.x]},t.prototype.setCellStatus=function(t,e){return t=this._getCell(t),e?t.activate():t.deactivate()},t.prototype.clear=function(){var t,e,i,n,s;for(n=this.cells,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.deactivate());return s},t}(),ViewCell=function(){function t(t){this.DOMcell=document.querySelectorAll(".game-field tr")[t.y].children[t.x]}return t.prototype.activate=function(){return this.DOMcell.className="active"},t.prototype.deactivate=function(){return this.DOMcell.className=""},t}();