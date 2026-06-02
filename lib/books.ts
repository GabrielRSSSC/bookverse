export type BookCategory =
  | "Romance"
  | "Fantasia"
  | "Terror"
  | "Ficção"
  | "Aventura"

export type CoverIllustration = "prince" | "ship" | "mountains" | "tentacles"

export type BookChapter = {
  title: string
  paragraphs: string[]
}

export type Book = {
  id: string
  title: string
  author: string
  category: BookCategory
  cover: {
    background: string
    text: string
    accent: string
    illustration: CoverIllustration
  }
  description: string
  chapters: BookChapter[]
}

export const categories: BookCategory[] = [
  "Romance",
  "Fantasia",
  "Terror",
  "Ficção",
  "Aventura",
]

const PEQUENO_PRINCIPE: BookChapter[] = [
  {
    title: "Capítulo I",
    paragraphs: [
      'Era uma vez, quando eu tinha seis anos, vi num livro sobre a Floresta Virgem, chamado "Histórias Vividas", uma imagem majestosa. Mostrava uma jiboia a engolir um animal. Eis a cópia que fiz.',
      "Refleti longamente sobre as aventuras da selva. E consegui, com um lápis de cor, fazer o meu primeiro desenho. Mostrei a obra-prima às pessoas grandes e perguntei se o meu desenho lhes dava medo.",
      'Responderam-me: "Por que é que um chapéu causaria medo?" O meu desenho não representava um chapéu. Representava uma jiboia digerindo um elefante. Como as pessoas grandes não conseguiam compreender, desenhei então o interior da jiboia, para que pudessem ver com clareza.',
    ],
  },
  {
    title: "Capítulo II",
    paragraphs: [
      "Vivi, pois, sozinho, sem alguém com quem falar verdadeiramente, até que, há seis anos, tive uma avaria no deserto do Sara. Qualquer coisa se tinha partido no motor do meu avião. Como levava comigo um mecânico passageiro, tentei reparar com ele.",
      "Mas a peça mais importante estava avariada e eu não dispunha de água potável para sobreviver até que passasse um caminhante qualquer. Assim, na manhã do sétimo dia, vi aparecer um menino estranho.",
      'Pareceu-me que sonhava. Pedi-lhe que desenhasse um carneiro. Fiquei surpreso ao ver brotar, sob o lápis, a imagem de uma caixa. "Que é isto? — perguntei. O carneiro está dentro da caixa." Foi assim que conheci o pequeno príncipe.',
    ],
  },
  {
    title: "Capítulo III",
    paragraphs: [
      "Precisei de muito tempo para compreender de onde ele vinha. O pequeno príncipe fazia-me muitas perguntas, mas parecia nunca ouvir as minhas. Falava-me de uma flor, de uma rosa, que habitava o seu asteróide.",
      "Contava-me que a sua rosa era vaidosa e exigente, mas que ele a amava apesar dos defeitos. Dizia-me que um dia partiu para explorar outros mundos e visitou reis, vaidosos, bêbados, homens de negócios e acendedores de lanternas.",
      "Foi nessa viagem que descobriu que a sua rosa era única e que tudo o resto do universo não substituía o perfume e o carinho que só ela sabia dar-lhe. E chorou.",
    ],
  },
  {
    title: "Capítulo IV",
    paragraphs: [
      "E assim, depois de todas essas aventuras, decidi voar de volta. Mas a jiboia dos meus tempos de criança continuou a rondar a minha memória. Hoje, quando olho para o céu, percebo que as estrelas riem baixinho.",
      "O essencial é invisível aos olhos. O tempo que dedicámos à nossa rosa é o que a torna tão importante. As pessoas grandes nunca compreendem nada sozinhas, e é cansativo para as crianças ter de lhes dar sempre explicações.",
      "Se alguém ama uma flor da qual só existe um exemplar entre milhões e milhões de estrelas, isso basta para o tornar feliz. Quando olhares para o céu, sorri: é aí que viverás, é aí que vive a tua rosa.",
    ],
  },
]

