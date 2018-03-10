const priceFormat = (price: number) => {
  if (!price) {
    return "0원";
  }

  const priceString = String(price);
  const priceChars: string[] = [];

  for (let i = 0; i <= priceString.length; i += 1) {
    if (i !== 1 && (i - 1) % 3 === 0) {
      priceChars.push(",");
    }

    priceChars.push(priceString[priceString.length - i]);
  }

  return `${priceChars.reverse().join("")}원`;
};

export default priceFormat;
