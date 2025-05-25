const chatbox = document.getElementById("chatbox");

function sendMessage() {
  const input = document.getElementById("userInput");
  const mood = document.getElementById("mood").value;
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");

  const response = getBotResponse(text.toLowerCase(), mood);
  setTimeout(() => addMessage(response, "bot"), 500);

  input.value = "";
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender === "bot" ? "bot-msg" : "user-msg";
  msg.textContent = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input, mood) {
  // Sample basic responses
  const answers = {
    "for loop": {
      chill: "Easy peasy, loop until it's done. Just chill with `for (let i = 0; i < 10; i++) {}`.",
      hype: "🔥 YO YOU WANNA LOOP?! Let’s GO! Use a `for` loop and SLAY that array!!!",
      rude: "Bro... it’s literally just `for (...)`. Google it maybe?",
      nerd: "`for (int i = 0; i < n; i++)` – classic iterative control structure 😌."
    },
    "if statement": {
      chill: "`if (condition) { doStuff(); }` – smooth like butter.",
      hype: "IF TRUE THEN WIN. ELSE? WE STAY LOSING. 😤",
      rude: "Seriously? `if`. That's it. You’re welcome.",
      nerd: "`if-else` logic allows binary branching in code execution ✨."
    },
    "array": {
      chill: "Just a chill lil collection of stuff. Like a grocery list, but in code.",
      hype: "ARRAYS GOT RANGE 💪 Stack them values, bro!!",
      rude: "An array is like your attention span: short and chaotic.",
      nerd: "Arrays are indexed collections starting at 0. Know your bounds!"
    }
  };

  // Match keywords
  for (const keyword in answers) {
    if (input.includes(keyword)) {
      return answers[keyword][mood];
    }
  }

  // Default fallback
  const defaults = {
    chill: "Hmm, not sure fam. Try rewording that?",
    hype: "I ain't got that answer YET... but give me a minute 😤",
    rude: "Nah. What even was that question.",
    nerd: "Unrecognized input. Please clarify your query for better parsing."
  };

  return defaults[mood];
}
