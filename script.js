document.querySelector('button').addEventListener('click', () => {
    const inputEng = document.querySelector('.eng').value,
        inputTranslated = document.querySelector('.translated').value;

    if(inputEng, inputTranslated){
        const newBlock = document.createElement('div');
        const btnDel = document.createElement('button');
        newBlock.classList.add('block');
        newBlock.textContent = inputEng;

        document.querySelector('.eng').value = '';
        document.querySelector('.translated').value = '';

        newBlock.addEventListener('click', () => {
            if(!newBlock.classList.contains('active')){
                newBlock.classList.add('active');
                newBlock.textContent = inputTranslated;
            } else {
                newBlock.classList.remove('active');
                newBlock.textContent = inputEng;
            }
        });

        document.querySelector('.container').append(newBlock)
    }
})