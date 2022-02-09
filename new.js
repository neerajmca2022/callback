function userLogin(){
    return new Promise((resolve  ,reject) => {
       return reject('unauthorize access');
            console.log('user login successful');
        

        });
        
 }
function logout(){
    return new Promise((resolve,reject)=>{
            console.log('user logout successful');
            resolve();
        });

        }
       
userLogin()
.then(logout)
.catch((err) =>{
    console.log('error',err);
    console.log("user is already login");

});
console.log("other application works!!....");
