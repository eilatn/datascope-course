# תבניות שיעור — DataScope

## תבנית 1: עמוד כותרת

קובץ מקור:

```text
website/templates/lesson-title.html
```

שימושים:

- פתיחת שיעור חדש
- שם השיעור ומטרתו
- עד שלושה נושאים מרכזיים
- איור קטן אחד בלבד

מחלקת HTML:

```html
<article class="lesson-slide lesson-slide--title">
```

## תבנית 2: עמוד טקסט

קובץ מקור:

```text
website/templates/lesson-text.html
```

שימושים:

- הסבר מושגי
- טקסט ארוך יחסית
- דוגמאות, מקורות והערות
- כרטיסי מידע קצרים

מחלקת HTML:

```html
<article class="lesson-slide lesson-slide--text">
```

## כללי טיפוגרפיה

- כל הטקסט מיושר לימין.
- משפחת הגופנים: Calibri, Carlito, Arial.
- אין להשתמש ביותר ממשפחת גופנים אחת בעמוד.
- כל עמוד עוסק ברעיון מרכזי אחד.

## שינוי צבע בין שיעורים

יש לשנות את מחלקת ה-`body` בלבד:

```html
<body class="lesson-shell lesson-theme-teal">
<body class="lesson-shell lesson-theme-blue">
<body class="lesson-shell lesson-theme-amber">
<body class="lesson-shell lesson-theme-violet">
```

אפשר להוסיף ערכת צבע נוספת באמצעות הגדרת המשתנים:

```css
.lesson-theme-name {
  --lesson-accent: ...;
  --lesson-accent-dark: ...;
  --lesson-accent-soft: ...;
  --lesson-line: ...;
}
```

## זהות מוסדית

בהתאם להחלטה הקודמת, לוגו מכללת דוד ילין מופיע ב-HOME-00 בלבד. תבניות השיעור משתמשות בזהות דטהסקופ.
