# Funcionalidade: Marcar herói como favorito

## Cenário: Marcar herói existente como favorito

Dado que a API da Marvel está disponível
Quando o usuário marca o herói como favorito
Então o sistema faz uma chamada à API da Marvel para obter as informações completas do herói
E o sistema armazena o herói marcado como favorito

## Cenário: Marcar herói inexistente como favorito

Dado que a API da Marvel está disponível
Quando o usuário tenta marcar um herói inexistente como favorito
Então o sistema faz uma chamada à API da Marvel para buscar o herói correspondente
E o sistema não encontra o herói
E o sistema retorna um erro informando que o herói não existe
