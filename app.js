const id = window.location.hash.slice(2);
const apiKey = 'keyCxnlep0bgotSrX';
const url = `https://api.airtable.com/v0/appa7mnDuYdgwx2zP/Challenges/${id}?api_key=${apiKey}`;

$.getJSON(url).done(data => {
  const image = data.fields['Header Image'];

  // Remove the year from the title, if present
  const title = data.fields['Title']
    .replace(/2017: /, '')
    .replace(/2018: /, '');

  // Strip out old branding bits (YOUR CHALLENGE, forced styles)
  const instructions = data.fields['Instructions']
    .replace(/YOUR CHALLENGE: /, '')
    .replace(/ style="font-weight: bold; font-size: 14px;*"/, '')
    .replace(/ style="font-size:14px; font-weight:bold"/, '')
    .replace(/<\/*strong>/g, '');

  const moreInformation = data.fields['More Information Html']
    // Remove FOCUS ON box and quote box
    .replace(/<div class="brandingBckgrndColor" style="margin-bottom:9px;padding:10px;color:white;">.*<\/p><\/div>/s, '')
    .replace(/<div style="margin-bottom: 9px; padding: 10px; color: white;".*<\/div>/s, '')
    .replace(/<div style="margin-bottom: 9px;.*FOCUS ON.*<\/h4><\/div>/s, '')
    .replace(/<div style="margin-bottom: 9px.*IGNITE YOUR LIFE<\/h4><\/div>/s, '')
    // Remove Tagline
    .replace(/<h3.*class="brandingBckgrndColor".*<\/h3>/, '')
    // Remove coaching
    .replace(/<span class="coachinginfo">.*<\/span>/s, '')
    // Remove bottom image
    .replace(/<img.*_web.*>/, '')
    // Remove all caps copyright
    .replace(/<p style="font-size: .*Copyright.*ADURO.*<\/p>/, '')

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
