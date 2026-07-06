# 画像・動画の差し替え方法

## 1. 画像ファイルを置く場所

以下のフォルダに、決めたファイル名で画像を置くだけでOKです。

```
public/images/projects/focus.png
public/images/projects/meal-folio.png       # アイコン/スクリーンショット
public/images/projects/event-design.jpg
public/images/visual-works/photo-mono.jpg
public/images/visual-works/photo-hito.jpg
public/images/visual-works/photo-koto.jpg
public/images/visual-works/calendar-2024.jpg
public/images/visual-works/calendar-2025.jpg
```

ファイル名・拡張子は自由に変えて構いません(その場合は下記2の src も合わせて変更)。

推奨サイズ:
- プロジェクトカード / 写真: 横1200px程度、JPG/WebP
- カレンダー: 横長で 1200×900px程度
- Meal Folio アイコン: 正方形 512×512px程度

## 2. データファイルに反映する

`src/lib/data.ts` の該当項目の `src`(または `image`)フィールドに、上記のパスを `/images/...` の形で入れます。

例(FocuS のキービジュアルを差し替える場合):

```ts
image: "/images/projects/focus.jpg",
```

空文字 `""` のままなら自動的にプレースホルダー表示になるので、レイアウトが崩れる心配はありません。

## 3. 動画の場合

動画ファイルそのものを置くのではなく、YouTube/Vimeoなどにアップロードした上で、埋め込み用URLを `videoUrl` に入れてください。

```ts
videoUrl: "https://www.youtube.com/embed/xxxxxxxxxxx",
```

## 画像の渡し方(WSL環境について)

このプロジェクトはWSL(Ubuntu)上にありますが、Windows側のエクスプローラーから直接アクセスできます。

エクスプローラーのアドレス欄に以下を貼り付けると、このフォルダが開きます。

```
\\wsl.localhost\Ubuntu\home\asuzu\an-portfolio\public\images
```

そこに画像をドラッグ&ドロップするだけでファイルが配置されます。GitHubに上げる必要はありません — 通常のファイルと同じように `git add` → `commit` → `push` すれば、Vercelのデプロイにもそのまま反映されます。
