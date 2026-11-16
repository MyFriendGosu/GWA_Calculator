const $ = id => document.getElementById(id);
const r2 = x => (Math.floor(x * 100 + 0.5 + 1e-9) / 100).toFixed(2); // round half up, 2 decimals
const IC = {
  plus: "M12 4.5v15m7.5-7.5h-15", x: "M6 18 18 6M6 6l12 12", check: "m4.5 12.75 6 6 9-13.5",
  trash: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0",
  edit: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
  cam: "M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316ZM16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
  photo: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  dl: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
  print: "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  mark: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z",
  list: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  warn: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
  next: "m8.25 4.5 7.5 7.5-7.5 7.5", upload: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5", eye: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", retry: "M16.023 9.348h4.992M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99", code: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5", bmk: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z", bk: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25", inf: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z", usr: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z", doc: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z", crop: "M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14", bulb: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
};
// Heroicons (MIT, outline 24px) inlined
const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="${IC[n]}"/></svg>`;

// Grading scales: 4.00-0.00 and 1.00-5.00
const SCALES = { "4": ["4.00", "3.75", "3.50", "3.25", "3.00", "2.75", "2.50", "2.25", "2.00", "1.75", "1.50", "1.25", "1.00", "0.00"], "5": ["1.00", "1.25", "1.50", "1.75", "2.00", "2.25", "2.50", "2.75", "3.00", "5.00"] };
const SCL = { "4": "4.00-0.00", "5": "1.00-5.00" };
let scale = "4", G = SCALES["4"];
function setScale(s) { scale = SCALES[s] ? s : "4"; G = SCALES[scale]; const e = $("sc"); if (e) e.value = scale; const b = $("subsc"); if (b) b.textContent = SCL[scale] + " scale" }
function applyScale() { draft = draft.map(r => !r.g || G.includes(r.g) ? r : { ...r, g: "" }); ocr = ocr.map(r => !r.g || G.includes(r.g) ? r : { ...r, g: "" }); rDraft(); rOcr() }
function restoreEdit() { saved = editing.backup; if (editing.bsc) setScale(editing.bsc); editing = null; applyScale() }
const near = n => G.map(Number).reduce((a, b) => Math.abs(b - n) < Math.abs(a - n) ? b : a);
let saved = [], draft = [{ n: "", u: "", g: "" }], ocr = [], hist = [], editing = null;
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const setH = (el, h) => { if (el._h !== h) { el.innerHTML = h; el._h = h } }; // skip DOM writes when nothing changed
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function load() {
  try {
    const d = JSON.parse(localStorage.getItem("gwa") || "{}"); setScale(d.scale);
    saved = (Array.isArray(d.saved) ? d.saved : []).filter(s => s && isFinite(+s.u) && +s.u > 0 && isFinite(+s.g));
    hist = (Array.isArray(d.hist) ? d.hist : []).filter(h => h && isFinite(+h.g) && isFinite(+h.u)).map(h => ({ ...h, sc: SCALES[h.sc] ? h.sc : "4", id: h.id || uid(), d: String(h.d || ""), s: +h.s || 0 }));
    const e = d.editing; if (e && Array.isArray(e.backup)) { if (hist.some(h => h.id === e.id)) editing = { id: e.id, backup: e.backup }; else { saved = e.backup; if (e.bsc) setScale(e.bsc) } }
  } catch (e) { saved = []; hist = []; editing = null }
}
let st, lastJ = ""; function store() { clearTimeout(st); st = setTimeout(flush, 250) }
function flush() { clearTimeout(st); try { const j = JSON.stringify({ saved, hist, editing, scale }); if (j === lastJ) return; localStorage.setItem("gwa", j); lastJ = j } catch (e) { if (!flush.w) { flush.w = 1; notify({ title: "Can't save your data", text: "This browser blocked storage, so your subjects won't be kept after you close the page.", tip: "Turn off private browsing or free up storage, and use CSV to keep a copy of your results." }) } } }
const UN = ["3", "2", "1"]; // allowed units, shown in this order
const uOk = u => UN.includes(String(+u));
function rowsHTML(arr, bad) { return arr.map((r, i) => { const fl = (bad && bad[i]) || r.x; return `<div class="row"><select data-i="${i}" data-k="u" aria-label="Units" class="${fl && !uOk(r.u) ? 'bad' : ''}"><option value="">–</option>${UN.map(u => `<option ${String(r.u) === u ? 'selected' : ''}>${u}</option>`).join("")}</select><select data-i="${i}" data-k="g" aria-label="Grade" class="${(fl && !G.includes(r.g)) || r.w ? 'bad' : ''}"><option value="">–</option>${G.map(g => `<option ${r.g === g ? 'selected' : ''}>${g}</option>`).join("")}</select><button class="d ib" data-del="${i}" aria-label="Remove row">${ic("x")}</button></div>` }).join("") }
function bind(el, get, rerender) {
  el.oninput = e => { const t = e.target; if (t.dataset.k) get()[t.dataset.i][t.dataset.k] = t.value };
  el.onchange = e => { if (e.target.dataset.k) get()[e.target.dataset.i][e.target.dataset.k] = e.target.value };
  el.onclick = e => { const d = e.target.dataset.del; if (d !== undefined) { get().splice(+d, 1); rerender() } }
}
function rDraft(bad) { $("draft").innerHTML = rowsHTML(draft, bad) }
function rOcr() { $("ocr").innerHTML = rowsHTML(ocr); $("ocrb").classList.toggle("hid", !ocr.length) }
const valid = r => uOk(r.u) && G.includes(r.g);
const need = r => { const p = []; if (!uOk(r.u)) p.push("units"); if (!G.includes(r.g)) p.push("grade"); return p };
function calc() { const u = saved.reduce((a, s) => a + +s.u, 0), w = saved.reduce((a, s) => a + s.u * s.g, 0); return { u, w, g: u ? w / u : null } }
function rAll() {
  const c = calc(); $("gwa").textContent = c.g === null ? "–" : r2(c.g); $("tu").textContent = +c.u.toFixed(2); $("wp").textContent = r2(c.w);
  setH($("list"), saved.length ? saved.map((s, i) => `<tr><td>${i + 1}</td><td>${s.u}</td><td>${(+s.g).toFixed(2)}${s.c ? '<span class="chk" title="Read from your photo. Please verify.">verify</span>' : ''}</td><td>${+(s.u * s.g).toFixed(2)}</td><td class="np"><button class="ib ed" data-e="${i}" aria-label="Edit">${ic("edit")}</button> <button class="d ib" data-x="${i}" aria-label="Delete">${ic("trash")}</button></td></tr>`).join("") : '<tr><td colspan="5" class="mu">No saved subjects.</td></tr>');
  setH($("hl"), hist.length ? hist.map((h, i) => { const cur = editing && editing.id === h.id; return `<div class="hi${cur ? " cur" : ""}"><button class="hb" data-v="${i}" aria-label="View details"><span><b>${r2(h.g)}</b><small>${h.u} units · ${h.s} subjects · ${SCL[h.sc || "4"]}</small>${cur ? '<span class="tg">editing</span>' : h.e ? '<span class="tg">edited</span>' : ""}<br><span class="hd">${esc(h.e || h.d)}</span></span>${ic("next")}</button><button class="ib ed" data-ed="${i}" aria-label="Edit record">${ic("edit")}</button><button class="d ib" data-h="${i}" aria-label="Delete record">${ic("trash")}</button></div>` }).join("") : "No records yet.");
  $("eb").classList.toggle("hid", !editing); $("hist").disabled = !!editing; $("sc").disabled = !!editing; $("gl").textContent = editing ? "GWA of the record you're editing" : "Your GWA";
  if (editing) { const h = hist.find(x => x.id === editing.id); $("ebd").textContent = (h ? h.d : "") + " · changes apply only when you tap Update record" }
  store()
}
function msg(id, t, c) { $(id).textContent = t; $(id).className = "msg " + (c || "") }
let tt; function toast(t, c) { const e = $("toast"); e.textContent = t; e.className = "np s " + (c || ""); clearTimeout(tt); tt = setTimeout(() => e.classList.remove("s"), 2200) }
$("sc").onchange = async e => {
  const to = e.target.value; if (to === scale) return;
  if (editing) { e.target.value = scale; return errBox({ title: "Finish editing first", text: "The grading scale can't change while you edit a history record.", tip: ["Tap Update record or Cancel in Saved subjects.", "Then change the grading scale."] }) }
  const has = saved.length || draft.some(r => r.u || r.g) || ocr.length;
  if (has && !await ask({ title: "Change grading scale?", text: `Switching to ${SCL[to]} clears your current subjects because grades differ between scales. Saved history records are kept.`, ok: "Change scale", icon: "retry", cls: "ok" })) { e.target.value = scale; return }
  if (has) { saved = []; draft = [{ n: "", u: "", g: "" }]; ocr = []; resetScan() }
  setScale(to); applyScale(); rAll(); toast("Grading scale: " + SCL[to], "ok")
};
$("add").onclick = () => { draft.push({ n: "", u: "", g: "" }); rDraft() };
$("save").onclick = () => {
  const filled = draft.filter(r => r.u || r.g);
  if (!filled.length) return errBox({ title: "Nothing to save", text: "No row has units and a grade yet.", tip: "Choose the Units and the Grade for at least one row, then tap Save completed rows." });
  const ok = filled.filter(valid), rem = filled.filter(r => need(r).length);
  saved.push(...ok.map(r => ({ n: (r.n || "").trim(), u: +r.u, g: +r.g })));
  draft = rem.length ? rem : [{ n: "", u: "", g: "" }];
  rDraft(rem.length ? rem.map(() => true) : null); rAll();
  msg("m1", ok.length ? `Saved ${ok.length} subject(s).` : "", ok.length ? "o" : "");
  if (ok.length && !rem.length) toast(`Saved ${ok.length} subject(s)`, "ok");
  if (rem.length) errBox({ title: ok.length ? `${ok.length} saved, ${rem.length} need fixing` : "Some fields are missing", text: "These rows are incomplete and are highlighted in red:", list: rem.map((r, i) => `Row ${i + 1}: choose ${need(r).join(" and ")}`), tip: "Fill in the highlighted dropdowns and tap Save completed rows again, or remove a row with the X button." })
};
// ---------- Pop-ups ----------
let mPrev = null, mT, mTok = 0, mDismiss = null;
function closeModal(dismiss) {
  const m = $("mo"); if (m.classList.contains("hid") || !m.classList.contains("s")) return;
  const cb = mDismiss; mDismiss = null; m.classList.remove("s"); document.body.style.overflow = "";
  clearTimeout(mT); mT = setTimeout(() => { m.classList.add("hid"); $("mc").innerHTML = ""; $("ma").innerHTML = ""; if (qq.length) errBox(qq.shift()) }, 180);
  try { mPrev && mPrev.focus() } catch (e) { }
  if (dismiss && cb) cb()
}
function modal(o) {
  const m = $("mo"), open = !m.classList.contains("hid");
  clearTimeout(mT); mTok++; if (!open) mPrev = document.activeElement;
  mDismiss = o.onDismiss || null;
  m.className = "mo " + (o.tone || "") + (open ? " s" : "");
  $("mi").innerHTML = ic(o.icon || "list"); $("mt").textContent = o.title; $("mc").innerHTML = o.body || "";
  const a = $("ma"); a.innerHTML = "";
  (o.buttons || []).forEach(b => {
    const el = document.createElement("button"); el.type = "button"; el.className = (b.cls || "") + (b.left ? " sp" : ""); el.innerHTML = (b.icon ? ic(b.icon) : "") + esc(b.label);
    el.onclick = () => { const t = mTok, r = b.fn ? b.fn() : undefined; if (r === false) return; if (mTok === t) closeModal(false) }; a.appendChild(el)
  });
  document.body.style.overflow = "hidden";
  if (o.onOpen) o.onOpen();
  requestAnimationFrame(() => { m.classList.add("s"); const f = m.querySelector("select") || a.lastElementChild; if (f) f.focus({ preventScroll: true }); const mb = m.querySelector(".mb"); if (mb) mb.scrollTop = 0 })
}
function ask(o) {
  return new Promise(res => modal({
    title: o.title, icon: "warn", tone: "er", body: `<p style="margin:0;color:var(--mu)">${o.text}</p>`,
    buttons: [{ label: "Cancel", fn: () => res(false) }, { label: o.ok, cls: o.cls || "dz", icon: o.icon || "trash", fn: () => res(true) }], onDismiss: () => res(false)
  }))
}
let qq = []; // errors waiting for the open pop-up to close
const notify = o => { $("mo").classList.contains("hid") ? errBox(o) : qq.push(o) };
function errBox(o) {
  modal({
    title: o.title, icon: "warn", tone: "er",
    body: `<p class="et">${esc(o.text)}</p>${o.list ? `<ul class="el">${o.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}<div class="tip">${ic("bulb")}<div><b>Recommendation</b><ul>${[].concat(o.tip).map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>`,
    buttons: [...(o.extra || []), { label: "OK", cls: "p", fn: () => { o.onClose && o.onClose() } }], onDismiss: o.onClose
  })
}
$("mo").addEventListener("click", e => { if (e.target === $("mo")) closeModal(true) });
document.addEventListener("keydown", e => {
  const m = $("mo"); if (m.classList.contains("hid")) return;
  if (e.key === "Escape") { e.preventDefault(); closeModal(true) }
  else if (e.key === "Tab") {
    const f = [...m.querySelectorAll("button,select,input")].filter(x => !x.disabled); if (!f.length) return;
    const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() }
  }
});
const openSample = () => modal({ title: "Sample grade sheet", icon: "doc", body: $("tpl-sample").innerHTML, buttons: [{ label: "OK", cls: "ok", fn: () => { } }] });
$("sample").onclick = openSample;

