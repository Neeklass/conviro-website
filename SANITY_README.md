# Sanity Integration für Conviro Website

## 🎯 Eingerichtete Schemas

### 1. **Team-Mitglieder** (`teamMember`)
- Name, Position, Kurze Bio
- Profilbild mit Hotspot
- Reihenfolge-Feld für Sortierung

### 2. **Leistungen/Portfolio** (`service`)
- Titel, Slug, Beschreibung
- Vorschaubild mit Hotspot
- Optional: Video-URL (YouTube/Vimeo) oder Video-Datei-Upload
- Features/Highlights als Array
- Reihenfolge-Feld für Sortierung

### 3. **Kundenreferenzen** (`testimonial`)
- Kundenname, Firma
- Zitat-Text (max 500 Zeichen)
- Firmenlogo mit Hotspot
- Bewertung (1-5 Sterne)
- "Hervorgehoben"-Flag für Startseite

### 4. **Website-Einstellungen** (`siteSettings`) - **Singleton**
- E-Mail, Telefon, Adresse
- Social Media Links (Instagram, LinkedIn, Facebook, Twitter, YouTube)
- Logo und Favicon
- Nur ein Datensatz erlaubt!

## 🚀 Schnellstart

### 1. Sanity-Projekt erstellen
Besuche https://www.sanity.io und erstelle ein neues Projekt:
```bash
npm create sanity@latest -- --project <deine-project-id> --dataset production
```

### 2. Project ID eintragen
Ersetze `'your-project-id'` in folgenden Dateien:
- `sanity.config.ts`
- `sanity.cli.ts`
- `src/lib/sanity.ts`

### 3. Sanity Studio starten
```bash
npm run sanity
```
Das Studio öffnet sich unter `http://localhost:3333`

### 4. Daten in Astro abrufen
Beispiel für [src/pages/team.astro](src/pages/team.astro):

```astro
---
import { client } from '../lib/sanity'
import { urlFor } from '../lib/image'

const teamMembers = await client.fetch(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    bio,
    profileImage
  }
`)
---

<div>
  {teamMembers.map(member => (
    <div>
      <img src={urlFor(member.profileImage).width(300).height(300).url()} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.position}</p>
      <p>{member.bio}</p>
    </div>
  ))}
</div>
```

## 📝 GROQ Queries

### Team-Mitglieder abrufen
```groq
*[_type == "teamMember"] | order(order asc) {
  _id, name, position, bio, profileImage
}
```

### Leistungen abrufen
```groq
*[_type == "service"] | order(order asc) {
  _id, title, slug, description, previewImage, videoUrl, features
}
```

### Testimonials abrufen (nur hervorgehobene)
```groq
*[_type == "testimonial" && featured == true] {
  _id, customerName, company, quote, companyLogo, rating
}
```

### Website-Einstellungen abrufen (Singleton)
```groq
*[_type == "siteSettings"][0] {
  email, phone, address, socialMedia, logo
}
```

## 🎨 Bilder optimieren

Nutze die `urlFor()` Helper-Funktion aus `src/lib/image.ts`:

```astro
---
import { urlFor } from '../lib/image'
---

<img 
  src={urlFor(image)
    .width(800)
    .height(600)
    .fit('crop')
    .quality(90)
    .url()} 
  alt="Beschreibung" 
/>
```

## 🔧 Nächste Schritte

1. **Sanity Studio deployen**: `npm run sanity:deploy`
2. **Environment Variables**: Füge `.env` hinzu für sensible Daten
3. **CORS konfigurieren**: In Sanity Dashboard → API → CORS Origins
4. **Webhooks**: Für automatische Rebuilds bei Content-Änderungen

## 📦 Struktur

```
sanity/
  schemaTypes/
    index.ts           # Exportiert alle Schemas
    teamMember.ts      # Team-Schema
    service.ts         # Leistungen-Schema
    testimonial.ts     # Referenzen-Schema
    siteSettings.ts    # Globale Einstellungen (Singleton)

src/lib/
  sanity.ts            # Sanity Client
  image.ts             # Bild-URL-Builder
```

## 🛡️ Wichtige Hinweise

- **siteSettings ist ein Singleton**: Es kann nur EINEN Datensatz geben (keine Create/Delete-Buttons im Studio)
- **Hotspot**: Alle Bilder haben `hotspot: true` für bessere Crop-Kontrolle
- **Validation**: Erforderliche Felder sind mit `validation: (Rule) => Rule.required()` markiert
- **CDN**: `useCdn: true` in Client für bessere Performance (auf `false` setzen für Echtzeit-Daten)

## 📚 Ressourcen

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Query Cheatsheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Image URLs](https://www.sanity.io/docs/image-url)
