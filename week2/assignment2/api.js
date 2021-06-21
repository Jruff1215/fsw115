var joke = `[ 
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the server hosting industry IaaS stands for...",
            "correct_answer": "Infrastructure as a Service",
            "incorrect_answers": [
                "Internet as a Service",
                "Internet and a Server",
                "Infrastructure as a Server"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "hard",
            "question": "In The Witcher 3, the Zoltan Chivay Gwent card can be found under the Hanged Man's Tree.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        }
    ]`

var obj = JSON.parse(joke)

for (let i = 0; i < obj.length; i++) {
    var h1 = document.createElement("h1")
        h1.textContent = obj[i].category
        document.body.appendChild(h1)
    var h3 = document.createElement("h3")
        h3.textContent = obj[i].type
        document.body.appendChild(h3)
    var h3 = document.createElement("h3")
        h3.textContent = obj[i].difficulty
        document.body.appendChild(h3)
    var h2 = document.createElement("h2")
        h2.textContent = obj[i].question
        document.body.appendChild(h2)
    var h3 = document.createElement("h3")
        h3.textContent = obj[i].correct_answer
        document.body.appendChild(h3)
    var h3 = document.createElement("h3")
        h3.textContent = obj[i].incorrect_answers
        document.body.appendChild(h3)
}