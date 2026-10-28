/* =========================================================
   Fine Line · Dados do catálogo
   Para adicionar ou mudar produtos, edite só este arquivo.
   ========================================================= */

// Número do WhatsApp com DDI + DDD, só números. Ex.: "5511987654321"
const WHATSAPP = "5541995777717";
const INSTAGRAM = "finelinesaboaria";

const SELOS = [
  { icone: "i-mao", texto: "100% artesanal" },
  { icone: "i-folha", texto: "Ingredientes naturais" },
  { icone: "i-coelho", texto: "Cruelty free" },
];

const CATEGORIAS = [
  {
    id: "difusores",
    nome: "Difusores",
    titulo: "Difusores de Varetas",
    resumo: "Perfume de casa que dura: frasco de vidro, varetas de algodão e três aromas para escolher.",
    tamanhos: [
      { rotulo: "100 ml", preco: 64.90 },
      { rotulo: "250 ml", preco: 119.90 },
    ],
    destaques: [
      { icone: "i-folha", titulo: "Essências de alta qualidade", texto: "Fragrâncias marcantes que perfumam o ambiente por bastante tempo." },
      { icone: "i-varetas", titulo: "Varetas de fibra de algodão", texto: "Absorvem melhor a essência: mais difusão e mais durabilidade." },
      { icone: "i-cubo", titulo: "Vidro cubo elegante", texto: "Um frasco atemporal, que vira peça de decoração." },
      { icone: "i-casa", titulo: "Ideal para todos os ambientes", texto: "Sala, quarto, banheiro, escritório ou lavabo." },
    ],
    inclui: [
      "Frasco de vidro cubo com tampa dourada",
      "Varetas de fibra de algodão",
      "Essência de alta qualidade",
    ],
    comoUsar: {
      passos: [
        { titulo: "Abra e coloque as varetas", texto: "Tire a tampa e encaixe as varetas no frasco." },
        { titulo: "Vire depois de 1 hora", texto: "Quando a ponta estiver molhada, vire as varetas para soltar o aroma." },
        { titulo: "Renove quando quiser", texto: "Sentiu o cheiro mais fraco? É só virar as varetas de novo." },
      ],
      aviso: "Mantenha longe do alcance de crianças e animais e evite apoiar sobre móveis envernizados.",
    },
    produtos: [
      {
        id: "cereja",
        nome: "Cereja e Avelã",
        notas: "Doce · Aconchegante",
        descricao: "A doçura da cereja com o toque quentinho da avelã. Um aroma que abraça, perfeito para a sala e para os dias mais frios.",
        tom: "#B9475E",
        tomSuave: "#F8E6EA",
        foto: "assets/img/difusor-cereja.webp",
        elemento: "assets/img/elementos/cereja-laco.webp",
      },
      {
        id: "laranjeira",
        nome: "Flor de Laranjeira",
        notas: "Floral · Leve",
        descricao: "Delicado e luminoso, lembra flor recém-aberta. Deixa o ambiente leve, fresco e com sensação de casa limpa.",
        tom: "#9C6B17",
        tomSuave: "#FBF0DC",
        foto: "assets/img/difusor-laranjeira.webp",
        elemento: "assets/img/elementos/ramo-laranjeira.webp",
      },
      {
        id: "lavanda",
        nome: "Lavanda",
        notas: "Calmante · Relaxante",
        descricao: "O clássico que acalma. Ideal para o quarto e para os momentos de descanso no fim do dia.",
        tom: "#7458A6",
        tomSuave: "#EEE5F8",
        foto: "assets/img/difusor-lavanda.webp",
        elemento: "assets/img/elementos/lavanda.webp",
      },
    ],
  },
  {
    id: "sabonetes",
    nome: "Sabonetes",
    titulo: "Sabonetes Glicerinados",
    resumo: "Pequenos, perfumados e feitos para presentear.",
    ilustracao: "assets/img/elementos/flor-rosa.webp",
    seguranca: {
      titulo: "Sabonete Glicerinado",
      avisos: [
        "Em caso de irritação, suspenda o uso.",
        "Se os sintomas persistirem, procure orientação médica.",
        "Não aplique sobre a pele irritada ou lesionada.",
        "Evite contato com os olhos.",
        "Mantenha fora do alcance de crianças.",
      ],
      composicao: "Base glicerinada, lauril de milho, essência, extrato glicerinado de aloe vera e pigmento cosmético.",
      conteudo: "33 g",
      uso: "Externo",
      validade: "1 ano a partir da data de fabricação (impressa no rótulo).",
    },
    produtos: [],
  },
  {
    id: "sabonetes-liquidos",
    nome: "Sabonetes líquidos",
    titulo: "Sabonetes Líquidos",
    resumo: "Espuma suave e perfume que fica nas mãos.",
    capa: "assets/img/elementos/glicerina.webp",
    produtos: [],
  },
  {
    id: "velas",
    nome: "Velas",
    titulo: "Velas Aromáticas",
    resumo: "Velas feitas à mão em copinho de vidro. Escolha o modelo e depois o aroma.",
    // Cada vela pode ser feita em qualquer um destes aromas
    opcoes: {
      rotulo: "Aroma",
      itens: ["Cereja e Avelã", "Flor de Laranjeira", "Infantil (mamãe e bebê)"],
    },
    inclui: ["90 g de vela", "Cera de coco e pavio de algodão", "Copo de vidro", "Aroma à sua escolha"],
    seguranca: {
      titulo: "Vela Aromática",
      avisos: [
        "Nunca deixe a vela acesa sem supervisão.",
        "Mantenha longe de crianças e animais.",
        "Afaste de cortinas, vento e materiais inflamáveis.",
        "Use sobre superfície plana e resistente ao calor.",
        "Não queime por mais de 3 horas seguidas.",
        "O vidro pode ficar quente. Manuseie com cuidado.",
        "Apague com cuidado e não mova a vela acesa.",
      ],
      composicao: "Cera de coco, pavio de algodão, essência e recipiente de vidro.",
      conteudo: "90 g",
      validade: "2 anos a partir da data de fabricação (impressa no rótulo).",
      conservacao: "Após aberta, manter em local fresco, seco e ao abrigo da luz.",
    },
    produtos: [
      {
        id: "margarida",
        nome: "Vela Margarida",
        notas: "3 aromas para escolher",
        descricao: "Uma margarida delicada modelada em cera, dentro de um copinho de vidro.",
        preco: 59.90,
        tamanho: "90 g",
        tom: "#A87622",
        tomSuave: "#FBF1DC",
        foto: "assets/img/vela-margarida.webp",
        formato: "largo",
      },
      {
        id: "ursinho",
        nome: "Vela Ursinho",
        notas: "3 aromas para escolher",
        descricao: "Um ursinho segurando um coração. Fofa para o quarto do bebê e para presentear.",
        preco: 59.90,
        tamanho: "90 g",
        tom: "#4E6FBF",
        tomSuave: "#E6ECF9",
        foto: "assets/img/vela-ursinho.webp",
        formato: "largo",
      },
      {
        id: "rosa",
        nome: "Vela Rosa",
        notas: "3 aromas para escolher",
        descricao: "Uma flor vermelha em camadas de pétalas, perfeita para presentear quem você ama.",
        preco: 59.90,
        tamanho: "90 g",
        tom: "#B9475E",
        tomSuave: "#F8E6EA",
        foto: "assets/img/vela-rosa.webp",
        formato: "largo",
      },
    ],
  },
];
