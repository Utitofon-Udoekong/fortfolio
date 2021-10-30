let p = 0.003;
let a = 500000;
let o = [];
for (let i = 1; i < 9; i++){
    a = a + (a * p)
    o.push(Math.floor(a));
};
responsive: [{
    breakpoint: undefined,
    options: {},
}]
