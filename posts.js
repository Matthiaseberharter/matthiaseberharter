// posts.js – alle Blogbeiträge an einem Ort
// So erstellst du einen neuen Beitrag:
// 1) Kopiere einen Block {...}, passe id, title, date, teaser, content an
// 2) id ist der URL-Slug (nur Kleinbuchstaben, Ziffern, Bindestriche)
// 3) date im Format YYYY-MM-DD
// 4) content ist HTML (Absätze, Bilder, Überschriften, YouTube-Embeds etc.)

window.BLOG_POSTS = [
  {
    id: "vierteWand",
    title: "<em>Fourth Wall Breaking<em> in der Musik",
    date: "2025-09-24",
    teaser: "Abriss und Überlegungen zu einem wenig benutzten kompositorischen Parameter",
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
