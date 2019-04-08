describe('Trabalho Final Qualidade de Software', function() {
	
	var expectedConditions = protractor.ExpectedConditions;
	var timeOutExpectedConditions = 5000;
	
	var botaoLoginEntrar = $('.last > a');
	var campoLogin = element(by.name('logar_email'));
	var campoSenha = element(by.name('logar_senha'));
	var botaoLogin = $('.bt-login');

	var mensagemLoginInvalido = $('.alert > p');
	

	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.radanesportes.com.br/');
	});
	
	it('Teste do login inválido', function() {
		botaoLoginEntrar.click();
		
		browser.wait(expectedConditions.visibilityOf(campoLogin), timeOutExpectedConditions, "Elemento não encontrado!");
		campoLogin.sendKeys('teste');

		botaoLogin.click();
		
		browser.wait(expectedConditions.visibilityOf(mensagemLoginInvalido), timeOutExpectedConditions, "Mensagem não encontrada!");
		expect(mensagemLoginInvalido.getText()).toBe('Por favor preencha o e-mail corretamente.');
	});
});