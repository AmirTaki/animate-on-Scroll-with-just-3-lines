const colors = ['rgb(1, 4,2)', 'rgb(26, 190, 81)', 'rgb(25, 164, 62)', 'rgb(70, 255, 243)', 'rgb(27, 66, 64)' 
    ,'rgb(32, 53, 1)','rgb(161, 5, 156)', 'rgb(138, 6, 57)','rgb(151, 14, 28)',
    "rgb(151, 14, 14)", 'rgb(206, 216, 5)','rgb(89, 216, 5)', "silver", "blue", "pink", "orange",
    
]
const widths = ["100", '400', "500", "600","250","150",  "300", "123", '260'] 



function getRandomArbitrary(min, max) {
  return Math.floor( Math.random() * (max - min) + min);
}
const blocks = document.querySelectorAll(".block")
blocks.forEach(block => {
    const random = (getRandomArbitrary(0, colors.length -1))
    block.style.backgroundColor = colors[random]
    const randomWidth = getRandomArbitrary(0, widths.length -1);
    block.style.width = widths[randomWidth]+"px"

});

