// ボタンとタイトルの要素を取得
const button = document.getElementById('change-btn');
const title = document.getElementById('title');

// ボタンがクリックされたときの処理
button.addEventListener('click', () => {
    // タイトルの文字を変更
    title.textContent = "ようこそ！";
    title.style.color = "#ff4757";
    
    // アラートを表示
    alert("文字が変わりました！");
});
