# GWA Calculator

A small web app (HTML, CSS and JavaScript files) that computes your **General Weighted Average (GWA)**. Enter subjects by hand or scan a grade sheet image. Works on phones and desktops, with no build step and no backend.

```
GWA = Σ (units × final grade) ÷ Σ units    
```

**Grading scales** (choose from the dropdown under your GWA):

- **4.00-0.00:** 4.00, 3.75, 3.50, 3.25, 3.00, 2.75, 2.50, 2.25, 2.00, 1.75, 1.50, 1.25, 1.00, 0.00
- **1.00-5.00:** 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 5.00

**Units:** 3, 2 or 1

## Features

- **Grading scale dropdown.** Switch between 4.00-0.00 and 1.00-5.00. Switching asks first and clears current subjects. History records remember their scale.
- **Manual entry** with dropdowns for units and grades. GWA, total units and weighted points update instantly.
- **Grade sheet scanning.** **See a sample grade sheet** sits at the top of the card and **Upload image** at the bottom. A loading pop-up verifies that the image matches the sample (a table with **Units** and **Final Grade** columns), then shows a success or error result.
- **Image preview and download.** Once an image is uploaded, tap **Preview** under it (or tap the image itself). The preview has a **Download** button: choose whether to download the **full image** or the **cropped image** (available after you crop), rename the file, pick **PNG** or **JPEG**, and download it. A cropped image is named `<name>-cropped-image` by default, and you can change it before downloading.
- **Remove image with confirmation.** The **×** on the preview asks you to confirm. Subjects already added stay in Saved subjects.
- **Cropping tool.** Drag a box over the table and scan only that area. **Crop & rescan** reopens the last image.
- **Scans refresh, not pile up.** A new image or a re-crop replaces the subjects from the previous scan. Rows you typed or edited yourself are kept.
- **Error pop-ups with bulleted recommendations**, including empty **CSV** and **Print** requests.
- **Saved subjects.** Columns are Units, Final Grade and Pts. Scanned rows the reader was unsure about carry a *verify* tag.
- **History.** **Save to history** keeps the GWA with its subjects, then clears the screen for the next sheet. Tap a record for details, or its pencil to edit it in Saved subjects with **Update record** or **Cancel**.
- **CSV export with computations.** **CSV** opens a pop-up where you rename the file (the final name is shown as you type), choose the options below, and then confirm in a **Download this CSV file?** message before it downloads:
  - **Summary computations:** total subjects, total units, total weighted points, GWA, best grade, lowest-ranked grade, simple average grade, grading scale and date.
  - **Spreadsheet formulas:** weighted points and the summary are written as formulas (`COUNT`, `SUM`, `ROUND`, `IFERROR`, `MAX`, `MIN`, `AVERAGE`) that Excel and Google Sheets calculate. Turn it off to export plain computed values.
- **Guides on the page.** **How to use** and **About GWA Calculator** open as pop-ups, and **Technologies used** is shown directly on the page.
- **Print** the results.
- **Local storage only.** Data stays in your browser (`localStorage`, key `gwa`).

## How to use

1. **Choose a grading scale** from the dropdown under your GWA.
2. **Add subjects manually.** Choose Units and Grade, tap **Add row** for more, then **Save completed rows**.
3. **Check the sample** with **See a sample grade sheet**.
4. **Upload your grade sheet** (JPG or PNG, up to 15 MB).
5. **Crop the image**, then tap **Scan cropped** (or **Use full image**).
6. **Read the result pop-up.** Green means subjects were added. Red explains the problem and recommends a fix.
7. **Fix and refine.** Fix highlighted rows and tap **Import fixed rows**. Use **Crop & rescan** for *verify* rows.
8. **Preview and download the image.** Choose full or cropped, rename it, and pick PNG or JPEG.
9. **Remove the image** with **×** and confirm.
10. **Edit or delete subjects** with the pencil and trash icons.
11. **Save to history.** The record is kept and the screen clears for your next sheet. Use a record's pencil to edit it later.
12. **Export, print or start over.** **CSV** lets you rename the file and pick computations. **Clear history** and **Reset all data** ask for confirmation.

### Tips for scanning

- Crop tightly around the table so only the **Units** and **Final Grade** columns and their rows remain.
- Keep the whole table in view, including the **Units** and **Final Grade** headers.
- Lay the sheet flat in good light, shoot straight on, and keep the text sharp.

## Scanning and privacy

When opened as a normal web page, scanning runs in your browser with [Tesseract.js](https://github.com/naptha/tesseract.js), loaded on demand from cdnjs. Your image is not uploaded to a server. If the page is hosted somewhere that provides Claude image reading, that reader is tried first and the image may be processed by Claude. Tesseract is the fallback.

## Quality and performance

- Tesseract loads only when needed. The worker is reused across scans and released after 90 seconds idle.
- Image cleanup uses a lookup table and integer math instead of per-pixel floating point, and canvas and bitmap memory is released after each scan.
- Re-renders are batched into one animation frame, and DOM writes are skipped when nothing changed.
- Dragging the crop box is throttled to one update per frame.
- Downloading an image that is already in the chosen format (PNG or JPEG) saves it directly, with no decode and re-encode.
- The second OCR pass is skipped when the first pass already finds the headers and every row cleanly.
- Grade-scale lookups are cached, and the most common units value is found with a single count instead of repeated sorting.
- History rows below the fold are skipped for layout and paint until they scroll into view.
- Saves to `localStorage` are debounced, skipped when the data is unchanged, and flushed when the page is hidden.
- The script loads with `defer`, and below-the-fold sections use `content-visibility` so they render later.
- A scan can be cancelled at any time, and stale results are ignored.
- Units are read from the column nearest the grade, so extra columns such as **#** or **Pts** do not confuse the reader.
- Stored data is validated on load, so corrupted or older records can't break the page. Data saved by an older version that excluded PE/NSTP subjects is converted: every subject now counts, and the GWA of affected history records is recalculated.
- Pop-ups open scrolled to the top, trap focus, close with Esc, and respect reduced-motion settings.

## Technologies used

| Technology | Purpose in this project |
|---|---|
| **HTML5** | Page layout, forms and pop-up templates (`index.html`) |
| **CSS3** | Responsive layout, themes and print styles (`style.css`) |
| **JavaScript** | GWA calculation, history and editing logic (`index.js`) |
| **Tesseract.js** | Reads Units and Final Grade from your photo |

The same list, with logos, is shown directly on the page.

## Project structure

```
index.html   # page structure, pop-up templates and technologies section
style.css    # all styling (responsive, print and reduced-motion)
index.js     # GWA logic, scanning, cropping, history, downloads and pop-ups
README.md
```

Keep the three files in the same folder, then open `index.html` in a browser or host the folder on any static host. No dependencies need installing.

## Credits

Developed by **El Jay**. © 2026 GWA Calculator.