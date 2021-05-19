class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        var c = this.data.find(ele=>ele.id === id)
    
        if(c){
            return c
        }else{
        return null
        }
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {

        let c=   this.data.find(datum=> datum.id===id)
        if (c) {
      for (const key in obj) {
              c[key] = obj[key];
              
          }
          return true
      }
           return false
    }

    delete(id) {
 
        const c = this.data.findIndex( ele =>ele.id===id)
        if (c) {
            this.data.splice(c, 1)
            return true
        } 
         return true
    }
    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;