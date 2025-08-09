const contentMap = {
    about: `<h2>hi! i'm chase.</h2><br>
    <p>you can call me '<b>ces</b>' for short, though.<br>
    even though <b>i'm 23</b>, i can't make a dentist appoinment by myself.<br> 
    i don't really believe in star sign, but i'm an <b>intj</b> (if that really matters for you).<br> 
    you can address me however you want, i'm fine with <b>any pronouns</b>.<br> 
    i tweet in <b>indonesian and broken english</b>; i <b>write in both languages</b> as well (i'll use <b>perfect english</b> when i write, of course).<br>
    i'm passionate in <b>coding</b>, mostly for <u>web development, embedded system, and rpg/visual novel games</u>!</p>`,
    intro: `<h2>before you follow me:</h2><br>
    <ul><li>i'm a part of many fandoms. check on my <a href="#" id="goto-fandoms">fandom list</a> to make sure my interest fits yours.</li>
    <li>i swear a lot, i'm sorry T__T</li>
    <li>i might yap about my ocs as well, i hope you don't mind</li></ul><br>

    <h2>do not follow if:</h2><br>
    <ul><li>you're uncomfortable with my writings (i put tw on all of them, don't worry)</li>
    </ul><br>

    <h2>please give trigger warning (tw) if you post these as my mutual:</h2><br>
    <ul><li>insects (spider, cockroach, etc)</li>
    <li>nsfw/porn</li></ul>`,
    fandoms: `<h2>fandom list</h2><br>
    <ul><li>wind breaker (webtoon/manhwa)</li>
    <li>one ok rock</li>
    <li>glass heart</li>
    <li>jujutsu kaisen</li>
    <li>4 kings (thai)</li>
    <li>food wars</li>
    <li>omori</li>
    <li>life is strange</li>
    <li>mouthwashing</li>
    <li>harry potter</li>
    <li>stranger things</li></ul><br>

    <h2>casual (fictional)</h2><br>
    <ul><li>kpop demon hunters</li>
    <li>friends</li>
    <li>hunger games</li>
    <li>divergent</li>
    <li>the maze runner</li>
    <li>percy jackson</li>
    <li>junji ito's works</li>
    <li>dead poets society</li>
    <li>squid game</li>
    <li>a space for the unbound</li>
    <li>more, i have no life tbh</li></ul><br>

    <h2>casual (non-fictional)</h2><br>
    <ul><li>bigbang</li>
    <li>stray kids</li>
    <li>day6</li>
    <li>5 seconds of summer</li>
    <li>one direction</li>
    <li>timethai</li>
    <li>mads mikkelsen</li>
    <li>cillian murphy</li>
    <li>emo bands (ptv, sws, bvb, bmth, mcr, etc)</li>
    <li>i know some gen 2 - gen 3 kpop groups, western bands/singer/actors, and a couple of thai/korean celebrities as well.</li></ul>`,
    connect: `<h2>connect with me</h2>
    <p>
      x: <a href="https://twitter.com/chocomict" target="_blank">@chocomict</a><br>
    </p>`
  };
  
  const items = document.querySelectorAll('.sidebar li');
  const mainContent = document.getElementById('main-content');

  function loadSection(section) {
    items.forEach(i => {
      i.classList.toggle('active', i.getAttribute('data-section') === section);
    });

    mainContent.innerHTML = contentMap[section] || `<p>Section not found.</p>`;

    const fandomLink = document.getElementById('goto-fandoms');
    if (fandomLink) {
      fandomLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadSection('fandoms');
      });
    }
  }

items.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      loadSection(section);
    });
  });

  loadSection('about');

window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  });
  
  document.getElementById('decline-btn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
  });
  
