"use strict";
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];
function checkItsIdPROG200(thisValue) {

    if (thisValue.CourseId == "PROG200") {
        return true;
    }
    else {
        return false;
    }
}

function findPROJ500title(thisValue) {
    if (thisValue.CourseId == "PROJ500") {
        return true;
    }
    else {
        return false;
    }

}

function course50orless(thisValue){
    if(thisValue.Fee <= 50){
        return true;
    }
    else{
        return false;
    }

}
function courseAtClassroom1(thisValue){
    if(thisValue.Location == "Classroom 1"){
        return true;
    }
    else{
        return false;
    }

}


let classesMet = courses.filter(courseAtClassroom1);
let all50orless = courses.filter(course50orless);

let PROJ500 = courses.find(findPROJ500title);
let PROG200 = courses.find(checkItsIdPROG200);
console.log("--------------------")
console.log(PROG200.StartDate)
console.log("--------------------")
console.log(PROJ500.Title)
console.log("--------------------")
for(let c of classesMet){
    console.log(c.Title)
}
console.log("--------------------")
for (let money of all50orless){
    console.log(money.Title)
}

