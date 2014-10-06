var GameField;GameField=function(){function t(t){this.size=t||{x:12,y:16},this.fieldView=new ViewField(this.size),this.cells=this._createCells()}return t.prototype._createCells=function(){var t,e,s,l,i;for(i=[],t=s=0,l=this.size.x;l>=0?l>s:s>l;t=l>=0?++s:--s)i.push(function(){var t,s,l;for(l=[],e=t=0,s=this.size.y;s>=0?s>t:t>s;e=s>=0?++t:--t)l.push({status:0,gameObject:null});return l}.call(this));return i},t.prototype.getCellStatus=function(t){return this.cells[t.x][t.y]?this.cells[t.x][t.y].status:-1},t.prototype.getCellObject=function(t){return this.cells[t.x][t.y]?this.cells[t.x][t.y].gameObject:-1},t.prototype.clearCell=function(t){var e;return(e=this.cells[t.x][t.y])?(e.status=0,e.gameObject=null,this.fieldView.setCellStatus({x:t.x,y:t.y},0),!0):!1},t.prototype.setObjectToCell=function(t,e){var s;return(s=this.cells[e.x][e.y])?(s.status=1,s.gameObject=t,this.fieldView.setCellStatus({x:e.x,y:e.y},1),!0):!1},t}();
var GameObject;GameObject=function(){function t(t,e){this.position=t,this.gameField=e,this.spawn()}return t.prototype.spawn=function(){return this.gameField.setObjectToCell(this,this.position)},t.prototype.destroy=function(){return this.gameField.clearCell(this.position)},t}();

var Brick,__hasProp={}.hasOwnProperty,__extends=function(r,t){function o(){this.constructor=r}for(var n in t)__hasProp.call(t,n)&&(r[n]=t[n]);return o.prototype=t.prototype,r.prototype=new o,r.__super__=t.prototype,r};Brick=function(r){function t(){return t.__super__.constructor.apply(this,arguments)}return __extends(t,r),t}(GameObject);
var Player,__hasProp={}.hasOwnProperty,__extends=function(t,o){function e(){this.constructor=t}for(var i in o)__hasProp.call(o,i)&&(t[i]=o[i]);return e.prototype=o.prototype,t.prototype=new e,t.__super__=o.prototype,t};Player=function(t){function o(t,e,i){this.position=t,this.gameField=e,this.size=i,o.__super__.constructor.apply(this,arguments)}return __extends(o,t),o.prototype.spawn=function(){var t,o,e,i;for(i=[],t=o=0,e=this.size;e>=0?e>=o:o>=e;t=e>=0?++o:--o)i.push(this.gameField.setObjectToCell(this,{y:this.position.y,x:this.position.x+t}));return i},o.prototype.destroy=function(){var t,o,e,i;for(i=[],t=o=0,e=this.size;e>=0?e>=o:o>=e;t=e>=0?++o:--o)i.push(this.gameField.clearCell({y:this.position.y,x:this.position.x+t}));return i},o}(GameObject);
var ViewCell,ViewField;ViewField=function(){function t(t){this.size=t,this._initCells()}return t.prototype._initCells=function(){var t,e,i,n,s,r;for(this.cells=[],r=[],i=n=0,s=this.size.y;s>=0?s>n:n>s;i=s>=0?++n:--n)r.push(function(){var n,s,r;for(r=[],e=n=0,s=this.size.x;s>=0?s>n:n>s;e=s>=0?++n:--n)t=new ViewCell({y:i,x:e}),t.deactivate(),r.push(this.cells.push(t));return r}.call(this));return r},t.prototype._getCell=function(){var t;if(!(arguments.length>2||0===arguments.length||(t=function(){switch(arguments.length){case 1:return arguments[0];case 2:return{x:arguments[0],y:arguments[1]}}}.apply(this,arguments),t.x>this.size.x||t.y>this.size.y)))return this.cells[t.y*this.size.x+t.x]},t.prototype.setCellStatus=function(t,e){return t=this._getCell(t),e?t.activate():t.deactivate()},t.prototype.clear=function(){var t,e,i,n,s;for(n=this.cells,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.deactivate());return s},t}(),ViewCell=function(){function t(t){this.DOMcell=document.querySelectorAll(".game-field tr")[t.y].children[t.x]}return t.prototype.activate=function(){return this.DOMcell.className="active"},t.prototype.deactivate=function(){return this.DOMcell.className=""},t}();