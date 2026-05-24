# ZadyTach Core

[![NPM Version](https://img.shields.io/npm/v/%40zadytach%2Fcore)](https://www.npmjs.com/package/@zadytach/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Biblioteca utilitária para JavaScript/TypeScript com funções pequenas, objetivas e sem dependências pesadas.

## 📦 Instalação

```bash
npm install @zadytach/core
```

Também disponível com:

```bash
yarn add @zadytach/core
```

```bash
pnpm add @zadytach/core
```

## 🚀 Uso rápido

```ts
import {
  isEmail,
  isUrl,
  isDefined,
  equalsIgnoreCase,
  sleep,
  formatBytes,
  msToTime,
} from "@zadytach/core";

isEmail("test@example.com"); // true
isUrl("https://example.com"); // true
isDefined(null); // false

equalsIgnoreCase("Hello", "hello"); // true

await sleep(1000); // espera 1 segundo
msToTime(3661000); // "01h 01m 01s"

formatBytes(1024); // "1 KB"
```

## 📚 Módulos e funções

### ✅ `validation`

- `isEmail(email: string): boolean`
- `isUrl(url: string): boolean`
- `isNumeric(text: string): boolean`
- `isDefined(value: any): boolean`
- `isPromise(value: any): boolean`

### 🔎 `check`

- `equalsIgnoreCase(text1: string, text2: string): boolean`
- `includesIgnoreCase(text: string, query: string): boolean`

### ⏱️ `sleep` + `timers`

- `sleep(ms: number): Promise<void>`
- `setIntervalAsync(callback, delay, immediate?): Promise<void>`
- `setTimeoutAsync(callback, delay): Promise<void>`

### 🔁 `convert` + `ms`

- `msToTime(ms: number): string`
- `timeToMs(time: string): number`

### 📅 `date`

Funções utilitárias para data e horário.

### 🧮 `math`

Funções de matemática para uso geral.

### 📏 `format`

- `formatBytes(bytes: number): string`
- Outras funções de formatação.

### 🛠️ `with`

Helpers utilitários para cenários comuns.

## 🧩 Exemplo completo

```ts
import { isEmail, sleep, formatBytes } from "@zadytach/core";

async function run() {
  if (isEmail("user@example.com")) {
    console.log("Email válido!");
  }

  await sleep(2000);
  console.log("2 segundos se passaram");

  const fileSize = formatBytes(5242880);
  console.log(`Tamanho: ${fileSize}`); // "5 MB"
}

run();
```

## 🏗️ Estrutura do projeto

```txt
src/
├── index.ts
└── functions/
    ├── check.ts
    ├── convert.ts
    ├── date.ts
    ├── format.ts
    ├── math.ts
    ├── ms.ts
    ├── sleep.ts
    ├── timers.ts
    ├── validation.ts
    ├── with.ts
    └── index.ts
```

## 🔧 Desenvolvimento

```bash
npm run build
```

Compila TypeScript para JavaScript em `build/`.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você encontrou um bug ou tem sugestões, abra uma [issue](https://github.com/HelzadyDev/BlackMagic-Core/issues).

## 📄 Licença

Distribuído sob licença MIT. Veja [LICENSE](./LICENSE).

## 👨‍💻 Autor

**HelzadyDev**

- GitHub: [@HelzadyDev](https://github.com/HelzadyDev)
- npm: [@zadytach](https://www.npmjs.com/~zadytach)