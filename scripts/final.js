var Cell;Cell=function(){function t(t){this.setConfig(t),this.DOMcell=document.querySelectorAll(".game-field tr")[this.y].children[this.x],this.refreshCellView()}return t.prototype.getConfig=function(){return{x:this.x,y:this.y,status:this.status}},t.prototype.setConfig=function(t){this.x=t.x,this.y=t.y,this.status=!!t.status},t.prototype.isFree=function(){return this.status},t.prototype.isOccupied=function(){return!this.status},t.prototype.activate=function(){return this.DOMcell.className="active"},t.prototype.deactivate=function(){return this.DOMcell.className=""},t.prototype.refreshCellView=function(){return this.status?this.activate():this.deactivate()},t}();
var Field;Field=function(){function t(t){this.size=t,this.initCells()}return t.prototype.initCells=function(){var t,i,s,e,l;for(this.cells=[],l=[],i=s=0,e=this.size.y;e>=0?e>s:s>e;i=e>=0?++s:--s)l.push(function(){var s,e,l;for(l=[],t=s=0,e=this.size.x;e>=0?e>s:s>e;t=e>=0?++s:--s)l.push(this.cells.push(new Cell({y:i,x:t,status:0})));return l}.call(this));return l},t.prototype.getCell=function(t){return this.cells[t.y*this.size.x+t.x]},t}();