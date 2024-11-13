function solution(answers) {
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const scores = [0, 0, 0];

    answers.forEach((ans, i) => {
        patterns.forEach((pattern, j) => {
            if (pattern[i % pattern.length] === ans) scores[j]++;
        });
    });

    const max = Math.max(...scores);
    return scores.map((score, i) => (score === max ? i + 1 : null)).filter(x => x);
}