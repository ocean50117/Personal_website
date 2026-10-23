# 網站修改紀錄（Changelog）

> 網站：https://liu-mw-sonia.vercel.app ｜ 程式碼：github.com/ocean50117/personal_website
> 格式：日期｜改了什麼｜commit。最新的在最上面。
> 每次改版後，在「待同步履歷分頁」補上需要通知的內容；履歷分頁同步完成後，把該行移到「已同步」。

## 待同步履歷分頁（履歷、104、Cake、LinkedIn 需與網站一致）

- [ ] 2026-10-23｜新增英文版首頁（右上「中／EN」切換；直接連結 `?lang=en`）。英文以 English_Resume_v2 用字為準，需 Sonia／履歷分頁校對。已知與英文履歷不同之處：① 網站語言列有 Italian，英文履歷沒有；② WBS：網站寫「6 個階段」，英文履歷寫「5-week WBS schedule」；③ 興波咖啡的崗位細節（外場、菜口、輕食、收銀、領檯）英文履歷沒有；④ 英文履歷的「10+ concurrent cases」網站沒有
- [ ] 2026-10-23｜Experience 緯育：「AI 協作開發；主責問卷設計、產品定位、PRD；帶領 5 人團隊提前交付」（原為「帶 6 人團隊」；詳細頁寫「6 人團隊（含我）」）
- [ ] 2026-10-23｜Experience 興波咖啡：新增五個崗位（外場、菜口、輕食、收銀帳務、領檯）與「知名咖啡廳、高壓快節奏、外語服務國際客群」描述；營收寫「團隊單日營收最高達 35 萬元（團隊 12 人）」，不寫「每人負責 3 萬」
- [ ] 2026-10-23｜網站下載履歷用的是 `assets/resume/` 內的兩份 PDF（中文：劉敏雯_履歷 (1).pdf，英文：SoniaLiu_Resume.pdf）；履歷更新後要換檔
- [ ] 2026-10-23｜GoLand 案例頁新增「反思二（使用者測試）」、團隊專題簡報影片（YouTube KSRIp8p9ZRU，內容尚待 Sonia 核對）
- [ ] 2026-10-23｜技能區移除 Jira（`assets/tools/jira.png` 需在自己電腦刪除）

## 2026-10-23

- 英文版首頁：新增 `assets/i18n.js`（中文為原文、英文由字典替換），導覽列加「中／EN」切換鈕，選擇會記住；案例頁仍是中文｜（本次）
- 履歷按鈕改成下載彈窗，可選中文／English PDF（`assets/resume/`）｜9b9b520
- 暗色：社群圖示白底；工具圖示去掉外框（GitHub、Notion 轉白）；Project 02 資料夾改深青綠｜9b9b520
- Certifications 加提示「點擊可以看證書內容」；暗色 Scroll down 文字改用 ink｜dd50f2f
- Experience 文案更新（緯育、興波咖啡，詳見上方）｜f69d30b
- 新增亮色／暗色切換（暗色底 = ink #262A30），共用 `assets/theme.css`、`theme.js`｜5aad6b4
- 移除 Jira 圖示；GoLand 新增「反思二（使用者測試）」｜ebd8625
- Hero 鏤空字改用 Figma 截圖去背的圖片；GoLand 頁嵌入 Demo 影片與廣告影片（mp4）｜b761895
- GoLand 頁加入團隊專題簡報影片（YouTube）｜cee330d
- 主題切換鈕縮小（60×32 → 50×27），位置維持在「Résumé」與「Get in touch」之間；頁尾加 Last updated｜5d3bb61、本次

## 2026-10-22

- 手機版 Work：分頁按鈕換行，讓 05 Python 看得到｜045b34f
- 手機版 About：照片放到文字上方｜605186f
- Résumé：矮螢幕維持寬鬆版面，取消 ≤660px 精簡模式｜70c6933

## 2026-10-21

- 網站完整上線版本：Work 各案例頁、assets、README｜dc6bf6c
- 清掉預覽用外殼，加入分享縮圖 og:image｜e2c95b5
- 手機版 Work：彩色資料夾卡片、照片在文字上方、不重疊｜1004240
- Project 5（30 天 Python）：頁面精簡成一屏、作品輪播與快速切換、可試玩 Demo、LinkedIn 連結｜0e525db、9f487e8、66eea30、7a8ab28 等
- Certifications 加入緯育結訓證書｜0d75e12
- About 拼貼隨視窗縮放；Hero 日文鏤空字、favicon 修正｜a7e7f87、899aa40 等

## 2026-08-17

- 第一版 index.html 上傳｜6ec5369、7d992e8
