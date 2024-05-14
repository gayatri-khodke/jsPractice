const myarray = ["gayatri", "poojs", "arti"];
function getData(){
    setTimeout(()=>{
        let output = '';
        myarray.forEach((data,index)=>{
            output+= `<li>${data}</li>`;
        })
        console.log(myarray);
        document.body.innerHTML=output;
    },2000);
 }

function additem(newname){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            myarray.push(newname);
            console.log(myarray);
            let error = false;
            if(error){
                resolve();
            }
            else{
                reject("oh no sorry");
            }
        },5000);
    })   
}
// additem("swati").then(getData).catch(err=> console.log("error occured"));

//now use async and await

async function state(){
   await additem("swati");
   getData();
}

//await means function execution will wait while additem get finished
//after finishing additem will execute 
//await work only with async is present

state();
