## Tópicos para entender o funcionamento

1. SHA1 (Secure Hash Algirtm): funções hash criptográficas projetadas pela Agência de Segurança Nacional dos EUA (encriptação de 40 dígitos)
2. Blob: armazena metadados dos arquivos
3. Tree: armazenam blobs, mas também podem apontar para outras Trees
4. Commit: aponta para uma árvore, para um pai (commit base), para autor, mensagem (comentário) e timestamp (também possui seu SHA1) -> com isso todo o histórico de mudanças e atualizações é muito confiável e transparente

[Estrutura Git.png](https://github.com/joaopedroimamura/dio-desafio-primeiro-repositorio/blob/main/Introdução%20ao%20Git%20e%20ao%20GitHub/Estrutura%20Git.png)
