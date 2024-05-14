//static variable and method is calld static because its  belong to class
//once we create static variable or method inside class then it's lifecycle will be upto program is running. it means it will not destroy it's memory even after executing this method.
//It is available for access and modification as long as the program is running.
//this method can call only using class name 
//static method belong to class 
//static varible will maintained and remains available throught the entire duration of the program execution
//once we initialize its value inside class then it will not loose its value until the program get finished execution


class Person{
    static name = "gayatri";
    static height = 260;
    static getInfo(){
        return this.name+" "+this.height;
    }
}

// console.log(Person.getInfo());

//there is no need to create object using class to access this static varibale and method
//static method and variable can access only by using class itself

// let myobj = new Person();
// console.log(myobj.getInfo());
//above two line is incorrect. it will through errer
//because there no need to create object to access this static method or variable
//we can just access by calling with class itself
//ex
console.log(Person.name);