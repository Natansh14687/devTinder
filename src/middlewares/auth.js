const adminAuth = (req, res, next) =>{
    console.log("Admin Auth is getting checked");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorised Request");
    }else{
        next();
    }
}

const userAuth = (req, res, send) => {
    console.log("User Auth is getting checked");
    const token = "xyz";
    const isUserAuthorized = token === "xy";
    if(!isUserAuthorized){
        res.status(401).send("Unauthorised Request");
    }else{
        next();
    }
}


module.exports = {
    adminAuth,
    userAuth
}