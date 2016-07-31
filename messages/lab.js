xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "data.json", true);

xmlhttp.onreadystatechange = parse;

xmlhttp.send(null);

function parse() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	raw = xmlhttp.responseText;
	data = JSON.parse(raw);
	messages = document.getElementById("messages");
	messages.innerHTML = "<h2>" + data[0]['content'] + " " + data[0]['username'] + "</h2> <h3>" + data[1]['content'] + " " + data[1]['username'] + "</h3>";
    }
    else {
	document.getElementById("messages").innerHTML = "<p> Fail </p>";
    }
}



