#language: pt

Funcionalidade: Buscar Debêntures
  Como usuário
  Preciso buscar por debêntures
  Para encontrar informações em específico.

  Contexto: 
    Dado que estou na homepage da anbima    

  Cenário: Realizar a busca de uma debênture por codigo B3
    Quando realizo uma busca pela debênture "AALM11"
    Então visualizo a debênture "AALM11" no resultado da busca


  Cenário: Realizar a busca de uma debênture inexistente
    Quando realizo uma busca por código B3 "ALM1"
    Então visualizo uma mensagem e uma opção para seguir o fluxo

  Cenário: Acessar detalhes da debênture através de uma busca
    Quando realizo uma busca pelo código B3 "AALM11"
    E acesso ver detalhes
    Então visualizo características da debênture