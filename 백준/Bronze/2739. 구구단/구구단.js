  let fs = require("fs");
      let input = fs.readFileSync("/dev/stdin").toString().split(" ");
      let a = parseInt(input[0]);

      for (let i = 1; i < 10; i++) {
        console.log(`${a} * ${i} = ${a * i}`);
      }