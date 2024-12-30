var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");
var after = document.getElementById("after");

var git = 0;
var tab = 0;
var pw = false;
let pwd = false;
var commandsLog = [];
var selectedTabCmd = "";
var current_theme = "coral";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

setTimeout(async function () {
  //await new Promise((resolve)=>{resolve(loopLines(banner, "terminal-banner", 80));});
  await loopLines(banner, "terminal-banner", 20);
  loopLines(welcomeMsg, "", 80);
  textarea.focus();
}, 100);

window.addEventListener('click', focusTextArea, true);
window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function focusTextArea() {
  textarea.focus();
}

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  // Enter key
  if (e.keyCode == 13) {
    removeTabCompleteLine();
    tab = 0;                                  // update the tab index
    if (selectedTabCmd != "") {
      textarea.value = selectedTabCmd;
      command.innerHTML = selectedTabCmd;
      selectedTabCmd = "";
      return;
    }
    commandsLog.push(command.innerHTML);
    git = commandsLog.length;                 // update the arrow key index
    addLine(" > " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  // Arrow up
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commandsLog[git];
    command.innerHTML = textarea.value;
  }
  // Arrow down
  if (e.keyCode == 40 && git != commandsLog.length) {
    git += 1;
    if (commandsLog[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commandsLog[git];
    }
    command.innerHTML = textarea.value;
  }
  // Tab complete
  if (e.keyCode == 9) {
    // if (textarea.value.length == 0) {
    //   refreshTabCompleteLine("");
    // }
    // else {
    cmdOptions = completeQuery(allCommands, textarea.value);
    if (tab == cmdOptions.length) {
      tab = 0;
    }
    if (cmdOptions.length == 1) {
      textarea.value = cmdOptions[0];
      command.innerHTML = textarea.value;
    }
    else if (cmdOptions.length > 1) {
      selectedTabCmd = cmdOptions[tab];

      suggestionTxt = "";
      for (let i = 0; i < cmdOptions.length; i++) {
        if (i == tab) {
          suggestionTxt += `<span class=\"command\">${cmdOptions[i]}</span>    `;
          continue;
        }
        suggestionTxt += `<span class=\"inherit\">${cmdOptions[i]}</span>    `;
      }
      refreshTabCompleteLine(suggestionTxt, "no-animation", 0);
    }
    tab += 1;
  }
  // }
}


function commander(cmd) {
  var cmdAll = cmd.split(" ");
  var cmd = cmdAll[0];
  var args = "";
  if (cmdAll.length > 1) {
    args = cmdAll.slice(1).join(" ");
  }
  switch (cmd.toLowerCase()) {
    // content stuff
    case "help":
      loopLines(help, "color2 margin no-animation", 20);
      break;
    case "about":
      loopLines(about, "color2 margin no-animation", 0);
      break;
    case "links":
      loopLines(links, "color2 margin no-animation", 0);
      break;
    case "projects":
      loopLines(projects, "color2 margin no-animation", 0);
      break;
    case "email":
      addLine('rajsinghchauhan352@gmail.com', "color2", 80);
      break;
    // socials
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "back":
      addLine("Letting Back...", "color2", 0);
      newTab(back);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "youtube":
      addLine("Opening Youtube...", "color2", 0);
      newTab(youtube);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "whatsapp":
      addLine("Opening Whatsapp...", "color2", 0);
      newTab(whatsapp);
      break;
    case "facebook":
      addLine("Opening Facebook...", "color2", 0);
      newTab(facebook);
      break;
    case "linkedin":
      addLine("Opening Linkedin...", "color2", 0);
      newTab(linkedin);
      break;
    case "portfolio":
      addLine("Opening Porfolio...", "color2", 0);
      newTab(portfolio);
      break;
    // functional commands
    case "history":
      addLine("<br>", "", 0);
      loopLines(commandsLog, "color2", 20);
      addLine("<br>", "command", 80 * commandsLog.length + 50);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "terminal-banner", 20);
      break;
    case "theme":
      var allArgs = args.split(" ");
      var themeCmd = allArgs[0];
      var themeArg = "";
      if (allArgs.length == 2) {
        themeArg = allArgs[1];
      }
      switch (themeCmd.toLowerCase()) {
        case "":
          addLine(`Usage: <span class=\"command\">theme</span> [arg]`, "inherit no-animation", 0);
          addLine(`Args:`, "inherit no-animation", 0);
          addLine(`   - <span class=\"command\">ls</span>: list all themes`, "inherit no-animation", 0);
          addLine(`   - <span class=\"command\">set</span>: set a theme`, "inherit no-animation", 0);
          addLine(`Example:`, "inherit no-animation", 0);
          addLine(`   <span class=\"command\">theme random</span> to select a random theme.`, "inherit no-animation", 0);
          addLine(`   <span class=\"command\">theme ls</span> to see all available themes.`, "inherit no-animation", 0);
          break;
        case "ls":
          loopLines(Object.keys(themes), "inherit", 80);
          break;
        case "set":
          if (!Object.keys(themes).includes(themeArg)) {
            addLine(`<span class=\"inherit\">Theme '${themeArg}' does not exist</span>`);
            break;
          }
          addLine(`<span class=\"inherit\">Setting theme: '${themeArg}'</span>`);
          setThemeCSS(themeArg);
          break;
        case "random":
          var theme = current_theme;
          while (theme == current_theme) {
            theme = Object.keys(themes)[Math.floor(Math.random() * Object.keys(themes).length)];
          }
          addLine(`<span class=\"inherit\">Setting theme: '${theme}'</span>`);
          current_theme = theme;
          setThemeCSS(theme);
          break;
      }
      break;
    case "echo":
      addLine(`${args}`, "color2", 80);
      break;
    case "ping":
      if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(args)) {
        addLine(`<span class=\"inherit\">PING ${args} (${args}): 56 data bytes</span>`);
        addLine(`<span class=\"inherit\">64 bytes from ${args}: icmp_seq=0 ttl=116 time=25.862 ms</span>`);
      }
      else {
        addLine(`<span class=\"inherit\">ping: cannot resolve ${args}: Unknown host</span>`);
      }
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

async function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  //setTimeout(function() {
  await delay(time);
  var next = document.createElement("p");
  next.innerHTML = t;
  next.className = style;

  before.parentNode.insertBefore(next, before);

  window.scrollTo(0, document.body.offsetHeight);
  //}, time);
  return;
}

async function loopLines(name, style, time) {
  // name.forEach(function(item, index) {
  //     addLine(item, style, index * time);
  // });
  for (var i = 0; i < name.length; i++) {
    await addLine(name[i], style, i * time);
  }
  return;
}

function setThemeCSS(theme) {
  // Selects other CSS theme
  var lnk = document.createElement('link');
  lnk.href = themes[theme];
  lnk.rel = 'stylesheet';
  lnk.type = 'text/css';
  (document.head || document.documentElement).appendChild(lnk);
}

function completeQuery(arr, query) {
  // Completes the query string with a list of matching elements from arr
  return arr.filter(function (item) {
    return item.startsWith(query);
  });
}

function refreshTabCompleteLine(text, style, time) {
  // Refreshes the line below the command for tab completion suggestions
  removeTabCompleteLine();
  setTimeout(function () {
    var next = document.createElement("p");
    next.setAttribute("id", "tabCompleteLine");
    next.innerHTML = text;
    next.className = style;

    after.parentNode.insertBefore(next, after);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function removeTabCompleteLine() {
  // Deletes the HTML element
  var tcl = document.getElementById("tabCompleteLine");
  if (tcl !== null) {
    tcl.outerHTML = "";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}