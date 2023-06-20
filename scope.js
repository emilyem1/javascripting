const a = 1; const b = 2; const c = 3;

(function firstFunction() {
  const a = 1; const b = 2; const c = 3;

  (function secondFunction() {
    const b = 8; const c = 6;

    (function thirdFunction() {
      const a = 7; const c = 9;

      (function fourthFunction() {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

console.log(`a: ${a}, b: ${b}, c: ${c}`);