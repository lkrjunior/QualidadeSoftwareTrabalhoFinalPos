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
	
	//Function BeforeEach
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.radanesportes.com.br/');
		browser.manage().window().setSize(1600, 1000);
	});

	//Functions Login
	login = function (email, senha) {
		botaoLoginEntrar.click();
		
		browser.wait(expectedConditions.visibilityOf(campoLogin), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		campoLogin.sendKeys(email);

		browser.wait(expectedConditions.visibilityOf(campoSenha), timeOutExpectedConditions, mensagemElementoNaoEncontrado);
		campoSenha.sendKeys(senha);

		browser.wait(expectedConditions.visibilityOf(botaoLogin), timeOutExpectedConditions, mensagemBotaoNaoEncontrado);
		botaoLogin.click();
	  }
	
	//Testes
	it('Teste do login inválido', function() {
		login('teste', '');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagemLoginInvalido), timeOutExpectedConditions, mensagemNaoEncontrada);
		expect(alertMensagemLoginInvalido.getText()).toBe(mensagemLoginInvalidoExpect);
	});
});