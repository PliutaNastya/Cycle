outer: for (let i = 0; ; i++) {

    let input = prompt('Enter the word');
    
    if (input === 'continue') continue;

    alert(`Результат ${i}`);
    
    if (input === 'break') break outer;
}
