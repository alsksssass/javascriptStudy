function solution(c1, c2, g) {
    for (const n of g) {
        if (n === c1[0]) c1 = c1.slice(1);
        else if (n === c2[0]) c2 = c2.slice(1);
        else return "No";
    }
    return "Yes";
}

const c1 = ["i", "water", "drink"];
const c2 = ["want", "to"];
const g = ["i", "want", "to", "drink", "water"];
console.log(solution(c1, c2, g));