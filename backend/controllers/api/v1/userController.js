import User from "../../../models/user.js";

export async function getUser(req,res){
    try{
        const user = await User.findOne({_id:req.params.id});
        if(user)
        {
        return res.status(200).json({
            success:'user data',
            data:user
        })
        }
        else{
            return res.status(200).json({
            message: 'no user found'
        })
        } 
    }
    catch(err) {
        console.log(err);
        return res.status(200).json({
            message:'Server Error...'
        })  
    }
}




export async function login(req,res){
    try{
        const user = await User.findOne(req.body);
        if(user)
        {
        return res.status(200).json({
            success:'User Logged In',
            data:user
        })
        }
        else{
            return res.status(200).json({
            message: 'Incorrect USERNAME/PASSWORD'
        })
        } 
    }
    catch(err) {
        console.log(err);
        return res.status(200).json({
            message:'Server Error...'
        })  
    }
}

export async function signup(req,res){
    try{
        const user = await User.create(req.body);
        return res.status(200).json({
            success:'User Created Successfully',
            data:user
        }) 
    }
    catch(err) {
        console.log(err);
        return res.status(200).json({
            message:'Server Error...'
        })  
    }   
}