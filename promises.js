

function register() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
          console.log("register end");
         // return resolve("error while registering...");
      
      resolve();
    }, 1000);

    })
    
  }
  function sendEmail() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("email end");
        resolve();
      }, 5000);

    })
   
  }
  function login() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("login end");
        resolve();
      }, 3000);

    })
    
  }
  function getUserData() {
    return new Promise ((resolve,reject)=> {
      setTimeout(() => {
        console.log("got user data");
        resolve();
      }, 2000);
    })

  }
  
  function displayData() {
    return new Promise ((resolve,reject)=> {
      setTimeout(() =>{
        console.log("display end");
        resolve();
  
      },1000);
     
    })
  }
    //console.log("display end");
  
  // register(function () {
  //   sendEmail(function () {
  //     login(function () {
  //       getUserData();
  //       displayData();
  //     });
  //   });
  // });
   register()
   .then(sendEmail)
   .then(login)
   .then(getUserData)
    .then (displayData);
  //  .catch((err) =>{
  //    console.log('error:',err);
   

  //  });
  //Async await
  //  async function authenticate(){
  //   await register();
  //   await sendEmail();
  //   await login();
  //   await getUserData();
  //   await displayData();
  // }
  // authenticate().then(() =>{
  //   console.log('all set' );
  // });
  // console.log("other application work");
  