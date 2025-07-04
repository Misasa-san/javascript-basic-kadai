// 変数numの定義と45までのランダムな数字を代入
let num = Math.floor(Math.random() * 46);
// 変数numを出力（確認用）
console.log(num + '（確認用です）')

// 15の倍数⇒3の倍数⇒5の倍数の順に確認する
if (num % 15 === 0) {
    console.log('3と5の倍数です');
} else if (num % 3 === 0) {
    console.log('3の倍数です');
} else if (num % 5 === 0) {
    console.log('5の倍数です');
} else {
    console.log(num)
}