let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= 10000000000000000000000; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}