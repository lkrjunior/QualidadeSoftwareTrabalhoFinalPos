[![Build Status](https://travis-ci.org/lkrjunior/QualidadeSoftwareTrabalhoFinalPos.svg?branch=master)](https://travis-ci.org/lkrjunior/QualidadeSoftwareTrabalhoFinalPos)

Critérios de Aceite - Trabalho Final de Qualidade de Software<br>

Titulo	Teste do login sem informar o e-mail<br>
Dado	que quero logar no site<br>
Quando	não informo o e-mail na página de login<br>
Então	exibi a mensagem "Por favor preencha o e-mail corretamente."<br>

Titulo	Teste do login com e-mail inválido<br>
Dado	que quero logar no site<br>
Quando	informo meu e-mail de forma errada na página de login<br>
Então	exibi a mensagem "Por favor preencha o e-mail corretamente."<br>

Titulo	Teste do login sem informar a senha<br>
Dado	que quero logar no site<br>
Quando	não informo a senha na página de login<br>
Então	exibi a mesangem "Por favor preencha a sua senha."<br>

Titulo	Teste do login com usuário e/ou senha inválido<br>
Dado	que quero logar no site<br>
Quando	informo meu e-mail e/ou senha inválido(s) na página de login<br>
Então	exibi a mensagem "E-mail ou senha não confere."<br>

Titulo	Validar e-mail já cadastrado na loja<br>
Dado	que quero me cadastrar na loja<br>
Quando	informo um e-mail que já esta cadastrado na loja<br>
Então	exibi a mensagem "O e-mail informado já está cadastrado em nossa loja!"<br>

Titulo	Pesquisando um item no site<br>
Dado	que quero encontrar um produto especifico na loja<br>
Quando	informo a descrição no campo de pesquisa da tela inicial da loja<br>
Então	deve encontrar o item informado no campo de pesquisa<br>

Titulo	Adicionando um item na sacola<br>
Dado	que quero adicionar um item na sacola de compras<br>
Quando	pesquiso um item e clico em "Adicionar à sacola"<br>
Então	o item deve ser incluído na sacola de compras<br>

Titulo	Remover um item da sacola<br>
Dado	que quero remover um item já adicionado na sacola de compras<br>
Quando	entro na sacola e clico no botão de remover o item da sacola<br>
Então	deve remover o item da sacola de compras<br>

Titulo	Receber as novidades do site<br>
Dado	que quero receber as novidades do site<br>
Quando	informo meu e-mail no campo para receber as novidades<br>
Então	exibi a mensagem "E-mail cadastrado com sucesso"<br>

Titulo	Validar valor do frete na minha sacola<br>
Dado	que quero saber o valor do frete das minhas compras<br>
Quando	entro na sacola de compras e existe itens adicionados a ela<br>
Então	informo meu cep no campo do frete e valido se é exibido o valores e as modalidades dos fretes disponiveis<br>