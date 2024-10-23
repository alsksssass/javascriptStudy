function after100days() {
  const now = new Date();
  const after100 = new Date(now.setDate(now.getDate() + 100));
  console.log(after100.toDateString().split(' ')[0]);
}

after100days();