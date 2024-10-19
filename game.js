let selectedSuit = '';
let selectedNumber = '';

const suits = {
    spade: 'スペード',
    heart: 'ハート',
    club: 'クローバー',
    diamond: 'ダイヤ'
};

const numbers = {
    1: 'エース',
    11: 'ジャック',
    12: 'クイーン',
    13: 'キング'
};

// マークのボタンにイベントリスナーを追加
document.getElementById('spade').addEventListener('touchstart', () => selectSuit('spade'));
document.getElementById('heart').addEventListener('touchstart', () => selectSuit('heart'));
document.getElementById('club').addEventListener('touchstart', () => selectSuit('club'));
document.getElementById('diamond').addEventListener('touchstart', () => selectSuit('diamond'));

function selectSuit(suit) {
    selectedSuit = suits[suit];
    // 数字ボタンを表示
    displayNumberButtons();
    // マークボタンを非表示
    hideSuitButtons();
}

function hideSuitButtons() {
    document.getElementById('spade').style.display = 'none';
    document.getElementById('heart').style.display = 'none';
    document.getElementById('club').style.display = 'none';
    document.getElementById('diamond').style.display = 'none';
}

function displayNumberButtons() {
    const numberButtonsContainer = document.getElementById('number-buttons');
    numberButtonsContainer.style.display = 'block';

    // 1〜12のボタンを時計盤状に配置
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * 30; // 時計盤の位置を計算
        const radius = 150; // ボタンの配置半径
        const x = radius * Math.cos(angle * Math.PI / 180) + window.innerWidth / 2 - 25;
        const y = radius * Math.sin(angle * Math.PI / 180) + window.innerHeight / 2 - 25;

        const button = document.createElement('button');
        button.className = 'number-button';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        button.dataset.number = i;
        button.addEventListener('touchstart', selectNumber);
        numberButtonsContainer.appendChild(button);
    }

    // 13のボタンを中央に配置
    const centerButton = document.createElement('button');
    centerButton.className = 'number-button';
    centerButton.style.left = `${window.innerWidth / 2 - 25}px`;
    centerButton.style.top = `${window.innerHeight / 2 - 25}px`;
    centerButton.dataset.number = 13;
    centerButton.addEventListener('touchstart', selectNumber);
    numberButtonsContainer.appendChild(centerButton);
}

function selectNumber(event) {
    const num = event.target.dataset.number;
    selectedNumber = numbers[num] || num;
    // 数字ボタンを非表示
    document.getElementById('number-buttons').style.display = 'none';
    // テキストを更新
    updateCardDisplay();
}

function updateCardDisplay() {
    const cardDisplay = document.getElementById('card-display');
    cardDisplay.textContent = `${selectedSuit}の${selectedNumber}`;
}
