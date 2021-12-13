
//The file is for writing complex Html
//AND to do this you can install ejs " npm i ejs --save"

exports.greetingOne = (req, res) =>{
    res.json({
        "hello": ["Segun", "MakeBlr"]
    })
    // res.render('greetingThree')
    // res.send('<h1>Hello makblr, Welcome to live streaming on the go</h1>')
};