const MOBY_DICK: BookChapter[] = [
  {
    title: "Capítulo I",
    paragraphs: [
      "Chamem-me Ismael. Há alguns anos — não importa quando — andando eu com pouco dinheiro no bolso e sem nada de especial a interessar-me em terra, decidi navegar para uma parte do mundo e ver a parte aquática dele.",
      "É uma maneira que tenho de espantar o spleen e regular a minha circulação. Sempre que me sinto carrancudo, sempre que há uma humidade enervante nos meses de Inverno, sempre que me descubro involuntariamente a parar diante de armazéns de caixões — o que não é lá muito raro —, sei que é altura de me fazer ao mar o mais depressa possível.",
      "Esta é a minha arma contra a melancolia. Catilina não exigia mais do que isto: deitar abaixo Roma e fazer uma cama nova em qualquer lugar. Quem mais é que não sente uma coisa destas?",
    ],
  },
  {
    title: "Capítulo II",
    paragraphs: [
      "Acabei por embarcar no paquete Grão-Duque, que saía de Nantucket. As ruas de Nantucket estão apinhadas de gente aos domingos, de marinheiros e passeantes. O capitão Ahab, dizem, embarcou em viagem mais cedo.",
      "O Ahab não se via quase nunca; era um homem sério que se aguentava com a perna de marfim, e poucos sabiam dele. Toda a tripulação tinha algo de estranho. A certo ponto, ao terceiro dia, vi a figura austera de Ahab encostado à amurada.",
      "Os olhos dele pareciam procurar algo no horizonte, e o brilho frio da perna de marfim rebrilhava ao sol, como se fosse um pedaço de osso sagrado. Foi aí que percebi que aquela viagem não seria uma simples caçada à baleia.",
    ],
  },
  {
    title: "Capítulo III",
    paragraphs: [
      "A tripulação era composta por homens de várias partes do mundo. O arpoador Queequeg, por exemplo, era um selvagem tatuado, mas com a bondade mais pura que já vi em qualquer ser humano. Dormia ao meu lado no mesmo beliche.",
      "Acima de tudo, pairava a sombra de Moby Dick, a grande baleia branca, que já tinha deixado muitos navios destroçados e tripulações inteiras perdidas no mar. Ahab jurou vingança, e cada dia tornava essa obsessão mais viva.",
      'A caçada começou. Dias de calma, noites de tempestade. O Pequod deslizava pelas ondas como um animal feroz. E quando, ao fim de semanas, finalmente avistámos a baleia, Ahab gritou algo que jamais esquecerei: "Avarem a popa, minha tripulação!"',
    ],
  },
  {
    title: "Capítulo IV",
    paragraphs: [
      "No terceiro dia de perseguição, o arpão foi lançado. Mas Moby Dick era esperta como o diabo. Mergulhou, voltou, e num movimento brusco, virou o bote e atirou Ahab ao mar.",
      "O próprio barco do capitão foi levantado e estilhaçado. Vi, com horror, o olhar feroz da baleia e, segundos depois, o vórtice que engoliu tudo. O Pequod afundou como um caixão, levando consigo o seu comandante obcecado.",
      "Sobreviveu apenas o Ishmael, agarrado a um caixão que alguém flutuava no meio do oceano. Foi salvo por outro paquete que passava ao longe. E assim termina a história desta caçada desgraçada — mas, se algum dia sentir o spleen, sabe o que fazer: faça-se ao mar.",
    ],
  },
]

