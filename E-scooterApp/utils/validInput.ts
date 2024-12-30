const validInput = (type: any, value: string) => {
 switch (type) {
  case 'email':
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  case 'password':
    return value.length >= 6;
  default:
    return false;
 }
};

export default validInput;