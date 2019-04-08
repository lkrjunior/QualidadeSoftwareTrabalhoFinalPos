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
	var alertMensagemLoginInvalido = $('.message-alert');

	//Var Pesquisar
	var campoPesquisar = element(by.id('instantSearch'));
	//var alertMensagemPesquisar = $('.qtd-iten > span > span');
	var alertMensagemPesquisar = element.all(by.css('.qtd-iten > span > span')).first();
	var mensagemPesquisarExpect = "encontrados";

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

	//Testes
	it('Teste do login inválido', function() {
		efetuarLogin('teste', '');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagemLoginInvalido), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagemLoginInvalido.getText()).toBe(mensagemLoginInvalidoExpect);
	});

	it('Pesquisando um item no site', function() {
		pesquisarProduto('tenis');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagemPesquisar), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagemPesquisar.getText()).toContain(mensagemPesquisarExpect);
	});
});