const GUERRA_MUNDOS: BookChapter[] = [
  {
    title: "Capítulo I",
    paragraphs: [
      "Ninguém acreditaria, nos últimos anos do século XIX, que este mundo estivesse a ser observado com interesse e atenção, mais do que se imagina, por inteligências superiores às do homem e, no entanto, mortais como ele.",
      "Nem sequer se chegou a suspeitar de que existissem tais inteligências, pois os homens ocupavam-se demais consigo mesmos. Os marcianos tinham os olhos postos na Terra desde que o homem pisou a Lua.",
      "A atmosfera deste planeta enfraquecia a sua capacidade de agir. Mas o sistema de projecção de cilindros, aperfeiçoado ao longo de décadas, permitiu-lhes enviar a primeira máquina de guerra para a pequena e azulada esfera.",
    ],
  },
  {
    title: "Capítulo II",
    paragraphs: [
      "O cilindro caiu numa planície perto de Woking, na noite de quinta-feira. Era um objeto metálico, do tamanho de um urso, com uma estranha superfície fosca. Os curiosos reuniram-se à volta dele.",
      "Quando a tampa começou a desenroscar-se lentamente, a multidão recuou em pânico. A criatura que emergiu era cinzenta, do tamanho de um homem, com pele lustrosa e enormes olhos escuros. Parecia débil e trémula.",
      "Mas o que parecia fraqueza era, na verdade, adaptação. Os marcianos tinham planeado tudo: o cilindro, a viagem, e a estratégia para subjugar a Terra em poucos dias. E nós, tão orgulhosos da nossa civilização, não tínhamos a mínima noção do que estava prestes a acontecer.",
    ],
  },
  {
    title: "Capítulo III",
    paragraphs: [
      "Na primeira noite, a multidão acercou-se demasiado. O cilindro, agora aberto, libertou vários marcianos. O clarão de uma luz intensa cortou a escuridão — era o raio de calor, uma arma jamais vista.",
      "O calor era invisível, e os homens que o recebiam pegavam fogo instantaneamente, como se fossem de palha. A erva ao redor ficou vermelha, e os ramos das árvores incendiaram-se. Os poucos sobreviventes correram em pânico.",
      "Nos dias seguintes, mais cilindros caíram sobre a Terra. Londres foi cercada. As tropas reais tentaram resistir, mas as máquinas de guerra marcianas — enormes, com braços metálicos e três pernas articuladas — esmagavam tudo à sua passagem.",
    ],
  },
  {
    title: "Capítulo IV",
    paragraphs: [
      "O pânico espalhou-se pelo mundo. As populações fugiam em massa, atropelando-se nas estradas. Os governos caíam um a um. A civilização humana desmoronava-se como um castelo de cartas.",
      "Mas, no meio da destruição, uma simples bactéria — tão pequena que ninguém pensara nela — começou a atacar os marcianos. Sem defesas imunitárias contra os micróbios terrestres, eles caíram doentes e morreram um a um.",
      "Foi assim, pela coisa mais pequena deste planeta, que a humanidade foi salva. Mas o mundo nunca mais seria o mesmo. As ruínas de Londres recordariam para sempre a humilhação e a loucura daqueles dias.",
    ],
  },
]

