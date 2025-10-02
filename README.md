 # 🦊 Grep RTB

 > **Seu buscador de repositórios, rápido e estiloso!**

 ---

 ## 🚀 Como rodar o Grep RTB

 1. **Clone o repositório** (se ainda não fez isso):
	 ```sh
	 git clone <url-do-repo>
	 cd electron-grep-rtb
	 ```

 2. **Instale as dependências:**
	 ```sh
	 npm install
	 ```

 3. **Inicie o app:**
	 ```sh
	 npm run electron
	 ```

 ---

 ## 💡 Dicas
 - Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
 - O comando `npm run electron` vai abrir o Grep RTB em modo desktop, com toda a experiência visual pensada para você.
 - Personalize o app do seu jeito! O código está em `src/`.

 ---

 ## 📁 Estrutura principal
 ```
 public/           # Arquivos estáticos
 src/              # Código-fonte principal
	app/            # Componentes e configs do app
	util/           # Utilitários e ícones
 main.js           # Entrada Electron
 preload.js        # Preload Electron
 ```

 ---

 ## 🦊 Sobre
 O **Grep RTB** foi criado para facilitar sua vida na busca e visualização de repositórios, com uma interface moderna e intuitiva.

 ---

 Feito com 💜 por Kaio Valls
 
```mermaid
graph TD;
    %% --- Subgrafos para cada Processo ---
    subgraph "Cliente (Interface do Usuário / Processo de Renderização)"
        style Client fill:#e0f2fe,stroke:#0ea5e9,stroke-width:2px
        UI["Aplicação Angular<br>Componentes, Serviços e UI"]
    end

    subgraph "Orquestrador da Aplicação (Processo Principal)"
        style Orchestrator fill:#dcfce7,stroke:#22c55e,stroke-width:2px
        Main["Processo Principal Electron<br>Node.js"]
        Preload["Script Preload<br>(Context Bridge)"]
    end

    subgraph "Backend (Processo Filho)"
        style Backend fill:#ffedd5,stroke:#f97316,stroke-width:2px
        Quarkus["Processo Filho Quarkus<br>Java / JVM"]
        API["API RESTful<br>Endpoints JAX-RS"]
        Logic["Lógica de Negócio<br>Serviços, JGit, Panache"]
        DB[("Banco de Dados<br>SQLite")]
        
        Quarkus -- Inicia --> API;
        API -- Invoca --> Logic;
        Logic -- Acessa --> DB;
    end

    %% --- Fluxos de Comunicação ---
    User[Usuário] -- "1. Interage com a UI" --> UI;
    
    UI -- "2a. Requisição HTTP<br>(Operações de Dados)" --> API;
    API -- "3. Resposta JSON" --> UI;
    
    UI -.-> Preload;
    Preload -- "2b. Mensagem IPC<br>(Operações de Sistema)" --> Main;
    
    Main -- "Inicia e Gerencia o Ciclo de Vida" --> Quarkus;
    
    %% --- Estilos das Linhas ---
    linkStyle 1,2 stroke:#f97316,stroke-width:2px;
    linkStyle 3,4 stroke:#22c55e,stroke-width:2px,stroke-dasharray: 5 5;
    linkStyle 5 stroke:#0ea5e9,stroke-width:2px,stroke-dasharray: 2 2;
```
