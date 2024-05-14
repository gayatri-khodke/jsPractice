// synchronous code execute line by line top to bottom
// it depend on last execution 
// after complitiong current block execution then only next code or block or function will start execution
// it is time taking execution 

// this code is execut line by line as it written and call
// const fun1=()=>{
//     console.log("function 1 start");
//     fun2();
//     console.log("function 1 end")
// }
// const fun2=()=>{
//     console.log("function 2 start");
// }
// fun1();




   const fun1=()=>{
        console.log("function 1 start");
        fun2();
        console.log("function 1 end")
    }
    const fun2=()=>{
        console.log("function 2 start");
    }
    fun1();
    





