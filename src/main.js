"use strict"

import userapi from "./service/api"

userapi(10001).then((user)=>{
    console.log("user",user)
}).catch((err)=>{
    console.error("エラーが検出されました。",err)
})

console.log("this is sample page!")