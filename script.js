document.addEventListener('DOMContentLoaded', function() {
    let selectedSuit = '';

    const suits = {
        'spade-button': 'スペード',
        'heart-button': 'ハート',
        'club-button': 'クローバー',
        'diamond-button': 'ダイヤ'
    };

    // 透明なボタンにイベントリスナーを追加
    Object.keys(suits).forEach(function(buttonId) {
        document.getElementById(buttonId).addEventListener('click', function() {
            selectedSuit = suits[buttonId];
            updateSuitDisplay();
        });
    });

    function updateSuitDisplay() {
        const suitDisplay = document.getElementById('suit-display');
        suitDisplay.textContent = selectedSuit;
    }
});
