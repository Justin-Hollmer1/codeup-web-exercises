"use strict";

// function postMovie(userInput) {
//     const movieObject = {
//         method: "POST",
//
//     }
// }





const reviewObj = {
    name: 'Codey',
    rating: 5,
    comments: "This is a really good place for coding and eating"
};

const deleteObject =
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    }

function deleteMovie(id) {
    fetch(`https://vast-marvelous-course.glitch.me/movies/${id}`, deleteObject)
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
}


deleteBtn.addEventListener("click", () => {
    deleteMovie(id)
})


//

//


deleteMovie(14);

//
// "use strict";
//
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     fetch("https://vast-marvelous-course.glitch.me/movies")
//         .then(resp => resp.json())
//         .then(data => console.log(data));
//
//     const reviewObj = {
//         name: 'Codey',
//         rating: 5,
//         comments: "This is a really good place for coding and eating"
//     };
//
//     const object =
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(reviewObj)
//         }
//
//     fetch("https://vast-marvelous-course.glitch.me/movies", object)
//         .then(resp => console.log(resp))
//         .catch(err => console.log(err));
//
//     fetch("https://vast-marvelous-course.glitch.me/movies")
//         .then(resp => resp.json())
//         .then(data => console.log(data));
// });
