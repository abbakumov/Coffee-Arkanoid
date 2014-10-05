var GameField;GameField=function(){function t(t){this.size=t||{x:12,y:16},this.fieldView=new ViewField(this.size),this.cells=this._createCells()}return t.prototype._createCells=function(){var t,e,s,i,l;for(l=[],t=s=0,i=this.size.x;i>=0?i>s:s>i;t=i>=0?++s:--s)l.push(function(){var t,s,i;for(i=[],e=t=0,s=this.size.y;s>=0?s>t:t>s;e=s>=0?++t:--t)i.push({status:0,gameObject:null});return i}.call(this));return l},t.prototype.getCellStatus=function(t){return this.cells[t.x][t.y]?this.cells[t.x][t.y].status:-1},t.prototype.getCellObject=function(t){return this.cells[t.x][t.y]?this.cells[t.x][t.y].gameObject:-1},t}();
var GameObject;GameObject=function(){function t(t,e){this.position=t,this.gameField=e}return t}();
var ViewCell,ViewField;ViewField=function(){function t(t){this.size=t,this._initCells()}return t.prototype._initCells=function(){var t,e,i,n,s,r;for(this.cells=[],r=[],i=n=0,s=this.size.y;s>=0?s>n:n>s;i=s>=0?++n:--n)r.push(function(){var n,s,r;for(r=[],e=n=0,s=this.size.x;s>=0?s>n:n>s;e=s>=0?++n:--n)t=new ViewCell({y:i,x:e}),t.deactivate(),r.push(this.cells.push(t));return r}.call(this));return r},t.prototype._getCell=function(){var t;if(!(arguments.length>2||0===arguments.length||(t=function(){switch(arguments.length){case 1:return arguments[0];case 2:return{x:arguments[0],y:arguments[1]}}}.apply(this,arguments),t.x>this.size.x||t.y>this.size.y)))return this.cells[t.y*this.size.x+t.x]},t.prototype.setCellStatus=function(t,e){return t=this._getCell(t),e?t.activate():t.deactivate()},t.prototype.clear=function(){var t,e,i,n,s;for(n=this.cells,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.deactivate());return s},t}(),ViewCell=function(){function t(t){this.DOMcell=document.querySelectorAll(".game-field tr")[t.y].children[t.x]}return t.prototype.activate=function(){return this.DOMcell.className="active"},t.prototype.deactivate=function(){return this.DOMcell.className=""},t}();