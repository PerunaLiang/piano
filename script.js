// The

// // Method 2
// const audio1 = new Audio()
// audio1.src = "./Sounds/NoteC.mp3"

// // Method 3
// let sound1 = new Audio()
// sound1.src = "./Sounds/NoteC.mp3"

/*
// Method 2 - play the sound
let soundC = document.getElementById("soundC")
function playKey() {
    let audiosrc = new Audio("./Sounds/NoteC.mp3");
    // create audio variable and equal it to new Audio element - link audio file here
    audiosrc.play()
    // play() starts the media
}
soundC.addEventListener("click", playKey)


// Change key to grey when pressed
let key = document.getElementById("soundC");

key.addEventListener("click", function grey() {

    key.style.cssText = "background: linear-gradient(to bottom, #fff 0%, grey  100%)"
    console.log("mouse has clicked for 0.5s")

    setTimeout(function timer() {
        key.style.cssText = "background: linear-gradient(to bottom, #fff 0%, #e9e9e9  100%)"
    }
        , "500")
}
)

*/

// setTimeout takes two arguments - a function for what to do and the in milliseconds
// addEventListener also takes two arguments, ove is the event e.g click, the other is what you want (function)

/* LEARNING- when using getElementsbyClassName it selects multiple elements as an array, this is why the 
error "addEventListener is not a function" came up. Query selector was more specific to one element i think
*/



let whitec = document.querySelector(".white.c")
// white c is actually two classes, this is how the CSS file refernces it too, the space is there for a reason
// need to reference both classes with .dot, order is insigificant
function playKeys() {
    let audiosource = new Audio("./Sounds/NoteC.mp3");
    audiosource.play()
}
whitec.addEventListener("click", playKeys)

// https://www.youtube.com/watch?v=mjmh093Sucg - loop through the keys
// https://www.youtube.com/watch?v=vjco5yKZpU8 - or have each file location listed in the html


// CLICK KEY METHOD

let allKeys = document.querySelectorAll(".set li")
console.log(allKeys)

allKeys.forEach((classKey) => {
    classKey.addEventListener("click", () => {
        let audiosource = new Audio("./Sounds/note" + classKey.id + ".mp3");
        audiosource.play()

        // console.log(classKey.id)
        let showLetter = document.getElementById("guide")
        showLetter.innerText = `You pressed ${classKey.id}`

    }
    )



})

// LEARNINGS
// .set, li you select two different elements, but .set li you ask it 
// to get the li inside container with the class of set
// While allKeys returns all the list elements at once, 
// the classList loops over each key and returns before going to the next key
// In other words
// allKeys - print whole array [li.class, li,class2, li.class3]
// classList - print array elements including the tag 
// <li class="class1">
// <li class="class2">  
// <li class="class3">
// by changing it to individual elements only then can we use EventListener on it


// KEYDOWN KEY METHOD
// THE keys don't trigger the pressing down look!

// For the keyboard press
function playAllKeys(letter) {
    let audiosource = new Audio("./Sounds/note" + letter + ".mp3");

    audiosource.play()



}

// s
// a node list of white keys was grabbed when (".set white") (".white")
// (".set li .white") returns what looks like a empty node list?? - return no error



// whiteKey.forEach(function notesList() {
//     whiteKey.addEventListener(
//         "keydown", function changeGrey() {
//             whiteKey.classList.add('active')
//         })

//     whiteKey.addEventListener(
//         "keyup", function changeBack() {
//             whiteKey.classList.remove('active')
//         })
// })

// whiteKey.forEach(function notesList() {
//     whiteKey.addEventListener(
//         "keydown", function changeGrey() {
//         whiteKey.classList.add('active')
//             notesList.style.cssText = "background: linear-gradient(to bottom, #fff 0%, gray  100%)"
//             console.log("mouse has clicked for 0.5s")

//             setTimeout(function timer() {
//                 notesList.style.cssText = "background: linear-gradient(to bottom, #fff 0%, #e9e9e9  100%)"
//             }
//                 , "500")

//         })
// })


// document.addEventListener("keydown", function keyDown() {
//     keyDown.target.classList.add("active")
// })



// How long active class is on
// function Timer(keyLetter) {
//     setTimeout(function timer() {
//         document.getElementById(keyLetter).classList.remove("active")
//     }, "800")
// }
// The above was nested inside the activeClass function

function activeClass(keyID) {
    document.getElementById(keyID).classList.add("active")
    Timer(keyID)

    function Timer(keyID) {
        setTimeout(function timer() {
            document.getElementById(keyID).classList.remove("active")
        }, "800")
    }

    let showLetter = document.getElementById("guide")
    showLetter.innerText = `You pressed ${keyID}`


}


// The class is activated depending what class it is tagged, e.g .white.active is only for keys
// with class white





document.body.addEventListener("keydown", function (keyPress) {
    // console.log("you pressed a key")
    // console.log(keyPress.key)

    if (keyPress.repeat) return

    switch (keyPress.key) {
        case "s":
            playAllKeys("F");
            activeClass("F")
            break;
        case "d":
            playAllKeys("G")
            activeClass("G")
            break;
        case "f":
            playAllKeys("A")
            activeClass("A")
            break;
        case "g":
            playAllKeys("B")
            activeClass("B")
            break;
        case "h":
            playAllKeys("C")
            activeClass("C")
            break;
        case "j":
            playAllKeys("D")
            activeClass("D")
            break;
        case "k":
            playAllKeys("E")
            activeClass("E")
            break;

        case "e":
            playAllKeys("F-Sharp")
            activeClass("F-Sharp")
            break;
        case "r":
            playAllKeys("G-Sharp")
            activeClass("G-Sharp")
            break;
        case "t":
            playAllKeys("A-Sharp")
            activeClass("A-Sharp")
            break;
        case "u":
            playAllKeys("C-Sharp")
            activeClass("C-Sharp")
            break;
        case "i":
            playAllKeys("D-Sharp")
            activeClass("D-Sharp")
            break;
        default:
            let wrongKey = document.getElementById("guide")
            wrongKey.innerText = "Start from s"


        //   alternate way
        // if (keyPress.key === "c") {
        //     console.log(playKeys())
        // }
        // if (keyPress.key === "b") {
        //     console.log(playKeys())
        // }
    }
})

// source for js key interactions https://www.youtube.com/watch?v=Q3ktcptd2yI
// bind the event to the body of the html
// the console shows you pressed a key down
// ev - renamable variable this shows which key your pressed down
// .key gives you acess to the key you pressed
// keydown is better to use than keypress - which are similar
// keyup only triggers when lifted key
// alternatively can use keycode numbers

/*
advice
    let fKey = document.getElementByID("F")

    fkey.classlist.add("active")

    document.getElementByID("F").classList.add("active")
*/

//  COWTIME

// function cowTime() {
//     cow = document.getElementById("cowTime")
//     cow.addEventListener("click", function cowParty() {
//         document.getElementsByTagName("ul").classList.add("active")
//     })
// }

// console.log(cowTime())



let cow = document.getElementById("moo")
console.log(cow)
cow.addEventListener("click", function cowParty() {
    document.getElementById("outer").classList.toggle("active")
})


// cow.addEventListener("click", function cowPartyEnded() {
//     document.getElementById("outer").classList.remove("active")
// })

