"use strict";

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

class DatascopeClient extends HTMLElement {
  connectedCallback() {
    const client = escapeHTML(this.getAttribute("client") || "לקוח");
    const background = escapeHTML(this.getAttribute("background") || "");
    const decision = escapeHTML(this.getAttribute("decision") || "");
    const task = escapeHTML(this.getAttribute("task") || "");
    const deliverable = escapeHTML(this.getAttribute("deliverable") || "");

    this.innerHTML = `
      <article class="ds-client-card" aria-labelledby="ds-client-title">
        <div class="ds-component-label">תיק לקוח</div>
        <h2 id="ds-client-title">${client}</h2>
        <dl class="ds-client-grid">
          ${background ? `<div><dt>רקע</dt><dd>${background}</dd></div>` : ""}
          ${decision ? `<div><dt>ההחלטה</dt><dd>${decision}</dd></div>` : ""}
          ${task ? `<div><dt>המשימה</dt><dd>${task}</dd></div>` : ""}
          ${deliverable ? `<div><dt>התוצר המבוקש</dt><dd>${deliverable}</dd></div>` : ""}
        </dl>
      </article>`;
  }
}

class DatascopeWorkflow extends HTMLElement {
  connectedCallback() {
    const active = Number(this.getAttribute("active") || 0);
    const steps = [
      "לקוח", "צורך", "שאלת מחקר", "מקורות",
      "איסוף", "הערכה", "ניתוח", "המלצה"
    ];

    this.innerHTML = `
      <section class="ds-workflow-block" aria-labelledby="ds-workflow-title">
        <div class="ds-component-label">תהליך העבודה</div>
        <h2 id="ds-workflow-title">איפה אנחנו בתהליך?</h2>
        <ol class="ds-workflow">
          ${steps.map((step, index) => {
            const number = index + 1;
            const state = number < active ? "is-complete" :
                          number === active ? "is-active" : "";
            const current = number === active ? ' aria-current="step"' : "";
            return `<li class="${state}"${current}>
              <span>${number}</span>
              <strong>${step}</strong>
            </li>`;
          }).join("")}
        </ol>
      </section>`;
  }
}

class DatascopeSourceCard extends HTMLElement {
  connectedCallback() {
    const name = escapeHTML(this.getAttribute("name") || "מקור מידע");
    const type = escapeHTML(this.getAttribute("type") || "");
    const use = escapeHTML(this.getAttribute("use") || "");
    const strength = escapeHTML(this.getAttribute("strength") || "");
    const limitation = escapeHTML(this.getAttribute("limitation") || "");

    this.innerHTML = `
      <article class="ds-source-card">
        <div class="ds-source-heading">
          <div>
            <div class="ds-component-label">כרטיס מקור</div>
            <h3>${name}</h3>
          </div>
          ${type ? `<span class="ds-badge">${type}</span>` : ""}
        </div>
        <dl>
          ${use ? `<div><dt>מתי משתמשים?</dt><dd>${use}</dd></div>` : ""}
          ${strength ? `<div><dt>יתרון מרכזי</dt><dd>${strength}</dd></div>` : ""}
          ${limitation ? `<div><dt>מגבלה</dt><dd>${limitation}</dd></div>` : ""}
        </dl>
      </article>`;
  }
}

class DatascopeRecommendation extends HTMLElement {
  connectedCallback() {
    const recommendation = escapeHTML(this.getAttribute("recommendation") || "");
    const evidence = escapeHTML(this.getAttribute("evidence") || "");
    const confidence = escapeHTML(this.getAttribute("confidence") || "");
    const caveat = escapeHTML(this.getAttribute("caveat") || "");

    this.innerHTML = `
      <article class="ds-recommendation">
        <div class="ds-component-label">המלצת המידען</div>
        <h2>מה נמליץ ללקוח?</h2>
        <dl>
          ${recommendation ? `<div><dt>המלצה</dt><dd>${recommendation}</dd></div>` : ""}
          ${evidence ? `<div><dt>ראיות</dt><dd>${evidence}</dd></div>` : ""}
          ${confidence ? `<div><dt>רמת ביטחון</dt><dd>${confidence}</dd></div>` : ""}
          ${caveat ? `<div><dt>הסתייגות</dt><dd>${caveat}</dd></div>` : ""}
        </dl>
      </article>`;
  }
}

class DatascopeTakeaway extends HTMLElement {
  connectedCallback() {
    const title = escapeHTML(this.getAttribute("title") || "מה לוקחים לעבודה?");
    const content = this.innerHTML.trim();
    this.innerHTML = `
      <aside class="ds-takeaway" aria-labelledby="ds-takeaway-title">
        <div class="ds-component-label">סיכום מקצועי</div>
        <h2 id="ds-takeaway-title">${title}</h2>
        <div class="ds-takeaway-content">${content}</div>
      </aside>`;
  }
}

customElements.define("datascope-client", DatascopeClient);
customElements.define("datascope-workflow", DatascopeWorkflow);
customElements.define("datascope-source-card", DatascopeSourceCard);
customElements.define("datascope-recommendation", DatascopeRecommendation);
customElements.define("datascope-takeaway", DatascopeTakeaway);
