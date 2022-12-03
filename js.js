const array0 = ['Ma Da will shag your Da!', 'See him he&#39;s a bawbag! ', 'Jog on ya bas ', 'Aaaawww, whit man! ', 'Is that your real face or did yer arse come up for a breather? '];
const array1 = ['Your Maw has cheesy watsit fingers!', 'shut it ya big jobby!', 'Aye, i&#39;ll tell yer maw when I see her tonight.  ', 'Yer fanny&#39;s hummin&#39;, hen ', 'yer maw&#39;s got a face like a plasterer&#39;s radio'];
const array2 = ['Jog on ya jammydodger!', 'Yer Da wanks on all fours!', 'Wit ya on about, ya big eejit.', 'Yer Maw&#39;s got toenails like quevers.', 'shaggin&#39; yer Maw is like throwing a sausage down a close'];
let counter = 0;

const roll = () => {
    set0();
    if (counter === 0) {
        letsGo();
    } else {
        setTimeout(letsGo, 1000); 
    }
}

const set0 = () => {
    for (let i = 0; i < 3; i++) {
        let codeword1 = 'result';
        let codewordFinal = codeword1.concat("", i);    
        document.getElementById(codewordFinal).style.top = 0;
    }
};

const letsGo = () => {
    go(array0, 0);
    go(array1, 1);
    go(array2, 2);
}

const go = (array, index) => {
    counter += 1;

    // shuffle
    for (let i = 0; i < array.length; i++) {
        let saver = array[i];
        let randomNum = Math.floor(Math.random() * array.length);
        array.splice(i, 1);
        array.splice(randomNum, 0, saver)
    }

    // adjust appearance
    let displayedArray = [];
    for (let item of array) {
        displayedArray.push(item);
        displayedArray.push("<br />");
      };

    // display
    let codeword1 = 'result';
    let codewordFinal = codeword1.concat("", index);
    document.getElementById(codewordFinal).innerHTML = displayedArray.join(" ");
    document.getElementById(codewordFinal).style.top = `-${displayedArray.length * 14}px`;

}