// posts.js – alle Blogbeiträge an einem Ort
// Workflow: Für jeden neuen Beitrag einen Block { ... } unten ergänzen.
// - id: nur kleinbuchstaben-ziffern-bindestriche (slug)
// - date: YYYY-MM-DD
// - teaser: kurzer Anreißer (einzeilig)
// - content: HTML im Template-String (Backticks)

window.BLOG_POSTS = [
  {
    id: "vierte-wand",
    title: "<em>Fourth Wall Breaking</em> in der Musik",
    date: "2025-09-24",
    teaser: "Historischer Abriss und Gedanken zu einer wenig verwendeten kompositorischen Technik. Von Haydn bis Eberharter",
    content: `
content: `
  <h2>Fourth Wall Breaking</h2>

  <p>Wenn Oliver Hardy in den alten <em>Laurel &amp; Hardy</em>-Filmen direkt in die Kamera blickt, 
  nachdem Stan mal wieder ein Chaos angerichtet hat, geschieht ein kleiner, aber entscheidender Bruch: 
  Die Figur wendet sich nicht mehr an die Menschen in ihrer Realität, sondern an uns, das Publikum. 
  Dieser kurze Moment zerstört die Illusion der geschlossenen Filmwelt – ein typisches Beispiel für 
  das sogenannte <strong>„Fourth Wall Breaking“</strong>. Solche Momente irritieren, weil sie das 
  Verhältnis zwischen Darstellung und Rezeption selbst plötzlich thematisieren.</p>

  <p>Dieses Verfahren ist in den Künsten unterschiedlich stark verbreitet: in Film und Fernsehen, 
  natürlich im Theater, aber auch in Videospielen und mit Abstrichen in Büchern. Warum das 
  „Fourth Wall Breaking“ auch in der Komposition ein herausragender Effekt ist, möchte ich hier 
  diskutieren.</p>

  <h3>Definition</h3>
  <p>Zwei Dinge müssen innerhalb eines Kunstwerkes eintreten, um vom Brechen der vierten Wand 
  sprechen zu können:</p>
  <ul>
    <li>a) eine oder mehrere Handlungsfiguren müssen sich zeitlich entwickeln</li>
    <li>b) die Konsumentin darf die Interaktion nicht erwarten</li>
  </ul>

  <p><strong>Prämisse a</strong>: Damit ist nur gemeint, dass ein expliziter Handlungsstrang 
  vorliegen muss, z. B. ein Film oder Theaterstück, das sich ohne Zutun des Publikums weiterbewegt, 
  oder ein Buch, dessen Handlung nur beim Beiseitelegen stoppt. Bildende Kunst kann höchstens 
  Illusionen eines solchen Bruchs geben – z. B. durch gemalten Blickkontakt (Mona Lisa) – ist aber 
  statisch und kann die vierte Wand nicht wirklich brechen.</p>

  <p><strong>Prämisse b</strong>: Das Kunstwerk muss so konzipiert sein, dass die Zuschauer sich 
  nicht eingebunden fühlen. Eine Kabarettistin kann die vierte Wand nicht brechen, weil Interaktion 
  erwartet wird. Ebenso ist ein Bruch nicht gegeben, wenn er logisch erklärbar bleibt (z. B. eine 
  Musikerin kündigt eine Pause an oder holt scheinbar vergessene Requisiten).</p>

  <h3>Herkunft und Theater</h3>
  <p>Der Begriff der vierten Wand kommt ursprünglich aus dem Theater. Die Bühne ist eine Box mit 
  drei Wänden, und die unsichtbare vierte Wand trennt Bühne und Zuschauerraum. Dementsprechend ist 
  die musikalische Aufführung sogar besonders geeignet, diesen Effekt zu erzeugen – mächtiger noch 
  als im Film.</p>

  <p>Ein extremes Beispiel außerhalb der Musik ist Marina Abramović’ Performance <em>Rhythm 0</em> 
  (1974). Sie stellte sich sechs Stunden passiv ins Zentrum eines Raumes, mit 72 Objekten von Blumen 
  bis zu einer geladenen Pistole, die das Publikum frei verwenden durfte. Von vorsichtigen Handlungen 
  eskalierte die Situation bis hin zur Gewalt. Als Abramović nach sechs Stunden aufstand und die 
  vierte Wand brach, zog sich das Publikum sofort zurück. Dieses Beispiel verdeutlicht, wie stark 
  Künstlerinnen auf der Bühne ihre Menschlichkeit aufgeben.</p>

  <h3>Historische Beispiele in der Musik</h3>
  <p>Ein Paradebeispiel ist Haydns <em>Abschiedssinfonie</em> (Nr. 45, 1772), in der die Musiker 
  während des letzten Satzes nacheinander den Saal verlassen, bis nur noch ein Duett erklingt. 
  Ursprünglich als Protest gedacht, ist dies einer der ersten musikalischen „Fourth Wall Breaks“ – 
  subtil und elegant.</p>

  <p>In der Sinfonie Nr. 60 <em>Il distratto</em> (1774) stimmen die Geigen mitten im letzten Satz 
  plötzlich ihre G-Saite nach. Ein scherzhafter Bruch, bei dem das Publikum die Musiker kurz wieder 
  als Menschen wahrnimmt.</p>

  <p>Weitere Beispiele: Haydns „Paukenschlag“ (Nr. 94) und „Paukenwirbel“ (Nr. 103), sowie Mozarts 
  <em>Musikalischer Spaß</em> (KV 522), in dem absichtlich „schlecht“ komponiert wird.</p>

  <p>In der Romantik sind solche Effekte selten, Ausnahmen sind Johann Strauss’ 
  <em>Perpetuum mobile</em> (1862), das erst endet, wenn eine Musikerin oder der Dirigent es 
  verbal abbricht.</p>

  <h3>20. Jahrhundert und Zeitgenössisches</h3>
  <p>In der Moderne gibt es zahlreiche Werke, die bewusst Erwartungen durchbrechen: Mauricio Kagel, 
  Dieter Schnebel, Karlheinz Stockhausen, Mark Applebaum oder Simon Steen-Andersen experimentierten 
  mit direkter Publikumsansprache. Dennoch ist im zeitgenössischen Konzert die Überraschung schwerer 
  zu erreichen, da das Publikum Ungewöhnliches fast schon erwartet.</p>

  <p>Ein Meisterbeispiel ist Luciano Berios <em>Sequenza V</em> (1966) für Posaune: Die Solistin 
  stoppt, blickt ins Publikum und fragt „Why?“. Ein sorgfältig platzierter Bruch, der zum Höhepunkt 
  des Stückes wird.</p>

  <p>Auch György Ligetis <em>Aventures</em> (1962) oder Peter Maxwell Davies’ 
  <em>Eight Songs for a Mad King</em> (1969) setzen Brüche ein, die das Publikum verunsichern, ob 
  Geschehenes gespielt oder „echt“ ist.</p>

  <h3>Eigene Komposition</h3>
  <p>In meinem Stück <em>Fuchs, du hast die Gans gestohlen</em> (Streichquartett und Fixed Media) 
  habe ich ebenfalls einen kleinen Bruch eingebaut: Das Quartett reagiert im Mittelteil kurz auf den 
  „Wald“ (eine Tonspur mit Naturgeräuschen), als die erste Geige einen Vogelruf imitiert. Das Ensemble 
  blickt irritiert – und das Stück fällt zurück in die Klangflächen. Ein kleiner Bruch, der dennoch 
  entscheidend für die Dramaturgie ist.</p>

  <h3>Schluss</h3>
  <p>Das „Fourth Wall Breaking“ ist vielseitig einsetzbar. In der Musik mag es weniger Tradition 
  haben als im Theater oder Film, bietet aber großes Potenzial für starke Effekte – zwischen 
  subtiler Irritation und existenzieller Verunsicherung. Wichtig ist, es mit Verantwortung 
  einzusetzen: unangenehm darf es sein, traumatisierend nicht.</p>
