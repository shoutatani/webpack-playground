export const sub = (value) =>
  Promise.resolve(value).then((result) => {
    console.log(result);
  });
