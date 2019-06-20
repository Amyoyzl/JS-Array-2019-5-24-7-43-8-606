// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(a instanceof Array);// false
console.log(b instanceof Array); //true


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
for(let i = 0; i < a.length; i++) {
    a[i] *= 2;
}
console.log(a);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(let i = 0; i < a.length; i++) {
    let temp = a[i];
    for(let j = 0; j < a.length; j++) {
        if(temp>a[j]) {
            a[i] = a[j];
            a[j] = temp;
            temp = a[i];
        }
    }
}
console.log(a);



// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var result = {};
a.forEach(k=>!result[k] ? result[k] = 1 : result[k] ++);
var max = Object.keys(result).sort((a,b)=>result[b] - result[a])[0];
console.log(max);
