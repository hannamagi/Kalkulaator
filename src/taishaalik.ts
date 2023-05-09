export function mitu_taishaalikut(s: string){
    const vowels = ["a", "e", "i", "o", "u", "õ", "ä", "ö", "ü"];
    const lowercaseS = s.toLowerCase();
    let mitu = 0;
    for (let i = 0; i < lowercaseS.length; i++) {
        if (vowels.includes(lowercaseS[i])) {
            mitu++;
        }
    }
    return mitu;
}