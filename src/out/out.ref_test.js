import ref from '../src/js/ref';

//beforeEach(() => console.log('run before each test'));
//afterEach(() => console.log('run after each test'));

beforeAll(() =>  initValue);
const initValue = ref.add(5,5);
console.log('initValue is: ', initValue);


describe('ref methods', () => {
  let addTwoNums = ref.add(2,2);
  let isNull = ref.isNull();
  it('should add two numbers, 2 + 2 equals 4', () => {
    expect(addTwoNums).toBe(4);
  });
  it('should show that adding 2 + 2, does NOT equals 5', () => {
    expect(addTwoNums).not.toBe(5);
  });
  it('should return null', () => {
    expect(isNull).toBeNull();
  });
  it('should NOT return undefined', () => {
    expect(isNull).not.toBeUndefined();
  });
  it('should be falsy', () => {
    let value1 = ref.checkValuePassed(null),
        value2 = ref.checkValuePassed(0),
        value3 = ref.checkValuePassed(undefined),
        value4 = ref.checkValuePassed(8);
    expect(value1).toBeFalsy();
    expect(value2).toBeFalsy();
    expect(value4).toBeTruthy();
  });
  it('should return user "stefano xxxxxxx"', () => {
    let user = ref.createUser();
    expect(user).toEqual({
      first: 'stefano',
      last: 'xxxxxxx'
    });
  });
  it('should return number\'s sum if it is less than 100 ', () => {
    let isUnder = ref.conditional(22,54);
    expect(isUnder).toBeLessThan(100)
  });
  it('should NOT return num\'s sum when it is over 100', () => {
    let isUnder = ref.conditional(62,54);
    expect(isUnder).toBe('over 100');
  });
  it('should find a match "I" in the sentence', () => {
    expect(ref.sent()).toMatch(/I/);
  });
  it('should NOT find a match "p" or a "P" in the sentence', () => {
    // console.log(ref.sent());
    expect(ref.sent()).not.toMatch(/p/i);
  });
  it('should find username "admin" with array of users', () => {
    let users = ref.arr();
    expect(users).toContain('admin');
  });

  it('should fetch user "Patricia Lebsack"', () => {
    ref.fetchUser().then(data => {
      expect(data.name).toEqual('Patricia Lebsack');
      expect.assertions(1);
    });
  });

  it('should check whether "reverseStr" is defined', () => {
    expect(ref.reverseStr).toBeDefined();
    expect(typeof ref.reverseStr).toEqual('function');
  });
  it('should reverse string "hello" and return "olleh"', () => {
    let rs = ref.reverseStr('hello');
    expect(rs).toBe('olleh');
  });







});





// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false






