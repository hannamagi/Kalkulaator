import {Calculator} from "../src/calculator4";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('simple input', ()=>{
    calcobj.pressButton('7');
    expect(calcobj.getPanelContents()).toBe("7");
});

test('simple input', ()=>{
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    expect(calcobj.getPanelContents()).toBe("78");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("32");
});

test('multiple symbols input', ()=>{
    calcobj.pressButton('7');
    calcobj.pressButton('8');
    calcobj.pressButton('9');
    expect(calcobj.getPanelContents()).toBe("789");
});
test('clear panel', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('2');
    calcobj.pressButton('C');
    expect(calcobj.getPanelContents()).toBe("0");
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("0");
});