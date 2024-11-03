const students = [
  {
    id: 1,
    name: "Alice",
    scores: {
      math: 85,
      english: 78,
      science: 92,
      history: 88,
    },
    average: 0, // 나중에 계산할 평균 점수
  },
  {
    id: 2,
    name: "Bob",
    scores: {
      math: 72,
      english: 81,
      science: 79,
      history: 85,
    },
    average: 0,
  },
  {
    id: 3,
    name: "Charlie",
    scores: {
      math: 95,
      english: 90,
      science: 93,
      history: 89,
    },
    average: 0,
  },
  {
    id: 4,
    name: "David",
    scores: {
      math: 60,
      english: 70,
      science: 65,
      history: 75,
    },
    average: 0,
  },
  {
    id: 5,
    name: "Eve",
    scores: {
      math: 88,
      english: 76,
      science: 91,
      history: 84,
    },
    average: 0,
  },
];

/*
forEach 메서드는 자신의 내부에서 반복문을 실 행한다.


map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 
인수로 전달받은 콜백 힘수를 반복 호출
*/

/**
 * filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서
 * 인수로 전달받은 콜백 힘수를 반복 호출한 다.
 * 그리고 콜백 힘수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
 *
 * reduce 메서드는 자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백 힘수를 반복 호출한다.
 */

const pass = (subjects) => {
  passScore = score.filter((item) => item > 80);
  console.log(passScore);
};

// pass(students.map(item => item.scores.))

const score = function (students) {

  const result = students.map((item) => {
    const sum = Object.values(item.scores).reduce((acc, cur) => acc + cur, 0);
    const average = sum / Object.keys(item.scores).length;
    return { ...item, average };
  });

  function getTotalGrade() {
    return result.reduce((acc, cur) => acc + cur.average, 0) / result.length;
  }
  function upperStudent(minScore) {
    const list = result.filter((item) => item.average > minScore);
    return list.map((item) => item.name);
  }

  function getHighestSubScores() {
    const subjects = Object.keys(result[0].scores); //["math", "english", "science", "history"]
    const highScores = {};
    subjects.forEach((sub) => {
    highScores[sub] = Math.max(...result.map((student) => student.scores[sub]));

    })
    
    return highScores;
    // students.reduce((acc, cur) => acc < cur?acc:cur, 0)
  }



  return {
    getTotalGrade,
    upperStudent,
    getHighestSubScores,
  };
};

const result = score(students);
console.log(result.getTotalGrade());
console.log(result.upperStudent(80));
console.log(result.getHighestSubScores());
