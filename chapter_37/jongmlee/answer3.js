/*
Chapter 37

### 문제 3
최근 검색어 기능을 구현하세요. 최대 5개까지 저장하세요.

*/

// Your solution

class LatestSerach {
	constructor(maxSize = 5) {
	  this.maxSize = maxSize;
	  this.searchSet = new Set();
	}
  
	addSearch(term) {
		if (this.searchSet.has(term)) {
			this.searchSet.delete(term);
		}
		this.searchSet.add(term);
		
		if (this.searchSet.size > this.maxSize) {
			this.searchSet.delete(this.searchSet.values().next().value);
		}
	}

	getSearches() {
		return Array.from(this.searchSet);
	}
  }
  
  const tmp = new LatestSerach();
  tmp.addSearch("고양이");
  tmp.addSearch("강아지");
  tmp.addSearch("햄스터");
  tmp.addSearch("새");
  tmp.addSearch("물고기");
  tmp.addSearch("토끼");
  
  console.log(tmp.getSearches());