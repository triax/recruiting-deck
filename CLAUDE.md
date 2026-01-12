# Club TRIAX 2026 Recruiting Presentation

## Overview

Club TRIAX 調布のリクルーティング資料（PowerPoint）を管理するプロジェクト。

## Tech Stack

- **Node.js** - スライド生成スクリプト
- **pnpm** - パッケージマネージャー
- **pptxgenjs** - PowerPoint生成ライブラリ
- **html2pptx** - HTML→PowerPoint変換（document-skillsのスクリプト）

## Skills Used

このプロジェクトでは以下のClaude Codeスキルを使用:

- `document-skills:pptx` - PowerPoint作成・編集スキル

## Directory Structure

```
.
├── assets/images/       # 写真素材
├── reference/           # 参考資料・キーメッセージ
├── workspace/           # HTML作業ファイル
│   ├── slide1.html     # 各スライドのHTML
│   ├── ...
│   └── convert.js      # PPTX変換スクリプト
└── TRIAX_2026_Recruiting.pptx  # 出力ファイル
```

## Commands

```bash
# 依存関係インストール
pnpm install

# PowerPoint生成
pnpm run build
```

## Slide Structure

1. 表紙 - Club TRIAX 2026 Recruiting
2. TEAM OVERVIEW - チーム基本情報
3. WHY TRIAX? - LIFE/WORK/PLAY理念
4. BOWL GAMES 2026 - 国際試合イベント
5. TRACK RECORD - 戦績
6. 2026 GOAL - X1 Area優勝
7. WANTED POSITIONS - 募集ポジション
8. JOIN US - 締め・連絡先

## Notes

- HTMLスライドを編集後、`pnpm run build`で再生成
- 背景画像付きスライド（1, 6, 8）は`convert.js`内で設定
- html2pptxの制約: `<div>`以外に背景色を設定できない
