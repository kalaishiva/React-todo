const User = require("../Model/userModel")


//Get user
exports.home = (req, res) => {
    res.send("Home Controller is created")
}


//Create User
exports.createUser = async(req, res) => {
    try {

        //1. Collect information
        const { name, email } = req.body;

        //2. Validate the info
        if (!name || !email) {
            throw new Error(`Name and Email is required`)
        }
        //3. Check user exists or not
        const userExists = await User.findOne({ email })
        if (userExists) {
            throw new Error("Email is already exists")
        }

        //4. Create a new entry in database
        const user = await User.create({
            name,
            email
        });
        res.status(200).json({
            success: true,
            message: 'New User Created',
            user,
        })
    } catch (error) {
        console.log(error)
    }
}

//Get User

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

//EditUsers

exports.editUsers = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "User update successfully",
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

//Delete User

exports.deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Successfully deleted the User",
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })

    }
}