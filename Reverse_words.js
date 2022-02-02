// ------ Reversing Characters-----

/* function reverseCharacters(x) {
  const splitChars = x.split("");
  const reverseChars = splitChars.reverse();
  const joinChars = reverseChars.join("");
  return joinChars;
}

console.log(reverseCharacters("I like JS")); */

/* function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); */

// ---==with Prompt----

/* function reverseString() {
    const x = prompt("Enter");
    return x.split("").reverse().join("");
  }
  
  console.log(reverseString()); */

// ------Reversing items in a Given a list----

/* 
const myList = new Array("I", "like", "JS", "too", "much");

function reverse_order(array) {
  let list_reverse = [];
  for (i = array.length; i >= 0; i--) {
    list_reverse.push(array[i]);
  }
  return list_reverse;
}

console.log(reverse_order(myList));
 */

/* function reverseInPlace(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
       result += words[i].split('').reverse().join('') + " ";
    }
    return result
  }
  console.log(reverseInPlace("abd fhe kdj"))

 */
/* 
  def rev_sentence(sentence): 
  
    # first split the string into words 
    words = sentence.split(' ') 
  
    # then reverse the split string list and join using space 
    reverse_sentence = ' '.join(reversed(words)) 
  
    # finally return the joined string 
    return reverse_sentence  */


// y = " ".join(reversed(input().split(" ")))