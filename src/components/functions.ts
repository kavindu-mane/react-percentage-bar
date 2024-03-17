export const toPX = (measure:string | number) => {
    let value = measure.toString().toLowerCase();
    if (value.includes("em") || value.includes("rem"))
      return 16 * parseFloat(value);
    else return parseFloat(value);
};