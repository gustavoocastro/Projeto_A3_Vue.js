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

<img width="1389" height="859" alt="image" src="https://github.com/user-attachments/assets/71b5ae77-5cd4-4d07-96df-d04af1e11f93" />

### 2. Rastreador de Hábitos
- Registro de água consumida (litros)
- Registro de horas de sono
- Registro de minutos de exercício
- Registro de refeições saudáveis
- Visualização de hábitos do dia
- Metas diárias recomendadas

<img width="1387" height="861" alt="image" src="https://github.com/user-attachments/assets/e7bb018e-4fc5-4631-8597-87294eac9158" />

### 3. Conteúdo Educacional
- Biblioteca de artigos sobre saúde
- Categorias: Prevenção, Nutrição, Exercícios, Saúde Mental
- Artigos sobre:
  - Prevenção de Diabetes
  - Hipertensão e Saúde Cardiovascular
  - Saúde Mental e Bem-estar
  - Nutrição Balanceada
  - Atividade Física Regular
 
<img width="1386" height="861" alt="image" src="https://github.com/user-attachments/assets/9e0a9589-eb24-4b21-a90a-e5e3969196ab" />

### 4. Visualização de Progresso
- Gráficos interativos com Chart.js
- Estatísticas semanais de todos os hábitos
- Barras de progresso em relação às metas
- Resumo de metas ativas e concluídas

<img width="1389" height="860" alt="image" src="https://github.com/user-attachments/assets/dcbd814c-dae0-4771-947c-d3b472e5c8f9" />

### 5. Sistema de Metas
- Criação de metas personalizadas de saúde
- Categorização por tipo (água, sono, exercício, nutrição, mental)
- Data alvo para alcançar metas
- Marcação de metas como concluídas
- Gerenciamento completo (criar, editar, deletar)

<img width="1387" height="861" alt="image" src="https://github.com/user-attachments/assets/d2c8c881-8b01-4eb8-a4fe-07d458ccbdad" />

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
