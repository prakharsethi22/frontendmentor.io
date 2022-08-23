const ID = document.querySelector('#advice-id');
const advice = document.querySelector('#advice');
const button = document.querySelector('#advice-button');


const getAdvice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice');
    const newAdvice = res.data.slip.advice;
    const newID = res.data.slip.id;
    ID.innerText = newID;
    advice.innerText = `"${newAdvice}"`;
}


button.addEventListener('click', getAdvice);


