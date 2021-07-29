export const addData = (amount) => {
    const arr = [];
    for (let i = 0; i < amount; i++) {
        arr.push(Math.round(Math.random() * (100 - 50 + 1)) + 50);
    }
    return arr;
};
