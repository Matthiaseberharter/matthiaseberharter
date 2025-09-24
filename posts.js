// posts.js – alle Blogbeiträge an einem Ort
// So erstellst du einen neuen Beitrag:
// 1) Kopiere einen Block {...}, passe id, title, date, teaser, content an
// 2) id ist der URL-Slug (nur Kleinbuchstaben, Ziffern, Bindestriche)
// 3) date im Format YYYY-MM-DD
// 4) content ist HTML (Absätze, Bilder, Überschriften, YouTube-Embeds etc.)

window.BLOG_POSTS = [
  {
    id: "gedanken-1",
    title: "Gedanken 1",
    date: "2025-03-20",
    teaser: "Ein paar Notizen zum Komponieren zwischen Struktur und Intuition.",
    content: `
      <p>Hier steht dein erster Blogbeitrag. Du kannst <strong>HTML</strong> verwenden,
      z.&nbsp;B. <em>kursiv</em>, Überschriften, Listen, Bilder, YouTube-Embeds usw.</p>
      <h3>Abschnitt</h3>
      <p>Mehr Text…</p>
    `
  },
  {
    id: "skizzen-zu-blabla",
    title: "Skizzen zu Blabla",
    date: "2024-11-05",
    teaser: "Kompositionsprozess: Skizzen, Rohideen und erste Struktur.",
    content: `
      <p>Dein zweiter Beitrag …</p>
    `
  },
  {
    id: "kurzgeschichte-bla",
    title: "Kurzgeschichte bla",
    date: "2024-06-18",
    teaser: "Eine kurze Geschichte über Klangfarben.",
    content: `
      <p>Dein dritter Beitrag …</p>
    `
  }
];
