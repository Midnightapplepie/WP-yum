var nodemailer = require('nodemailer');
var helper = function(){
	return {
		transporter: function(){
			return  nodemailer.createTransport({
							host: 'smtp.gmail.com',
							port: 465,
							secure: true,
							auth:{
								user: "xiaoloongcontact@gmail.com",
								pass: "xl4157535678"
							}
						})
			},

		reservationEmail: function(user){
			console.log("called email function")
			return {
				from: user.name,
				// to: "jeff_louie@sbcglobal.net",
				// to: "management@xiaoloong.com",
				to: "kevx280@hotmail.com",
				subject: "XL Restaurant: Reservation",
				html: "<p>From: "+ user.name +"</p><br>" +
				      "<p>Phone: " + user.phone +"</p><br>" +
				      "<p>party-size: " + user.partySize +"</p><br>" +
				      "<p>date: " + user.date +"</p><br>" +
				      "<p>time: " + user.hour + ":" + user.min + "</p><br>"
			}
		}
	}
}()

module.exports = helper;