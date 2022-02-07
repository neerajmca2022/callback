function fun1(){
    return new Promise (function(resolve  ,reject){
        setTimeout(() =>{
            const error = ture;
            if(!error){
                console.log('function:your promkse has been resolved');
                resolve();
            }
            else{
                console.log('function:your promise has not been resolved');
                reject('sorry not fulfilled');
            }
            },2000);
        })
    })
}

fun1().then(function(){
    console.log("Neeraj: Thanks for resolving");
}).catch(function)(){
    console.log("Neeraj : very bad bro");
}
})