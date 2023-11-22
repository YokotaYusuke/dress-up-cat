# 着せ替えにゃんこ

「着せ替えにゃんこ」は好きなにゃんこや服、お部屋を選んで
自分だけのにゃんこを作ってシェアできるサービスです。

# サービスの URL

着せ替えにゃんこを遊ぶにはこちらのリンクをクリックしてください。

<https://dressup-cat.onrender.com>

# このサービスを作った理由

ある日、Nintendo Switch で着せ替えゲームをやっている妻を
見て、猫の着せ替えゲームを作ったら面白いのでは。と思い制作しました。

このサービスで使用しているイラストは全て妻が描いてくれました！！  
ロード後に自分の声でタイトルの読み上げボイスを付けようと思いましたが
妻から台無しになると言われ、断念しました。

# 遊び方

### スタートがめん

早速スタートを押して、にゃんこの着せ替えを始めましょう！
![スタートがめん](./images/img1.png)

### にゃんこの部屋

右側に縦に並んだ、ボタンを押して好きな部屋と猫と服装を選ぶことが出来ます！
![にゃんこの部屋１](./images/img2.png)

### にゃんこの着せ替え

にゃんこに服を着せたら、右下のほぞんボタンを押しましょう！
![にゃんこの着せ替え](./images/img3.png)

### コーデに名前を付ける

あなたが作ったコーデに好きな名前を付けてください！
もし、空白の場合は「無名のにゃんこ」として登録されます。
![コーデに名前を付ける](./images/img4.png)

OK を押すと保存されます。
キャンセルを押すと保存がキャンセルされます。
![にゃんこ保存完了](./images/img5.png)

### おもいで

「おもいで」であなたが作ったコーデと、みんなが作ったコーデを
見ることが出来ます。
好きなコーデを見つけたら、クリックすると拡大します！

<span style="color: red">また、コーデを消すことは出来ません！なぜなら、「おもいで」は消えないからです。</span>
![みんなのコーデを見る](./images/img6.png)

# セットアップ

まずは SSH キーをコピーして、あなたの環境にクローンしてください。

```
git clone SSH key
```

クローンしたファイルへ移動します。

```
cd dress-up-cat
```

server フォルダに移動します。

```
cd server
```

必要なパッケージのインストールを行います。

```
npm install
```

データベースを作成します。

```
createdb dressupcat
```

マイグレーションファイルを実行し、データベースにテーブルを作成します。

```
npm run migrate-latest
```

サーバーを立ち上げます。

```
npm start
```

ブラウザで localhost:8080 でサービスを開いてください。  
これでセットアップは完了です。

# 将来の計画

ユーザー登録機能の追加  
着せ替えアイテム数を増やす（妻次第）  
ゆくゆくは実際のサービスとして、リリース出来たらなと思います。

# 使用技術

| Category       | Technology Stack           |
| -------------- | -------------------------- |
| Frontend       | React,JavaScript           |
| Infrastructure | Render                     |
| Backend        | JavaScript,Node.js,Express |
| Database       | PostgreSQL                 |
| Test           | Mocha,chai                 |
| CI/CD          | GitHub                     |
| etc.           | Prettier,PlantUML          |
