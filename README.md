# itf-gpa-rescaler

筑波大学のTWINSからダウンロードした成績CSVをブラウザ内で読み込み、4.3スケールのGPAと4.0スケール換算GPAを表示するWebアプリです。

## 特徴

- CSVの内容はブラウザ内だけで処理され、サーバーには送信されません。
- A+、A、B、C、DをGPA計算対象とし、P、F、認、履修中は除外します。
- GPA値は小数点第3位以下を切り捨て、2桁で表示します。
- 科目区分がDの科目を教職課程として扱い、変換結果パネルでGPA計算に含めるか切り替えられます。

## Special Thanks

教職課程の扱いなどの仕様検証に、MITライセンスで公開されている [Mimori256/Grade-Graph](https://github.com/Mimori256/Grade-Graph) を参照しました。ありがとうございます。

## License

MIT License
