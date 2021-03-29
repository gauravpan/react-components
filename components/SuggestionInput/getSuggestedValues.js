export function getSuggestedValues() {
  return new Promise((resolve, reject) => {
    let suggestions = [];
    for (let i = 0; i < parseInt(Math.random() * 18); i++) {
      suggestions.push(Math.random().toString());
    }
    resolve(suggestions);
  });
}
