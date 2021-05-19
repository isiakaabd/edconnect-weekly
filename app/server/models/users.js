const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname= firstname;
        this.lastname =lastname;
        this.email =email;
        this.password=password;
        this.matricNumber=matricNumber;
        this.program=program;
        this.graduationYear= graduationYear
    }

    getFullName() {
        return  this.firstname + " " +  this.lastname
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        let confirm = this.data.find(elem => elem.email===email && elem.password===password)
        return confirm? true: false
    }

    getByEmail(email) {
        let confirm =  this.data.find(elem =>{
            elem.email===email
            return elem
        }) 
        return confirm? confirm : null

    }

    getByMatricNumber(matricNumber) {
        let confirm =  this.data.find(elem =>{
            elem.matricNumber===matricNumber
            return elem
        }) 
        return confirm? confirm : null
    }

    validate(obj) {
        this.errors =[];

        for (const key in obj) {
            if(obj[key]==="" ||  obj[key]===undefined || obj[key]=== null){
                this.errors.push( `${key} should not be empty`)
            }
      
        }
        this.data.forEach( ele =>{

        if(ele.email===obj.email){
            this.errors.push("A user with specified email address already exists")
        }
        else if(ele.matricNumber===obj.matricNumber){
            this.errors.push("A user with specified matric number  already exists")
        }

        })
        obj["password"].length <7 ? this.errors.push( "Password should have at least 7 characters"):false


        if(this.errors.length==0){
            return true
        }
        return false
        
    
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};