const fs = require("fs");
const path ="./productos.json";

class UserManager{
    constructor(){
        this.users = [];
    }

    async CreateUser (user){
        try{
            const usersFile = await this.getUsers();
            usersFile.push(user);
            await fs.promises.writeFile(path, JSON.stringify(usersFile));    
        }catch(error){

        }
    }

    async getUsers(){
        try{
            if(fs.existsSync(path)){
                const users = await fs.promises.readFile(path, "utf8");
                const usersJS = JSON.parse(users);
                return usersJS
            }else{
                return []
            }
        } catch (error){
            console.log(error)

        }  
    }
}