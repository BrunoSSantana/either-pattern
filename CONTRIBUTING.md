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

Este projeto segue [Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/):

- **MAJOR** (X.0.0) - quando há mudanças incompatíveis com versões anteriores
- **MINOR** (0.X.0) - quando adiciona funcionalidade mantendo compatibilidade
- **PATCH** (0.0.X) - quando corrige bugs mantendo compatibilidade

### Processo de Release

Para publicar uma nova versão:

1. Certifique-se que todas as alterações desejadas estão na branch `main`
2. Certifique-se que todos os testes estão passando
3. Atualize a versão no `package.json` seguindo SemVer
4. Crie e faça push de uma tag com prefixo 'v':
   ```bash
   git tag v1.0.0  # Substitua pelo número da versão apropriado
   git push origin v1.0.0
   ```
5. O GitHub Actions irá automaticamente:
   - Executar os testes
   - Fazer o build do projeto
   - Publicar no NPM

### Commits

Utilize [Conventional Commits](https://www.conventionalcommits.org/pt-br) para suas mensagens de commit:

- `feat:` - nova funcionalidade
- `fix:` - correção de bug
- `docs:` - alteração em documentação
- `chore:` - alterações em processos de build, ferramentas, etc
- `refactor:` - refatoração de código
- `test:` - adição ou modificação de testes

Exemplo:
```bash
feat(auth): adiciona autenticação via Google OAuth2
# ou
feat(api): implementa endpoint de busca de usuários

fix(cache): corrige problema de invalidação do cache
# ou
fix(ui): ajusta alinhamento do botão de login em telas pequenas

docs(api): atualiza documentação dos endpoints REST
# ou
docs(readme): adiciona instruções de instalação do Docker

chore(deps): atualiza react para versão 18.2.0
# ou
chore(ci): configura GitHub Actions para deploy automático

refactor(utils): simplifica função de formatação de data
# ou
refactor(components): migra componentes para TypeScript
```

### Checklist de Release

Antes de criar uma nova tag, verifique:

- [ ] Todos os testes estão passando
- [ ] A documentação está atualizada
- [ ] O CHANGELOG.md foi atualizado
- [ ] A versão no package.json está correta
- [ ] Todas as alterações foram revisadas

### Processo de Pull Request

1. Mantenha seu PR focado em uma única mudança
2. Adicione testes para novas funcionalidades
3. Atualize a documentação quando necessário
4. Descreva claramente suas mudanças no PR:
   - Qual o problema resolvido?
   - Como foi resolvido?
   - Há breaking changes?
   - Screenshots (se relevante)

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
