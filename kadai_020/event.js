// btnというidのHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// textというidのHTML要素を取得し、定数に代入
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});