// script.js

document.getElementById('match-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    const opponentName = document.getElementById('opponent-name').value;
    const teamName = document.getElementById('team-name').value;
    const matchDate = document.getElementById('match-date').value;
    const setScores = document.getElementById('set-scores').value;
    const comments = document.getElementById('comments').value;
  
    // Create a new list item for the match
    const matchItem = document.createElement('li');
    matchItem.innerHTML = `
      <h3>${opponentName} (${teamName})</h3>
      <p><strong>Date Played:</strong> ${matchDate}</p>
      <p><strong>Set Scores:</strong> ${setScores}</p>
      <p><strong>Comments:</strong> ${comments}</p>
    `;
  
    // Add the new match item to the list
    document.getElementById('match-list').appendChild(matchItem);
  
    // Clear the form
    document.getElementById('match-form').reset();
  });