import express from "express"
const getHome=(req,res)=>{
    res.send("<h1>Under controller</h1>")
}
export default getHome;