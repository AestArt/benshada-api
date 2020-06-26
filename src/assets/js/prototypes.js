export const splitByLength = (input, len) => input.match(
  new RegExp(
    `.{1,${len}}(?=(.{${len}})+(?!.))|.{1,${len}}$`,
    'g'
  )
);

export const unique = (array) => array
  .filter((value, index, self) => self.indexOf(value) === index);

export const randNum = (n) => Math.round(Math.random() * n);
