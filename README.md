# BlackMagic-Core

[![NPM Version](https://img.shields.io/npm/v/%40zadytach%2Fcore)](https://www.npmjs.com/package/@zadytach/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Uma coleção de funções utilitárias simples, leves e eficientes para tarefas comuns em projetos JavaScript/TypeScript.

## 📦 Instalação

```bash
npm install @zadytach/core
```

ou com yarn:

```bash
yarn add @zadytach/core
```

ou com pnpm:

```bash
pnpm add @zadytach/core
```

## 🚀 Uso Rápido

```typescript
import {
  isEmail,
  isUrl,
  isDefined,
  equalsIgnoreCase,
  sleep,
  formatBytes,
  msToTime,
} from "@zadytach/core";

// Validação
isEmail("test@example.com"); // true
isUrl("https://example.com"); // true
isDefined(null); // false

// String
equalsIgnoreCase("Hello", "hello"); // true

// Tempo
await sleep(1000); // aguarda 1 segundo
msToTime(3661000); // "01h 01m 01s"

// Formatação
formatBytes(1024); // "1 KB"
```

## 📚 Funções Disponíveis

### ✅ Validação (`validation`)

- **`isEmail(email: string): boolean`** - Valida endereço de email
- **`isUrl(url: string): boolean`** - Valida URL
- **`isNumeric(text: string): boolean`** - Valida se é numérico
- **`isDefined(value: any): boolean`** - Verifica se valor está definido
- **`isPromise(value: any): boolean`** - Verifica se é uma Promise

### 🔍 Verificação (`check`)

- **`equalsIgnoreCase(text1: string, text2: string): boolean`** - Compara strings ignorando maiúsculas
- **`includesIgnoreCase(text: string, query: string): boolean`** - Busca em string ignorando maiúsculas

### ⏱️ Tempo (`timers` & `sleep`)

- **`sleep(ms: number): Promise<void>`** - Aguarda tempo especificado
- **`setIntervalAsync(callback, delay, immediate?): Promise<void>`** - Intervalo assíncrono
- **`setTimeoutAsync(callback, delay): Promise<void>`** - Timeout assíncrono

### 🔄 Conversão (`convert` & `ms`)

- **`msToTime(ms: number): string`** - Converte milissegundos para formato legível (ex: "01h 30m 45s")
- **`timeToMs(time: string): number`** - Converte formato de tempo para milissegundos

### 📅 Data (`date`)

- Funções para manipulação e formatação de datas

### 🧮 Matemática (`math`)

- Funções utilitárias de matemática

### 📏 Formatação (`format`)

- **`formatBytes(bytes: number): string`** - Formata bytes para unidade legível (KB, MB, GB, etc)
- Outras funções de formatação

### 🛠️ Utilitários (`with`)

- Funções utilitárias gerais

## 📂 Estrutura do Projeto

```
src/
├── index.ts
└── functions/
    ├── check.ts          # Verificações de string
    ├── convert.ts        # Funções de conversão
    ├── date.ts           # Manipulação de datas
    ├── format.ts         # Formatação de dados
    ├── math.ts           # Funções matemáticas
    ├── ms.ts             # Conversão de tempo
    ├── sleep.ts          # Delay assíncrono
    ├── timers.ts         # Timers assíncronos
    ├── validation.ts     # Validações
    ├── with.ts           # Utilitários gerais
    └── index.ts          # Exportações
```

## 🔧 Desenvolvimento

### Build

```bash
npm run build
```

Compila TypeScript para JavaScript em `build/`.

### Scripts Disponíveis

- `npm run build` - Compila o projeto

## 📝 Exemplo Completo

```typescript
import { isEmail, isDefined, sleep, formatBytes } from "@zadytach/core";

async function exampleFunction() {
  // Validar email
  if (isEmail("user@example.com")) {
    console.log("Email válido!");
  }

  // Aguardar 2 segundos
  await sleep(2000);
  console.log("2 segundos se passaram");

  // Formatar tamanho de arquivo
  const fileSize = formatBytes(5242880);
  console.log(`Tamanho: ${fileSize}`); // "Tamanho: 5 MB"
}

exampleFunction();
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se encontrou um bug ou tem sugestões, abra uma [issue](https://github.com/HelzadyDev/BlackMagic-Core/issues).

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**HelzadyDev**

- GitHub: [@HelzadyDev](https://github.com/HelzadyDev)
- npm: [@zadytach](https://www.npmjs.com/~zadytach)
