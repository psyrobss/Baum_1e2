import { LearningFrame } from '../types';

export const chapter1Content: LearningFrame[] = [
  {
    id: 1,
    title: "A Filosofia da Ciência",
    chapter: 1,
    content: "O behaviorismo não é a ciência do comportamento, mas a filosofia dessa ciência. Ele investiga se uma ciência do comportamento é possível e quais seriam suas implicações.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo é propriamente a [CHOICE] da ciência do comportamento.",
    choices: ["metodologia", "filosofia", "técnica"],
    correctChoice: "filosofia",
    correctFeedback: "Exato! Baum inicia o livro deixando claro que o behaviorismo é o conjunto de ideias sobre a ciência.",
    wrongFeedback: "Lembre-se: a ciência é a Análise do Comportamento; o behaviorismo é sua base filosófica."
  },
  {
    id: 2,
    title: "Ruptura: Da Filosofia à Ciência",
    chapter: 1,
    content: "As ciências se separaram da filosofia ao abandonar pressupostos abstratos (como 'Deus' ou 'formas ideais') em favor da observação e do raciocínio baseado no que é visível.",
    type: 'true-false',
    question: "A verdade científica é absoluta e imutável, ao contrário da verdade filosófica.",
    correctAnswer: false,
    correctFeedback: "Correto! A verdade científica é sempre relativa e provisória, sujeita a novas observações.",
    wrongFeedback: "Incorreto. Baum afirma que a verdade filosófica é absoluta (se os pressupostos forem aceitos), enquanto a científica é provisória."
  },
  {
    id: 3,
    title: "Psicologia Objetiva: Donders",
    chapter: 1,
    content: "F. C. Donders tentou medir processos mentais objetivamente através do 'tempo de reação'. Ele subtraía o tempo de uma reação simples do tempo de uma reação de escolha.",
    type: 'word-choice',
    textWithBlanks: "Donders acreditava que era possível medir objetivamente o processo mental de escolha através de uma medida [CHOICE].",
    choices: ["subjetiva", "objetiva", "teológica"],
    correctChoice: "objetiva",
    reTeachContent: "Donders foi um pioneiro em buscar medidas físicas (tempo) para o que antes era considerado puramente mental.",
    correctFeedback: "Perfeito! Ele buscava transformar o subjetivo em algo mensurável.",
    wrongFeedback: "A palavra correta é 'objetiva'. Ele queria fugir da subjetividade da introspecção."
  },
  {
    id: 4,
    title: "Associação: Pioneiros da Psicologia",
    chapter: 1,
    content: "Associe cada autor ao seu método ou conceito principal estudado no Capítulo 1.",
    type: 'matching',
    matchingPairs: [
      { id: '1', left: "Donders", right: "Tempo de Reação" },
      { id: '2', left: "Ebbinghaus", right: "Sílabas sem sentido" },
      { id: '3', left: "Fechner", right: "Intensidade da sensação" },
      { id: '4', left: "Darwin", right: "Continuidade das espécies" }
    ],
    correctFeedback: "Excelente! Você domina a história da transição da filosofia para a ciência.",
    wrongFeedback: "Algumas associações estão incorretas. Tente novamente!"
  },
  {
    id: 5,
    title: "Psicologia Comparativa: Darwin",
    chapter: 1,
    content: "Darwin propôs a 'continuidade das espécies'. Se os corpos evoluem, os traços comportamentais também devem ter uma origem comum. Isso permitiu estudar humanos através de outras espécies.",
    type: 'multiple-choice',
    question: "Qual conceito de Darwin foi fundamental para o nascimento da psicologia comparativa?",
    options: [
      { id: 'a', text: "Seleção Sexual", isCorrect: false, feedback: "Embora importante, não é o conceito chave para a comparação entre espécies no behaviorismo." },
      { id: 'b', text: "Continuidade das Espécies", isCorrect: true, feedback: "Correto. Se somos parte de um continuum, o estudo de animais revela traços humanos rudimentares." },
      { id: 'c', text: "Sobrevivência do mais apto", isCorrect: false, feedback: "Este é um mecanismo da evolução, mas a 'continuidade' é o que justifica a comparação." }
    ]
  },
  {
    id: 6,
    title: "Psicologia Comparativa e Romanes",
    chapter: 1,
    content: "George Romanes tentou observar as origens dos traços mentais em outras espécies, mas caiu na armadilha de 'humanizar' os animais.",
    type: 'word-choice',
    textWithBlanks: "O termo para a atribuição de sentimentos humanos a animais (ex: dizer que um rato sente 'confusão') é [CHOICE].",
    choices: ["antropomorfismo", "determinismo", "realismo"],
    correctChoice: "antropomorfismo",
    correctFeedback: "Exato. Watson criticou duramente essa prática por ser puramente especulativa.",
    wrongFeedback: "A resposta é 'antropomorfismo'. É a 'humanização da fera'."
  },
  {
    id: 7,
    title: "O Manifesto de Watson",
    chapter: 1,
    content: "Em 1913, Watson declarou que a psicologia deveria ser a ciência do comportamento. Ele atacou a introspecção porque ela 'ataca o observador, e não a situação experimental'.",
    type: 'true-false',
    question: "Watson acreditava que a psicologia deveria focar na construção do conteúdo consciente dos animais.",
    correctAnswer: false,
    correctFeedback: "Correto. Watson achava absurdo tentar 'construir' a consciência animal; ele queria focar apenas no comportamento observável.",
    wrongFeedback: "Incorreto. Watson rejeitava qualquer tentativa de estudar a consciência, focando apenas no comportamento público."
  },
  {
    id: 8,
    title: "Determinismo vs Livre-Arbítrio",
    chapter: 1,
    content: "O determinismo afirma que o comportamento é ordenado e determinado pela hereditariedade e pelo ambiente. O behaviorismo se opõe tanto ao livre-arbítrio (causa sem causa) quanto ao destino (causa mística pré-ordenada).",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo se opõe tanto ao livre-arbítrio quanto ao [CHOICE].",
    choices: ["determinismo", "destino", "ambiente"],
    correctChoice: "destino",
    correctFeedback: "Exato! O behaviorismo é determinista, mas rejeita tanto a 'vontade livre' quanto o 'destino' místico, focando em causas naturais.",
    wrongFeedback: "Lembre-se: o behaviorismo É uma forma de determinismo. Ele se opõe ao destino e ao livre-arbítrio."
  },
  {
    id: 9,
    title: "Argumentos Sociais: Democracia",
    chapter: 1,
    content: "Muitos temem que o behaviorismo ameace a democracia. Baum argumenta que a democracia funciona não porque temos livre-arbítrio, mas porque é um conjunto de práticas eficazes que permitem o controle mútuo.",
    type: 'multiple-choice',
    question: "Segundo Baum, o que realmente define a 'liberdade política'?",
    options: [
      { id: 'a', text: "A ausência total de controle ambiental.", isCorrect: false, feedback: "O controle sempre existe; a questão é quem controla e como." },
      { id: 'b', text: "Dispor de opções e ser capaz de influenciar os governantes.", isCorrect: true, feedback: "Exato. É algo prático e comportamental, não uma propriedade metafísica da alma." },
      { id: 'c', text: "A capacidade de agir sem causas passadas.", isCorrect: false, feedback: "Isso seria livre-arbítrio libertário, que o behaviorismo rejeita." }
    ]
  },
  {
    id: 10,
    title: "Pensamentos como Comportamento",
    chapter: 1,
    content: "O behaviorismo radical considera pensamentos e sentimentos como eventos naturais (comportamento encoberto). No entanto, ele rejeita a ideia de que esses eventos sejam as causas de outros comportamentos.",
    type: 'word-choice',
    textWithBlanks: "O behaviorismo rejeita a ideia de que pensamentos internos sejam as [CHOICE] do comportamento.",
    choices: ["consequências", "causas", "partes"],
    correctChoice: "causas",
    reTeachContent: "Para o behaviorista, o pensamento é algo que o organismo FAZ, não algo que 'causa' o que ele faz. Ambos são causados pelo ambiente e história.",
    correctFeedback: "Correto! Pensamentos são comportamentos que precisam ser explicados, não as explicações finais.",
    wrongFeedback: "Atenção: o behaviorismo radical aceita pensamentos como fatos naturais, mas nega que eles sejam as 'causas' primárias."
  },
  {
    id: 23,
    title: "Pavlov e a Psicologia Objetiva",
    chapter: 1,
    content: "Pavlov contribuiu para a psicologia objetiva ao estudar a aprendizagem através da associação, medindo a transferência de reflexos simples para novos sinais no laboratório.",
    type: 'word-choice',
    textWithBlanks: "Pavlov estudou a aprendizagem medindo um simples [CHOICE] de transferência para novos sinais.",
    choices: ["reflexo", "instinto", "pensamento"],
    correctChoice: "reflexo",
    correctFeedback: "Exato. O reflexo condicional foi a base para uma psicologia baseada em medidas físicas.",
    wrongFeedback: "A resposta é 'reflexo'. Pavlov focava em respostas fisiológicas eliciadas por estímulos."
  },
  {
    id: 26,
    title: "Cronologia da Psicologia Objetiva",
    chapter: 1,
    content: "A transição da psicologia filosófica para a científica envolveu marcos fundamentais. Reordene os eventos abaixo do mais antigo para o mais recente.",
    type: 'sorting',
    sortingItems: [
      { id: 's1', text: "Fechner publica 'Elementos de Psicofísica'", order: 0 },
      { id: 's2', text: "Donders inicia estudos sobre tempo de reação", order: 1 },
      { id: 's3', text: "Ebbinghaus estuda memória com sílabas sem sentido", order: 2 },
      { id: 's4', text: "Watson publica o Manifesto Behaviorista", order: 3 }
    ],
    correctFeedback: "Excelente memória histórica! Você traçou o caminho exato da objetividade.",
    reTeachContent: "A psicofísica de Fechner abriu caminho para as medidas de tempo de Donders, seguidas pelo rigor de Ebbinghaus e, finalmente, o manifesto de Watson em 1913."
  },
  {
    id: 30,
    title: "A Ideia Central (Texto Original)",
    chapter: 1,
    content: "Complete o parágrafo fundamental de Baum sobre a definição de behaviorismo.",
    type: 'interactive-paragraph',
    parts: [
      { id: 'p1_1', type: 'text', content: "A ideia central no behaviorismo pode ser formulada de maneira simples: uma " },
      { id: 'p1_2', type: 'choice', options: ["ciência", "arte", "técnica"], answer: "ciência" },
      { id: 'p1_3', type: 'text', content: " do comportamento é " },
      { id: 'p1_4', type: 'choice', options: ["possível", "impossível"], answer: "possível" },
      { id: 'p1_5', type: 'text', content: ". Os behavioristas têm opiniões diversas sobre o que essa proposição significa... mas todos concordam que pode haver uma ciência do " },
      { id: 'p1_6', type: 'choice', options: ["comportamento", "pensamento", "espírito"], answer: "comportamento" },
      { id: 'p1_7', type: 'text', content: "." }
    ],
    correctFeedback: "Perfeito! Você captou a essência do manifesto behaviorista.",
    wrongFeedback: "Verifique os termos: o behaviorismo afirma que a ciência é possível e seu objeto é o comportamento."
  },
  {
    id: 31,
    title: "Behaviorismo vs Ciência (Texto Original)",
    chapter: 1,
    content: "Diferencie o behaviorismo da análise do comportamento usando o texto de Baum.",
    type: 'interactive-paragraph',
    parts: [
      { id: 'p2_1', type: 'text', content: "Uma vez que o behaviorismo é um conjunto de ideas sobre essa ciência chamada " },
      { id: 'p2_2', type: 'choice', options: ["análise do comportamento", "psicologia cognitiva", "neurociência"], answer: "análise do comportamento" },
      { id: 'p2_3', type: 'text', content: ", não a ciência em si, o behaviorismo propriamente dito não é ciência, mas " },
      { id: 'p2_4', type: 'choice', options: ["filosofia da ciência", "biologia evolutiva"], answer: "filosofia da ciência" },
      { id: 'p2_5', type: 'text', content: "." }
    ],
    correctFeedback: "Excelente distinção! O behaviorismo é a base reflexiva, enquanto a análise é a prática científica."
  }
];
