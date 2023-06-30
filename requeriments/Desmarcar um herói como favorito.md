# Funcionalidade: Desmarcar herói como favorito

## Cenário: Desmarcar herói existente como favorito

Dado que a API da Marvel está disponível
E que o herói está marcado como favorito no sistema
Quando o usuário desmarca o herói como favorito
Então o sistema remove o herói da lista de favoritos

## Cenário: Desmarcar herói inexistente como favorito

Dado que a API da Marvel está disponível
E que o herói não está marcado como favorito no sistema
Quando o usuário tenta desmarcar um herói inexistente como favorito
Então o sistema retorna um erro informando que o herói não existe
