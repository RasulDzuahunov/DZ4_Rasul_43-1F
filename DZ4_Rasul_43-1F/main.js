    let counter = 0;
    const counterDisplay = document.getElementById('counter-display');

    function increment() {
        counter++;
        updateCounterDisplay('green');
    }

    function decrement() {
        if (counter > 0) {
            counter--;
            updateCounterDisplay('red');
        }
    }

    function updateCounterDisplay(color) {
        counterDisplay.textContent = counter;
        counterDisplay.style.color = color;
    }

    // 2) Отображение координат курсора
    const coordinateBox = document.getElementById('coordinate-box');
    const coordinates = document.getElementById('coordinates');

    coordinateBox.addEventListener('mousemove', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        coordinates.textContent = `X: ${x}, Y: ${y}`;
    });

    // 3) Светофор
    function resetLights() {
        document.getElementById('red-light').style.backgroundColor = 'gray';
        document.getElementById('yellow-light').style.backgroundColor = 'gray';
        document.getElementById('green-light').style.backgroundColor = 'gray';
    }

    function changeLight() {
        const color = prompt("Введите цвет (Красный, Желтый, Зеленый):").toLowerCase();
        const message = document.getElementById('traffic-message');

        resetLights(); // сбрасываем все цвета перед изменением

        if (color === 'красный') {
            document.getElementById('red-light').style.backgroundColor = 'red';
            message.textContent = 'STOP';
        } else if (color === 'желтый') {
            document.getElementById('yellow-light').style.backgroundColor = 'yellow';
            message.textContent = 'WAIT';
        } else if (color === 'зеленый') {
            document.getElementById('green-light').style.backgroundColor = 'green';
            message.textContent = 'GO';
        } else {
            alert('Неверный цвет. Введите Красный, Желтый или Зеленый.');
        }
    }