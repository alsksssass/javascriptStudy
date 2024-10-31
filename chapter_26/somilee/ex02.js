function User ({name = 'Unknown', age = 0, ...additionalInfo} = {}) {
    console.log(additionalInfo);
}

User({
    //name: "Somilee",
    id: 'somilee',
    age: 26,
    city: 'Seoul'
});

/*
1. 매개변수 기본값: 함수의 매개변수에 기본값을 설정하여, 호출 시 해당 인수가 제공되지 않으면 기본값을 사용하도록 합니다.
2. Rest 파라미터: 매개변수 목록의 마지막에 ...을 사용하여 여러 개의 인수를 배열 형태로 받을 수 있게 합니다.
3. 명명된 매개변수: 객체를 매개변수로 사용하여 여러 개의 인수를 명시적으로 받을 수 있습니다. 이로 인해 인수의 순서에 관계없이 값을 전달할 수 있습니다.
*/