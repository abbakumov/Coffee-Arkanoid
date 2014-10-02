var x,z;x=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],z="test fucking string";
var Cell;Cell=function(){function t(t){this.setConfig(t)}return t.prototype.isFree=function(){},t.prototype.isOccupied=function(){},t.prototype.getConfig=function(){return{x:this.x,y:this.y,status:this.status}},t.prototype.setConfig=function(t){this.x=t.x,this.y=t.y,this.status=t.status},t}();
