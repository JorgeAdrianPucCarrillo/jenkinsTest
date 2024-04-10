
const getUsersList = async (req, res) => {
    
        res.status(200).json({
            ok: true,
            data:["success test"],
            message: "user's score updated"
        });
    
}

export {getUsersList};
