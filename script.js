document.querySelector('button').addEventListener('click', () => {
    const inputEng = document.querySelector('.eng').value,
        inputTranslated = document.querySelector('.translated').value;

    if(inputEng, inputTranslated){
        const newBlock = document.createElement('div');
        const btnDel = document.createElement('button');

        newBlock.classList.add('block');
        newBlock.textContent = inputEng;
        btnDel.textContent = 'X';
        btnDel.classList.add('remove');
        newBlock.append(btnDel);

        btnDel.addEventListener('click', e => {
            e.stopPropagation();
            newBlock.style.display = 'none'
        })

        document.querySelector('.eng').value = '';
        document.querySelector('.translated').value = '';

        newBlock.addEventListener('click', () => {
            if(!newBlock.classList.contains('active')){
                newBlock.classList.add('active');
                newBlock.textContent = inputTranslated;
                newBlock.append(btnDel);
            } else {
                newBlock.classList.remove('active');
                newBlock.textContent = inputEng;
                newBlock.append(btnDel);
            }
        });

        document.querySelector('.container').append(newBlock)
    } else {
        alert('Type something')
    }
});






















