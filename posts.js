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
    date: "2025-09-26",
    teaser: "Historischer Abriss und Gedanken zu einer wenig verwendeten kompositorischen Technik. Von Haydn bis Eberharter",
    content: `
  <h2>Fourth Wall Breaking</h2>

  <p>Wenn Oliver Hardy in den alten <em>Laurel &amp; Hardy</em>-Filmen direkt in die Kamera blickt, nachdem Stan mal wieder ein Chaos angerichtet hat, geschieht ein kleiner, aber entscheidender Bruch: Die Figur wendet sich nicht mehr an die Menschen in ihrer Realität, sondern an uns, das Publikum. Dieser kurze Moment zerstört die Illusion der geschlossenen Filmwelt – ein typisches Beispiel für das sogenannte <strong>„Fourth Wall Breaking“</strong>. Solche Momente irritieren, weil sie das Verhältnis zwischen Darstellung und Rezeption selbst plötzlich thematisieren. Dieses Verfahren ist in den Künsten unterschiedlich stark verbreitet. In Film und Fernsehen, sowie natürlich dem Theater, aber auch in Videospielen und mit Abstrichen in Büchern, wird dieser Trick für einen ganz besonderen Effekt genutzt. Warum das „Fourth Wall Breaking“ auch in der Komposition ein herausragender Effekt ist, möchte ich hier diskutieren.</p>

  <h3>Definition</h3>
  <p>Zuerst sei das Brechen der vierten Wand, zumindest in meinem Verständnis, definiert. Zwei Dinge müssen innerhalb eines Kunstwerks eintreten, um davon sprechen zu können:</p>
  <ul>
    <li>a) eine oder mehrere Handlungsfiguren müssen sich zeitlich entwickeln</li>
    <li>b) die Konsumentin darf die Interaktion nicht erwarten</li>
  </ul>

  <p><strong>Prämisse a</strong> ist komplizierter formuliert, als sie ist. Damit ist nur gemeint, dass ein expliziter Handlungsstrang vorliegen muss. Zum Beispiel ein Film oder ein Theaterstück, das sich ohne das Zutun des Publikums weiterbewegt, oder auch ein Buch, dessen Handlung nur immer wieder stoppt, wenn die Leserin das Buch beiseitelegt. Gegenbeispiele finden sich vor allem in der bildenden Kunst. Gemälde, Architekturen, Skulpturen können höchstens eine Illusion, ein Gefühl eines ähnlichen Bruchs geben, zum Beispiel durch versteckte Lautsprecher, Spiegel oder schlicht einen gemalten Blickkontakt. Dabei entstehen auch sicherlich eindrucksvolle Ergebnisse – mir fällt <em>Der verwundete Engel</em> von Hugo Simberg ein, oder die <em>Mona Lisa</em> von Leonardo da Vinci –, aber der Effekt ist nicht vergleichbar, weil das Bild statisch ist und sich dementsprechend nicht wirklich ans Publikum wenden kann. Wenn man so will, kann bildende Kunst die vierte Wand nicht brechen, höchstens von vornherein weglassen.</p>

  <p><strong>Prämisse b</strong> wiederum klingt logischer, als sie im Endeffekt zu verstehen ist. Ganz grundlegend muss das Kunstwerk oder die Aufführung so konzipiert sein, dass die Zuschauer sich als nicht eingebunden betrachten. Eine Kabarettistin kann die vierte Wand nicht brechen, weil mit einer Interaktion gerechnet wird. Andererseits darf das Ansprechen der Zuschauer auch nicht für ebendiese direkt logisch erklärbar sein. Wenn ein Musiker sich plötzlich während der letzten Sekunden eines Stückes erhebt und die folgende Pause ankündigt, dann mag das im ersten Moment überraschend sein, aber die organisatorische Notwendigkeit löst die Spannung augenblicklich auf. Auch wenn ein Theaterstück kurz unterbrochen wird, weil eine der Künstlerinnen den falschen Hut trägt und noch unter leisem Gelächter die korrekte Kopfbedeckung holen muss, kann das schwerlich als Bruch der vierten Wand benannt werden. Selbst wenn dieses „Hut-Vergessen“ so in das Theaterstück hineingeschrieben ist, also alles nach Plan verläuft und dementsprechend das Publikum aus welchen Gründen auch immer nur dazu verleitet wurde, zu glauben, es sei ein Fehler passiert, liegt kein wirklicher Bruch vor. Die Zuschauerin (auch wenn sie sich irrt) ist der Überzeugung, dass die künstlerische Darbietung unterbrochen wird. Man merkt: Es ist ein feiner Grat, mit dem das „Fourth Wall Breaking“ spielt.</p>

  <h3>Herkunft &amp; Theorie</h3>
  <p>Der Begriff der vierten Wand kommt ursprünglich aus dem Theater. Die Bühne ist eine Box mit Wänden links, rechts und im Rücken der Spieler, und die unsichtbare vierte Wand trennt Bühne von Zuschauerraum. In der Theaterwissenschaft wird dies u. a. im Anschluss an <strong>Bertolt Brecht</strong> als „Verfremdungseffekt“ bezeichnet: ein bewusster Bruch der Illusion, der die Zuschauer zum Nachdenken zwingt. <strong>Erika Fischer-Lichte</strong> beschreibt in ihrer <em>Ästhetik des Performativen</em> (2004), wie Aufführungen durch Selbstreferenzialität die Grenze zwischen Kunst und Alltag überschreiten können. Und <strong>Erving Goffman</strong> hat in seiner Rollentheorie (<em>Wir alle spielen Theater</em>, 1956) gezeigt, dass das „Heraustreten aus der Rolle“ nicht nur im Alltag, sondern auch auf der Bühne soziale Distanz und Nähe neu verhandelt. Überträgt man diese Konzepte in die Musik, ist klar: Die Aufführungssituation eignet sich besonders gut für solche Brüche – vielleicht sogar stärker als Film oder Literatur. Denn wenn eine reale Musikerin plötzlich aus der anonymen Klangproduktion heraustritt und sich an die Zuschauer wendet, wird die ästhetische Distanz abrupt aufgelöst.</p>

  <h3>Marina Abramović: <em>Rhythm 0</em> (1974)</h3>
  <p>Diesen Wechsel von Mitmensch zu Künstlerin hat Marina Abramović 1974 in Neapel erschreckend veranschaulicht und zugleich die potenzielle Grausamkeit des Menschen offengelegt. Die Künstlerin stellte sich sechs Stunden lang passiv in die Mitte eines Raumes. Auf einem Tisch daneben gab es 72 Objekte, von harmlosen Dingen (Rosen, Honig) bis zu Waffen (Messer, geladene Pistole), und das Publikum durfte mit ihr machen, was es wollte. Von freundlichen, vorsichtigen Handlungen eskalierte die Performance zu Verletzungen, Misshandlung und Drohung mit der Schusswaffe. Als sich Abramović nach Ablauf der vollen sechs Stunden erhob und die vierte Wand brach, zog sich das anwesende Publikum sofort zurück, einige verließen fluchtartig das Gebäude. Dieses Ereignis ist vor allem wegen der Grausamkeit bekannt geworden, es macht aber auch den Aspekt der entmenschlichten Künstlerinnen auf der Bühne sehr deutlich.</p>

  <h3>Historische Beispiele in der Musik</h3>
  <p>So viel zum Kontext: In der Musik blickt das Brechen der vierten Wand auf wesentlich weniger Tradition zurück, ist aber – wie so viele extravagante Kompositionstechniken – ein wenig, aber doch regelmäßig gesehenes Phänomen. Um hier die Geschichte ein wenig aufzurollen, kann man – wie so oft bei zeitgenössischen Techniken – viel früher anfangen, in diesem Fall beim wohl extravagantesten Komponisten seiner Zeit: <strong>Joseph Haydn</strong>.</p>

  <p>In seiner berühmten <em>Sinfonie Nr. 45</em> in fis-Moll „Abschiedssinfonie“ (1772) verlassen die Musiker während des letzten Satzes langsam nacheinander den Konzertsaal. In der Handschrift vermerkt Haydn die Stimmen mit der Anmerkung „nichts mehr“, und so verschwinden langsam Bläser und Streicher aus der Partitur, bis zum Schluss nur noch ein einsames Duett zweier Geigen – bei der Premiere gespielt von Haydn selbst und seinem Konzertmeister Luigi Tomasini – die Sinfonie zu Ende bringt. Damals ein Ausdruck von Protest, dass der Fürst Esterházy seinem Hoforchester die Heimreise im Sommer 1772 noch länger als üblich verwehrte. Die Musiker vermissten ihre Familien, und Haydn bewirkte mit diesem Stück die Bewilligung des Urlaubs. Das ist für mich ein absolutes Paradebeispiel: Haydn komponiert die Aufführungssituation als Teil des Werkes mit. Der Effekt muss beeindruckend gewesen sein – der Raum muss sich leer angefühlt haben –, und so hat Haydn wohl eine der ersten musikalischen „Fourth Wall Breaks“ komponiert: elegant und subtil.</p>

  <p>Ein eher scherzhafteres Beispiel in Haydns Werk ist die <em>Sinfonie Nr. 60</em> in C-Dur „Il distratto“ (1774). Hier stimmen die Geigen mitten im letzten Satz plötzlich ihre G-Saite nach, als hätten sie es vor dem Stück vergessen. Was nicht sein kann – die Sinfonie läuft zu diesem Zeitpunkt bereits rund 20 Minuten. Für mich ist das ein humorvolles „Fingerknacken“ vor dem Höhepunkt; das Publikum erkennt die Musiker kurz als Menschen, bevor sie wieder in der Klangmaschinerie aufgehen.</p>

  <p>Weitere Beispiele: Haydns „<em>Paukenschlag</em>“ (Nr. 94, 1791) und „<em>Paukenwirbel</em>“ (Nr. 103, 1795) sowie Mozarts <em>Musikalischer Spaß</em> (KV 522, 1787), in dem absichtlich „schlecht“ komponiert wird.</p>

  <h3>19. Jh. &amp; Moderne</h3>
  <p>In der Romantik sind solche Effekte selten; erwähnenswert ist Johann Strauss’ <em>Perpetuum mobile</em> (1862), das erst endet, wenn jemand es verbal abbricht („und so weiter, und so fort“).</p>

  <p>Im 20. Jahrhundert gibt es viele Werke, die Erwartungen bewusst durchbrechen (u. a. Mauricio Kagel, Dieter Schnebel, Karlheinz Stockhausen, Mark Applebaum, Simon Steen-Andersen). Im zeitgenössischen Konzertumfeld ist die Überraschung dennoch schwieriger, weil Ungewöhnliches oft erwartet wird.</p>

  <p>Ein Meisterbeispiel: <strong>Luciano Berios</strong> <em>Sequenza V</em> (1966) für Posaune – die Solistin bricht plötzlich ab, blickt ins Publikum und fragt „Why?“. Ein sorgfältig platzierter Bruch am Höhepunkt des Stücks.</p>

  <p>Ähnlich effektiv sind <strong>György Ligetis</strong> <em>Aventures</em> (1962) oder <strong>Peter Maxwell Davies’</strong> <em>Eight Songs for a Mad King</em> (1969), die die Wahrnehmung destabilisieren: Was ist komponiert, was „passiert gerade“?</p>

  <h3>Eigene Arbeit</h3>
  <p>Ich habe in meinem Stück <em>Fuchs, du hast die Gans gestohlen</em> (Streichquartett &amp; Fixed Media) einen kleinen Bruch eingebaut. Das Stück hat drei Ebenen: das Quartett (mikrotonale, obertonreiche Klangflächen; kurze Aktivphase im Mittelteil), die „Erinnerungsebene“ (Tonband mit manipulierten Harfenaufnahmen meiner Schwester) und den „Wald“ (Field-Recording). Wichtigste Regel: Auf den Wald wird nicht reagiert. Beim Höhepunkt imitiert die erste Geige übermütig einen Vogelruf – irritierte Blicke, kurzes Innehalten, Rückkehr in die Klangflächen. Ein kleiner Bruch mit großer dramaturgischer Wirkung.</p>

  <h3>Schluss</h3>
  <p>„Fourth Wall Breaking“ ist vielseitig: von subtiler Irritation bis existenzieller Verunsicherung. In der Musik bietet es großes Potenzial – sollte aber verantwortungsvoll eingesetzt werden. Unangenehm darf es sein; traumatisierend nicht.</p>
`

  },
  {
    id: "die-puppe",
    title: "die Puppe",
    date: "2022-12-11",
    teaser: "Neben Musik schreibe ich auch gelegentlich Texte. Diese Kurzgeschichte wurde vom <em>Mölltaler Kurzgeschichten Festival 2023</em> prämiert und veröffentlicht",
    content: `
    <p>Das <em>Mölltaler Kurzgeschichten Festival</em> schreibt jedes Jahr einen Wettbewerb aus, bei dem Kurzgeschichten mit Bezug zu einem bestimmten Wort eingereicht werden können. 2023 war dieses Wort „Trotzdem“.</p>
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
