let repeat = setInterval(()=>{
    console.log("Loading...")
},1000)
setTimeout(()=>{
   clearInterval(repeat);
    console.log("Loaded successfully!")
},5000)