let body = document.querySelector("body");
let numDiv = document.createElement("div");

let coin = {
  state: 0,
  flip: function () {
    if (Math.random() < 0.5) {
      console.log("heads");
      this.state = 1;
    } else {
      this.state = 0;
      console.log("tails");
    }
    console.log(this.state);
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },

  toString: function () {
    if (this.state === 1) {
      return "Heads";
    } else {
      return "Tails";
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 1) {
      image.src = "images/heads.jpg";
    } else {
      image.src = "images/tails.jpg";
    }
    return numDiv.append(image);
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
  },
};

function display20Flips() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    body.append(coin.toString());
  }
  /*Write a function called display20Flips that uses a loop to flip the coin 20 times. 
    Each time the coin flips, display the result of each flip as a string on the page 
    (make use of your toString() method) */
}

function display20Images() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    coin.toHTML();
    body.append(numDiv);
  }
  /*Write a function called display20Images, again using a loop to flip the coin 20 times…
    but this time instead of displaying the result as a string, 
    display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).*/
}
display20Flips();
display20Images();
