# Guia de Contribuição

## Começando

Antes de contribuir, por favor:

1. Faça fork do repositório
2. Crie uma branch para sua feature/correção: `git checkout -b feature/nome-da-feature`
3. Instale as dependências: `npm install`
4. Verifique se os testes passam: `npm test`

## Padrões de Código

- Use ESLint e Prettier configurados no projeto
- Mantenha 100% de cobertura de testes
- Documente novas funcionalidades
- Siga os princípios SOLID e DRY

## Versionamento

Este projeto segue [Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/) e usa semantic-release para automatizar o processo de versionamento:

- **MAJOR** (X.0.0) - quando há mudanças incompatíveis com versões anteriores
- **MINOR** (0.X.0) - quando adiciona funcionalidade mantendo compatibilidade
- **PATCH** (0.0.X) - quando corrige bugs mantendo compatibilidade

### Fluxo de Desenvolvimento e Release

1. **Desenvolvimento**:
   - Crie uma branch a partir da `main`: `git checkout -b feature/nome-da-feature`
   - Desenvolva suas alterações
   - Faça commits seguindo o Conventional Commits (ver seção abaixo)

2. **Pull Request**:
   - Abra um PR da sua branch para a `main`
   - Certifique-se que todos os testes estão passando
   - Aguarde a revisão e aprovação

3. **Release Automática**:
   Após o merge do PR na `main`, o semantic-release irá automaticamente:
   - Analisar os commits do PR
   - Determinar a próxima versão
   - Atualizar o CHANGELOG.md
   - Criar uma nova tag
   - Publicar no NPM
   - Criar uma release no GitHub

### Commits

É essencial seguir o [Conventional Commits](https://www.conventionalcommits.org/pt-br), pois o semantic-release usa estas mensagens para determinar a próxima versão:

- `feat:` - nova funcionalidade (MINOR)
- `fix:` - correção de bug (PATCH)
- `docs:` - alteração em documentação
- `chore:` - alterações em processos de build, ferramentas, etc
- `refactor:` - refatoração de código
- `test:` - adição ou modificação de testes
- `BREAKING CHANGE:` - mudanças incompatíveis (MAJOR)

Exemplo:
```bash
feat(auth): adiciona autenticação via Google OAuth2

fix(cache): corrige problema de invalidação do cache

feat!: remove suporte para Node 14
BREAKING CHANGE: Node 14 não é mais suportado
```

### Processo de Pull Request

1. **Preparação**:
   - Mantenha seu PR focado em uma única mudança
   - Adicione testes para novas funcionalidades
   - Atualize a documentação quando necessário

2. **Descrição do PR**:
   Descreva claramente:
   - Qual o problema resolvido?
   - Como foi resolvido?
   - Há breaking changes?
   - Screenshots (se relevante)

3. **Revisão**:
   - Aguarde a revisão do time
   - Faça os ajustes solicitados
   - Após aprovação, o PR será mergeado na `main`

4. **Release**:
   - A release será gerada automaticamente após o merge
   - Não é necessário criar tags ou versões manualmente
   - O semantic-release cuidará de todo o processo

### Reportando Bugs

Ao reportar um bug, inclua:

- Versão do projeto
- Passos para reproduzir
- Comportamento esperado vs atual
- Logs de erro (se disponível)
- Ambiente (SO, navegador, etc)

### Ambiente de Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar testes
pnpm test

# Rodar test com watch
pnpm test:watch

# Rodar linting
pnpm run lint

# Formatar código
pnpm run format
```
