export const healthTips = [
  {
    id: 1,
    title: 'Hidratação é essencial',
    content: 'Beba pelo menos 2 litros de água por dia. A água ajuda a manter o corpo funcionando corretamente, melhora a digestão e a circulação.',
    category: 'hydration',
    icon: '💧'
  },
  {
    id: 2,
    title: 'Movimente-se regularmente',
    content: 'Faça pelo menos 30 minutos de atividade física moderada por dia. Caminhadas, dança ou exercícios em casa são ótimas opções.',
    category: 'exercise',
    icon: '🏃'
  },
  {
    id: 3,
    title: 'Durma bem',
    content: 'Adultos precisam de 7-9 horas de sono por noite. Um sono de qualidade previne doenças cardíacas, diabetes e obesidade.',
    category: 'sleep',
    icon: '😴'
  },
  {
    id: 4,
    title: 'Alimentação balanceada',
    content: 'Inclua frutas, verduras, legumes e proteínas em suas refeições. Evite alimentos ultraprocessados e excesso de açúcar.',
    category: 'nutrition',
    icon: '🥗'
  },
  {
    id: 5,
    title: 'Reduza o estresse',
    content: 'Pratique meditação, respiração profunda ou hobbies relaxantes. O estresse crônico pode levar a hipertensão e outras doenças.',
    category: 'mental',
    icon: '🧘'
  },
  {
    id: 6,
    title: 'Controle a pressão arterial',
    content: 'Reduza o consumo de sal e alimentos processados. Monitore sua pressão regularmente para prevenir hipertensão.',
    category: 'prevention',
    icon: '❤️'
  },
  {
    id: 7,
    title: 'Previna o diabetes',
    content: 'Mantenha um peso saudável, pratique exercícios e limite açúcares. A prevenção é a melhor estratégia contra o diabetes tipo 2.',
    category: 'prevention',
    icon: '🩺'
  }
]

