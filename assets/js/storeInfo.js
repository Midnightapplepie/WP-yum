var storeInfo = function(){
	  var lunchHour="11:30 am to 2:30 pm";
	  var dinnerHour="5:00 pm to 9:00 pm";
	  var dinnerHourPlus="5:00 pm to 9:30 pm"
	return {
		businessHours: [
			{day:"",lunchTime:"Lunch",dinnerTime:"Dinner"},
            {day:"Monday",lunchTime:"closed",dinnerTime:dinnerHour,class:"mon"},
            {day:"Thuesday - Thursday",lunchTime:lunchHour,dinnerTime:dinnerHour,class:"tue-thur"},
            {day:"Friday - Saturday",lunchTime:lunchHour,dinnerTime:dinnerHourPlus,class:"fri-sat"},
            {day:"Sunday",lunchTime:"closed",dinnerTime:dinnerHour,class:"sun"}
		],

		phone: "(415) 753-5678",

		address: {
			street: "250 West Portal Ave",
			city: "San Francisco",
			state: "CA",
			zip: "94127"
		},

		email: "xiaoloongcontact@gmail.com",

		about: "Xiao Loong's cuisine can be recognized by the different uses of aromatics, spices, and cooking styles. Dishes prepared in the Sichuan and Beijing style are characterized by spicy and pungent flavors, with an emphasis on strong flavored roots and vegetables such as pepers, garlic, and ginger as well as a prolific amount of chilis and spicy sauces. We prepare all dishes from scratch using only the freshest and finest ingredients. To ensure that we serve only the best, ingredients are purchased an prepared on a daily basis."
	}
}()

module.exports = storeInfo;