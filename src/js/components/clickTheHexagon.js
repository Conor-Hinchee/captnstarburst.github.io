const initClickTheHexagon = () => {
    document.querySelector('.hex').addEventListener('click', () => {
        document.querySelector('.hex').classList.toggle('rotateHex');
    });
};


export default initClickTheHexagon;