const COCUNDA_MUNDOS: BookChapter[] = [
  {
    title: "Capítulo I",
    paragraphs: [
      "O manuscrito que se segue foi encontrado entre os papéis do falecido professor Enoch Bevins, desaparecido em 1927, durante uma expedição aos ermos do Norte. O seu sobrinho entregou-me os documentos, alertando que talvez não devessem ser lidos.",
      "As primeiras páginas descrevem a chegada do professor a uma cidade esquecida, envolta em névoas perpétuas, onde as construções não obedeciam a nenhuma geometria conhecida.",
      "Os habitantes da cidade — ou o que pareciam ser habitantes — não tinham rostos, apenas superfícies ondulantes como água parada, e quando falavam, o som vinha do subsolo.",
    ],
  },
  {
    title: "Capítulo II",
    paragraphs: [
      "Bevins descreve como, na segunda noite, acordou com um zumbido contínuo, como se a própria terra respirasse. Ao abrir a porta do quarto, deu de caras com um corredor impossível, que parecia estender-se para dentro e para fora ao mesmo tempo.",
      "A luz que entrava pela janela mudava de cor a cada minuto — do âmbar ao púrpura, do verde ao negro absoluto. As paredes pareciam transpirar, e havia vozes que chamavam o seu nome em línguas que ele nunca estudara.",
      "Foi nesse momento que percebeu que não estava sozinho: algo se movia nas sombras, com um corpo que não era corpo, e tentava comunicar-lhe algo terrível, como um aviso que ele não conseguia decifrar.",
    ],
  },
  {
    title: "Capítulo III",
    paragraphs: [
      'A terceira noite foi a mais estranha. Bevins anotou: "Os meus olhos veem, mas o meu cérebro recusa-se a aceitar. O que existe aqui não deveria existir, nem mesmo em sonho".',
      "Ele tentou fugir, mas as ruas da cidade reorganizavam-se sempre que ele virava uma esquina. Cada porta dava para o mesmo corredor, cada janela mostrava paisagens de outros mundos: oceanos negros, desertos vermelhos, florestas de cogumelos gigantes.",
      "Anotou ainda que encontrou uma biblioteca, com livros escritos numa matéria escura e gelatinosa. Ao tocar-lhes, os livros tremiam, e as letras rearranjavam-se diante dos seus olhos.",
    ],
  },
  {
    title: "Capítulo IV",
    paragraphs: [
      'O manuscrito termina de forma abrupta. A última frase, escrita a carvão e com caligrafia trémula, é a seguinte: "Eles mostraram-me a Cocunda de Mundos. Não há regresso."',
      "Bevins nunca foi encontrado. Em 1934, um explorador norueguês afirmou ter chegado à mesma cidade, mas enlouqueceu antes de conseguir descrevê-la. Os mapas antigos não registam este lugar, e os seus habitantes, se é que ainda existem, continuam a aguardar.",
      "O manuscrito permanece guardado, à espera de alguém suficientemente corajoso — ou suficientemente louco — para o terminar.",
    ],
  },
]

export const books: Book[] = [
  {
    id: "pequeno-principe",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    category: "Fantasia",
    cover: {
      background: "#1F1B16",
      text: "#F5F1E8",
      accent: "#A67C52",
      illustration: "prince",
    },
    description: "Uma história de amor, perda e descoberta.",
    chapters: PEQUENO_PRINCIPE,
  },
  {
    id: "moby-dick",
    title: "Moby Dick",
    author: "Herman Melville",
    category: "Aventura",
    cover: {
      background: "#1E3A8A",
      text: "#F5F1E8",
      accent: "#FBBF24",
      illustration: "ship",
    },
    description: "A obsessiva caçada à grande baleia branca.",
    chapters: MOBY_DICK,
  },
  {
    id: "guerra-dos-mundos",
    title: "A Guerra dos Mundos",
    author: "H. G. Wells",
    category: "Ficção",
    cover: {
      background: "#2B1F18",
      text: "#F5F1E8",
      accent: "#B08B68",
      illustration: "mountains",
    },
    description: "A invasão da Terra por marcianos.",
    chapters: GUERRA_MUNDOS,
  },
  {
    id: "cocunda-de-mundos",
    title: "O Cocunda de Mundos",
    author: "H. P. Lovecraft",
    category: "Terror",
    cover: {
      background: "#3F2A1F",
      text: "#F5F1E8",
      accent: "#D8C3A5",
      illustration: "tentacles",
    },
    description: "Uma viagem por dimensões esquecidas.",
    chapters: COCUNDA_MUNDOS,
  },
]

export type LibraryEntry = {
  bookId: string
  progress: number
}

export const userLibrary: LibraryEntry[] = [
  { bookId: "pequeno-principe", progress: 78 },
  { bookId: "moby-dick", progress: 79 },
  { bookId: "guerra-dos-mundos", progress: 78 },
  { bookId: "cocunda-de-mundos", progress: 99 },
]

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id)
}

export function totalChapters(book: Book): number {
  return book.chapters.length
}

export function totalParagraphs(book: Book): number {
  return book.chapters.reduce((sum, ch) => sum + ch.paragraphs.length, 0)
}
