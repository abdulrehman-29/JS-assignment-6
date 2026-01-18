function q1() {
    var firstName = prompt("Enter your First Name?")
    var lastName = prompt("Enter Last Name?")
    var fullName = firstName + " " + lastName

    alert("Welcome " + fullName)
}

function q2() {
    var phoneModel = prompt("Enter your favorite mobile phone model?")

    alert(phoneModel.length)
}

function q3() {
    var word = "Pakistani"

    document.write("String: " + word + "<br>")
    document.write("Index of 'n': " + word.indexOf("n"))
}

function q4() {
    var world = "Hello World"

    document.write("String: " + world + "<br>")
    document.write("Last Index of 'l': " + world.lastIndexOf("l"))
}

function q5() {
    var word = "Pakistani"

    document.write("String: " + word + "<br>")
    document.write("Character at Index 3: " + word.charAt(3))
}

function q6() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName.concat(" ", lastName)

    alert("Welcome " + fullName)
}

function q7() {
    var city = "Hyderabad";
    var newCity = city.replace("Hyder", "Islam")

    document.write("City: " + city + "<br>");
    document.write("After replacement: " + newCity);
}

function q8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newMessage = message.replaceAll("and", "&")

    document.write("<b>Sentence: </b>" + message + "<br><br>");
    document.write("<b>After replacement: </b>" + newMessage);
}

function q9() {
    var string = "472";
    var number = Number(string);

    document.write("Value: '" + string + "'<br>Type: " + typeof (string) + "<br><br>");
    document.write("Value: " + number + "<br>Type: " + typeof (number));
}

function q10() {
    var input = prompt("Enter Input Anything...")
    upperCase = input.toUpperCase();

    document.write("User Input: " + input + "<br><br>")
    document.write("Upper Case: " + upperCase)
}

function q11() {
    var userInput = prompt("Enter Input To Capitalize?")
    var upperCase = userInput.slice(0, 1).toUpperCase()
    var titleCase = upperCase + userInput.slice(1).toLowerCase()

    document.write("User input: " + userInput + "<br><br>");
    document.write("Title case: " + titleCase);
}

function q12() {
    var num = 35.36;
    var result = num.toString().replace(".", "")

    document.write("Number: " + num + "<br><br>")
    document.write("Result: " + result)
}

function q13() {
    var userName = prompt("Enter UserName?")
    var found = true;

    for (var i = 0; i <= userName.length; i++) {
        var charCode = userName.charCodeAt(i)
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            found = false
            break
        }
    }

    if (!found) {
        alert("Please Enter a valid username")
    } else {
        alert("Username is correct.")
    }

}

function q14() {
    a = ["cake", "apple pie", "cookie", "chips", "patties"];
    var search = prompt("Welcome to our Bakery. Enter your order")
    search = search.toLowerCase()
    var index = ""
    var found = false

    for (var i = 0; i <= a.length; i++) {
        if (search === a[i]) {
            index = i
            found = true
            break
        }
    }

    if (found) {
        alert(search + " is avaiable at index " + index + " in our Bakery")
    } else {
        alert(search + " is not available.")
    }
}

function q15() {
    var password = prompt("Enter password")
    var hasAlpha = false
    var hasNum = false

    if (password.length >= 6){
        if (password.charCodeAt(0) < 48 || password.charCodeAt(0) > 57){
            for (var i = 0; i < password.length; i++){
                var code = password.charCodeAt(i);
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
                    hasAlpha = true
                }
                if (code >= 48 && code <= 57) {
                    hasNum = true
                }
            }
            if (hasAlpha && hasNum) {
                alert("Password accepted.");
            } else {
                alert("Password must contain both alphabets and numbers.");
            }
        } else{ alert("Password should not start with a number.")}
    } else { alert("Password must be at least 6 characters long.")}
}

function q16() {
    var university = "University of Karachi";
    var universityArray = university.split("")

    for (var i = 0; i < universityArray.length; i++) {
        document.write(universityArray[i] + "<br>")
    }
}

function q17() {
    var userInput = prompt("Enter Input anything..")
    var lastChar = userInput.charAt(userInput.length - 1)

    document.write("User input: " + userInput + "<br><br>");
    document.write("Last character of input: " + lastChar);
}

function q18() {
    var sentence = "The quick brown fox jumps over the lazy dog."
    var text = sentence.toLowerCase().split(" ")
    var count = 0;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === "the") {
            count++
        }
    }

    document.write("Text: " + sentence + "<br><br>");
    document.write("There are " + count + " occurrence(s) of word 'the'.");

}
