# Saúde+ - Aplicativo Educacional de Saúde

## Visão Geral
Aplicativo web educacional desenvolvido com Vue.js 3 focado em promover hábitos saudáveis e prevenir doenças não transmissíveis, alinhado com a ODS 3.4 (Objetivo de Desenvolvimento Sustentável 3, meta 3.4).

## Objetivo
Educar usuários com dicas de saúde e controle básico de hábitos diários.

## Problema Resolvido
Falta de orientação e rotina saudável diária.

## ODS Atendida
ODS 3, Meta 3.4: Reduzir doenças não transmissíveis por meio da prevenção e promoção da saúde.

## Funcionalidades Principais

### 1. Dashboard
- Resumo diário de hábitos registrados
- Dica de saúde do dia
- Visualização de estatísticas semanais
- Ações rápidas para outras seções

### 2. Rastreador de Hábitos
- Registro de água consumida (litros)
- Registro de horas de sono
- Registro de minutos de exercício
- Registro de refeições saudáveis
- Visualização de hábitos do dia
- Metas diárias recomendadas

### 3. Conteúdo Educacional
- Biblioteca de artigos sobre saúde
- Categorias: Prevenção, Nutrição, Exercícios, Saúde Mental
- Artigos sobre:
  - Prevenção de Diabetes
  - Hipertensão e Saúde Cardiovascular
  - Saúde Mental e Bem-estar
  - Nutrição Balanceada
  - Atividade Física Regular

### 4. Visualização de Progresso
- Gráficos interativos com Chart.js
- Estatísticas semanais de todos os hábitos
- Barras de progresso em relação às metas
- Resumo de metas ativas e concluídas

### 5. Sistema de Metas
- Criação de metas personalizadas de saúde
- Categorização por tipo (água, sono, exercício, nutrição, mental)
- Data alvo para alcançar metas
- Marcação de metas como concluídas
- Gerenciamento completo (criar, editar, deletar)

## Stack Tecnológico

### Frontend
- **Vue.js 3**: Framework progressivo JavaScript
- **Vue Router**: Navegação entre páginas
- **Pinia**: Gerenciamento de estado
- **Chart.js + vue-chartjs**: Visualizações gráficas
- **Tailwind CSS**: Framework CSS utilitário
- **Vite**: Build tool e dev server

### Armazenamento
- **LocalStorage**: Persistência de dados no navegador

## Estrutura do Projeto

```
/
├── src/
│   ├── views/          # Páginas principais
│   │   ├── Dashboard.vue
│   │   ├── Habits.vue
│   │   ├── Education.vue
│   │   ├── Progress.vue
│   │   └── Goals.vue
│   ├── stores/         # Pinia stores
│   │   ├── habitStore.js
│   │   └── goalStore.js
│   ├── data/           # Dados estáticos
│   │   └── healthTips.js
│   ├── router/         # Configuração de rotas
│   │   └── index.js
│   ├── App.vue         # Componente principal
│   ├── main.js         # Entry point
│   └── style.css       # Estilos Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Arquitetura de Dados

### Habit Store
- Gerencia registros de hábitos diários
- Persiste dados em LocalStorage
- Calcula estatísticas semanais
- Fornece histórico de hábitos por data e tipo

### Goal Store
- Gerencia metas de saúde
- CRUD completo de metas
- Status de conclusão
- Persistência em LocalStorage

## Conteúdo Educacional
O aplicativo inclui 7 dicas diárias de saúde e 5 artigos educacionais completos sobre:
- Prevenção de diabetes
- Controle de hipertensão
- Saúde mental
- Nutrição balanceada
- Atividade física

## Configuração de Desenvolvimento

### Servidor de Desenvolvimento
```bash
npm run dev
```
- Roda em: http://0.0.0.0:5000
- Configurado para aceitar requisições de qualquer host (Replit)

### Build de Produção
```bash
npm run build
```
