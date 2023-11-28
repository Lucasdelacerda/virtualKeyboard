const numbersAndLetters = document.querySelectorAll(".numbers-letters, .acentuation-key");
const keys = document.querySelectorAll('.key')
const display = document.getElementById("display")
let isUpperCase = false;
const specialKeys = document.querySelectorAll('.special-key')
const spaces = document.getElementById('spacebar')
const shift = document.getElementById('shift-caps')
const enter = document.getElementById('enter')
const backspace = document.getElementById('backspace')
const aAcentuationContainer = document.getElementById('a-acentuation-container')
const eAcentuationContainer = document.getElementById('e-acentuation-container')
const oAcentuationContainer = document.getElementById('o-acentuation-container')
const acentuationContainer = document.getElementsByClassName('acentuation-container')
const aButton = document.getElementById('a-button')
const eButton = document.getElementById('e-button')
const oButton = document.getElementById('o-button')

const acentuationButtons = document.querySelectorAll(".acentuation-container .key")


//key effect and value
numbersAndLetters.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valorDoBotao = botao.textContent;
    display.value += valorDoBotao;
    botao.classList.add("clicked")
    setTimeout(function () {
      botao.classList.remove("clicked")
    }, 100);
  });
});

//special keys values

backspace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
})

spaces.addEventListener('click', () => {
  display.value += ' ';

})
enter.addEventListener("click", () => {
  display.value += '\n'
})
shift.addEventListener('click', () => {
  numbersAndLetters.forEach(upper => {
    if (isUpperCase) {
      upper.innerText = upper.innerText.toUpperCase();
    }
    else {
      upper.innerText = upper.innerText.toLowerCase();
    }
  })
  isUpperCase = !isUpperCase
})

//special-keys effect
specialKeys.forEach((special) => {
  special.addEventListener("click", () => {
    special.classList.add("clicked")
    setTimeout(function () {
      special.classList.remove("clicked")
    }, 100);
  });
});
// keydown effect and caps values
window.addEventListener('keydown', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.add('clicked')
    }
  }


  if (e.code === 'Space') {
    spaces.classList.add('clicked')
  }


  if (e.code === 'Enter') {
    enter.classList.add('clicked')
  }
  if (e.code === 'Backspace') {
    backspace.classList.add('clicked')
  }

  if (e.getModifierState("CapsLock")) {
    if (isUpperCase) {
      shift.classList.add('clicked')
    }
    else {
      shift.classList.remove('clicked')
    }
    numbersAndLetters.forEach(upper => {
      if (isUpperCase) {
        upper.innerText = upper.innerText.toUpperCase();
      }
      else {
        upper.innerText = upper.innerText.toLowerCase();
      }
    })
    isUpperCase = !isUpperCase
  }
}
);
// on keyboard click effect
window.addEventListener('keyup', function (e) {
  for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCaseName', keys[i].innerText.toUpperCase());
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.remove('clicked')
    }

  }
  if (e.code === 'Space') {
    spaces.classList.remove('clicked')
  }

  if (e.code === 'Enter') {
    enter.classList.remove('clicked')
  }
  if (e.code === 'Backspace') {
    backspace.classList.remove('clicked')
  }
})
aButton.addEventListener('click', () => {
  if(isUpperCase){
  aAcentuationContainer.style.display = 'flex'
}
else{
  aAcentuationContainer.style.display = 'none'
}
 isUpperCase = !isUpperCase
})

eButton.addEventListener('click', () => {
if(isUpperCase){
  eAcentuationContainer.style.display = 'flex'
}
else{
eAcentuationContainer.style.display = 'none'
}
isUpperCase = !isUpperCase
})

oButton.addEventListener('click', () => {
  if(isUpperCase){
  oAcentuationContainer.style.display = 'flex'
}
else{
oAcentuationContainer.style.display = 'none'
}
isUpperCase = !isUpperCase
})

acentuationButtons.forEach(button => {
  button.addEventListener('click', () => {
    aAcentuationContainer.style.display = 'none';
  });
});
acentuationButtons.forEach(button => {
  button.addEventListener('click', () => {
    oAcentuationContainer.style.display = 'none';
  });
});
acentuationButtons.forEach(button => {
  button.addEventListener('click', () => {
    eAcentuationContainer.style.display = 'none';
  });
});