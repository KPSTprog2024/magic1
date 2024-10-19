<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>iPhoneマジック「トランプの謎」 - 練習用モード</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="scroll-container">
        <!-- 一文字ずつ表示 -->
        <div class="text-section">あ</div>
        <div class="text-section">な</div>
        <div class="text-section">た</div>
        <div class="text-section">が</div>
        <div class="text-section">選</div>
        <div class="text-section">ん</div>
        <div class="text-section">だ</div>
        <div class="text-section">の</div>
        <div class="text-section">は</div>
        <div class="text-section">ト</div>
        <div class="text-section">ラ</div>
        <div class="text-section">ン</div>
        <div class="text-section">プ</div>
        <div class="text-section">の</div>
        <!-- カード表示 -->
        <div class="text-section" id="card-display"></div>
    </div>

    <!-- 色付きのボタン：トランプのマーク -->
    <button class="visible-button" id="spade"></button>
    <button class="visible-button" id="heart"></button>
    <button class="visible-button" id="club"></button>
    <button class="visible-button" id="diamond"></button>

    <!-- 色付きのボタン：トランプの数字 -->
    <div id="number-buttons">
        <!-- 数字ボタンはJavaScriptで動的に生成します -->
    </div>

    <script src="practice.js"></script>
</body>
</html>
