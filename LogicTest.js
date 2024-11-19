function anagrams() {
    const groups = {};
    const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        let sortedWord = "";
        const charArray = word.split('');
        
        for (let j = 0; j < charArray.length - 1; j++) {
            for (let k = j + 1; k < charArray.length; k++) {
                if (charArray[j] > charArray[k]) {
                    const temp = charArray[j];
                    charArray[j] = charArray[k];
                    charArray[k] = temp;
                }
            }
        }
        sortedWord = charArray.join('');
        
        if (!groups[sortedWord]) {
            groups[sortedWord] = [];
        }
        groups[sortedWord].push(word);
    }
    
    const result = [];
    for (const key in groups) {
        result.push(groups[key]);
    }
    
    return result;
}

console.log(anagrams());
