exports.register = function (req, res) {
    
    var users = {
        "type": req.body.type,
        "id": req.body.id,
        "email": req.body.email,
        "passwd": req.body.passwd,
        "addressBasic": req.body.addressBasic,
        "addressDetail": req.body.addressDetail,
        "certifiNumber": req.body.certifiNumber,
    };
    
    connection.query('INSERT INTO customer VALUES ?' , users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code" : 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });    
}

exports.login = function (req, res) {
    var id = req.body.id;
    var passwd = req.body.passwd;
<<<<<<< HEAD
    connection.query('SELECT * FROM customer WHERE id = ?', [id],
=======

    connection.query('SELECT * FROM customer WHERE id = ?', [id],

>>>>>>> map
    function( error, results, fields) {
        if (error) {
            // console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            // console.log('The solution is: ', results);
            if(results.length > 0) {
                if(results[0].passwd == passwd) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                } else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            } else {
                res.send({
                    "code":204,
                    "success": "Email does not exists"
                });
            }
        }    
    }) 
}