`

    `
  },
  {
    id: "klavierschmiede-prozess",
    title: "Ein Kompositionsprozess im Überblick",
    date: "2025-09-26",
    teaser: "Selbstanalyse von Werk und Arbeitsprozess am Beispiel \"Klavierschmiede\": Vom Auftrag zur Aufführung",
    content: `
      <p>Dein zweiter Beitrag …</p>
    `
  },
  {
    id: "die-puppe",
    title: "die Puppe",
    date: "2022-12-11",
    teaser: "Neben Musik schreibe ich auch gelegentlich Texte. Diese Kurzgeschichte wurde vom <em>Mölltaler Kurzgeschichten Festival 2023</em> prämiert und veröffentlicht",
    content: `
  <p> Das <em>Mölltaler Kurzgeschichten Festival</em> schreibt jedes Jahr einen Wettbewerb aus, bei dem Kurzgeschichten mit Bezug zu einem bestimmten Wort eingereicht werden können. 2023 war dieses Wort „Trotzdem“.</p>
    <h2>DIE PUPPE</h2>
    <p><em>Von Matthias Eberharter</em></p>

    <p>Nichts hatte sich geändert: Der Druck auf Josef Klaus, das Kanzleramt zu räumen, wuchs von Tag zu Tag; die Sport-Journalisten debattierten weiterhin, ob der Ball vor oder hinter der Linie des Wembley-Tors aufgeschlagen war, und die große Kulturrevolution nahm ihren Lauf. Bianca wechselte das Programm. Schon wieder eine Dokumentation über die Nationalsozialisten. KZ Mauthausen, Auffanglager für politische Häftlinge, Kriegsgefangene und Juden. Nichts, wonach ihr nach einem anstrengenden Tag im Büro der Sinn stand. Sie sah ins Programmheft, suchte nach etwas, wobei sie sich hätte entspannen können, aber vergeblich. „Dann eben nicht.“ Resigniert erhob sie sich von der Couch, um das Fernsehgerät abzuschalten.</p>

    <p>Gerade als sie die Aus-Taste drücken wollte, erschien auf dem Bildschirm ein kleines Mädchen, das eine Puppe im Arm hielt und neugierig auf die Kamera zuging. Die Puppe trug ein helles Rüschenkleid und hatte dicke, dunkle Zöpfe. So etwas Teures besaßen damals nur Kinder gutsituierter Leute, und Bianca wunderte sich, dass man dem Mädchen im KZ die Puppe gelassen hatte. Sie vergaß, dass sie das Gerät ausschalten hatte wollen, denn etwas an der Szene verursachte ihr Unbehagen. Gebannt schaute sie weiter zu.</p>

    <p>Das Mädchen ging noch näher in Richtung der Kamera, zuckte aber plötzlich zurück, als sei es vor etwas erschrocken, und ließ die Puppe fallen. Ein junger Häftling kam herbei und hob sie auf. Als er sie dem Mädchen reichen wollte, trat ein Mann in Uniform ins Bild, nahm sie ihm mit einem Ruck ab und ging damit fort. Das Mädchen brach in Tränen aus. Eine Frau eilte herbei und nahm die Kleine auf den Arm, um sie zu trösten. Auf der linken Seite ihrer Wolljacke trug sie einen aufgenähten Stern.</p>

    <p>Die Szene hatte nicht mehr als zehn Sekunden gedauert, doch das hatte Bianca genügt, um jedes Detail aufzunehmen. Wie konnte, was sie erkannt zu haben glaubte, wirklich sein?</p>

    <p>Sie ließ die Dokumentation weiterlaufen, obwohl sie nicht damit rechnen konnte, die Puppe noch einmal zu Gesicht zu bekommen. Was sie gesehen hatte, war lediglich eine Momentaufnahme gewesen, die unter den Schneidetisch hätte fallen können, ohne dem Film zu schaden. Als er zu Ende war, ging sie wie in Trance ins Schlafzimmer. Auf der Tagesdecke des Messingbetts saß eine Puppe in einem schneeweißen Rüschenkleid. Bianca nahm sie in die Hand und musterte sie, den Kopf nach links und rechts neigend, Zentimeter für Zentimeter. Sie hatte die gleiche Größe und die gleichen dicken, dunklen Zöpfe wie die Puppe des kleinen Mädchens in der Dokumentation, und ihr Kleid hatte die gleichen Puffärmel und Spitzensäume.</p>

    <p>In Biancas Kopf begann es zu arbeiten. Moran, ihr Vater, hatte ihr die Puppe zu ihrem fünften Geburtstag mitgebracht, nicht auf den Tag genau, sondern am Samstag danach, denn er kam nur am den Wochenenden nach Hause. Sie hatte nie verstanden, was Moran beruflich tat und weshalb er werktags woanders übernachtete. Er habe mit Pferden zu tun, antwortete er, wenn er danach gefragt wurde, sprach darüber aber nicht mehr, als ihm nötig dünkte.</p>

    <p>Damals, 1943, hatte die Familie nicht weit entfernt vom KZ Mauthausen, in Oberösterreich, gewohnt. Aber weder Moran noch Dolores, Biancas Mutter, hatten jemals den Namen des Lagers erwähnt. Sie war fünfundzwanzig, als sie zum ersten Mal davon hörte und die Bilder aus anderen KZs sah, in denen Bulldozer Berge dürrer Leichen in Massengräber schoben.</p>

    <p>Moran hatte die Puppe nicht in Geschenkpapier eingewickelt, sondern sie seiner Tochter einfach in die Arme gedrückt. „Das ist jetzt dein Kind, auf das du gut aufpassen musst.“</p>

    <p>„Aber sie ist dreckig“, hatte Bianca erwidert.</p>

    <p>„Sie hat unterwegs ein wenig gelitten, aber Mama richtet sie wieder her, und dann ist sie die schönste Puppe auf der ganzen Welt.“ Er hatte Bianca mit dem Zeigefinger auf die Nasenspitze gestupst. „Sie braucht einen Namen. Den kannst nur du ihr geben.“</p>

    <p>Bianca hatte kurz überlegt: „Freya.“</p>

    <p>Moran hatte genickt und gelächelt: „Das klingt hübsch.“</p>

    <p>Dolores hatte das Kleid in Sil getaucht, bis es wieder in fleckfreiem Weiß erstrahlte, ihre verfilzten Haare gelöst und die Zöpfe ordentlich geflochten. Tatsächlich konnte keines der Mädchen in der Nachbarschaft eine Puppe vorweisen, die sich mit Freya nach dieser Runderneuerung hätte messen können.</p>

    <p>Bianca setzte die Puppe auf die Tagesdecke zurück, ging ins Wohnzimmer und wählte die Nummer ihrer Eltern. Dolores nahm ab. Sonntag? Ja, sie freue sich riesig auf ihren Besuch.</p>

    <p>Als sie ihre Tochter in der Tür stehen sah, Freya im Arm, verzog sie belustigt den Mund: „Bist du dafür nicht ein bisschen zu alt?“ Doch ihr Lächeln wich, als sie den Ernst in Biancas Augen sah, deren Braun sich in Anthrazit verwandelt hatte. „Ist etwas passiert?“</p>

    <p>Bianca betrat das Haus. „Wo ist Papa?“</p>

    <p>Er saß in seinem Büro, seine Brille mit den dicken Gläsern auf der Nase, und trug Zahlen in eine Kladde ein. Heimarbeit für sein Gestüt, das er verwaltete.</p>

    <p>„Wen bringst du denn heute mit, Kind?“</p>

    <p>„Freya. Du kennst doch noch Freya?“</p>

    <p>Moran nickte und legte seinen Kugelschreiber beiseite. „Ich habe mich immer gewundert, dass du sie so lange aufgehoben hast.“</p>

    <p>„Sie war mir lieb und teuer. Ein Geschenk von dir.“</p>

    <p>„Zu deinem vierten Geburtstag.“</p>

    <p>„Dem fünften. 1943."</p>

    <p>Moran hob die Augenbrauen. „Erstaunlich, dein Gedächtnis.“</p>

    <p>„Es wurde gerade aufgefrischt.“ Sie trat näher an ihren Vater heran und hielt ihm Freya vor das Gesicht. „Woher stammt die Puppe? Sie war nicht neu, als du mit ihr nach Hause kamst. Wem hat sie gehört?“</p>

    <p>Moran war irritiert. „Das … das hast du nie gefragt. Was spielt das für eine Rolle?“</p>

    <p>Dolores hatte von der Bürotür aus zugehört und trat jetzt dazwischen. „Was soll das, Bianca? Wie redest du mit deinem Vater?“</p>

    <p>Bianca ignorierte sie. Sie ließ ihren Vater nicht aus den Augen. „1943 warst du noch nicht beim Pferdeverkauf. Du warst im KZ Mauthausen.“</p>

    <p>„Mauthausen?“</p>

    <p>Bianca ließ sich nicht beeindrucken. „Was hast du dort gemacht?“</p>

    <p>Moran fuhr mit einer Hand unter den Hemdkragen und rieb sich den Nacken. „Dort brauchten sie auch Pferde. Ich war Verbindungsmann.“</p>

    <p>„Blödsinn! Bei der Armee brauchten sie Pferde, aber nicht in Mauthausen, um Menschen, die sich kaum auf den Beinen halten konnten, zum Appell antreten zu lassen.“</p>

    <p>Er sprang von seinem Stuhl auf. „Was willst du von mir? Nimmst du mich ins Kreuzverhör? Bist du auch so ein satter Wirtschaftswunder-Trittbrettfahrer, der keine anderen Sorgen kennt, als unserer Generation Rechnungen zur präsentieren für einen Scheiß-Handel, den wir uns nicht ausgesucht hatten?“ Er fuchtelte Bianca mit dem Zeigefinger vor der Nase herum. „Nicht mit mir, Mädel! Wir haben für diese Scheiße bezahlt. Nicht alle, aber die meisten. Zur Front habe ich mich gemeldet, Ende 1944, um nicht mehr im Lager Dienst tun zu müssen. Obwohl ich bis dahin wegen meiner Kurzsichtigkeit nicht genommen wurde. Aber zuletzt brauchten sie jeden … jeden!“ Erschöpft ließ er sich auf seinen Stuhl nieder. „Ich hätte auch draufgehen können. Du hast ja keine Ahnung, wie es damals war.“</p>

    <p>Einen Moment lang war Bianca doch beeindruckt. Sie konnte sich durchaus vorstellen, wie es damals war und dass man sich mit Gegebenheiten „arrangierte“, die man selbst unter Einsatz seines Lebens nicht hätte ändern können.</p>

    <p>Aber ihr Fall war anders.</p>

    <p>„Papa, da war ein kleines Mädchen, ungefähr so alt wie ich damals. In Mauthausen. In einem grauen Mantel. Mit einer Puppe im Arm. So eine wie Freya, mit weißem Kleid und dunklen Zöpfen. Das Mädchen ließ die Puppe fallen, und das Kleid wurde schmutzig. Als ein Mitgefangener ihr die Puppe aufgehoben hatte, riss ein Mann in Uniform sie ihm weg. Dieser Mann nahm die Puppe mit nach Hause und schenkte sie seiner Tochter zum fünften Geburtstag.“</p>

    <p>„Woher weißt du das?“ Morans Stimme klang heiser. „Das … das ist ja gespenstisch …“</p>

    <p>„Warum du, Papa? Warum hast du die Puppe genommen?“</p>

    <p>Er zuckte mit den Schultern hin und her, als seien sie auf Berg- und Talfahrt. Dabei zog er eine Grimasse. „Wenn ich sie nicht genommen hätte, dann ein anderer.“</p>

    <p>„Die übliche Ausrede.“</p>

    <p>„Nicht ganz. Niemand hatte Interesse an Kinderspielzeug. Der Kommandant hatte keine Familie. Und wir anderen … Wir waren noch jung …“</p>

    <p>„Deshalb hatten sie der Kleinen die Puppe gelassen. Außer dir … denn du hattest Familie. Sie hatten dem Mädchen die Puppe gelassen, aber du hast sie genommen!“</p>

    <p>Bianca legte Freya in Morans Schoß. „Finde das Mädchen und gib ihm die Puppe zurück!“</p>

    <p>Er heulte auf. „Wie soll ich das machen? Nach so langer Zeit. Vielleicht lebt dieses Mädchen nicht mehr.“</p>

    <p>„Finde es raus!“</p>

    <p>„Nach all den Jahren? Bist du verrückt?“</p>

    <p>Bianca schwieg.</p>

    <p>„Ich bin doch trotzdem dein Vater!“</p>

    <p>Sie sah ihn so eisig an, wie ihr möglich war, um ihre Tränen zurückzuhalten: „Trotzdem ist nie ein gutes Wort. Es lässt uns Dinge vergessen.“</p>
    `
  }
];
