// Person = function(name){
//     this.name = name;
// };
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// berto = new Person("Berto");
// berto.age = 20;

// if(alvin.hasOwnProperty('name')){
//     console.log('The first condition was true.');
// }
// if(berto.hasOwnProperty('name')){
//     console.log('The second condition was true.');
// }
// if(alvin.hasOwnProperty('age')){
//     console.log('The third condition was true.');
// }
// if(berto.hasOwnProperty('age')){
//     console.log('The fourth condition was true.');
// }

// console.log(1);

// setTimeout(function(){
//     console.log(2);
// }, 1000);

// setTimeout(function(){
//     console.log(3);
// }, 2000);

// setTimeout(function(){
//     console.log(4);
// }, 0);

// console.log(5);
// var start = new Date();
// while(true){
//     var now = new Date();
//     if(now - start > 500){
//         break;
//     }
// }
// console.log(6);

var x = $.Deferred();

$.ajax(url).done(function(user){
    console.log('The first success!');
    return $.ajax(url2, {user_id: data.id});
}).pipe(function(data){
    console.log('The second success!');
    return $.ajax(url3, {object_id: data.id});
}).pipe(function(data){
    console.log('The third success!');
    x.resolve(data);
}).fail(function(error){
    console.log("Something bad happened!");
});

x.then(function(data){
    console.log("First argument to then was called.");
}, function(data){
    console.log("Second argument to then was called.");
});