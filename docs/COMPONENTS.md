# רכיבי דטהסקופ

## שימוש

יש לטעון בכל דף:

```html
<link rel="stylesheet" href="../../assets/css/components.css">
<script src="../../assets/js/components.js" defer></script>
```

## תיק לקוח

```html
<datascope-client
  client="שם הלקוח"
  background="רקע"
  decision="ההחלטה"
  task="המשימה"
  deliverable="התוצר">
</datascope-client>
```

## תהליך העבודה

```html
<datascope-workflow active="3"></datascope-workflow>
```

הערך `active` הוא מספר השלב הפעיל, 1–8.

## כרטיס מקור

```html
<datascope-source-card
  name="שם המקור"
  type="מקור ראשוני"
  use="מתי משתמשים"
  strength="יתרון"
  limitation="מגבלה">
</datascope-source-card>
```

## המלצה

```html
<datascope-recommendation
  recommendation="המלצה"
  evidence="ראיות"
  confidence="רמת ביטחון"
  caveat="הסתייגות">
</datascope-recommendation>
```

## מה לוקחים לעבודה?

```html
<datascope-takeaway>
  <p>טקסט הסיכום המקצועי.</p>
</datascope-takeaway>
```

## החלטת עיצוב

הרכיבים משתמשים ב-Light DOM ולא ב-Shadow DOM. כך קובץ העיצוב הראשי יכול
לעצב אותם, קל יותר לבצע התאמות נגישות, ואין צורך לשכפל טיפוגרפיה ומשתנים.
