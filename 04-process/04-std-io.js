const msg = ['name','email','qq','mobile'];
var usr={};var i=0;

console.log(msg[i]+': ');

process.stdin.on('data',function(data){
usr[msg[i]]=(data.slice(0,data.length-1).toString('utf8'));
console.log(msg[++i]+':');

});

process.on('end',function(){
console.log(usr)
})