const fs = require("fs");
const path = "./fileCb.txt";

if(fs.existsSync(path)){
    fs.readFile(path, "utf-8", (error, info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info);
            fs.appendFileSync(path, "segundo texto ",(error)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log("info cargada con exito!");
                    fs.readFileSync(path,"utf8", (error, info)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log(info);
                        }
                    })
                }
            });
        }
    })
}