export const educationalContent = [
  {
    id: 1,
    title: 'Prevenção de Diabetes',
    description: 'Aprenda como prevenir o diabetes tipo 2 através de hábitos saudáveis',
    category: 'prevention',
    icon: '🩺',
    content: `
      <h3>O que é Diabetes Tipo 2?</h3>
      <p>O diabetes tipo 2 ocorre quando o corpo não produz insulina suficiente ou não a utiliza adequadamente.</p>
      
      <h3>Fatores de Risco</h3>
      <ul>
        <li>Sobrepeso e obesidade</li>
        <li>Sedentarismo</li>
        <li>Alimentação rica em açúcares e gorduras</li>
        <li>Histórico familiar</li>
      </ul>
      
      <h3>Como Prevenir</h3>
      <ul>
        <li>Mantenha um peso saudável</li>
        <li>Pratique atividade física regularmente (150 min/semana)</li>
        <li>Reduza o consumo de açúcar e alimentos processados</li>
        <li>Inclua fibras na alimentação (grãos integrais, frutas, vegetais)</li>
        <li>Faça check-ups regulares</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'Hipertensão e Saúde Cardiovascular',
    description: 'Entenda como manter seu coração saudável e prevenir a pressão alta',
    category: 'prevention',
    icon: '❤️',
    content: `
      <h3>O que é Hipertensão?</h3>
      <p>A hipertensão arterial (pressão alta) é uma condição em que a força do sangue contra as paredes das artérias está constantemente elevada.</p>
      
      <h3>Riscos da Hipertensão</h3>
      <ul>
        <li>Doenças cardíacas</li>
        <li>AVC (Acidente Vascular Cerebral)</li>
        <li>Problemas renais</li>
        <li>Problemas de visão</li>
      </ul>
      
      <h3>Prevenção</h3>
      <ul>
        <li>Reduza o consumo de sal (máximo 5g/dia)</li>
        <li>Pratique exercícios aeróbicos regularmente</li>
        <li>Mantenha peso adequado</li>
        <li>Evite álcool em excesso</li>
        <li>Não fume</li>
        <li>Gerencie o estresse</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'Saúde Mental e Bem-estar',
    description: 'Cuidar da mente é tão importante quanto cuidar do corpo',
    category: 'mental',
    icon: '🧘',
    content: `
      <h3>Por que a Saúde Mental é Importante?</h3>
      <p>A saúde mental afeta como pensamos, sentimos e agimos. Ela influencia nossa capacidade de lidar com o estresse e tomar decisões.</p>
      
      <h3>Sinais de Alerta</h3>
      <ul>
        <li>Alterações de humor constantes</li>
        <li>Afastamento social</li>
        <li>Mudanças no apetite ou sono</li>
        <li>Dificuldade de concentração</li>
        <li>Falta de energia</li>
      </ul>
      
      <h3>Práticas Saudáveis</h3>
      <ul>
        <li>Meditação e mindfulness (10-15 min/dia)</li>
        <li>Exercícios físicos (liberam endorfinas)</li>
        <li>Sono adequado (7-9 horas)</li>
        <li>Conexões sociais de qualidade</li>
        <li>Hobbies e atividades prazerosas</li>
        <li>Busque ajuda profissional quando necessário</li>
      </ul>
    `
  },
  {
    id: 4,
    title: 'Nutrição Balanceada',
    description: 'Aprenda os fundamentos de uma alimentação saudável',
    category: 'nutrition',
    icon: '🥗',
    content: `
      <h3>Princípios da Alimentação Saudável</h3>
      <p>Uma dieta balanceada fornece todos os nutrientes necessários para o bom funcionamento do corpo.</p>
      
      <h3>Grupos Alimentares Essenciais</h3>
      <ul>
        <li><strong>Frutas e Vegetais:</strong> 5 porções/dia - vitaminas e minerais</li>
        <li><strong>Grãos Integrais:</strong> Arroz integral, aveia, quinoa - fibras e energia</li>
        <li><strong>Proteínas:</strong> Peixes, ovos, legumes - construção muscular</li>
        <li><strong>Laticínios:</strong> Leite, iogurte - cálcio para ossos</li>
        <li><strong>Gorduras Saudáveis:</strong> Azeite, abacate, castanhas</li>
      </ul>
      
      <h3>Dicas Práticas</h3>
      <ul>
        <li>Evite alimentos ultraprocessados</li>
        <li>Reduza açúcar e sal</li>
        <li>Beba água ao invés de refrigerantes</li>
        <li>Cozinhe mais em casa</li>
        <li>Coma devagar e com atenção</li>
      </ul>
    `
  },
  {
    id: 5,
    title: 'Atividade Física Regular',
    description: 'Os benefícios do exercício para prevenir doenças crônicas',
    category: 'exercise',
    icon: '🏃',
    content: `
      <h3>Benefícios da Atividade Física</h3>
      <p>O exercício regular é uma das melhores maneiras de prevenir doenças não transmissíveis.</p>
      
      <h3>Recomendações</h3>
      <ul>
        <li><strong>Adultos:</strong> 150 minutos de atividade moderada por semana</li>
        <li><strong>Ou:</strong> 75 minutos de atividade intensa por semana</li>
        <li><strong>Força:</strong> 2x por semana exercícios de fortalecimento</li>
      </ul>
      
      <h3>Tipos de Exercício</h3>
      <ul>
        <li><strong>Aeróbico:</strong> Caminhada, corrida, natação, dança</li>
        <li><strong>Força:</strong> Musculação, exercícios com peso corporal</li>
        <li><strong>Flexibilidade:</strong> Yoga, alongamento</li>
        <li><strong>Equilíbrio:</strong> Tai chi, pilates</li>
      </ul>
      
      <h3>Dicas para Começar</h3>
      <ul>
        <li>Comece devagar e aumente gradualmente</li>
        <li>Escolha atividades que você goste</li>
        <li>Encontre um parceiro de exercícios</li>
        <li>Defina metas realistas</li>
        <li>Celebre suas conquistas</li>
      </ul>
    `
  }
]
