process.on('SIGINT',()=>{
    console.log('you proess ctrl+c or kill -2');
    process.exit
    
    })
    process.on('SIGTSTP',()=>{
    console.log('you proess ctrl+z');
    
    })
    process.stdin.resume();