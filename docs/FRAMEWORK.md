# Datascope Framework

## מטרת Sprint 3

לספק מעטפת קבועה לכל יחידה:

- כותרת עליונה
- ניווט ראשי
- התקדמות ביחידה
- ניווט בין שלבים
- מצב בהיר וכהה
- פריסה רספונסיבית
- תמיכה במקלדת
- תבנית יחידה
- תשתית למדריך המידען

## קבצים

```text
website/assets/css/framework.css
website/assets/js/framework.js
website/templates/unit-template.html
website/handbook/index.html
```

## עקרונות יישום

### אין framework חיצוני

המערכת נשארת HTML, CSS ו-JavaScript רגילים.

### מצב כהה הוא שיפור, לא תלות

ברירת המחדל מכבדת את העדפת מערכת ההפעלה. הבחירה נשמרת ב-Local Storage.

### מד התקדמות אינו ציון

הוא משקף מיקום בדף בלבד. אין להשתמש בו כהוכחה להשלמת למידה.

### ניווט שלבים

כל קטע תוכן מסומן:

```html
<section data-progress-section>
```

כל קישור צד מסומן:

```html
<a data-step-link href="#section-id">
```

### נגישות

- קישור דילוג
- `aria-current`
- כפתורים עם תוויות
- מצב מיקוד מתוך `main.css`
- תמיכה במסכים קטנים
- כיבוד `prefers-reduced-motion`
