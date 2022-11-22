const mongoose = require('mongoose');


exports.connectToDb = () => {

    mongoose.connect(process.env.MONGOBD_URI
            /* {
                       userNewUrlParser: true,
                       useUnifiedTopology: true,
                   } */
        )
        .then((conn) => {
            console.log(`DB connected : ${conn.connection.host}`);
        })
        .catch((error) => {
            console.log("DB connection failed")
            console.log(error)
            process.exit(1)
        })
}