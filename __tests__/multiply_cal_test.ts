import {Calculator} from "../src/calculator4";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});


test('multiply 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("3X2");
});


test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});
test('multiply 3', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('0');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("60");
});

test('multiply 4', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('5');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("75");
});

test('multiply 5', () => {
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('6');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("78");
});
