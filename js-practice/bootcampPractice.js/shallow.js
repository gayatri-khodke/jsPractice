const obj={
    name:'gayatri',
    age:'80',
    info:{
        class:46,
        address:'malkapur',
    },
    meth:function(){
        return 5;
    },
}
// const obj2=Object.assign({},obj);
// const obj2={...obj};
const obj2=structuredClone(obj);
obj2.info.class=10;
console.log(obj2);
console.log(obj);


