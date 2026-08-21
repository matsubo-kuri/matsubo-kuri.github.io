// ボタンの要素を取得
const themeToggle = document.getElementById('theme-toggle');

// 3. 【動き】クリックでダークモードを切り替える
themeToggle.addEventListener('click', () => {
    // 現在のモードをチェック
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // ダークモードなら解除（ライトモードへ）
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
    } else {
        // ライトモードならダークモードへ
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});
