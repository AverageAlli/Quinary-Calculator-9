

// Helper: Validate quinary string (digits 0-4 only)
/**
 * @param {string} str
 * @returns {boolean}
 */
function isValidQuinary(str) {
  return /^[0-4]+$/.test(str);
}
}

// Helper: Convert quinary string to decimal integer
/**
 * @param {string} str
 * @returns {number}
 */
function quinaryToDecimal(str) {
  return parseInt(str, 5);
}


// Helper: Convert decimal integer to quinary string
/**
 * @param {number} num
 * @returns {string}
 */
function decimalToQuinary(num) {
  return num.toString(5);
}


// Two-number operations
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.add = function (req, res) {
  const { num1, num2 } = req.body;
  if (!isValidQuinary(num1) || !isValidQuinary(num2)) {
    return res.status(400).json({ error: 'Inputs must be valid quinary numbers (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const dec2 = quinaryToDecimal(num2);
  const resultDec = dec1 + dec2;
  const resultQuinary = decimalToQuinary(resultDec);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    num2: { quinary: num2, decimal: dec2 },
    result: { quinary: resultQuinary, decimal: resultDec }
  });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.subtract = function (req, res) {
  const { num1, num2 } = req.body;
  if (!isValidQuinary(num1) || !isValidQuinary(num2)) {
    return res.status(400).json({ error: 'Inputs must be valid quinary numbers (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const dec2 = quinaryToDecimal(num2);
  const resultDec = dec1 - dec2;
  const resultQuinary = decimalToQuinary(resultDec);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    num2: { quinary: num2, decimal: dec2 },
    result: { quinary: resultQuinary, decimal: resultDec }
  });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.multiply = function (req, res) {
  const { num1, num2 } = req.body;
  if (!isValidQuinary(num1) || !isValidQuinary(num2)) {
    return res.status(400).json({ error: 'Inputs must be valid quinary numbers (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const dec2 = quinaryToDecimal(num2);
  const resultDec = dec1 * dec2;
  const resultQuinary = decimalToQuinary(resultDec);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    num2: { quinary: num2, decimal: dec2 },
    result: { quinary: resultQuinary, decimal: resultDec }
  });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.divide = function (req, res) {
  const { num1, num2 } = req.body;
  if (!isValidQuinary(num1) || !isValidQuinary(num2)) {
    return res.status(400).json({ error: 'Inputs must be valid quinary numbers (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const dec2 = quinaryToDecimal(num2);
  if (dec2 === 0) {
    return res.status(400).json({ error: 'Division by zero.' });
  }
  const resultDec = Math.floor(dec1 / dec2); // Integer division
  const resultQuinary = decimalToQuinary(resultDec);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    num2: { quinary: num2, decimal: dec2 },
    result: { quinary: resultQuinary, decimal: resultDec }
  });
}

// One-number operations
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.square = function (req, res) {
  const { num1 } = req.body;
  if (!isValidQuinary(num1)) {
    return res.status(400).json({ error: 'Input must be a valid quinary number (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const resultDec = dec1 * dec1;
  const resultQuinary = decimalToQuinary(resultDec);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    result: { quinary: resultQuinary, decimal: resultDec }
  });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
exports.squareRoot = function (req, res) {
  const { num1 } = req.body;
  if (!isValidQuinary(num1)) {
    return res.status(400).json({ error: 'Input must be a valid quinary number (digits 0-4).' });
  }
  const dec1 = quinaryToDecimal(num1);
  const root = Math.sqrt(dec1);
  if (!Number.isInteger(root)) {
    return res.status(400).json({ error: 'Square root is not an integer.' });
  }
  const resultQuinary = decimalToQuinary(root);
  res.json({
    num1: { quinary: num1, decimal: dec1 },
    result: { quinary: resultQuinary, decimal: root }
  });
}
