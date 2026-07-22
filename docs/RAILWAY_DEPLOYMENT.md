# פריסת דטהסקופ ב-Railway

## מה החבילה עושה

Railway בונה Docker image באמצעות `Dockerfile`.

Caddy מגיש את תוכן התיקייה:

```text
website/
```

כשורש האתר. לכן:

```text
website/index.html
```

יופיע בכתובת הראשית של האתר.

לדוגמה:

```text
https://your-site.up.railway.app/
https://your-site.up.railway.app/handbook/
https://your-site.up.railway.app/units/unit-00/
```

## הקבצים

```text
Dockerfile
Caddyfile
.dockerignore
railway.toml
```

## חיבור GitHub ל-Railway

1. היכנסו ל-Railway.
2. בחרו **New Project**.
3. בחרו **Deploy from GitHub Repo**.
4. אשרו ל-Railway גישה ל-GitHub, אם תתבקשו.
5. בחרו את המאגר `datascope-course`.
6. בחרו **Deploy Now**.
7. המתינו לסיום ה-Build וה-Deploy.
8. היכנסו לשירות שנוצר.
9. פתחו **Settings → Networking → Public Networking**.
10. לחצו **Generate Domain**.

## פריסה אוטומטית

לאחר החיבור, push חדש לענף המחובר מפעיל deployment חדש.

```bash
git add .
git commit -m "Add Railway deployment configuration"
git push origin main
```

## בדיקות לאחר הפריסה

פתחו את הכתובות הבאות:

```text
/
 /health
 /handbook/
 /units/unit-00/
```

התוצאה ב-`/health` צריכה להיות:

```text
OK
```

## פתרון בעיות

### Railway מציג שגיאת Build

בדקו ש-`Dockerfile` נמצא בשורש המאגר וששמו מתחיל באות גדולה.

### האתר עולה אבל מתקבלת שגיאת 404

בדקו שקיים הקובץ:

```text
website/index.html
```

ושמבנה התיקיות נשמר בזמן העלאת ה-ZIP.

### אין כתובת ציבורית

Railway אינו תמיד יוצר domain אוטומטית. יש לבחור:

```text
Settings → Networking → Public Networking → Generate Domain
```

### שינוי ב-GitHub אינו מופיע באתר

בדקו:

- שה-commit נדחף לענף המחובר ל-Railway.
- שנוצר deployment חדש.
- שה-deployment הסתיים בסטטוס Success.
- שאין שגיאות Build או Deploy בלוגים.

## החלטה ארכיטקטונית

Railway הוא סביבת תצוגה ופיתוח נגישה מהדפדפן.

Hetzner יישאר סביבת הייצור הרשמית לאחר שהאתר יהיה מוכן.
