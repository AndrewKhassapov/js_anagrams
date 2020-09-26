// Matrix to transform.
var square = matrix(3);

// Generates an n * n matrix with chronological digits.
function matrix(length) {
    let m = new Array(length);
    for (let i = 0; i < length; i++) {
        m[i] = new Array(length);
        for (let j = 0; j < length; j++) {
            m[i][j] = (i * length) + j + 1;
        }
    }
    return m;
}

// Rotates n * n matrix in a counter-clock-wise direction.
function t90(mat) {
    let n = mat.length;
    for (let x = 0; x < n / 2; x++) {
        // Digits in groups of 4 in current matrix.
        for (let y = x; y < n - x - 1; y++) {
            let temp = mat[x][y]; // Store top cell as temp.
            mat[x][y] = mat[y][n - 1 - x]; // Move digit from right to top.
            mat[y][n - 1 - x] = mat[n - 1 - x][n - 1 - y]; // Move digit from bottom to right.
            mat[n - 1 - x][n - 1 - y] = mat[n - 1 - y][x]; // Move digit from left to bottom.
            mat[n - 1 - y][x] = temp; // Set left as temp.
        }
    }
    return mat;
}

// Print outcome.
console.log(t90(square));