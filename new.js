function userLogin(){
    return new Promise((resolve  ,reject) => {
       return reject('unauthorize access');
            console.log('user login successful');
           // resolve();
        

        });
        
 }
function logout(){
    return new Promise((resolve,reject)=>{
            console.log('user logout successful');
            resolve();
        });

        }
       
// userLogin()
// .then(logout)
// .catch((err) =>{
//     console.log('error',err);
//     console.log("user is already login");

// });

//async await
async function authenticate(){
    await userLogin();
    await logout();
}
authenticate().catch(()=>{
    console.log("error found");
});
console.log("other application works!!....");
