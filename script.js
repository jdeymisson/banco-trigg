const inputRange = document.querySelector('#simulate');

inputRange.addEventListener('input', () => {
    let display = document.querySelector('.simulate').innerText = `R$ ${inputRange.value * 1.0}`.replace(',', '.');
});

