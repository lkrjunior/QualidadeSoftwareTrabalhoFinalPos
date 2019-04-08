describe('Trabalho Final Qualidade de Software', function() {

	//Const
	const mensagemElementoNaoEncontrado = "Elemento não encontrado";
	const mensagemBotaoNaoEncontrado = "Botão não encontrado";
	const mensagemNaoEncontrada = "Mensagem não encontrada";
	const mensagemLoginInvalidoExpect = "Por favor preencha o e-mail corretamente.";
	
	//Var ExpectedConditions
	var expectedConditions = protractor.ExpectedConditions;
	var timeOutExpectedConditions = 10000;
	
	//Var Login
	var botaoLoginEntrar = $('.last > a');
	var campoLogin = element(by.name('logar_email'));
	var campoSenha = element(by.name('logar_senha'));
	var botaoLogin = $('.bt-login');

	//Var Mensagens
	var alertMensagem = $('.message-alert');

	//Var Pesquisar
	var campoPesquisar = element(by.id('instantSearch'));
	//var alertMensagemPesquisar = $('.qtd-iten > span > span');
	var alertMensagemPesquisar = element.all(by.css('.qtd-iten > span > span')).first();
	var mensagemPesquisarExpect = "encontrados";

	//Var Adicionar itens
	var itemParaAdicionarNaSacola = element.all(by.css('.size-item > span')).first();
	var botaoAdicionarItemNaSacola = element.all(by.css('.btn-add-area > a')).first()
	var mensagemItemAdicionadoNaSacola = "Adicionado com sucesso";

	//Function BeforeEach
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.radanesportes.com.br/');
		browser.manage().window().setSize(1600, 1000);
	});

	//Functions
	efetuarLogin = function (email, senha) {
		botaoLoginEntrar.click();
		
		browser.wait(expectedConditions.visibilityOf(campoLogin), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		campoLogin.sendKeys(email);

		browser.wait(expectedConditions.visibilityOf(campoSenha), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		campoSenha.sendKeys(senha);

		browser.wait(expectedConditions.visibilityOf(botaoLogin), timeOutExpectedConditions, mensagemBotaoNaoEncontrado);
		botaoLogin.click();
	}
	
	pesquisarProduto = function (pesquisa) {
		browser.wait(expectedConditions.visibilityOf(campoPesquisar), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		campoPesquisar.sendKeys(pesquisa);
		campoPesquisar.sendKeys(protractor.Key.ENTER);
	}

	adicionarItemNaSacola = function () {
		browser.wait(expectedConditions.visibilityOf(itemParaAdicionarNaSacola), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		itemParaAdicionarNaSacola.click();
		
		browser.wait(expectedConditions.visibilityOf(botaoAdicionarItemNaSacola), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		botaoAdicionarItemNaSacola.click();
	}

	//Testes
	it('Teste do login inválido', function() {
		efetuarLogin('teste', '');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toBe(mensagemLoginInvalidoExpect);
	});

	it('Pesquisando um item no site', function() {
		pesquisarProduto('tenis');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagemPesquisar), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagemPesquisar.getText()).toContain(mensagemPesquisarExpect);
	});

	it('Adicionando um item na sacola', function() {
		pesquisarProduto('tenis');
		
		adicionarItemNaSacola();

		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toContain(mensagemItemAdicionadoNaSacola);
	});
});