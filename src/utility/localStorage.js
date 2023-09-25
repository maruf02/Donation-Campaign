const getStoreDonate = () => {
    const storedDonate = localStorage.getItem('donate-card');
    if (storedDonate) {
        return JSON.parse(storedDonate);
    }
    return [];
}

const saveDonate = id => {
    const storeDonate = getStoreDonate();
    const exists = storeDonate.find(cardID => cardID === id);
    if (!exists) {
        storeDonate.push(id);
        localStorage.setItem('donate-card', JSON.stringify(storeDonate))
    }
}

export { getStoreDonate, saveDonate }