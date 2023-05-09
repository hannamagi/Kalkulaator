export function mitu_a_tahte(s:string){
    let mitu = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" || s[i] === "A") {
            mitu++;
        }
    }
    return mitu;
}
