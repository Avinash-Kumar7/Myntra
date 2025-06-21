const img = [
    "img/heading.webp",
    "img/heading2.webp",
    "img/heading3.webp",
    "img/heading4.webp",
    "img/heading5.webp",
    "img/heading6.webp"
];
let currenIndex = 0;
const imageElement = document.querySelector(".homeimg")
setInterval(() => {
        imageElement.classList.add("fade-out");
setTimeout(() => {
    currenIndex = (currenIndex + 1) % img.length;
    imageElement.src = img[currenIndex];
            imageElement.classList.remove("fade-out")},400);

}, 5000);


const imageset = document.getElementById("medal")
const groups = [
    ["img/med1.webp",
        "img/med6.webp",
        "img/med10.webp",
        "img/med2.webp",
        "img/med3.webp"
    ],
    [
        "img/med2.webp",
        "img/med7.webp",
        "img/med9.webp",
        "img/med6.webp",
        "img/med1.webp",

    ],
    [
        "img/med3.webp",
        "img/med8.webp",
        "img/med7.webp",
        "img/med6.webp",
        "img/med10.webp",
    ],
    [
        "img/medal4.webp",
        "img/med9.webp",
        "img/med6.webp",
        "img/med7.webp",
        "img/med1.webp",
    ],
    [
        "img/med5.webp",
        "img/med10.webp",
        "img/med8.webp",
        "img/medal4.webp",
        "img/med6.webp"

    ]
]
let currentIndex = 0;
function loadimage(index) {
    imageset.innerHTML = "";
    groups[index].forEach(src => {
        const img = document.createElement("img")
        img.src = src;
        imageset.appendChild(img)
    });
}
function startsliding() {
    loadimage(currentIndex)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % groups.length;
        loadimage(currentIndex)
    }, 3000);
}
startsliding();


const imageset1 = document.getElementById("medal2")
const groups1 = [
    ["img/grand1.webp",
        "img/grand6.webp",
        "img/grand10.webp",
        "img/grand2.webp",
        "img/grand3.webp"
    ],
    [
        "img/grand2.webp",
        "img/grand7.webp",
        "img/grand9.webp",
        "img/grand6.webp",
        "img/grand1.webp",

    ],
    [
        "img/grand3.webp",
        "img/grand8.webp",
        "img/grand7.webp",
        "img/grand6.webp",
        "img/grand10.webp",
    ],
    [
        "img/grand4.webp",
        "img/grand9.webp",
        "img/grand6.webp",
        "img/grand7.webp",
        "img/grand1.webp",
    ],
    [
        "img/grand5.webp",
        "img/grand10.webp",
        "img/grand5.webp",
        "img/grand4.webp",
        "img/grand6.webp"

    ]
]
let currentIndex1 = 0;
function loadimage1(index) {
    imageset1.innerHTML = "";
    groups1[index].forEach(src => {
        const img = document.createElement("img")
        img.src = src;
        imageset1.appendChild(img)
    });
}
function startsliding1() {
    loadimage1(currentIndex1)
    setInterval(() => {
        currentIndex1 = (currentIndex1 + 1) % groups1.length;
        loadimage1(currentIndex1)
    }, 3000);
}
startsliding1();



const imageset2 = document.getElementById("medal3")
const groups2 = [
    [
        "img/lux1.webp",
        "img/lux5.webp",
        "img/lux8.webp",
        "img/luxx10.webp",
        "img/lux12.webp"

    ],
    [
        "img/lux2.webp",
        "img/lux4.webp",
        "img/lux11.webp",
        "img/lux9.webp",
        "img/lux12.webp"
    ],
    [
        "img/lux3.webp",
        "img/lux1.webp",
        "img/lux6.webp",
        "img/luxx10.webp",
        "img/lux8.webp",

    ],
    [
        "img/lux4.webp",
        "img/lux11.webp",
        "img/lux2.webp",
        "img/lux1.webp",
        "img/lux3.webp",

    ],
    [
        "img/lux5.webp",
        "img/lux12.webp",
        "img/luxx10.webp",
        "img/lux9.webp",
        "img/lux7.webp",


    ]
]
let currentIndex2 = 0;
function loadimage2(index) {
    imageset2.innerHTML = "";
    groups2[index].forEach(src => {
        const img = document.createElement("img")
        img.src = src;
        imageset2.appendChild(img)
    });
}
function startsliding2() {
    loadimage2(currentIndex2)
    setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % groups2.length;
        loadimage2(currentIndex2)
    }, 3000);
}
startsliding2();



  function confirmCall(phoneNumber) {
      const confirmAction = confirm("Kya aap is number par call karna chahte hain? " + phoneNumber);
      if (confirmAction) {
        window.location.href = "tel:" + phoneNumber;
      }
    }