// Subject details (pencil)
function showSubj(i, pre) {
  const s = saved[i]; if (!s) return;
  const opts = (arr, cur) => '<option value="">–</option>' + arr.map(v => `<option ${String(cur) === v ? "selected" : ""}>${v}</option>`).join("");
  const body = `<div class="kv"><span>Subject</span><b>#${i + 1}${s.n ? " · " + esc(s.n) : ""}</b></div>
<div class="fld"><label for="eu">Units</label><select id="eu">${opts(UN, pre ? pre.u : s.u)}</select></div>
<div class="fld"><label for="eg">Final grade</label><select id="eg">${opts(G, pre ? pre.g : (+s.g).toFixed(2))}</select></div>
<div class="kv"><span>Weighted points</span><b id="ep"></b></div>
${s.c ? '<p class="msg e" style="margin:8px 0 0">Read from your photo and marked "verify". Please compare it with your sheet. Tip: crop the image to the Units and Final Grade columns and rescan for a closer read.</p>' : ""}`;
  modal({
    title: "Subject details", icon: "edit", body,
    onOpen: () => {
      const upd = () => { const u = $("eu").value, g = $("eg").value; $("ep").textContent = uOk(u) && G.includes(g) ? r2(u * g) : "–" };
      $("eu").onchange = $("eg").onchange = () => { $("eu").classList.remove("bad"); $("eg").classList.remove("bad"); upd() }; upd(); if (pre) { $("eu").classList.toggle("bad", !uOk(pre.u)); $("eg").classList.toggle("bad", !G.includes(pre.g)) }
    },
    buttons: [{ label: "Cancel", fn: () => { } }, {
      label: "Save changes", cls: "ok", icon: "check", fn: () => {
        const u = $("eu").value, g = $("eg").value, p = []; if (!uOk(u)) p.push("units"); if (!G.includes(g)) p.push("grade");
        if (p.length) { errBox({ title: "Missing details", text: "Please choose " + p.join(" and ") + " before saving.", tip: "Pick a value from each dropdown, or tap Cancel to keep the original subject.", onClose: () => showSubj(i, { u, g }) }); return false }
        saved[i] = { n: s.n, u: +u, g: +g }; rAll(); toast("Subject updated", "ok")
      }
    }]
  })
}
async function delSubj(i) {
  const s = saved[i]; if (!s) return;
  if (await ask({ title: "Delete this subject?", text: `Subject #${i + 1} (${s.u} unit${+s.u === 1 ? "" : "s"}, grade ${(+s.g).toFixed(2)}) will be removed and your GWA will be recalculated.`, ok: "Delete" })) { saved.splice(i, 1); rAll(); toast("Subject deleted") }
}
$("list").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.e !== undefined) showSubj(+b.dataset.e); else if (b.dataset.x !== undefined) delSubj(+b.dataset.x)
};

