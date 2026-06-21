// first event: surprise message
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseBox = document.getElementById('surpriseBox');

surpriseBtn.addEventListener('click', function() {
    surpriseBox.innerHTML = '🎉 hope you have a lovely day ✨';
    console.log('surprise clicked');
});

// second event: hover effect
const hoverZone = document.getElementById('hoverZone');
const hoverMessage = document.getElementById('hoverMessage');
const hoverFeedback = document.getElementById('hoverFeedback');

hoverZone.addEventListener('mouseover', function() {
    hoverMessage.innerHTML = '✨ you found the quiet spot';
    hoverFeedback.innerHTML = 'soft glow';
    console.log('hover active');
});

hoverZone.addEventListener('mouseout', function() {
    hoverMessage.innerHTML = 'just hover here';
    hoverFeedback.innerHTML = '';
    console.log('hover ended');
});

// third event: say hello with name
const helloBtn = document.getElementById('helloBtn');
const username = document.getElementById('username');
const greetingMsg = document.getElementById('greetingMsg');

helloBtn.addEventListener('click', function() {
    let name = username.value.trim();
    
    if (name === "") {
        greetingMsg.innerHTML = '👋 hello, friend!';
        greetingMsg.style.color = '#a48e7c';
        alert('hello there!');
    } else {
        greetingMsg.innerHTML = '🌸 hello, ' + name + '! nice to meet you 🌸';
        greetingMsg.style.color = '#6b7c5e';
        alert('hello ' + name + '!');
    }
    console.log('greeting sent');
});

// fourth event: keydown
const keyBox = document.getElementById('keyBox');
const keyFeedback = document.getElementById('keyFeedback');

document.addEventListener('keydown', function(event) {
    let keyPressed = event.key;
    keyBox.innerHTML = '⌨️ you pressed: ' + keyPressed;
    keyFeedback.innerHTML = '✨ key detected!';
    console.log('key pressed: ' + keyPressed);
    
    setTimeout(function() {
        if (keyBox.innerHTML === '⌨️ you pressed: ' + keyPressed) {
            keyBox.innerHTML = 'press a key on your keyboard';
            keyFeedback.innerHTML = '';
        }
    }, 1500);
});

// fifth event: select / dropdown
const moodSelect = document.getElementById('moodSelect');
const scrollBox = document.getElementById('scrollBox');
const scrollFeedback = document.getElementById('scrollFeedback');

moodSelect.addEventListener('change', function() {
    let selectedValue = moodSelect.value;
    let selectedText = moodSelect.options[moodSelect.selectedIndex].text;
    
    if (selectedValue === "") {
        scrollBox.innerHTML = 'pick a mood above';
        scrollFeedback.innerHTML = '';
    } else {
        scrollBox.innerHTML = '🎯 you chose: ' + selectedText;
        scrollFeedback.innerHTML = '✨ lovely choice!';
        console.log('mood selected: ' + selectedValue);
        
        setTimeout(function() {
            if (scrollBox.innerHTML === '🎯 you chose: ' + selectedText) {
                scrollBox.innerHTML = 'pick a mood above';
                scrollFeedback.innerHTML = '';
                moodSelect.value = "";
            }
        }, 2000);
    }
});
