(function() {
   angular.module('app')
       .value('strings',
           {
               name: "The Name in the Heading",
               address: {
                   street: "123 AnyStree Ave., #123",
                   city: "NoName",
                   state: "AK",
                   zip: "00000"
               },
               phone: "(555) 123-4567",
               email: "nosuchemail@gmail.com",
               facebook: "https://www.facebook.com/Sample",
               instagram: "https://www.instagram.com/Sample/"
           }
       );
})();