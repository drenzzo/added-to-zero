function evaluateFindTriplets() {
    const input = document.querySelector("#numberInput").value;
    const regex = /^-?\d+(,\s*-?\d+)*$/;
    const pErrorMsg = document.querySelector("#errorMsg");
    const pResult = document.querySelector("#result");

    if (!regex.test(input)) {
        pErrorMsg.textContent = "You only need to enter integer numbers separated by commas.";
    } else {
        pErrorMsg.textContent = "";
        const numbers = input.split(',').map(s => Number(s.trim()));
        const arrResult = findTriplets(numbers);
        pResult.textContent = arrResult.join("\n");
    }
}

function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicate values

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                while (arr[left] === arr[left + 1]) left++; // skip duplicate values
                while (arr[right] === arr[right - 1]) right--; // skip duplicate values
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

function clearInputAndResults() {
    document.querySelector("#numberInput").value = "";
    document.querySelector("#result").textContent = "";
  }
