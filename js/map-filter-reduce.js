"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const usersWithMoreThanThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersWithMoreThanThreeLanguages);

const usersEmails = users.map(user => user.email);
console.log(usersEmails)

const totalYearsOfExperience = users.reduce((totalYears, user) => {
    return totalYears += user.yearsOfExperience;
}, 0);
console.log(totalYearsOfExperience);

const longestEmail = users.reduce((longestString, user) => {
    if (user.email.length > longestString.length) {
        longestString = user.email
    }
    return longestString
}, "");
console.log(longestEmail);

const instructorNames = users.reduce((instructorList, user) => {
    instructorList += user.name + ", ";
    return instructorList;
}, "");
console.log("Your instructors are: " + instructorNames.slice(0, -2));