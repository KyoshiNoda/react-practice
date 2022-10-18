const userLeft = false;
const userWatchingCatMeme = true;


// Callback version
const watchTutorialCallBack = (callBack,errorCallBack) =>{
  if(userLeft){
    errorCallBack({
      name: 'User Left',
      message: ':('
    })
  }
  else if(userWatchingCatMeme){
    errorCallBack({
      name: 'user watching cat meme',
      message: 'webDev < cat'
    })
  }
  else{
    callBack('thumbs up and sub');
  }
}

watchTutorialCallBack((message) =>{
    console.log("normal");
    console.log('Success ' + message)
  },(error) =>{ 
    console.log("normal");
    console.log(error.name + ' ' + error.message);
});

// Promise version
const watchTutorialCallBackPromise = () =>{
  return new Promise((resolve,reject) =>{
    if(userLeft){
      reject({
        name: 'User Left',
        message: ':('
      })
    }
    else if(userWatchingCatMeme){
      reject({
        name: 'user watching cat meme',
        message: 'webDev < cat'
      })
    }
    else{
      resolve('thumbs up and sub');
    }
  })
}

watchTutorialCallBackPromise().then((message) =>{
  console.log("promise");
  console.log("success " + message);
}).catch((error) =>{
  console.log("promise");
  console.log("Failure " + error.name);
})
