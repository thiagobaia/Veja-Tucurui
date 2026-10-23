export interface PlaceType {
  id: number
  nome: string
  slug: string
  categoria: string[]
  descricao: string
  endereco: string
  telefone: string
  especialidades: string[]
  instagram: string
  foto: string
  images: string[]
  google_maps: {
    endereco: string
    telefone: string
    nota: number | null
    quantidade_avaliacoes: number | null
    horarios: Record<string, string>
    categorias: string[]
    faixa_preco: string | null
    link_busca_google_maps: string
  }
}

export const placesInterface: PlaceType[] = [
  {
    id: 1,
    nome: "Soraya's Pizzaria",
    slug: "sorayas-pizzaria",
    categoria: ["Gastronomia"],
    descricao: "Tradicional pizzaria em Tucuruí conhecida por sua variedade de sabores e funcionamento diário até tarde, sendo uma excelente opção para reunir a família ou amigos.",
    endereco: "Rua Trinta e Um de Março, 285, Santa Isabel, Tucuruí - PA, 68455-610",
    telefone: "+55 94 98118-9378",
    especialidades: ["Pizza"],
    instagram: "https://www.instagram.com/sorayasrestauranteepizzaria?psln=OTg0ZTNvemtmdjJ0",
    foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "R. Trinta e Um de Março, 285 - Santa Isabel, Tucuruí - PA, 68455-610",
      telefone: "+55 94 98118-9378",
      nota: 4.4,
      quantidade_avaliacoes: 343,
      horarios: {
        segunda: "11:30–00:00",
        terça: "11:30–00:00",
        quarta: "11:30–00:00",
        quinta: "11:30–00:00",
        sexta: "11:30–00:00",
        sábado: "11:30–00:00",
        domingo: "11:30–00:00"
      },
      categorias: ["Pizzaria"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Soraya%27s%20Pizzaria%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 2,
    nome: "Varanda Club Bar e Restaurante",
    slug: "varanda-club-bar-e-restaurante",
    categoria: ["Gastronomia"],
    descricao: "Ambiente descontraído que combina bar de coquetéis e restaurante, ideal para curtir o happy hour ou almoços de fim de semana com boa música e gastronomia.",
    endereco: "Rua J, 406, Jardim Paraíso, Tucuruí - PA, 68455-001",
    telefone: "+55 94 98183-6800",
    especialidades: ["Refeições", "Bebidas", "Ambiente de lazer"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "R. J, 406 - Jardim Paraíso, Tucuruí - PA, 68455-001",
      telefone: "+55 94 98183-6800",
      nota: 4.6,
      quantidade_avaliacoes: 188,
      horarios: {
        segunda: "Fechado",
        terça: "17:00–00:00",
        quarta: "17:00–00:00",
        quinta: "17:00–00:00",
        sexta: "17:00–00:00",
        sábado: "17:00–00:00",
        domingo: "11:00–16:00"
      },
      categorias: ["Restaurante", "Bar de coquetéis"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Varanda%20Club%20Bar%20e%20Restaurante%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 3,
    nome: "Restaurante Tô Toontin",
    slug: "restaurante-to-toontin",
    categoria: ["Gastronomia"],
    descricao: "Famoso pela culinária regional e especialmente pelo tradicional tucunaré no saco, oferecendo pratos marcantes da gastronomia local em Nova Tucuruí.",
    endereco: "Avenida Governador Aloísio Chaves, 297, Nova Tucuruí, Tucuruí - PA, 68456-590",
    telefone: "+55 94 99137-3080",
    especialidades: ["Tucunaré no saco", "Peixes"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Avenida Governador Aloísio Chaves, 297, Nova Tucuruí, Tucuruí - PA, 68456-590",
      telefone: "+55 94 99137-3080",
      nota: 4.6,
      quantidade_avaliacoes: 224,
      horarios: {},
      categorias: ["Restaurante"],
      faixa_preco: "R$ 60–160",
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+T%C3%B4+Toontin+Tucuru%C3%AD"
    }
  },
  {
    id: 4,
    nome: "Restaurante Tamarinão",
    slug: "restaurante-tamarinao",
    categoria: ["Gastronomia"],
    descricao: "Parada clássica às margens da rodovia PA-263, servindo pratos da culinária brasileira com excelente atendimento e ótimas opções para viajantes e moradores.",
    endereco: "PA-263, 340, Tucuruí - PA",
    telefone: "+55 94 98142-0525",
    especialidades: [],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "PA-263, 340, Tucuruí - PA",
      telefone: "+55 94 98142-0525",
      nota: 4.3,
      quantidade_avaliacoes: 312,
      horarios: {
        segunda: "09:00–21:00",
        terça: "09:00–21:00",
        quarta: "09:00–21:00",
        quinta: "09:00–21:00",
        sexta: "09:00–21:00",
        sábado: "09:00–21:00",
        domingo: "09:00–16:00"
      },
      categorias: ["Restaurante brasileiro"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Restaurante%20Tamarin%C3%A3o%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 5,
    nome: "Restaurante Casa da Vó - Peixadas",
    slug: "restaurante-casa-da-vo-peixadas",
    categoria: ["Gastronomia"],
    descricao: "Especializado em peixadas e moquecas caseiras com tempero afetivo, sendo um dos restaurantes mais bem avaliados para saborear o melhor da pesca local.",
    endereco: "Rua Tocantins, Tucuruí - PA, 68455-761",
    telefone: "+55 94 98113-4670",
    especialidades: ["Peixadas", "Moquecas", "Pratos com peixe"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Rua Tocantins, Tucuruí - PA, 68455-761",
      telefone: "+55 94 98113-4670",
      nota: 4.5,
      quantidade_avaliacoes: 690,
      horarios: {
        segunda: "11:00–15:00",
        terça: "11:00–15:00",
        quarta: "11:00–15:00 e 18:00–22:00",
        quinta: "11:00–15:00 e 18:00–23:00",
        sexta: "11:00–15:00 e 18:00–23:00",
        sábado: "11:00–23:00",
        domingo: "11:00–15:00"
      },
      categorias: ["Restaurante"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Restaurante+Casa+da+V%C3%B3+Tucuru%C3%AD"
    }
  },
  {
    id: 6,
    nome: "Posto 10",
    slug: "posto-10",
    categoria: ["Gastronomia"],
    descricao: "Ponto de parada estratégico localizado na rodovia BR-422, oferecendo opções rápidas de churrasco e lanches para motoristas e viajantes na zona rural.",
    endereco: "Rodovia BR-422, km 4,5, s/n, zona rural, Tucuruí - PA, 68455-130",
    telefone: "+55 94 98113-4919",
    especialidades: ["Churrasco", "Fast food"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Rodovia BR-422, km 4,5, s/n, zona rural, Tucuruí - PA, 68455-130",
      telefone: "+55 94 98113-4919",
      nota: null,
      quantidade_avaliacoes: null,
      horarios: {
        segunda: "Fechado",
        terça: "18:00–12:00",
        quarta: "18:00–12:00",
        quinta: "18:00–12:00",
        sexta: "18:00–12:00",
        sábado: "18:00–12:00",
        domingo: "00:00–15:00"
      },
      categorias: ["Churrascaria", "Posto de gasolina"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Posto+10+Tucuru%C3%AD"
    }
  },
  {
    id: 7,
    nome: "Monalizza Pizzaria & Esfiharia - Tucuruí",
    slug: "monalizza-pizzaria-esfiharia-tucurui",
    categoria: ["Gastronomia"],
    descricao: "Pizzaria e esfiharia aconchegante situada na principal rodovia da cidade, perfeita para um jantar descontraído à noite com amigos ou família.",
    endereco: "BR-422, 902 - Santa Mônica, Tucuruí - PA, 68455-131",
    telefone: "+55 94 98115-3035",
    especialidades: ["Pizza", "Esfiha"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "BR-422, 902 - Santa Mônica, Tucuruí - PA, 68455-131",
      telefone: "+55 94 98115-3035",
      nota: 4.4,
      quantidade_avaliacoes: 159,
      horarios: {
        segunda: "18:30–23:30",
        terça: "18:30–23:30",
        quarta: "18:30–23:30",
        quinta: "18:30–23:30",
        sexta: "18:30–23:30",
        sábado: "18:30–23:30",
        domingo: "18:30–23:30"
      },
      categorias: ["Pizzaria"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Monalizza%20Pizzaria%20%26%20Esfiharia%20-%20Tucuru%C3%AD%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 8,
    nome: "Marquinhos Bar e Restaurante",
    slug: "marquinhos-bar-e-restaurante",
    categoria: ["Gastronomia"],
    descricao: "Estabelecimento muito popular em Santa Isabel, conhecido por suas carnes grelhadas e pratos fartos que atraem grande público todas as noites.",
    endereco: "Rua Trinta e Um de Março, 466, Santa Isabel, Tucuruí - PA, 68456-110",
    telefone: "+55 94 99154-4868",
    especialidades: ["Comida brasileira", "Carnes grelhadas"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "R. Trinta e Um de Março, 466 - Santa Isabel, Tucuruí - PA, 68456-110",
      telefone: "+55 94 99154-4868",
      nota: 4.5,
      quantidade_avaliacoes: 850,
      horarios: {
        segunda: "18:00–00:00",
        terça: "18:00–00:00",
        quarta: "18:00–00:00",
        quinta: "18:00–00:00",
        sexta: "18:00–00:00",
        sábado: "18:00–00:00",
        domingo: "18:00–00:00"
      },
      categorias: ["Restaurante brasileiro", "Restaurante"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Marquinhos%20Bar%20e%20Restaurante%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 9,
    nome: "Hamburgueria Do Cheff",
    slug: "hamburgueria-do-cheff",
    categoria: ["Gastronomia"],
    descricao: "Lanchonete especializada em hambúrgueres artesanais e combos recheados, ideal para quem busca um lanche saboroso e caprichado à noite.",
    endereco: "BR-422, 902, Santa Mônica, Tucuruí - PA, 68455-131",
    telefone: "+55 94 98128-9948",
    especialidades: ["Hambúrgueres", "Combos", "Porções"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "BR-422, 902 - Santa Mônica, Tucuruí - PA, 68455-131",
      telefone: "+55 94 98128-9948",
      nota: 4.5,
      quantidade_avaliacoes: 313,
      horarios: {
        segunda: "19:00–00:00",
        terça: "19:00–00:00",
        quarta: "19:00–00:00",
        quinta: "19:00–00:00",
        sexta: "19:00–00:00",
        sábado: "19:00–00:00",
        domingo: "19:00–00:00"
      },
      categorias: ["Hamburgueria", "Restaurante americano", "Fast food"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Hamburgueria%20Do%20Cheff%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 10,
    nome: "Guri Guloso Restaurante, Lanchonete e Pizzaria",
    slug: "guri-guloso-restaurante-lanchonete-e-pizzaria",
    categoria: ["Gastronomia"],
    descricao: "Opção versátil no bairro Bela Vista que oferece refeições rápidas, marmitex e pizzas com atendimento prolongado durante todo o dia.",
    endereco: "Rua Tocantins, Bela Vista, Tucuruí - PA",
    telefone: "+55 94 98152-2566",
    especialidades: ["Refeições", "Marmitex", "Pizza"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Rua Tocantins, Bela Vista, Tucuruí - PA",
      telefone: "+55 94 98152-2566",
      nota: 3.8,
      quantidade_avaliacoes: 4,
      horarios: {
        segunda: "08:00–00:00",
        terça: "08:00–00:00",
        quarta: "08:00–00:00",
        quinta: "08:00–00:00",
        sexta: "08:00–00:00",
        sábado: "08:00–00:00",
        domingo: "08:00–00:00"
      },
      categorias: ["Restaurante"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Guri+Guloso+Tucuru%C3%AD"
    }
  },
  {
    id: 11,
    nome: "Flutuante Janelas para o Tocantins",
    slug: "flutuante-janelas-para-o-tocantins",
    categoria: ["Gastronomia", "Natureza e Lazer"],
    descricao: "Restaurante flutuante único sobre as águas do Rio Tocantins, proporcionando uma vista espetacular da região e pratos à base de peixes frescos.",
    endereco: "Rua dos Milagres, s/n, Mangal, Tucuruí - PA, 68460-000",
    telefone: "+55 94 98432-5386",
    especialidades: ["Peixes", "Comida regional", "Chapa mista"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Rua dos Milagres, s/n - Mangal, Tucuruí - PA, 68460-000",
      telefone: "+55 94 98432-5386",
      nota: 4.3,
      quantidade_avaliacoes: 223,
      horarios: {
        segunda: "Fechado",
        terça: "10:00–17:00",
        quarta: "10:00–17:00",
        quinta: "10:00–17:00",
        sexta: "10:00–20:00",
        sábado: "10:00–20:00",
        domingo: "10:00–20:00"
      },
      categorias: ["Restaurante"],
      faixa_preco: "R$ 80–100",
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Flutuante%20Janelas%20para%20o%20Tocantins%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 12,
    nome: "Distrito7",
    slug: "distrito7",
    categoria: ["Gastronomia"],
    descricao: "Restaurante com cardápio variado focado em pratos regionais e petiscos, ideal para almoços e encontros noturnos em um ambiente agradável.",
    endereco: "Rua Tancredo Neves, Travessa São Francisco, 120, Tucuruí - PA, 68456-000",
    telefone: "+55 94 98113-4919",
    especialidades: ["Pratos variados", "Peixes", "Bebidas"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Rua Tancredo Neves, Travessa São Francisco, 120, Tucuruí - PA, 68456-000",
      telefone: "+55 94 98113-4919",
      nota: 4.0,
      quantidade_avaliacoes: 2,
      horarios: {
        segunda: "18:00–23:30",
        terça: "18:00–23:30",
        quarta: "17:00–00:00",
        quinta: "17:00–00:00",
        sexta: "17:30–00:00",
        sábado: "11:30–01:00",
        domingo: "11:30–00:00"
      },
      categorias: ["Restaurante"],
      faixa_preco: "R$ 40–160",
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Distrito7%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 13,
    nome: "Cilindrada Burger",
    slug: "cilindrada-burger",
    categoria: ["Gastronomia"],
    descricao: "Hamburgueria temática na COHAB famosa por seus burgers artesanais de excelente custo-benefício e molhos especiais.",
    endereco: "Alameda Oito, 101, COHAB, Tucuruí - PA, 68459-600",
    telefone: "+55 94 98128-3363",
    especialidades: ["Hambúrguer artesanal"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Alameda Oito, 101 - COHAB, Tucuruí - PA, 68459-600",
      telefone: "+55 94 98128-3363",
      nota: 4.6,
      quantidade_avaliacoes: 136,
      horarios: {
        segunda: "18:00–23:00",
        terça: "18:00–23:00",
        quarta: "18:00–23:00",
        quinta: "18:00–23:00",
        sexta: "18:00–23:00",
        sábado: "18:00–23:00",
        domingo: "18:00–23:00"
      },
      categorias: ["Hamburgueria"],
      faixa_preco: "R$ 20–40",
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Cilindrada%20Burger%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 14,
    nome: "Churrascaria Panela Velha",
    slug: "churrascaria-panela-velha",
    categoria: ["Gastronomia"],
    descricao: "Tradição em pratos caseiros e churrasco no bairro Bela Vista, servindo almoços fartos e saborosos com excelente atendimento.",
    endereco: "Avenida Brasília, 368, Bela Vista, Tucuruí - PA, 68455-005",
    telefone: "+55 94 98150-0405",
    especialidades: ["Churrasco", "Self-service"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Av. Brasília, nº 368 - Bela Vista, Tucuruí - PA, 68455-005",
      telefone: "+55 94 98150-0405",
      nota: 4.4,
      quantidade_avaliacoes: 34,
      horarios: {
        segunda: "11:00–15:00",
        terça: "11:00–15:00",
        quarta: "11:00–15:00",
        quinta: "11:00–15:00",
        sexta: "11:00–15:00",
        sábado: "11:00–15:00",
        domingo: "11:00–15:00"
      },
      categorias: ["Churrascaria", "Restaurante"],
      faixa_preco: null,
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Churrascaria%20Panela%20Velha%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  },
  {
    id: 15,
    nome: "Burguer Insano",
    slug: "burguer-insano",
    categoria: ["Gastronomia"],
    descricao: "Lanchonete dinâmica com foco em hambúrgueres potentes e saborosos, aberta até tarde na Avenida Raimundo Veridiano Cardoso.",
    endereco: "Avenida Raimundo Veridiano Cardoso, 416, Bela Vista, Tucuruí - PA, 68476-760",
    telefone: "+55 94 99223-3485",
    especialidades: ["Hambúrguer artesanal"],
    instagram: "",
    foto: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000&auto=format&fit=crop"
    ],
    google_maps: {
      endereco: "Av. Raimundo Veridiano Cardoso, 416 - Bela Vista, Tucuruí - PA, 68476-760",
      telefone: "+55 94 99223-3485",
      nota: null,
      quantidade_avaliacoes: null,
      horarios: {
        segunda: "18:00–23:45",
        terça: "18:00–23:45",
        quarta: "18:00–23:45",
        quinta: "18:00–23:45",
        sexta: "18:00–23:45",
        sábado: "18:00–23:45",
        domingo: "18:00–23:45"
      },
      categorias: ["Hamburgueria", "Fast food"],
      faixa_preco: "R$ 20–60",
      link_busca_google_maps: "https://www.google.com/maps/search/?api=1&query=Burguer%20Insano%2C%20Tucuru%C3%AD%2C%20Par%C3%A1%2C%20Brasil"
    }
  }
];
