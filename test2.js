let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let allwords = [];
let len_case = [];
let m = [];
let W = "";

function horizontal(i) {
  let len_w = W.length;
  let awal_w = 0;
  for (let x of m) {
    let var_kanan = x.join("").toLowerCase();
    let var_kiri = x.slice().reverse().join("").toLowerCase();
    let index_cell = m.findIndex((item) => item.join("") === var_kanan);

    for (let j = 0; j < var_kanan.length; j++) {
      if (W[0] === var_kanan[j]) {
        let fillt_kanan = var_kanan.substring(j);
        let split_wordR = fillt_kanan.substring(awal_w, len_w);

        if (
          split_wordR === W &&
          split_wordR === split_wordR.split("").reverse().join("") &&
          split_wordR.length === len_w
        ) {
          allwords.push(
            var_kanan.substring(j) +
              "[" +
              (index_cell + 1) +
              "," +
              (j + 1) +
              "]-ke:" +
              j
          );
          i++;
        } else if (
          split_wordR === W &&
          split_wordR !== split_wordR.split("").reverse().join("") &&
          split_wordR.length === len_w
        ) {
          allwords.push(
            var_kanan.substring(j) +
              "[" +
              (index_cell + 1) +
              "," +
              (j + 1) +
              "]-ke:" +
              j
          );
          i++;
        } else {
          continue;
        }
      }
    }

    for (let j = 0; j < var_kiri.length; j++) {
      if (W[0] === var_kiri[j]) {
        let fillt_kiri = var_kiri.substring(j);
        let split_wordL = fillt_kiri.substring(awal_w, len_w);

        if (
          split_wordL === W &&
          split_wordL !== split_wordL.split("").reverse().join("") &&
          split_wordL.length === len_w
        ) {
          allwords.push(
            var_kiri.substring(j) +
              "[" +
              (index_cell + 1) +
              ",-" +
              (j + 1) +
              "]-ke:" +
              j
          );
          i++;
        }
      }
    }
  }
  return i;
}

function vertical(i) {
  let len_w = W.length;
  let awal_w = 0;
  let after_zip = m[0].map((_, colIndex) => m.map((row) => row[colIndex]));

  for (let x of after_zip) {
    let up_down = x.join("").toLowerCase();
    let down_up = x.slice().reverse().join("").toLowerCase();

    for (let j = 0; j < up_down.length; j++) {
      if (W[0] === up_down[j]) {
        let fillt_up_down = up_down.substring(j);
        let split_wordU = fillt_up_down.substring(awal_w, len_w);

        if (
          split_wordU === W &&
          split_wordU === split_wordU.split("").reverse().join("") &&
          split_wordU.length === len_w
        ) {
          allwords.push(up_down.substring(j) + "[v]");
          i++;
        } else if (
          split_wordU === W &&
          split_wordU !== split_wordU.split("").reverse().join("") &&
          split_wordU.length === len_w
        ) {
          allwords.push(up_down.substring(j) + "[v]");
          i++;
        }
      }
    }

    for (let j = 0; j < down_up.length; j++) {
      if (W[0] === down_up[j]) {
        let fillt_down_up = down_up.substring(j);
        let split_wordD = fillt_down_up.substring(awal_w, len_w);

        if (
          split_wordD === W &&
          split_wordD !== split_wordD.split("").reverse().join("") &&
          split_wordD.length === len_w
        ) {
          allwords.push(down_up.substring(j) + "[^]");
          i++;
        }
      }
    }
  }
  return i;
}

function diagonalFunc(i) {
  let len_w = W.length;
  let awal_w = 0;
  let matrix = m.map((row) => [...row]);
  let diags = [
    ...Array.from({ length: matrix.length }, (_, i) =>
      matrix.slice(i).map((row) => row[i])
    ),
    ...Array.from({ length: matrix[0].length - 1 }, (_, i) =>
      matrix.slice(0, -i - 1).map((row) => row[i + 1])
    ),
  ];

  for (let x of diags) {
    let diagno_rev = x.join("").toLowerCase();
    let diagaf_rev = x.slice().reverse().join("").toLowerCase();

    for (let j = 0; j < diagno_rev.length; j++) {
      if (W[0] === diagno_rev[j]) {
        let fillt_diagno_rev = diagno_rev.substring(j);
        let split_wordno_rev = fillt_diagno_rev.substring(awal_w, len_w);

        if (
          split_wordno_rev === W &&
          split_wordno_rev === split_wordno_rev.split("").reverse().join("") &&
          split_wordno_rev.length === len_w
        ) {
          allwords.push(diagno_rev.substring(j) + "v");
          i++;
        } else if (
          split_wordno_rev === W &&
          split_wordno_rev !== split_wordno_rev.split("").reverse().join("") &&
          split_wordno_rev.length === len_w
        ) {
          allwords.push(diagno_rev.substring(j) + "v");
          i++;
        }
      }
    }

    for (let j = 0; j < diagaf_rev.length; j++) {
      if (W[0] === diagaf_rev[j]) {
        let fillt_diagaf_rev = diagaf_rev.substring(j);
        let split_wordaf_rev = fillt_diagaf_rev.substring(awal_w, len_w);

        if (
          split_wordaf_rev === W &&
          split_wordaf_rev !== split_wordaf_rev.split("").reverse().join("") &&
          split_wordaf_rev.length === len_w
        ) {
          allwords.push(diagaf_rev.substring(j) + "^");
          i++;
        }
      }
    }
  }
  return i;
}

rl.question("", function (T) {
  for (let t = 0; t < T; t++) {
    rl.question("", function (N) {
      rl.question("", function (M) {
        let matrixInput = [];
        let rowsRead = 0;

        let readMatrixRow = function (row) {
          matrixInput.push(row.split(""));
          rowsRead++;

          if (rowsRead === parseInt(N)) {
            m = matrixInput;
            rl.question("", function (word) {
              W = word;
              const constraints =
                1 <= T &&
                T <= 100 &&
                1 <= N &&
                N <= 100 &&
                1 <= M &&
                M <= 100 &&
                1 <= W.length &&
                W.length <= 100;

              if (constraints) {
                let panjang = diagonalFunc(0) + vertical(0) + horizontal(0);
                len_case.push(panjang);
                matrixInput = [];
                rl.resume();
              } else {
                rl.resume();
              }
            });
          } else {
            rl.question("", readMatrixRow);
          }
        };

        rl.question("", readMatrixRow);
      });
    });
  }

  rl.on("close", function () {
    for (let x = 0; x < len_case.length; x++) {
      console.log(`Case ${x + 1}: ${len_case[x]}`);
    }
    process.exit(0);
  });
});
