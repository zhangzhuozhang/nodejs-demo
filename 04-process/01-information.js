const log=console.log;
log('CPU:',process.arch);
log('os:',process.plantform);
log('pid',process.pid);
log('execPath',process.execPath);
log('node.js',process.version);
log('uid',process.getuid());
log('gid:',process.getgid())
process.stdin.on('data',function(){
  log(data);
});
