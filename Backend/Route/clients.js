
let fs = require('fs'); 
let FILE_PATH = "./tools/client.json"; 
let personRepo = {

    //GET METHOD  Retrieve a list of all person objects.
    get: function (resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { 
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        })
    },

    //GET Method   Retrieve a specific person object by its ID.
    getById: function (id,resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { 
            if (error) {
                reject(error);
            } else {
                let users =JSON.parse(data)
                let user = users.find((u)=>u.id == id);
                resolve(user);
            }
        })
    },


    //POST  Create a new person object.
    insert:function (user,resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) { 
            if (error) {
                reject(error);
            } else {
                let users =JSON.parse(data)
                if(user){
                    users.push(user)
                }
                fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                    if (error) {
                        reject(error);
                    }else{
                        resolve(user);
                    }
                })
            }
        })
    },


        //PUT  Update a specific person object by its ID.
        update:function (id,newUserData,resolve, reject) {
            fs.readFile(FILE_PATH, function (error, data) { 
                if (error) {
                    reject(error);
                } else {
                    let users =JSON.parse(data)
                    let user = users.find((u)=>u.id == id); 
                    if(user){
                        Object.assign(user,newUserData); 
                    } else{
                        let ex = new Error("User Not Found");
                        reject(ex);
                        return;
                    }
                    

                    fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                        if (error) {
                            reject(error);
                        }else{
                            resolve(user);
                        }
                    })
                }
            })
        },

               //DELETE - Delete a specific person object by its ID.
               delete:function (id,resolve, reject) { 
                fs.readFile(FILE_PATH, function (error, data) { 
                    if (error) {
                        reject(error);
                    } else {
                        let users =JSON.parse(data)
                        let user = users.find((u)=>u.id == id); 
                        if(user){
                            Object.assign(user,newUserData);
                        } else{
                            let ex = new Error("User Not Found");
                            reject(ex);
                            return;
                        }
                        
    
                        fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                            if (error) {
                                reject(error);
                            }else{
                                resolve(user);
                            }
                        })
                    }
                })
            },

                           //DELETE - Delete a specific person object by its ID.
                           delete:function (id,resolve, reject) { 
                            fs.readFile(FILE_PATH, function (error, data) { 
                                if (error) { 
                                    reject(error);
                                } else {
                                    let users =JSON.parse(data)
                                    let index = users.findIndex((u)=>u.id == id);
                                    if(index >-1){ 
                                       users.splice(index,1);            
                                    } else{
                                        let ex = new Error("User Not Found");
                                        reject(ex);
                                        return;
                                    }
                                    
                
                                    fs.writeFile(FILE_PATH,JSON.stringify(users),function(error){
                                        if (error) {
                                            reject(error);
                                        }else{
                                            resolve("User got Deleted");
                                        }
                                    })
                                }
                            })
                        },
}

module.exports = personRepo;