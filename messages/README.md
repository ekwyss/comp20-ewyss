#README for lab9
#Eric Wyss

Modified lab.js to open JSON file using XMLHttpRequest, parse the data, and
output the messages to the screen. Edited the CSS file for styling. Followed
parts 2 and 3 to see if it's possible to request the data from a different
origin or from my local machine. It is not possible to do so because of the
Same-origin policy. Since the given URI and my local machine do not share
identical protocols, ports, and hosts(come from the same origin) as my page, I
am unable to interact with the data in those cases. This is set up for security
reasons to protect from malicious actions such as cross-site scripting.

Worked alone, consulted piazza posts, lecture notes, sites referenced in
assignment document, and the tutorial video on Ajax by LearnToProgram posted on
piazza.
Time Spent: ~1.5hr.