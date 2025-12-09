console.log("process 1")
setTimeout(()=>
{
    console.log("process 2")
    setTimeout(()=>{
        console.log("prrocess 3")
    },2000)
},2000);