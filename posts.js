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

  <p>Wenn Oliver Hardy in den alten Laurel &amp; Hardy-Filmen direkt in die Kamera blickt, nachdem Stan mal wieder ein Chaos angerichtet hat, geschieht ein kleiner, aber entscheidender Bruch: Die Figur wendet sich nicht mehr an die Menschen in ihrer Realität, sondern an uns, das Publikum. Dieser kurze Moment zerstört die Illusion der geschlossenen Filmwelt – ein typisches Beispiel für das sogenannte „Fourth Wall Breaking“. Solche Momente irritieren, weil sie das Verhältnis zwischen Darstellung und Rezeption selbst plötzlich thematisieren. Dieses Verfahren ist in den Künsten unterschiedlich stark verbreitet. In Film und Fernsehen, sowie natürlich dem Theater, aber auch in Videospielen und mit Abstrichen in Büchern, wird dieser Trick für einen ganz besonderen Effekt genutzt. Warum das „Fourth Wall Breaking“ auch in der Komposition ein herausragender Effekt ist, möchte ich hier diskutieren.</p>

  <p>Zuerst sei das Brechen der vierten Wand, zumindest in meinem Verständnis, definiert. Zwei Dinge müssen innerhalb eines Kunstwerks eintreten, um davon sprechen zu können:<br>
  a) eine oder mehrere Handlungsfiguren müssen sich zeitlich entwickeln<br>
  b) die Konsumentin darf die Interaktion nicht erwarten</p>

  <p>Die Prämisse a ist komplizierter formuliert, als sie ist. Damit ist nur gemeint, dass ein expliziter Handlungsstrang vorliegen muss. Zum Beispiel ein Film oder ein Theaterstück, das sich ohne das Zutun des Publikums weiterbewegt, oder auch ein Buch, dessen Handlung nur immer wieder stoppt, wenn die Leserin das Buch beiseitelegt. Gegenbeispiele finden sich vor allem in der bildenden Kunst. Gemälde, Architekturen, Skulpturen können höchstens eine Illusion, ein Gefühl eines ähnlichen Bruchs geben, zum Beispiel durch versteckte Lautsprecher, Spiegel oder schlicht einen gemalten Blickkontakt. Dabei entstehen auch sicherlich eindrucksvolle Ergebnisse – mir fällt Der verwundete Engel von Hugo Simberg ein, oder die Mona Lisa von Leonardo Da Vinci –, aber der Effekt ist nicht vergleichbar, weil das Bild statisch ist und sich dementsprechend nicht wirklich ans Publikum wenden kann. Wenn man so will, kann bildende Kunst die vierte Wand nicht brechen, höchstens von vornherein weglassen.</p>

  <p>Prämisse b wiederum klingt logischer, als sie im Endeffekt zu verstehen ist. Ganz grundlegend muss das Kunstwerk oder die Aufführung so konzipiert sein, dass die Zuschauer sich als nicht eingebunden betrachten. Eine Kabarettistin kann die vierte Wand nicht brechen, weil mit einer Interaktion gerechnet wird. Andererseits darf das Ansprechen der Zuschauer auch nicht für ebendiese direkt logisch erklärbar sein. Wenn ein Musiker sich plötzlich während der letzten Sekunden eines Stückes erhebt und die folgende Pause ankündigt, dann mag das im ersten Moment überraschend sein, aber die organisatorische Notwendigkeit löst die Spannung augenblicklich auf. Auch wenn ein Theaterstück kurz unterbrochen wird, weil eine der Künstlerinnen den falschen Hut trägt und noch unter leisem Gelächter die korrekte Kopfbedeckung holen muss, kann das schwerlich als Bruch der vierten Wand benannt werden. Selbst wenn dieses „Hut-Vergessen“ so in das Theaterstück hineingeschrieben ist, also alles nach Plan verläuft und dementsprechend das Publikum aus welchen Gründen auch immer nur dazu verleitet wurde, zu glauben, es sei ein Fehler passiert, liegt kein wirklicher Bruch vor. Die Zuschauerin (auch wenn sie sich irrt) ist der Überzeugung, dass die künstlerische Darbietung unterbrochen wird. Man merkt: Es ist ein feiner Grat, mit dem das „Fourth Wall Breaking“ spielt.</p>

  <p>Der Begriff der vierten Wand kommt ursprünglich aus dem Theater. Die Bühne ist eine Box mit Wänden links, rechts und im Rücken der Spieler, und die unsichtbare vierte Wand trennt Bühne von Zuschauerraum. In der Theaterwissenschaft wird dies u. a. im Anschluss an Bertolt Brecht als „Verfremdungseffekt“ bezeichnet: ein bewusster Bruch der Illusion, der die Zuschauer zum Nachdenken zwingt. Erika Fischer-Lichte beschreibt in ihrer Ästhetik des Performativen (2004), wie Aufführungen durch Selbstreferenzialität die Grenze zwischen Kunst und Alltag überschreiten können. Und Erving Goffman hat in seiner Rollentheorie (Wir alle spielen Theater, 1956) gezeigt, dass das „Heraustreten aus der Rolle“ nicht nur im Alltag, sondern auch auf der Bühne soziale Distanz und Nähe neu verhandelt. Überträgt man diese Konzepte in die Musik, ist klar: Die Aufführungssituation eignet sich besonders gut für solche Brüche – vielleicht sogar stärker als Film oder Literatur. Denn wenn eine reale Musikerin plötzlich aus der anonymen Klangproduktion heraustritt und sich an die Zuschauer wendet, wird die ästhetische Distanz abrupt aufgelöst.</p>

  <p>Diesen Wechsel von Mitmensch zu Künstlerin hat Marina Abramović 1974 in Neapel erschreckend veranschaulicht und zugleich die potenzielle Grausamkeit des Menschen offengelegt. Die Künstlerin stellte sich sechs Stunden lang passiv in die Mitte eines Raumes. Auf einem Tisch daneben gab es 72 Objekte, von harmlosen Dingen (Rosen, Honig) bis zu Waffen (Messer, geladene Pistole), und das Publikum durfte mit ihr machen, was es wollte. Von freundlichen, vorsichtigen Handlungen eskalierte die Performance zu Verletzungen, Misshandlung und Drohung mit der Schusswaffe. Als sich Abramović nach Ablauf der vollen sechs Stunden erhob und die vierte Wand brach, zog sich das anwesende Publikum sofort zurück, einige verließen fluchtartig das Gebäude. Dieses Ereignis ist vor allem wegen der Grausamkeit bekannt geworden, es macht aber auch den Aspekt der entmenschlichten Künstlerinnen auf der Bühne sehr deutlich.</p>

  <p>So viel zum Kontext: In der Musik blickt das Brechen der vierten Wand auf wesentlich weniger Tradition zurück, ist aber wie so viele extravagante Kompositionstechniken ein wenig, aber doch regelmäßig gesehenes Phänomen. Um hier die Geschichte ein wenig aufzurollen, kann man – wie so oft bei zeitgenössischen Techniken – viel früher anfangen, in diesem Fall beim wohl extravagantesten Komponisten seiner Zeit: Joseph Haydn.<br>
  In seiner berühmten Sinfonie Nr. 45 in fis-Moll „Abschiedssinfonie“ (1772) verlassen die Musiker während des letzten Satzes langsam nacheinander den Konzertsaal. In der Handschrift vermerkt Haydn die Stimmen mit der Anmerkung „nichts mehr“, und so verschwinden langsam Bläser und Streicher aus der Partitur, bis zum Schluss nur noch ein einsames Duett zweier Geigen, bei der Premiere gespielt von Joseph Haydn selbst und seinem Konzertmeister Luigi Tomasini, die Sinfonie zu Ende bringt. Damals ein Ausdruck von Protest, dass der Fürst Esterházy seinem Hoforchester die Heimreise im Sommer 1772 noch länger als üblich verwehrte. Die Musiker vermissten ihre Familien, und Haydn bewirkte mit diesem Stück die Bewilligung des Urlaubs. Das ist für mich ein absolutes Paradebeispiel, auch wenn hier natürlich nicht das Publikum direkt angesprochen wird. Aber Haydn komponiert die Aufführungssituation als Teil des Werkes mit, so hat er auch darauf geachtet, dass die Musiker, die in der damaligen Sitzordnung weiter hinten saßen, zuerst gingen, damit niemand unelegant über ihre Nachbarn klettern musste. Der Effekt muss beeindruckend gewesen sein: Der Raum muss sich leer angefühlt haben, und so hat Haydn wohl eine der ersten musikalischen „Fourth Wall Breaks“ komponiert – treu in seinem Stil: elegant und subtil.</p>

  <p>Ein eher scherzhafteres Beispiel in Haydns Werk ist die Sinfonie Nr. 60 in C-Dur „Il distratto“ (1774). Hier stimmen die Geigen mitten im letzten Satz plötzlich ihre G-Saite nach, als hätten sie es vor dem Stück vergessen. Was natürlich nicht sein kann, denn die Sinfonie läuft zu diesem Zeitpunkt schon 20 Minuten. Es ist in meiner Interpretation ein humorvolles Vorbereiten für den Höhepunkt der Sinfonie – eine Art musikalisches Fingerknacken vor dem schwierigsten und schnellsten Teil. Und genau das ist der Grund, warum hier kurz die Wand zwischen Publikum und zumindest Geigern fällt: Wenn sie ihre Instrumente stimmen und die charakteristischen offenen Quinten erklingen, dann erkennt die Zuschauerin sie kurz wieder als Personen, bevor sie zu Arbeitern in der Klangmaschinerie werden. Auch hier ist für Komponistinnen eine wichtige Lektion versteckt. Denn Haydn verwendet für die Geigen zu Beginn dieses Satzes die G-Saite nicht, so können die Instrumentalistinnen ihr Instrument zwischen Satz V und VI unauffällig verstimmen und dann im gewünschten Moment effektvoll korrigieren.</p>

  <p>Weitere Beispiele in der Klassik sind die Haydn-Sinfonien Nr. 94 „mit dem Paukenschlag“ (1791) und Nr. 103 „mit dem Paukenwirbel“ (1795). Außerdem könnte man den „Musikalischen Spaß“ KV 522 (1787) von Wolfgang Amadeus Mozart erwähnen. Hier ist die Musik absichtlich so schlecht komponiert (grotesker Kontrapunkt, Instrumente in falschen Tonarten …), dass dem Publikum klar wird: Hier muss etwas schief laufen. Allerdings ist auch diese Komposition, wenn auch ein Sonderfall, von vorne bis hinten durchkomponiert, ohne einen besonderen „Bruch“.</p>

  <p>In der Romantik ist von solchen Momenten im Konzertbetrieb wenig zu finden, vermutlich weil die Professionalisierung und die kollektive Ernsthaftigkeit von Ausführenden und Zuhörern so weit fortgeschritten ist, dass komponierte „Fourth Wall Breaks“ weder bei Verlegern, noch bei Dirigenten, geschweige denn beim Publikum gut angekommen wären. Erwähnenswert ist vielleicht das 1862 komponierte „Perpetuum mobile“ von Johann Strauss Sohn. Dieses Stück ist eine dauerhafte Wiederholung von sich selbst, bis die Dirigentin oder eine Musikerin mit den Worten „und so weiter, und so fort“ oder „jetzt ist aber Schluss“ die Musik irgendwann abbricht.</p>

  <p>In der zeitgenössischen Literatur ist die Beispielsuche aus dem gegenteiligen Grund kompliziert. Die Interaktion mit dem Publikum oder ein Bruch mit dem erwarteten Konzertgeschehen ist in gewisser Weise bei einem zeitgenössischen Konzert fast erwartet. Es gibt genügend Stücke, in denen Musiker nicht in ihrer klassischen Aufgabe bleiben (Mauricio Kagel: Con voce, Conductus; Dieter Schnebel: Maulwerke; Karlheinz Stockhausen: Originale, Musik im Bauch; Mark Applebaum: Aphasia; Simon Steen-Andersen: Black Box Music usw.), aber in all diesen Fällen akzeptiert das Publikum schnell, dass dies hier einfach eine andersartige künstlerische Aufführung ist. Im zeitgenössischen Kontext muss die vierte Wand viel sorgfältiger aufgebaut werden, weil die Zuhörer mit vielen Dingen rechnen und von ungewöhnlichen Aktivitäten kaum überrascht sein werden.</p>

  <p>Werke, die diesen Bruch sehr effektvoll umsetzen, gibt es dennoch einige. Luciano Berio hat in seiner Werkreihe Sequenza, bei der er in jedem Stück für ein Instrument eine kurze Miniatur aus allen vorstellbaren Spieltechniken und musikalischen Parametern baut, einen Meilenstein der Musik geschaffen. In der Sequenza V für Posaune (1966) baut er auch einen „Fourth Wall Break“ ein. Die Solistin spielt das Stück im typischen Berio-Stil, sie muss sich sogar auskomponiert immer wieder auf einen Stuhl setzen und wieder erheben. Etwa bei einem Drittel hört sie auf, blickt ins Publikum und fragt: „Why?“. Diese Aktion überschreibt Berio mit der Spielanweisung „bewildered“. Die Interpretation kann vielseitig sein, eindeutig ist aber der sorgfältige Bruch der vierten Wand, dem Berio hier den Höhepunkt seines Stückes zuschreibt.</p>

  <p>Und abschließend zum historischen Kontext möchte ich noch zwei Werke, die ich sehr liebe und die eine ähnliche Idee verfolgen, erwähnen. Sie beginnen als typische zeitgenössische Musikstücke und lösen sich dann in grotesker Weise auf. Die Musiker verzweifeln auf der Bühne, die Aufführungssituation ist zerstört, das Publikum wird angesprochen und so weiter. Absolute Hörempfehlung:<br>
  <em>Aventures</em> (1962) von György Ligeti für Sopran, Alt, Bass und Ensemble beginnt, wie es das Publikum erwartet: Geräusche, zeitgenössische Textur, Phoneme statt Text. Aber dann steigert Ligeti die Theatralik des Stückes. Die Sänger lachen, seufzen, schreien und fangen sogar an, miteinander zu streiten. Den Zuschauern wird das Stück immer unwohler, weil es nicht klar erkennbar ist: Was ist hier komponiert und was nicht so ganz? Das ist für mich das Stück, in dem der Wandel der Aufführungsatmosphäre am besten umgesetzt wurde – hier wird die Wand nicht plötzlich eingerissen, sondern langsam abgetragen.<br>
  <em>Eight Songs for a Mad King</em> (1969) von Peter Maxwell Davies für Bariton und kleines Ensemble ist von Anfang an ein sehr modernistisches Stück, aber dennoch ist jedem im Raum klar: Das ist ein Solist und seine Begleitung. Davies hat in diesem Werk Monologe, die dem wahnsinnigen König George III. zugeschrieben werden, vertont. Und passend dazu „singt“ der Bariton das ganze Stück hindurch erschreckend und wahnsinnig, nur manchmal wird es für kurze Zeit extremer. Er schreit lautstark, er beschimpft das Publikum oder fleht das Ensemble um Hilfe an, sodass man durchaus das Gefühl haben kann, dass Charakter und Mensch auf der Bühne verrückt sind. Und genau das halte ich für das Geniale an diesem Stück. Der Charakter ist wahnsinnig, das ist sehr gut komponiert, und das Publikum weiß das – und dann übertreibt Davies manchmal (absichtlich). Er springt zwischen erschreckender Musik und realem Schrecken hin und her. Die Zuschauer sind sich nie so ganz sicher, ob der Sänger jetzt wieder „normal“ wahnsinnig ist oder sie im nächsten Moment anschreit. Sehr ähnlich zu einer Begegnung mit dem realen King George, würde ich vermuten.</p>

  <p>Man sieht, wie so oft in der Kunst, dass das „Fourth Wall Breaking“ sehr facettenreich und unterschiedlich eingesetzt werden kann, und jede Variante kann gut zu dem jeweiligen Thema oder Kontext der Komposition passen. Ich habe in meinem Stück Fuchs, du hast die Gans gestohlen in der Version für Streichquartett und Fixed Media einen kleinen Bruch der vierten Wand eingebaut. Das Stück ist in drei Ebenen aufgebaut: Es gibt das Streichquartett. Das spielt im Laufe des Stückes vor allem drückende, mikrotonale und obertonreiche Klangflächen und nimmt im Mittelteil eine kurze aktivere Rolle ein. Es gibt die „Erinnerungsebene“: Diese läuft über das Tonband und sind verzerrte, zerschnittene und manipulierte Aufnahmen meiner kleinen Schwester, wie sie auf der Harfe Fuchs, du hast die Gans gestohlen spielt. Im Hintergrund hört man auch Gerede und Gespiele. Und dann gibt es noch den Wald, eine real aufgenommene Tonspur von Windrauschen, Blätterrascheln und Vögelgezwitscher. Das Stück hat keine bestimmte Geschichte, aber ich habe versucht, Narrative einzubauen, Regeln, wie sich diese Ebenen zueinander verhalten. Und die wichtigste Regel ist, dass auf den Wald nicht reagiert wird – weder vom Streichquartett noch von den Erinnerungen. Diese beiden haben viel miteinander zu tun, sind von den Einsätzen her abgestimmt und tauschen auch auf abstrakter Ebene Material aus. Aber im Kontext dieses Stückes ist der Wald allgegenwärtig und darf nicht „gestört“ werden. Der Höhepunkt von Fuchs ist die kurze aktive Phase des Quartetts, in dem es Melodien und Bewegung, sogar Rhythmus gibt, und das scheint gut zu funktionieren, bis die erste Geige genau zur Mitte des Stückes übermütig wird und einen Vogelruf imitiert. Dafür kassiert sie irritierte Blicke ihres Ensembles, und das Stück hält kurz inne. Damit endet der aktive Part, und das Quartett versinkt wieder in den Klangflächen des Anfangs.</p>

  <p>Dieser kurze Bruch ist relevant für die Idee des Stückes, kann aber rein von der Wirkung her leicht übersehen werden. Aber jetzt bin ich durch Zufall auf diese „Technik“ gestoßen und werde sie sicher noch öfter verwenden. Es gibt dabei allerdings ethische Grenzen, die man – oder zumindest ich – nicht übertreten will. Es wäre natürlich sehr leicht, Schrecken auszulösen, indem man plötzlich ohne Vorwarnung Aggression zeigt. Oder noch schlimmer: Das Licht abdreht, Sirenen oder gar den Feueralarm aufheulen lässt. Solche Aktionen können und werden bei größeren Menschenmengen für einige Leute traumatisch sein oder Traumata reaktivieren. Man muss also vorsichtig sein, wie man in den geschützten Zuschauerraum eindringen kann. Das darf ruhig unangenehm sein, aber wenn es – wie es im Film häufig der Fall ist – zum puren komödiantischen Effekt verkommt, dann ist die Kraft des „Fourth Wall Breaking“ definitiv nicht ausgeschöpft worden.</p>
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
