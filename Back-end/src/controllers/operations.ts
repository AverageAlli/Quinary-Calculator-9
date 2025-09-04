const { convertToBaseN, convertBase } = require('base-conversion-kit');


exports.add_10 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result_before_convert: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1+binaryResult2;
  


  

  res.json({ num1, num2,result_before_convert});
};


exports.subtract_10 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result_before_convert: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1-binaryResult2;



  

  res.json({ num1, num2,result_before_convert});
};


exports.multiply_10 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number;  result_before_convert: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1*binaryResult2;



  

  res.json({ num1, num2,result_before_convert});
};

exports.divide_10 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result_before_convert: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1/binaryResult2;



  

  res.json({ num1, num2,result_before_convert});
};






exports.square_10 = (req: { body: { num1: any;}; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number;result: number; }) => void; }) => {
  const { num1} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);

  const result_before_convert = binaryResult1*binaryResult1;
  const result = result_before_convert;


  

  res.json({ num1,result});
};


exports.square_root_10 = (req: { body: { num1: any;}; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number;result: number; }) => void; }) => {
  const { num1} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);

  const result_before_convert = Math.sqrt(binaryResult1);
  const result = result_before_convert


  

  res.json({ num1,result});
};

//

exports.add_5 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result: number;}) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1+binaryResult2;
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1, num2,result});
};


exports.subtract_5 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1-binaryResult2;
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1, num2,result});
};


exports.multiply_5 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result: number;  }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1*binaryResult2;
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1, num2,result});
};

exports.divide_5 = (req: { body: { num1: any; num2: any; operation: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number; num2: number; result: number; }) => void; }) => {
  const { num1, num2} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);
  const binaryResult2 = convertToBaseN(num2, 10);
  const result_before_convert = binaryResult1/binaryResult2;
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1, num2,result});
};



exports.square_5 = (req: { body: { num1: any;}; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number;result: number; }) => void; }) => {
  const { num1} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);

  const result_before_convert = binaryResult1*binaryResult1;
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1,result});
};


exports.square_root_5 = (req: { body: { num1: any;}; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; json: (arg0: { num1: number;result: number; }) => void; }) => {
  const { num1} = req.body;
  const binaryResult1 = convertToBaseN(num1, 10);

  const result_before_convert = Math.sqrt(binaryResult1);
  const result = convertToBaseN(result_before_convert,5);


  

  res.json({ num1,result});
};