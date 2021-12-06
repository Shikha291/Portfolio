const nav_link = document.getElementsByClassName("nav_link")
console.log(nav_link);

for(let i=0; i<nav_link.length; i++) {
    nav_link[i].addEventListener("click", (e) => {
        for(j=0; j<nav_link.length; j++) {
            nav_link[j].classList.remove("active");
        }
        nav_link[i].classList.add("active");
        document.getElementById("check").checked = false;
    })
}

const work = document.getElementById("work");
work.addEventListener("click", () => {
    for(j=0; j<nav_link.length; j++) {
        nav_link[j].classList.remove("active");
    }
    document.getElementById("projectnav").classList.add("active");
}
)

const budget = document.getElementById("budget");
const budgetimgs = ["projectss/Budget app/1.png", "projectss/Budget app/2.png"];
let budgetset = null;
budget.addEventListener("mouseover", () => {
    let i = 0;
    budgetset = setInterval(() => {
        budget.setAttribute('src', budgetimgs[i]);
                i++;
                if(i == 2) i=0;
        }, 1000);

})

budget.addEventListener("mouseout", () => {
    budget.setAttribute('src', budgetimgs[0]);
    clearInterval(budgetset);

})

const zet = document.getElementById("zet");
const zetimgs = ["projectss/Zingy Expense Tracker/1.png", "projectss/Zingy Expense Tracker/2.png", "projectss/Zingy Expense Tracker/3.png", "projectss/Zingy Expense Tracker/4.png"];
let zetset = null;
zet.addEventListener("mouseover", () => {
    let i = 0;
            zetset = setInterval(() => {
                zet.setAttribute('src', zetimgs[i]);
                i++;
                if(i == 4) i=0;
        }, 1000);

})

zet.addEventListener("mouseout", () => {
    zet.setAttribute('src', zetimgs[0]);
    clearInterval(zetset);

})

const news = document.getElementById("news");
const newsimgs = ["projectss/NewsMonkey/1.png", "projectss/NewsMonkey/2.png"];
let newsset = null;
news.addEventListener("mouseover", () => {
    let i = 0;
    newsset = setInterval(() => {
                news.setAttribute('src', newsimgs[i]);
                i++;
                if(i == 2) i=0;
        }, 1000);

})

news.addEventListener("mouseout", () => {
    news.setAttribute('src', newsimgs[0]);
    clearInterval(newsset);

})
const text = document.getElementById("text");
const textimgs = ["projectss/Text Manipulator/1.png", "projectss/Text Manipulator/2.png", "projectss/Text Manipulator/3.png", "projectss/Text Manipulator/4.png"];
let textset = null;
text.addEventListener("mouseover", () => {
    let i = 0;
    textset = setInterval(() => {
                text.setAttribute('src', textimgs[i]);
                i++;
                if(i == 4) i=0;
        }, 1000);

})

text.addEventListener("mouseout", () => {
    text.setAttribute('src', textimgs[0]);
    clearInterval(textset);

})
const todo = document.getElementById("todo");
const todoimgs = ["projectss/To-do list/1.png", "projectss/To-do list/2.png"];
let todoset = null;
todo.addEventListener("mouseover", () => {
    let i = 0;
    todoset = setInterval(() => {
                todo.setAttribute('src', todoimgs[i]);
                i++;
                if(i == 2) i=0;
        }, 1000);

})

todo.addEventListener("mouseout", () => {
    todo.setAttribute('src', todoimgs[0]);
    clearInterval(todoset);

})
const weather = document.getElementById("weather");
const weatherimgs = ["projectss/Weather app/1.png", "projectss/Weather app/2.png", "projectss/Weather app/3.png", "projectss/Weather app/4.png"];
let weatherset = null;
weather.addEventListener("mouseover", () => {
    let i = 0;
    weatherset = setInterval(() => {
                weather.setAttribute('src', weatherimgs[i]);
                i++;
                if(i == 4) i=0;
        }, 1000);

})

weather.addEventListener("mouseout", () => {
    weather.setAttribute('src', weatherimgs[0]);
    clearInterval(weatherset);

})

// const contactform = document.getElementById("contactform");
// const contactbtn = document.getElementById("contactbtn");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// subject.addEventListener("change", (event) => {
//     contactbtn.setAttribute('href', `mailto:shikha981492@gmail.com?subject = ${event.target.value}&body = ${message.value}`);
//     console.log(contactbtn.href);
// })

// message.addEventListener("change", (event) => {
//     contactbtn.setAttribute('href', `mailto:shikha981492@gmail.com?subject = ${subject.value}&body = ${event.target.value}`);
//     console.log(contactbtn.href);
// })
