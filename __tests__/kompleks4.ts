import {Calculator} from "../src/calculator1";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("");
});