// History
function showHist(i) {
  const h = hist[i]; if (!h) return;
  const rows = Array.isArray(h.r) ? h.r : null, wp = rows ? rows.reduce((a, s) => a + s.u * s.g, 0) : h.g * h.u;
  const body = `<div class="mgwa">${r2(h.g)}</div><div class="mu" style="margin-bottom:8px">${esc(h.d)}</div>
<div class="kv"><span>Total units</span><b>${h.u}</b></div><div class="kv"><span>Weighted points</span><b>${r2(wp)}</b></div><div class="kv"><span>Subjects</span><b>${h.s}</b></div>` +
    (rows && rows.length ? `<div class="wrap" style="margin-top:10px"><table><thead><tr><th>#</th><th>Units</th><th>Grade</th><th>Pts</th></tr></thead><tbody>${rows.map((s, k) => `<tr><td>${k + 1}</td><td>${s.u}</td><td>${(+s.g).toFixed(2)}</td><td>${+(s.u * s.g).toFixed(2)}</td></tr>`).join("")}</tbody></table></div>` : '<p class="mu" style="margin:10px 0 0">The subject breakdown was not recorded for this older record.</p>');
  modal({ title: "Saved result", icon: "mark", body, buttons: [{ label: "Delete record", cls: "d", icon: "trash", left: true, fn: () => { delHist(i) } }, { label: "Edit in Saved subjects", cls: "p", icon: "edit", fn: () => { startEdit(i) } }, { label: "Close", fn: () => { } }] })
}
async function delHist(i) {
  const h = hist[i]; if (!h) return; const cur = editing && editing.id === h.id;
  if (await ask({ title: "Delete this record?", text: cur ? "You're editing this record. Deleting it discards your edits and restores your previous subjects." : "This history record will be removed. Your saved subjects are not affected.", ok: "Delete" })) { if (cur) { restoreEdit() } hist.splice(hist.indexOf(h), 1); rAll(); toast("Record deleted") }
}
function startEdit(i) {
  const h = hist[i]; if (!h) return;
  if (!Array.isArray(h.r) || !h.r.length) return errBox({ title: "Can't edit this record", text: "This older record has no subject breakdown to load.", tip: "Re-enter the subjects under Add subjects, then tap Save to history to make a new record." });
  if (editing && editing.id !== h.id) return errBox({ title: "Finish the current edit first", text: "You're already editing another history record.", tip: "Tap Update record or Cancel in Saved subjects, then choose another record." });
  if (!editing) { editing = { id: h.id, backup: saved.map(s => ({ ...s })), bsc: scale }; setScale(h.sc || "4"); applyScale(); saved = h.r.map(s => ({ n: s.n || "", u: +s.u, g: +s.g })); toast("Record loaded in Saved subjects", "ok") }
  rAll(); requestAnimationFrame(() => $("sv").scrollIntoView({ behavior: "smooth", block: "start" }))
}
const sig = a => JSON.stringify(a.map(s => [+s.u, +s.g]));
async function endEdit(commit) {
  if (!editing) return; const h = hist.find(x => x.id === editing.id);
  if (commit) {
    if (!saved.length) return errBox({ title: "No subjects left", text: "A history record needs at least one subject.", tip: "Add a subject under Add subjects, or tap Cancel to discard your changes." });
    if (h) { const c = calc(); Object.assign(h, { sc: scale, g: +r2(c.g), u: +c.u.toFixed(2), s: saved.length, r: saved.map(s => ({ n: s.n || "", u: +s.u, g: +s.g })), e: new Date().toLocaleString() }) }
  } else if (h && sig(saved) !== sig(h.r || []) && !await ask({ title: "Discard your changes?", text: "The edits to this record will be lost.", ok: "Discard", icon: "x" })) return;
  restoreEdit(); rAll(); toast(commit ? "Record updated" : "Edit cancelled", commit ? "ok" : "")
}
$("eupd").onclick = () => endEdit(true); $("ecan").onclick = () => endEdit(false);
$("hist").onclick = () => {
  const c = calc(); if (c.g === null) return errBox({ title: "No subjects yet", text: "There is nothing to save to history because no subjects have been saved.", tip: "Add subjects and tap Save completed rows, then try again." });
  hist.unshift({ id: uid(), sc: scale, d: new Date().toLocaleString(), g: +r2(c.g), u: +c.u.toFixed(2), s: saved.length, r: saved.map(s => ({ n: s.n || "", u: +s.u, g: +s.g })) });
  if (hist.length > 50) hist.length = 50; saved = []; draft = [{ n: "", u: "", g: "" }]; rDraft(); resetScan(); rAll(); toast("Saved to history. Ready for a new sheet.", "ok")
};
$("hl").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.v !== undefined) showHist(+b.dataset.v); else if (b.dataset.h !== undefined) delHist(+b.dataset.h); else if (b.dataset.ed !== undefined) startEdit(+b.dataset.ed)
};
$("hc").onclick = async () => {
  if (!hist.length) return toast("History is already empty");
  if (await ask({ title: "Clear all history?", text: "Every history record will be removed. Your saved subjects stay.", ok: "Clear history" })) { if (editing) { restoreEdit() } hist = []; rAll(); toast("History cleared") }
};
$("ra").onclick = async () => { if (await ask({ title: "Reset all data?", text: "All saved subjects and history will be deleted. This can't be undone.", ok: "Reset all" })) { saved = []; hist = []; editing = null; rAll(); toast("All data reset") } };
$("csv").onclick = () => {
  if (!saved.length) return errBox({ title: "Nothing to export", text: "There are no saved subjects to put in a CSV file.", tip: "Add and save at least one subject, then tap CSV again." }); const c = calc();
  const rows = [["#", "Units", "Grade", "Weighted points"], ...saved.map((s, i) => [i + 1, s.u, (+s.g).toFixed(2), s.u * s.g]), [], ["Total units", c.u], ["Weighted points", c.w], ["GWA", r2(c.g)]];
  const txt = rows.map(r => r.join(",")).join("\n");
  (async () => {
    try { const d = window.claude && await claude.use("downloads"); if (d) { await d.save({ filename: "gwa.csv", data: txt }); return } } catch (e) { }
    const u = URL.createObjectURL(new Blob([txt], { type: "text/csv" })), a = document.createElement("a"); a.href = u; a.download = "gwa.csv"; a.click(); setTimeout(() => URL.revokeObjectURL(u), 2000)
  })(); toast("CSV exported", "ok")
};
$("prt").onclick = () => {
  if (!saved.length) return errBox({ title: "Nothing to print", text: "There are no saved subjects to print.", tip: ["Add and save at least one subject.", "Then tap Print again."] });
  try { window.print() } catch (e) { errBox({ title: "Can't open the print dialog", text: "Your browser blocked printing from this page.", tip: ["Try your browser menu: Share or Print.", "Or tap CSV and print the file from another app."] }) }
};
// OCR
function parse(text) {
  const out = [];
  text.split(/\n/).forEach(l => {
    l = l.trim(); if (l.length < 4) return;
    const nums = (l.match(/\d+(?:[.,]\d+)?/g) || []).map(x => x.replace(",", "."));
    const gi = [...nums].reverse().findIndex(x => G.includes((+x).toFixed(2)) && /\./.test(x));
    if (gi < 0 || nums.length < 2) return;
    const g = (+nums[nums.length - 1 - gi]).toFixed(2); const rest = nums.filter((x, i) => i !== nums.length - 1 - gi);
    const u = rest.find(x => +x > 0 && +x <= 12 && !/\./.test(x)) || rest.find(x => +x > 0 && +x <= 12);
    if (!u) return;
    const n = l.replace(/\d+(?:[.,]\d+)?/g, " ").replace(/[^A-Za-z&\-\s]/g, " ").replace(/\s+/g, " ").trim();
    out.push({ n, u: String(+u), g })
  }); return out
}
function loadT() { return new Promise((res, rej) => { if (window.Tesseract) return res(); const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.0/tesseract.min.js"; s.onload = res; s.onerror = () => rej(); document.head.appendChild(s) }) }
async function viaClaude(bmp) {
  const s = await claude.use("sample"); if (!s) return null;
  const lim = await s.limits(); if (!lim || !lim.images) return null;
  const k = Math.min(1, 2200 / Math.max(bmp.width, bmp.height));
  const cv = document.createElement("canvas"); cv.width = Math.round(bmp.width * k); cv.height = Math.round(bmp.height * k); cv.getContext("2d").drawImage(bmp, 0, 0, cv.width, cv.height);
  const blob = await new Promise(r => cv.toBlob(r, "image/jpeg", .85));
  const v = await s.json("Read the attached grade sheet image. Return ONLY a JSON object {\"hasUnitsColumn\":true or false (the table has a column headed Units),\"hasFinalGradeColumn\":true or false (the table has a column headed Final Grade),\"rows\":[{\"n\":subject name or code,\"u\":units as a number,\"g\":grade as a number}]}. Extract EVERY row of the table from top to bottom without skipping any (there may be 10 or more). Use the Units column and the Final Grade column only. Use an empty rows list and false for both flags if the image is not a grade sheet.", { images: [blob], modelTier: "complex" });
  const arr = Array.isArray(v) ? v : (v && Array.isArray(v.rows) ? v.rows : []);
  const out = arr.map(r => ({ n: String(r.n || ""), u: String(+r.u || ""), g: (+r.g).toFixed(2) })).filter(r => r.g !== "NaN");
  out.hdr = Array.isArray(v) ? true : !!(v && v.hasUnitsColumn && v.hasFinalGradeColumn); return out
}
async function prep(b) { const k = Math.min(3, 3000 / Math.max(b.width, b.height)); const c = document.createElement("canvas"); c.width = Math.round(b.width * k); c.height = Math.round(b.height * k); const x = c.getContext("2d"); x.imageSmoothingQuality = "high"; x.drawImage(b, 0, 0, c.width, c.height); const d = x.getImageData(0, 0, c.width, c.height), p = d.data; for (let i = 0; i < p.length; i += 4) { let v = p[i] * .3 + p[i + 1] * .59 + p[i + 2] * .11; v = Math.max(0, Math.min(255, (v - 128) * 1.5 + 128)); p[i] = p[i + 1] = p[i + 2] = v } x.putImageData(d, 0, 0); return c }
function snap(t) {
  t = t.replace(/^[^\w]+|[^\w]+$/g, "").replace(/[,:;]/g, ".");
  if (/^\d{3}$/.test(t)) { const n = +t / 100; return G.includes(n.toFixed(2)) ? { g: n.toFixed(2), w: false } : null }
  t = t.replace(/[Ss]/g, "5").replace(/[Oo]/g, "0").replace(/[Il|]/g, "1").replace(/B/g, "8");
  if (!/^\d\.\d{1,2}$/.test(t)) return null;
  const n = +t; if (n > Math.max(...G.map(Number))) return null; const q = near(n);
  return { g: q.toFixed(2), w: Math.abs(q - n) > .001 }
}
function parseWords(ws) {
  const T = ws.map(w => ({ t: w.text.trim(), x: w.bbox.x0, y: (w.bbox.y0 + w.bbox.y1) / 2, h: w.bbox.y1 - w.bbox.y0, wd: w.bbox.x1 - w.bbox.x0 })).filter(w => w.t);
  let gs = []; T.forEach(w => { const s = snap(w.t); if (s) gs.push({ ...w, ...s }) });
  if (gs.length > 2) { const xs = gs.map(g => g.x).sort((a, b) => a - b), mx = xs[xs.length >> 1], mw = gs.map(g => g.wd).sort((a, b) => a - b)[gs.length >> 1]; gs = gs.filter(g => Math.abs(g.x - mx) < mw * 2.5) }
  gs.sort((a, b) => a.y - b.y);
  const us = T.filter(w => /^[1-3]$/.test(w.t)), used = new Set(), out = [];
  gs.forEach(g => {
    const c = us.filter(u => u.x < g.x && !used.has(u) && Math.abs(u.y - g.y) < Math.max(g.h, u.h) * 1.2).sort((a, b) => b.x - a.x)[0]; // nearest column to the left of the grade = Units, not the # column
    if (c) used.add(c); out.push({ n: "", u: c ? c.t : "", g: g.g, w: g.w || !c })
  });
  const f = out.filter(r => r.u).map(r => r.u), m = f.sort((a, b) => f.filter(v => v === b).length - f.filter(v => v === a).length)[0] || "3";
  out.forEach(r => { if (!r.u) r.u = m });
  return out
}
const hasHdr = t => /un[il1|]ts?\b/i.test(t) && /gra[dc]e/i.test(t); // sample sheet headers: Units + Final Grade
let tw = null, twT; // Tesseract worker is reused between scans, then released after 90 s idle
const getW = () => tw || (tw = Tesseract.createWorker("eng"));
function killW() { clearTimeout(twT); const p = tw; tw = null; if (p) p.then(w => w.terminate()).catch(() => { }) }
async function viaTess(b) {
  await loadT(); const c = await prep(b); let best = [], all = "";
  try { const w = await getW(); for (const m of ["6", "11"]) { await w.setParameters({ tessedit_pageseg_mode: m }); const r = await w.recognize(c); all += " " + (r.data.text || ""); let rows = r.data.words ? parseWords(r.data.words) : []; if (!rows.length) rows = parse(r.data.text); if (rows.length > best.length) best = rows } }
  catch (e) { killW(); throw e } finally { c.width = c.height = 0; clearTimeout(twT); twT = setTimeout(killW, 90000) }
  best.hdr = hasHdr(all); return best
}
let busy = false, pvu = null, scanTok = 0, lastSrc = "up", lastFile = null, lastBatch = 0;
const HINT = "Upload an image of your grade sheet. Subjects are added automatically; anything unclear is flagged for you to fix.";
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rj) => setTimeout(() => rj(new Error("timeout")), ms))]);
function resetScan() { lastFile = null; lastBatch = 0; ocr = []; rOcr(); const v = $("pv"); v.classList.add("hid"); v.removeAttribute("src"); if (pvu) { URL.revokeObjectURL(pvu); pvu = null } $("crp").classList.add("hid"); msg("m2", HINT, "mu") }
function setBusy(b) { busy = b;["up", "crp"].forEach(i => { $(i).disabled = b }) }
const SE = {
  noFile: ["No image selected", "No image was selected.", "Tap Upload image and choose a photo of your grade sheet."],
  notImage: ["Unsupported file", "That file isn't an image.", "Choose a JPG or PNG photo of your grade sheet. A screenshot works too."],
  empty: ["Empty image", "That image file is empty.", "Choose another photo, or retake it."],
  big: ["Image too large", "That image is over 15 MB.", "Use a smaller photo: lower the camera quality or take a screenshot of the sheet."],
  open: ["Can't open the image", "It may be corrupted or in an unsupported format (such as HEIC).", "Retake the photo, or save it as JPG or PNG first. On iPhone: Settings > Camera > Formats > Most Compatible."],
  loader: ["Scanner unavailable", "The scanner couldn't load.", "Check your internet connection and try again, or enter subjects manually."],
  timeout: ["Scan took too long", "Reading the image took too long.", "Use a smaller, sharper photo, crop it to the table, or enter subjects manually."],
  fail: ["Couldn't read the image", "Something went wrong while reading the image.", "Try a clearer, well-lit photo, or enter subjects manually."],
  miss: ["Image doesn't match the sample", "This image doesn't match the sample grade sheet: no table with Units and Final Grade columns was found. Nothing was added.", ["Show the whole table, including the Units and Final Grade headers.", "Lay the sheet flat in good light and shoot straight on.", "Use the cropping tool to isolate the table.", "Open the sample sheet to compare."]],
  none: ["No grades detected", "The image matches the sample, but no grades could be read.", "Use the cropping tool to isolate the table, and make sure the photo is clear, well-lit and straight-on. Or enter subjects manually."]
};
function scanErr(k, x) {
  const e = SE[k]; msg("m2", HINT, "mu");
  errBox({ title: e[0], text: e[1], tip: e[2], ...x, extra: [...(k === "miss" ? [{ label: "See sample", icon: "eye", fn: openSample }] : []), ...(lastFile && ["miss", "none", "fail", "timeout"].includes(k) ? [{ label: "Crop image", icon: "crop", fn: () => openCrop(lastFile, lastSrc) }] : []), { label: "Try again", icon: "retry", fn: () => { $(lastSrc).click() } }] })
}
const STEPS = ["Checking the file", "Preparing the reader", "Comparing with the sample sheet and reading grades"];
function setStep(n) { document.querySelectorAll("#mc .vs li").forEach((li, k) => { li.className = k < n ? "dn" : k === n ? "on" : ""; li.firstChild.innerHTML = k < n ? ic("check") : "" }) }
function cancelScan() { scanTok++; killW(); setBusy(false); msg("m2", HINT, "mu") }
function showVerify() { modal({ title: "Verifying your image", icon: "photo", body: `<div class="vw" role="status" aria-busy="true"><div class="pvw">${pvu ? `<img src="${esc(pvu)}" alt="">` : ""}<i class="sl"></i></div><ul class="vs">${STEPS.map(s => `<li><span class="dot"></span>${s}</li>`).join("")}</ul></div>`, buttons: [{ label: "Cancel", fn: cancelScan }], onDismiss: cancelScan }); setStep(1) }
function scanOk(n, bad, unsure, gwa) {
  const notes = [];
  if (unsure) notes.push(`${unsure} row(s) are tagged "verify" in Saved subjects. Compare them with your sheet. Recommendation: use the cropping tool to crop to the Units and Final Grade columns, then rescan.`);
  if (bad) notes.push(`${bad} row(s) couldn't be used (units must be 1-3, grade ${SCL[scale]}). Fix them under Scan grades, then tap Import fixed rows.`);
  modal({ title: "Image verified", icon: "check", tone: "ok", body: `<div class="vw"><span class="vbig">${ic("check")}</span><p class="et" style="margin:0">This photo matches the sample grade sheet. <b>${n}</b> subject(s) were added.</p></div><div class="kv"><span>Your GWA</span><b>${gwa}</b></div>` + notes.map(x => `<div class="note">${esc(x)}</div>`).join(""), buttons: [...(unsure || bad ? [{ label: "Crop & rescan", icon: "crop", fn: () => openCrop(lastFile, lastSrc, true) }] : []), { label: "OK", cls: "ok", fn: () => { } }] })
}
async function scan(file, src, rep) {
  if (busy) return; lastSrc = src;
  if (!file) return scanErr("noFile");
  if (!file.type.startsWith("image/")) return scanErr("notImage");
  if (!file.size) return scanErr("empty");
  if (file.size > 15 * 1024 * 1024) return scanErr("big");
  setBusy(true); const my = ++scanTok, dead = () => my !== scanTok; let bmp = null;
  try {
    try { if (pvu) URL.revokeObjectURL(pvu); pvu = URL.createObjectURL(file); $("pv").src = pvu; $("pv").classList.remove("hid") } catch (e) { }
    showVerify();
    try { bmp = await createImageBitmap(file) } catch (e) { return dead() ? 0 : scanErr("open") }
    if (dead()) return;
    let rows = null;
    if (window.claude) { try { setStep(2); rows = await withTimeout(viaClaude(bmp), 60000) } catch (e) { rows = null } }
    if (dead()) return;
    if (!rows) {
      try { setStep(1); await withTimeout(loadT(), 20000) } catch (e) { return dead() ? 0 : scanErr("loader") }
      if (dead()) return; setStep(2);
      try { rows = await withTimeout(viaTess(bmp), 90000) } catch (e) { return dead() ? 0 : scanErr(e && e.message === "timeout" ? "timeout" : "fail") }
    }
    if (dead()) return;
    if (!rows.hdr) return scanErr("miss");
    if (!rows.length) return scanErr("none");
    const good = rows.filter(valid), bad = rows.filter(r => !valid(r)), unsure = good.filter(r => r.w).length;
    saved = saved.filter(s => !s.b);/* a new scan refreshes earlier scanned rows */const bid = Date.now(); lastBatch = bid; saved.push(...good.map(r => ({ n: (r.n || "").trim(), u: +r.u, g: +r.g, b: bid, ...(r.w ? { c: 1 } : {}) })));
    ocr = bad.map(r => ({ ...r, x: true })); rOcr(); rAll();
    if (!good.length) return scanErr("none", { title: "Verified, but no valid rows", text: `The image matches the sample, but none of its ${bad.length} row(s) had valid units (1-3) and a grade.`, tip: "Fix the highlighted fields under Scan grades, then tap Import fixed rows." });
    msg("m2", `Added ${good.length} subject(s) from your photo.`, "o"); scanOk(good.length, bad.length, unsure, r2(calc().g))
  } finally { try { bmp && bmp.close && bmp.close() } catch (e) { } if (my === scanTok) setBusy(false) }
}
// ---------- Cropping tool ----------
function pick(file, src) {
  if (!file || !file.type.startsWith("image/") || !file.size || file.size > 15 * 1024 * 1024) return scan(file, src);
  lastFile = file; $("crp").classList.remove("hid"); openCrop(file, src)
}
function openCrop(file, src, rep) {
  if (!file || busy) return; const url = URL.createObjectURL(file); let R, drag = null, im, cb;
  const draw = () => Object.assign(cb.style, { left: R.x + "px", top: R.y + "px", width: R.w + "px", height: R.h + "px" });
  modal({
    title: "Crop your grade sheet", icon: "crop",
    body: `<p class="mu" style="margin:0 0 8px">Drag the box over the table with the Units and Final Grade columns. Drag a corner to resize.${saved.some(s => s.b) ? " Subjects from your previous scan will be replaced." : ""}</p><div class="cw"><img id="ci" src="${url}" alt="Image to crop"><div class="cb" id="cb"><i data-h="nw"></i><i data-h="ne"></i><i data-h="sw"></i><i data-h="se"></i></div></div>`,
    onDismiss: () => URL.revokeObjectURL(url),
    buttons: [{ label: "Use full image", fn: () => { URL.revokeObjectURL(url); scan(file, src, rep) } }, {
      label: "Scan cropped", cls: "ok", icon: "check", fn: () => {
        const k = im.naturalWidth / im.clientWidth, c = document.createElement("canvas"); c.width = Math.round(R.w * k); c.height = Math.round(R.h * k);
        c.getContext("2d").drawImage(im, R.x * k, R.y * k, R.w * k, R.h * k, 0, 0, c.width, c.height);
        c.toBlob(b => { c.width = c.height = 0; URL.revokeObjectURL(url); scan(b ? new File([b], "crop.jpg", { type: "image/jpeg" }) : file, src, rep) }, "image/jpeg", .92)
      }
    }],
    onOpen: () => {
      im = $("ci"); cb = $("cb");
      const init = () => { const W = im.clientWidth, H = im.clientHeight; R = { x: W * .05, y: H * .05, w: W * .9, h: H * .9 }; draw() };
      im.onload = init; im.onerror = () => { URL.revokeObjectURL(url); closeModal(false); scan(file, src, rep) }; if (im.complete && im.naturalWidth) init();
      cb.onpointerdown = e => { drag = { m: e.target.dataset.h || "mv", px: e.clientX, py: e.clientY, r: { ...R } }; cb.setPointerCapture(e.pointerId); e.preventDefault() };
      cb.onpointermove = e => {
        if (!drag) return; const dx = e.clientX - drag.px, dy = e.clientY - drag.py, o = drag.r, W = im.clientWidth, H = im.clientHeight, M = 30, m = drag.m; let { x, y, w, h } = o;
        if (m === "mv") { x = Math.min(Math.max(0, o.x + dx), W - w); y = Math.min(Math.max(0, o.y + dy), H - h) }
        else {
          if (m.includes("w")) { x = Math.min(Math.max(0, o.x + dx), o.x + o.w - M); w = o.x + o.w - x } else w = Math.min(Math.max(M, o.w + dx), W - o.x);
          if (m.includes("n")) { y = Math.min(Math.max(0, o.y + dy), o.y + o.h - M); h = o.y + o.h - y } else h = Math.min(Math.max(M, o.h + dy), H - o.y)
        }
        R = { x, y, w, h }; draw()
      };
      cb.onpointerup = cb.onpointercancel = () => { drag = null }
    }
  })
}
$("crp").onclick = () => openCrop(lastFile, lastSrc, true);
$("px").onclick = () => { resetScan(); toast("Image removed") };
// ---------- Info pop-ups ----------
const INFO = { how: ["How to use", "bk"], about: ["About GWA Calculator", "inf"] };
document.querySelectorAll("[data-info]").forEach(b => b.onclick = () => { const k = b.dataset.info; modal({ title: INFO[k][0], icon: INFO[k][1], body: $("tpl-" + k).innerHTML, buttons: [{ label: "Close", cls: "ok", fn: () => { } }] }) });
["up"].forEach(i => $(i).addEventListener("pointerdown", () => { if (!window.claude) loadT().catch(() => { }) }, { once: true }));
$("up").onclick = () => $("img2").click();
$("img2").onchange = e => { pick(e.target.files[0], "up"); e.target.value = "" };
$("imp").onclick = () => {
  const ok = ocr.filter(valid);
  if (!ok.length) return errBox({ title: "Nothing to import", text: "None of the scanned rows are complete yet.", tip: "Set Units (1-3) and a Grade for each highlighted row, then tap Import fixed rows." });
  saved.push(...ok.map(r => ({ n: (r.n || "").trim(), u: +r.u, g: +r.g })));
  ocr = ocr.filter(r => !valid(r)); rOcr(); rAll();
  const left = ocr.length; msg("m2", `Imported ${ok.length} row(s).`, "o"); toast(`Imported ${ok.length} row(s)`, "ok");
  if (left) errBox({ title: `${left} row(s) still need fixing`, text: "Some scanned rows are still incomplete.", tip: "Set Units (1-3) and a Grade for each highlighted row, then tap Import fixed rows again." })
};
$("oadd").onclick = () => { ocr.push({ n: "", u: "", g: "" }); rOcr() };
$("clr").onclick = async () => { if (ocr.length && !await ask({ title: "Discard scanned rows?", text: "The rows that could not be imported will be removed.", ok: "Discard" })) return; ocr = []; rOcr(); $("pv").classList.add("hid"); msg("m2", HINT, "mu") };
bind($("draft"), () => draft, rDraft);
bind($("ocr"), () => ocr, rOcr);
document.querySelectorAll("[data-ic]").forEach(el => { el.innerHTML = ic(el.dataset.ic) });
addEventListener("pagehide", () => { flush(); killW() }); document.addEventListener("visibilitychange", () => { if (document.hidden) flush() });
load(); rDraft(); rOcr(); rAll();
