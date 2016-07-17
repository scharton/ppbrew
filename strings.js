(function() {
   angular.module('app')
       .value('strings',
           {
               headtitle: "Pine and Palm",
               name: "Pine and Palm Brewing",
               address: {
                   street: "352 W. Bedford Ave., #111",
                   city: "Fresno",
                   state: "CA",
                   zip: "93711"
               },
               phone: "(559) 970-7580",
               email: "pineandpalmbrewing@gmail.com",
               facebook: "https://www.facebook.com/PineandPalm",
               instagram: "https://www.instagram.com/pineandpalmbrew/",
               gatrackingid: "UA-46026861-4"
           }
       );
})();