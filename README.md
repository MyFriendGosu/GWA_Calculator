# GWA Calculator

A small web app (HTML, CSS and JavaScript files) that computes your **General Weighted Average (GWA)** on the 4.00 scale. Enter subjects by hand or scan a grade sheet image. Works on phones and desktops, with no build step and no backend.

```
GWA = Σ (units × final grade) ÷ Σ units
```

**Grading scales** (choose from the dropdown under your GWA):

- **4.00-0.00:** 4.00, 3.75, 3.50, 3.25, 3.00, 2.75, 2.50, 2.25, 2.00, 1.75, 1.50, 1.25, 1.00, 0.00
- **1.00-5.00:** 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 5.00

**Units:** 3, 2 or 1

## Features

- **Grading scale dropdown.** Switch between 4.00-0.00 and 1.00-5.00. Grade dropdowns, scan checks and the editor all follow the chosen scale. Switching asks first and clears current subjects. History records remember the scale they were saved with and restore it when edited.
- **Manual entry** with dropdowns for units and grades. GWA, total units and weighted points update instantly.
- **Grade sheet scanning.** A **See a sample grade sheet** button sits at the top of the card and **Upload image** at the bottom (on phones the picker can also take a new photo). A loading pop-up verifies that the image matches the sample (a table with **Units** and **Final Grade** columns), then shows a success or error result.
- **Cropping tool.** After you pick an image, drag a box over the table and scan only that area. **Crop & rescan** reopens the last image. A **×** on the preview removes it.
- **Scans refresh, not pile up.** A new image or a re-crop replaces the subjects from the previous scan. Rows you typed or edited yourself are kept.
- **Error pop-ups with bulleted recommendations.** Every error, including empty **CSV** and **Print** requests, is a pop-up that explains the problem and suggests fixes. Scan errors add **See sample**, **Crop image** and **Try again** buttons.
- **Saved subjects.** Columns are Units, Final Grade and Pts. Edit or delete a subject, and scanned rows the reader was unsure about carry a *verify* tag.
- **History.** **Save to history** keeps the GWA with its subjects, then clears the screen for the next sheet. Tap a record for details, or its pencil to **edit it in Saved subjects**. **Update record** saves changes and **Cancel** discards them. Your previous list is restored afterwards.
- **Guides on the page.** **How to use** and **About GWA Calculator** open as pop-ups, and **Technologies used** is shown directly on the page.
- **Export and print.** Download a CSV or print the results.
- **Local storage only.** Data stays in your browser (`localStorage`, key `gwa`).

## How to use

1. **Choose a grading scale** from the dropdown under your GWA.
2. **Add subjects manually.** Choose Units and Grade, tap **Add row** for more, then **Save completed rows**.
3. **Check the sample.** Tap **See a sample grade sheet** at the top of Scan grades.
4. **Upload your grade sheet.** Tap **Upload image** at the bottom of Scan grades (JPG or PNG, up to 15 MB).
5. **Crop the image.** Drag the box over the table, then tap **Scan cropped** (or **Use full image**).
6. **Read the result pop-up.** Green means subjects were added. Red explains the problem and recommends a fix.
7. **Fix and refine.** Fix highlighted rows and tap **Import fixed rows**. Use **Crop & rescan** for *verify* rows, or the **×** to remove the image.
8. **Edit or delete subjects** in Saved subjects with the pencil and trash icons.
9. **Save to history.** The record is kept and the screen clears for your next sheet.
10. **Edit a history record.** Tap its pencil. Its subjects load under an orange banner; tap **Update record** or **Cancel**.
11. **Export, print or start over.** **CSV** and **Print** need at least one saved subject. **Clear history** and **Reset all data** ask for confirmation.

### Tips for scanning

- Crop tightly around the table so only the **Units** and **Final Grade** columns and their rows remain.
- Keep the whole table in view, including the **Units** and **Final Grade** headers.
- Lay the sheet flat in good light, shoot straight on, and keep the text sharp.

## Scanning and privacy

When opened as a normal web page, scanning runs in your browser with [Tesseract.js](https://github.com/naptha/tesseract.js), loaded on demand from cdnjs. Your image is not uploaded to a server. If the page is hosted somewhere that provides Claude image reading, that reader is tried first and the image may be processed by Claude. Tesseract is the fallback.

## Quality and performance

- Tesseract loads only when needed. The worker is reused across scans and released after 90 seconds idle.
- Cropped images are smaller, so scans are faster and more accurate. Canvas and bitmap memory is released after each scan.
- A scan can be cancelled at any time, and stale results from a cancelled scan are ignored.
- Units are read from the column nearest the grade, so extra columns such as **#** or **Pts** do not confuse the reader.
- Rendering skips DOM updates when nothing changed. Saves to `localStorage` are debounced and skipped when the data is unchanged.
- Stored data is validated on load, so corrupted or older records can't break the page.
- All buttons share one height and text size, and buttons in a row have equal widths.
- Pop-ups open scrolled to the top (including How to use and About), trap focus, close with Esc, and respect reduced-motion settings.

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
index.js     # GWA logic, scanning, cropping, history and pop-ups
README.md
```

Keep the three files in the same folder, then open `index.html` in a browser or host the folder on any static host. No dependencies need installing.

## Credits

Developed by **El Jay**. © 2026 GWA Calculator.
