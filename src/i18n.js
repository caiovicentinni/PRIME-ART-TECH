import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'pt-BR': {
    translation: {
      nav: { solution: "A Solução", features: "Diferenciais", models: "Modelos", cta: "Solicitar Orçamento" },
      hero: {
        eyebrow: "A REVOLUÇÃO COMEÇA NA TORNEIRA",
        title1: "Espuma perfeita.",
        title2: "Temperatura exata.",
        title3: "Fluxo imparável.",
        desc: "Aumente suas vendas. Elimine filas e padronize a qualidade de cada bebida. O sistema definitivo que atende as mais exigentes cafeterias e restaurantes do mundo.",
        cta: "Transforme Sua Operação",
        videoCta: "Ver em Ação"
      },
      problem: {
        title: "O Inimigo Oculto da Sua Operação",
        desc: "Você está perdendo dinheiro a cada copo desperdiçado. O gargalo da sua cafeteria não é a demanda, é a inconsistência no preparo.",
        point1: "Lentidão Absoluta:",
        desc1: "Minutos preciosos perdidos espumando leite manualmente.",
        point2: "Desperdício Recorrente:",
        desc2: "Litros de leite jogados no ralo por erros de textura.",
        point3: "Inconsistência de Sabor:",
        desc3: "Sua marca sofre quando o cliente recebe uma bebida diferente cada vez.",
        solutionTitle: "A Solução Prime Art Tech",
        solutionDesc: "Nossa tecnologia patenteada não apenas automatiza a espumação — ela a eleva ao estado de arte, garantindo que qualquer atendente entregue qualidade de barista.",
        stat1: "Zero",
        stat1Desc: "Desperdício de Leite",
        stat2: "4x",
        stat2Desc: "Mais Rápido",
        cta: "Automatizar Agora"
      },
      features: {
        title: "A Vantagem Competitiva",
        desc: "Diferenciais tecnológicos que colocam a sua cafeteria anos à frente da concorrência.",
        f1Title: "Duas Linhas Neutras",
        f1Desc: "Use diferentes tipos de leite simultaneamente. Sem contaminação de sabor, máximo respeito ao cliente.",
        f2Title: "Temperaturas Perfeitas",
        f2Desc: "Controle preciso do quente ao frio extremo. Crie macchiatos quentes e lattes gelados impecáveis.",
        f3Title: "Limpeza Rápida",
        f3Desc: "Apenas 1 minuto de manutenção diária com nossa pastilha especializada. Higiene impecável, zero esforço.",
        f4Title: "Economia Real",
        f4Desc: "Aumento de até 25% no volume natural do leite. Sirva mais bebidas gastando o mesmo volume líquido.",
        f5Title: "Controle em Nuvem",
        f5Desc: "Acompanhe e configure a máquina à distância via nuvem. Ideal para redes de franquias e gestão macro.",
        f6Title: "Microespuma de Barista",
        f6Desc: "A textura sedosa e brilhante exigida pela Latte Art, perfeitamente calibrada a cada retirada."
      },
      models: {
        title: "Poder para Qualquer Setup",
        desc: "Do design clássico a discrição absoluta, escolha o chassi ideal para o seu balcão.",
        classicTitle: "Modelo Classic",
        classicDesc: "Design de bancada premium. A peça central tecnológica que atrai os olhares.",
        classicFeat1: "Fácil Instalação na bancada",
        classicFeat2: "Acabamento premium iluminado",
        classicFeat3: "Visor Touch central",
        barTitle: "Modelo Bar (Embutido)",
        barDesc: "Discrição e espaço. Toda a força do sistema oculta sob a mesa.",
        barFeat1: "Otimização máxima de espaço",
        barFeat2: "Caixa principal sob o balcão",
        barFeat3: "Design minimalista superior",
        cta: "Comparar Especificações"
      },
      testimonials: {
        title: "Líderes Que Já Avançaram",
        desc: "Mais do que máquina, um upgrade no core busines de quem dita o mercado.",
        t1Text: "Desde a instalação das máquinas, o volume das nossas vendas aumentou notavelmente. Tudo é mais fácil agora os clientes adoram.",
        t1Author: "Daniel",
        t1Role: "Mórbido Café",
        t2Text: "Graças à máquina, pude delegar tarefas para mais funcionários, já que é extremamente fácil de usar.",
        t2Author: "Mylos",
        t2Role: "The Greek Coffee",
        finalTitle: "Pronto para Dobrar Seus Pedidos?",
        finalDesc: "Pare de perder capital por lentidão e ineficiência técnica. Converse agora mesmo com nossos especialistas.",
        finalCta: "Solicitar Orçamento Urgente"
      },
      video: {
        eyebrow: "DEMONSTRAÇÃO",
        title: "Veja em Ação",
        desc: "Assista como a tecnologia de espumação automática transforma o fluxo de trabalho da sua cafeteria em segundos.",
        fullscreen: "Assistir em Tela Cheia"
      },
      footer: {
        desc: "Especialistas em sistemas automáticos de precisão para espumação de leite. Desenhado para cafeterias de alta performance e líderes do setor.",
        nav: "Navegação",
        contact: "Contato",
        mail: "contato@primearttech.com",
        rights: "Prime Art Tech. Todos os direitos reservados."
      }
    }
  },
  'pt-PT': {
    translation: {
      nav: { solution: "A Solução", features: "Diferenciais", models: "Modelos", cta: "Pedir Orçamento" },
      hero: {
        eyebrow: "A REVOLUÇÃO COMEÇA NA TORNEIRA",
        title1: "Espuma perfeita.",
        title2: "Temperatura certa.",
        title3: "Fluxo imparável.",
        desc: "Aumente as suas vendas. Extermine as filas e padronize a qualidade de cada bebida. O sistema definitivo que serve as mais exigentes cafetarias.",
        cta: "Transforme a sua Operação",
        videoCta: "Ver em Acção"
      },
      problem: {
        title: "O Inimigo Oculto da Sua Operação",
        desc: "Está a perder dinheiro a cada copo desperdiçado. O gargalo da sua cafetaria não é a procura, é a inconsistência no preparo.",
        point1: "Lentidão Absoluta:",
        desc1: "Minutos preciosos perdidos a espumar leite manualmente.",
        point2: "Desperdício Recorrente:",
        desc2: "Litros de leite deitados fora por erros de textura.",
        point3: "Inconsistência de Sabor:",
        desc3: "A sua marca sofre quando o cliente recebe uma bebida diferente a cada visita.",
        solutionTitle: "A Solução Prime Art Tech",
        solutionDesc: "A nossa tecnologia não apenas automatiza o creme — fá-lo elevar-se ao estado de arte, garantindo que qualquer funcionário entregue qualidade de barista.",
        stat1: "Zero",
        stat1Desc: "Desperdício de Leite",
        stat2: "4x",
        stat2Desc: "Mais Célere",
        cta: "Automatizar Agora"
      },
      features: {
        title: "A Vantagem Competitiva",
        desc: "Factores tecnológicos que colocam a sua cafetaria anos à frente da concorrência.",
        f1Title: "Duas Linhas Independentes",
        f1Desc: "Use variados tipos de leite em simultâneo. Sem cruzamento de sabores, máximo respeito ao cliente.",
        f2Title: "Temperaturas Fáceis",
        f2Desc: "Controlo exacto do quente ao frio. Crie macchiatos quentes e lattes gelados formidáveis.",
        f3Title: "Limpeza Imediata",
        f3Desc: "Somente 1 minuto de manutenção por dia. Higiene impecável e sem esforço.",
        f4Title: "Economia Visível",
        f4Desc: "Aumento de até 25% no volume natural do leite. Sirva mais, gastando a mesma quantia.",
        f5Title: "Gestão na Nuvem",
        f5Desc: "Siga as configurações à distância. O cenário ideal para redes e franchisados.",
        f6Title: "Microcreme de Barista",
        f6Desc: "A textura sedosa exigida para Latte Art, perfeitamente calibrada ao sair."
      },
      models: {
        title: "Poder para Qualquer Setup",
        desc: "Do design clássico à discrição absoluta, escolha o modelo ideal para o seu balcão.",
        classicTitle: "Modelo Classic",
        classicDesc: "Design de bancada nobre. A peça central tecnológica que magnetiza os olhares.",
        classicFeat1: "Fácil Instalação na bancada",
        classicFeat2: "Acabamento luminoso requintado",
        classicFeat3: "Ecrã Táctil central",
        barTitle: "Modelo Bar (Embutido)",
        barDesc: "Discrição e espaço. Toda a força do sistema blindada sob a mesa.",
        barFeat1: "Optimização máxima de área",
        barFeat2: "Caixa principal oculta no balcão",
        barFeat3: "Design superior minimalista",
        cta: "Comparar Especificidades"
      },
      testimonials: {
        title: "Líderes Que Já Avançaram",
        desc: "Mais do que máquina, um upgrade formidável em quem dita as normas.",
        t1Text: "Desde que montámos as máquinas, as vendas cresceram notavelmente. Tudo é mais fácil agora.",
        t1Author: "Daniel",
        t1Role: "Mórbido Café",
        t2Text: "Graças ao sistema, pude direccionar tarefas a mais equipa, já que é super intuitivo.",
        t2Author: "Mylos",
        t2Role: "The Greek Coffee",
        finalTitle: "Pronto para Multiplicar Encomendas?",
        finalDesc: "Pare de dissipar capital por lentidão e ineficiência. Fale directamente com os nossos peritos.",
        finalCta: "Pedir Orçamento Urgente"
      },
      video: {
        eyebrow: "DEMONSTRAÇÃO",
        title: "Veja em Acção",
        desc: "Assista como a tecnologia de espumação automática transforma o ritmo da sua cafetaria em segundos.",
        fullscreen: "Assistir em Ecrã Inteiro"
      },
      footer: {
        desc: "Especialistas em sistemas automáticos de precisão para creme de leite. Concebido para cafetarias de alta performance.",
        nav: "Navegação",
        contact: "Contacto",
        mail: "contato@primearttech.com",
        rights: "Prime Art Tech. Todos os direitos reservados."
      }
    }
  },
  'en': {
    translation: {
      nav: { solution: "Solution", features: "Features", models: "Models", cta: "Get a Quote" },
      hero: {
        eyebrow: "THE REVOLUTION STARTS AT THE TAP",
        title1: "Perfect foam.",
        title2: "Exact temperature.",
        title3: "Unstoppable workflow.",
        desc: "Boost your sales. Eliminate queues and standardize the quality of every beverage. The defining system designed for the most demanding cafes and restaurants globally.",
        cta: "Transform Your Operations",
        videoCta: "See in Action"
      },
      problem: {
        title: "The Hidden Enemy of Your Operation",
        desc: "You are losing money with every wasted cup. The bottleneck in your café isn't the demand, it's the inconsistency in preparation.",
        point1: "Absolute Sluggishness:",
        desc1: "Precious minutes lost manually frothing milk.",
        point2: "Recurring Waste:",
        desc2: "Liters of milk poured down the drain due to texture errors.",
        point3: "Inconsistent Taste:",
        desc3: "Your brand suffers when customers receive a different drink each time.",
        solutionTitle: "The Prime Art Tech Solution",
        solutionDesc: "Our patented technology doesn't just automate frothing — it elevates it to state-of-the-art, ensuring any staff member delivers barista-quality results.",
        stat1: "Zero",
        stat1Desc: "Milk Waste",
        stat2: "4x",
        stat2Desc: "Faster",
        cta: "Automate Now"
      },
      features: {
        title: "The Competitive Edge",
        desc: "Technological advantages that put your cafe years ahead of the competition.",
        f1Title: "Two Independent Lines",
        f1Desc: "Use different milk types simultaneously. No flavor contamination, ultimate respect for the customer.",
        f2Title: "Perfect Temperatures",
        f2Desc: "Precise control from hot to extreme cold. Create impeccable hot macchiatos and iced lattes.",
        f3Title: "Rapid Cleaning",
        f3Desc: "Just 1 minute of daily maintenance with our specialized tablet. Impeccable hygiene, zero effort.",
        f4Title: "Real Savings",
        f4Desc: "Up to 25% increase in milk's natural volume. Serve more drinks spending the same liquid volume.",
        f5Title: "Cloud Control",
        f5Desc: "Monitor and configure the machine remotely via the cloud. Ideal for franchise networks.",
        f6Title: "Barista Microfoam",
        f6Desc: "The silky and glossy texture required for Latte Art, perfectly calibrated out of the tap."
      },
      models: {
        title: "Power for Any Setup",
        desc: "From classic design to absolute discretion, choose the ideal base for your counter.",
        classicTitle: "Classic Model",
        classicDesc: "Premium countertop design. The technological centerpiece that draws attention.",
        classicFeat1: "Easy countertop installation",
        classicFeat2: "Premium illuminated finish",
        classicFeat3: "Central Touch screen",
        barTitle: "Bar Model (Under-counter)",
        barDesc: "Discretion and space. All the system's power hidden under the table.",
        barFeat1: "Maximum space optimization",
        barFeat2: "Main box under the counter",
        barFeat3: "Minimalist superior design",
        cta: "Compare Specs"
      },
      testimonials: {
        title: "Leaders Who Stepped Forward",
        desc: "More than a machine, a major upgrade to the core business of market leaders.",
        t1Text: "Since installing the machines, our sales volume has noticeably increased. Everything is easier now and the customers love it.",
        t1Author: "Daniel",
        t1Role: "Morbido Cafe",
        t2Text: "Thanks to the machine, I could delegate tasks to more employees since it is extremely friendly to use.",
        t2Author: "Mylos",
        t2Role: "The Greek Coffee",
        finalTitle: "Ready to Double Your Orders?",
        finalDesc: "Stop losing capital to slowness and technical inefficiency. Talk to our experts right now.",
        finalCta: "Request Urgent Quote"
      },
      video: {
        eyebrow: "DEMONSTRATION",
        title: "See It in Action",
        desc: "Watch how automatic frothing technology transforms your café workflow in seconds.",
        fullscreen: "Watch Fullscreen"
      },
      footer: {
        desc: "Specialists in automatic precision milk frothing systems. Designed for high-performance cafes and industry leaders.",
        nav: "Navigation",
        contact: "Contact",
        mail: "contact@primearttech.com",
        rights: "Prime Art Tech. All rights reserved."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
