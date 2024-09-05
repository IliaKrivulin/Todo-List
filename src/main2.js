let input = document.createElement('input');
        input.classList.add('input')
        input.type = 'text';

        let h2 = document.createElement('h2');
        h2.classList.add('head');

        document.body.append(input);
        document.body.append(h2);

        let classInput = document.querySelector('.input');
        let classHead = document.querySelector('.head');
        
        let timeout;
        
        function inputText() {
            classHead.textContent = classInput.value;
        }

        function outputText() {
            timeout = clearTimeout(timeout);
            timeout = setTimeout(inputText, 300);
        }
       classInput.addEventListener('input', outputText);
