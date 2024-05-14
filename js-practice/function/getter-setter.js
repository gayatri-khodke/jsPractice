      const person={
        firstName:"gayatr",
        lastName:"khodke",
       get fullName(){
           return this.firstName+" "+this.lastName;
        },
        set fullName(newvalue){
            this.firstName=newvalue.split(" ")[0];
            this.lastName=newvalue.split(' ')[1];
        }
      }
      person.fullName="pooja khodke";
      console.log(person.fullName);
      //get method is uset to access object method as a property ex person.fullname 
      //we get the access of this property using get now we can set the value to it from outside of object
      // we can use get and set independently 
      //return keyword is important in get method because it specify which value that should be retrieved
      // get is used to retrived the value of a specific property
      //set is used to modify object propety's value
      //set is the special method in an object that is used to set the value of a specific property
      //it is a way to control the state of an object
