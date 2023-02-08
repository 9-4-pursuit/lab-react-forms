export const operations = {
  sum: function (numbers) {
    return numbers
      .split(",")
      .reduce((total, current) => (total += Number(current)), 0);
  },
  average: function (numbers) {
    return this.sum(numbers) / numbers.split(",").length;
  },
  mode: function (numbers) {
    let mode = 0;
    let occurence = 1;
    numbers.split(",").forEach((num) => {
      if (numbers.split(num).length > occurence) {
        mode = num;
        occurence = numbers.split(num).length;
      }
    });
    return mode;
  },
};
