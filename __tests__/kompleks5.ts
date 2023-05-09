import {mitu_taishaalikut} from "../src/taishaalik";
test('taishaalik', () => {
    expect(mitu_taishaalikut("abc")).toBe(1);
    expect(mitu_taishaalikut("jfg")).toBe(0);
    expect(mitu_taishaalikut("aeio")).toBe(4);
});