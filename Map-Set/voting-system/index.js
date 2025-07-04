const poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let result = "Poll Results:\n";
  poll.forEach((voters, option) => {
    result += `${option}: ${voters.size} votes\n`;
  });
  return result.trim();
}

// .........................

addOption("Bangladesh");
addOption("India");
addOption("Pakistan")

vote("Bangladesh", "user1");
vote("India", "user2");
vote("Pakistan", "user3");

console.log(displayResults());

