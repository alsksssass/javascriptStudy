function FoodList(foods) {
    this.foods = foods;
        this.deleteFood = function(food) {
        const index = this.foods.indexOf(food);
        if (index !== -1) {
            this.foods.splice(index, 1);
        }
        return this.foods;
    };
    this.addFood = function(food) {
        this.foods.splice(0, 0, food);
        this.foods = [...new Set(this.foods)];
        return this.foods;
    };
    this.addFoodList = function(food_list) {
        this.foods = this.foods.concat(food_list);
        this.foods = [...new Set(this.foods)];
        return this.foods;
    };
    this.divList = function(n) {
        const result = [];
        const num = Math.ceil(this.foods.length / n);
        for (let i = 0; i < this.foods.length; i += num) {
            result.push(this.foods.slice(i, i + num));
        }
        return result;
    };
    this.getList = function() {
        return this.foods;
    }
}
const 김치찌개 = ["김치", "돼지고기", "두부", "대파", "양파", "마늘", "고추장"];
const 된장찌개 = ["된장", "애호박", "감자", "두부", "대파", "마늘", "버섯"];
const 장보기리스트 = new FoodList(김치찌개);

console.log(장보기리스트.addFoodList(된장찌개));
console.log(장보기리스트.deleteFood('대파'));
console.log(장보기리스트.addFood("당근"));
console.log(장보기리스트.divList(3));