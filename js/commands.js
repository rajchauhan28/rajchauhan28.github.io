var portfolio = "https://rajchauhan28.github.io/";
var linkedin = "https://www.linkedin.com/in/rajchauhan28/";
var github = "https://github.com/rajchauhan28";
var instagram = "https://www.instagram.com/reign_here/";
var email = 'rajsinghchauhan352@gmail.com';
var back = 'https://rajchauhan28.github.io/';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Raj singh chauhan, a programmer who is also a AI and Linux enthusiast. I am in this field since 6 yrs.`,
  `I gathered knowledge in Python, Linux, Internet of Things(IoT), SQL, Django, AI and ML. I like State of the art Technologies and software dev related stuff.`,
  "<br>",
];

links = [
  `<table>
   <tr><td>portfolio</td><td><a href="${portfolio}" target="_blank">portfolio</a></td></tr>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin account</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">github account</a></td></tr>
   <tr><td>instagram</td><td><a href="${instagram}" target="_blank">instagram account</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "My Github Projects Are Commonly Getting Updates Day By Day.",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is Raj singh chauhan?</td></tr>
  <tr><td><span class="command">links</span></td><td>All my contact and profile links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View my projects</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">back</span></td><td>Go Back To GUI Version Of My Website</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
];

banner = [
  `<br>
<br>
                                  /$$                           /$$                            /$$$$$$   /$$$$$$ <br>
                                 | $$                          | $$                           /$$__  $$ /$$__  $$<br>
  /$$$$$$  /$$$$$$  /$$  /$$$$$$$| $$$$$$$   /$$$$$$  /$$   /$$| $$$$$$$   /$$$$$$  /$$$$$$$ |__/   \ $$| $$  \ $$<br>
 /$$__  $$|____  $$|_/  /$$_____/ | $$__  $$ |____  $$| $$  | $$| $$__  $$ |____  $$| $$__  $$  /$$$$$$/|  $$$$$$/<br>
| $$  \\__/ /$$$$$$$ /$$| $$      | $$   \ $$  /$$$$$$$| $$  | $$| $$   \ $$  /$$$$$$$| $$   \ $$ /$$____/  >$$__  $$<br>
| $$      /$$__  $$| $$| $$      | $$  | $$ /$$__  $$| $$  | $$| $$  | $$ /$$__  $$| $$  | $$| $$      | $$  \  $$<br>
| $$     |  $$$$$$$| $$|  $$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$/| $$  | $$|  $$$$$$$| $$  | $$| $$$$$$$$|  $$$$$$/<br>
|__/      \\_______/| $$ \\_______/|__/  |__/ \\_______/ \\______/ |__/  |__/ \\_______/|__/  |__/|________/ \\______/ <br>
              /$$  | $$                                                                                          <br>
             |  $$$$$$/                                                                                          <br>
              \\______/                                                                                           <br>
                                                                                                                                                                                                                                                   
  <br>
  <br>`,
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Founder: Raj singh chauhan</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "theme", "theme ls", "theme random", "theme set coral", "theme set midnight", "theme set chocolate", "whatsapp", "facebook", "linkedin", "portfolio", "youtube", "github", "instagram", "history", "clear", "banner", "back", "ping"
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];

