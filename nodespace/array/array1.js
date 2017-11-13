var arr = [];
arr.push('first','second','three');
//for(var i = 0;i < arr.length;i++) {
//    console.log(arr[i]);
//}

//arr.forEach(function(i) {
//    console.log(i);
//})

//arr.map(function(i) {
//    console.log(i);
//})

//for(var value of arr) {
//    console.log(value);
//}


//var uni = new Set('1','2','1');
//for(var word of uni) {
//    console.log(word);
//}


//var student=[name,wujunchuan];
//
//
//
//for(var [key,value] of student){
//    //使用Object.keys()方法获取对象key的数组
//    console.log(key + value);
//}

//var phoneBack = {'hi':'hihi','hello':'hellohello'};
//for(var [key,value] of phoneBack) {
//    console.log(key + value);
//}


//var template =
//    '<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >' +
//    ' <div class="view">' +
//    ' <input class="toggle" type="checkbox" [checked]="todo.isDone">' +
//    ' <label></label>' +
//    ' <button class="destroy"></button>' +
//    ' </div>' +
//    ' <input class="edit" value="" />' +
//    '</li>';
//console.log(template);


//var user = {firstName: "Adrian",lastName: "Mejia"};
//function getFullName(user) {
//    var firstName = user.firstName;
//    var lastName = user.lastName;
//    return firstName + " " + lastName;
//}
//console.log(getFullName(user)); //Adrian Mejia


const user = {firstName: "Adrian",lastName: "Mejia"};
function getFullName({firstName,lastName}) {
    return `${firstName},${lastName}`;
}
console.log(getFullName(user));
