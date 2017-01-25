"use strict"

import jquery from "jquery"

const runApi = (userId)=>{
    const url = `/webapi.json`;
    const promise = new Promise((resolve,reject)=>{
        jquery.get(url).done((res)=>{
            if(res && res[userId]){
                resolve(res[userId])
            }else{
                const err = new Error("error happened")
                reject(err)
            }
        })
    })
    return promise
}

export default runApi
