function displayJoke() {
    const jokes = [
        "Why did the scarecrow scream at the corn? He wanted it to pop!",
        "Why did the golfer scream? He realized he put his tee in the wrong green!",
        "Why don’t scientists trust atoms? Because they scream when split!",
        "Why did the bicycle scream? It was tired of being two-tired!",
        "Why did the math book scream? Its problems were too difficult!"
    ];

    const stories = [
        "Once upon a time, there was a chicken who loved to cross roads. As it reached the middle of the road, it screamed in excitement, realizing it had finally made it halfway.",
        "In a quiet town, a potato was elected mayor. On its first day, it screamed in joy, banning all mashing. The town cheered and had a smashing good time.",
        "A fish once wanted to know life outside water. It climbed a tree, but halfway up, it screamed, realizing it had bitten off more than it could chew."
    ];

    const randomSelection = Math.random();
    let outputText;

    if (randomSelection < 0.7) {
        outputText = jokes[Math.floor(Math.random() * jokes.length)];
    } else {
        outputText = stories[Math.floor(Math.random() * stories.length)];
    }

    document.getElementById("output").innerText = outputText;
}
