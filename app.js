const id = window.location.hash.slice(2);
const apiKey = 'keyCxnlep0bgotSrX';
const url = `https://api.airtable.com/v0/appa7mnDuYdgwx2zP/Challenges/${id}?api_key=${apiKey}`;

$.getJSON(url).done(data => {
  const image = data.fields['Header Image'];
  const title = data.fields['Title'];
  const instructions = data.fields['Instructions'];
  const moreInformation = data.fields['More Information Html'];

  $('#challenge-container').html(`
    <div id="image-wrapper">
      <img src=${image} />
    </div>
    <div id="content-wrapper">
      <h1>${title}</h1>
      <h3>About this activity</h3>
      <p>${instructions}</p>
      <h3>More information</h3>
      <p>${moreInformation}</p>
    </div>
  `);
});
