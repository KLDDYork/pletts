function image() {
};

image = new image();
number = 0;

// imageArray
image[number++] = "<a href='#'><img src='images/pic1.jpg' border='0' alt='Pletts Personell'></a>"
image[number++] = "<a href='#'><img src='images/pic2.jpg' border='0' alt='Pletts Personell'></a>"
image[number++] = "<a href='#'><img src='images/pic3.jpg' border='0' alt='Pletts Personell'></a>"
image[number++] = "<a href='#'><img src='images/pic4.jpg' border='0' alt='Pletts Personell'></a>"

// keep adding items here...

increment = Math.floor(Math.random() * number);

document.write(image[increment]);