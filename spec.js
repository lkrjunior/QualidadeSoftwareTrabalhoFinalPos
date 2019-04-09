describe('Trabalho Final Qualidade de Software', function() {

	//Const
	const mensagemElementoNaoEncontrado = "Elemento não encontrado";
	const mensagemBotaoNaoEncontrado = "Botão não encontrado";
	const mensagemNaoEncontrada = "Mensagem não encontrada";
	const mensagemLoginInvalidoExpect = "Por favor preencha o e-mail corretamente.";
	const mensagemEmailSenhaInvalidoExpect = "E-mail ou senha não confere.";
	
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
	var botaoFecharAlertMensagem = $('.close');

	//Var Pesquisar
	var campoPesquisar = element(by.id('instantSearch'));
	//var alertMensagemPesquisar = $('.qtd-iten > span > span');
	var alertMensagemPesquisar = element.all(by.css('.qtd-iten > span > span')).first();
	var mensagemPesquisarExpect = "encontrados";
	var campoReceberNovidadesEmail = element(by.name('ofertas_email'));
	var mensagemCadastroReceberNovidades = "com sucesso";

	//Var Adicionar/Remover itens da sacola
	var itemParaAdicionarNaSacola = element.all(by.css('.size-item > span')).first();
	var botaoAdicionarItemNaSacola = element.all(by.css('.btn-add-area > a')).first();
	var mensagemItemAdicionadoNaSacola = "Adicionado com sucesso";
	var botaoMinhaSacola = element.all(by.css('.top-cart > a')).first();
	var botaoRemoverItemDaSacola = element.all(by.css('.details > a')).first();
	var alertCarrinhoVazio = element.all(by.css('.cart-empty > h5')).first();
	var mensagemCarrinhoVazio = "Sua sacola de compras está vazio!";
	var campoCepNaMinhaSacola = element(by.id('ctrConsultaFreteCep'));
	var mensagemComOValorDoFrete = element.all(by.name('frete_modalidade')).first();

	//Function BeforeEach
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.radanesportes.com.br/');
		browser.manage().window().setSize(1600, 1000);
	});

	//Functions
	efetuarLogin = function (email, senha) {
		botaoLoginEntrar.click();
		
		browser.wait(expectedConditions.visibilityOf(campoLogin), timeOutExpectedConditions, "campoLogin - " + mensagemElementoNaoEncontrado);
		campoLogin.sendKeys(email);

		browser.wait(expectedConditions.visibilityOf(campoSenha), timeOutExpectedConditions, "campoSenha - " + mensagemElementoNaoEncontrado);
		campoSenha.sendKeys(senha);

		browser.wait(expectedConditions.visibilityOf(botaoLogin), timeOutExpectedConditions, "botaoLogin - " + mensagemBotaoNaoEncontrado);
		botaoLogin.click();
	}
	
	pesquisarProduto = function (pesquisa) {
		browser.wait(expectedConditions.visibilityOf(campoPesquisar), timeOutExpectedConditions, "campoPesquisar - " + mensagemElementoNaoEncontrado);
		campoPesquisar.sendKeys(pesquisa);
		campoPesquisar.sendKeys(protractor.Key.ENTER);
	}

	adicionarItemNaSacola = function () {
		browser.wait(expectedConditions.visibilityOf(itemParaAdicionarNaSacola), timeOutExpectedConditions, "itemParaAdicionarNaSacola - " + mensagemElementoNaoEncontrado);
		itemParaAdicionarNaSacola.click();
		
		browser.wait(expectedConditions.visibilityOf(botaoAdicionarItemNaSacola), timeOutExpectedConditions, "botaoAdicionarItemNaSacola - " + mensagemElementoNaoEncontrado);
		botaoAdicionarItemNaSacola.click();
	}

	entrarNoMenuMinhaSacola = function () {
		browser.wait(expectedConditions.visibilityOf(botaoMinhaSacola), timeOutExpectedConditions, "botaoMinhaSacola - " + mensagemElementoNaoEncontrado);
		botaoMinhaSacola.click();		
	}

	removerItemDaSacola = function () {
		entrarNoMenuMinhaSacola();
		
		browser.wait(expectedConditions.visibilityOf(botaoRemoverItemDaSacola), timeOutExpectedConditions, "botaoRemoverItemDaSacola - " + mensagemElementoNaoEncontrado);
		botaoRemoverItemDaSacola.click();
	}

	adicionarEmailParaReceberNovidadesDoSite = function (email) {
		browser.wait(expectedConditions.visibilityOf(campoReceberNovidadesEmail), timeOutExpectedConditions, "campoReceberNovidadesEmail - " + mensagemElementoNaoEncontrado);
		campoReceberNovidadesEmail.sendKeys(email);
		campoReceberNovidadesEmail.sendKeys(protractor.Key.ENTER);
	}

	inserirCepParaCalculo = function (cep) {
		browser.wait(expectedConditions.visibilityOf(campoCepNaMinhaSacola), timeOutExpectedConditions, "campoCepNaMinhaSacola - " + mensagemElementoNaoEncontrado);
		campoCepNaMinhaSacola.sendKeys(cep);
		campoCepNaMinhaSacola.sendKeys(protractor.Key.ENTER);
	}

	abrirPaginaInicial = function () {
		browser.get('https://www.radanesportes.com.br/');
	}

	fecharMensagemDeAlerta = function() {
		browser.wait(expectedConditions.visibilityOf(botaoFecharAlertMensagem), timeOutExpectedConditions, "botaoFecharAlertMensagem - " + mensagemElementoNaoEncontrado);
		botaoFecharAlertMensagem.click();		
	}

	//Testes
	it('Teste do login inválido', function() {
		efetuarLogin('teste', '');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, "alertMensagem - " + mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toBe(mensagemLoginInvalidoExpect);
	});

	it('Teste do login com usuário e/ou senha inválido', function() {
		efetuarLogin('teste@teste.com.br', 'senhateste');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, "alertMensagem - " + mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toBe(mensagemEmailSenhaInvalidoExpect);
	});

	it('Pesquisando um item no site', function() {
		pesquisarProduto('tenis');
		
		browser.wait(expectedConditions.visibilityOf(alertMensagemPesquisar), timeOutExpectedConditions, "alertMensagemPesquisar - " + mensagemNaoEncontrada);
		expect(alertMensagemPesquisar.getText()).toContain(mensagemPesquisarExpect);
	});

	it('Adicionando um item na sacola', function() {
		pesquisarProduto('oculos');
		
		adicionarItemNaSacola();

		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, "alertMensagem - " + mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toBe(mensagemItemAdicionadoNaSacola);
	});

	
	it('Remover um item da sacola', function() {
		pesquisarProduto('oculos');
		
		adicionarItemNaSacola();

		removerItemDaSacola();

		browser.wait(expectedConditions.visibilityOf(alertCarrinhoVazio), timeOutExpectedConditions, "alertCarrinhoVazio - " + mensagemNaoEncontrada);
		expect(alertCarrinhoVazio.getText()).toBe(mensagemCarrinhoVazio);
	});

	it('Receber as novidades do site', function() {
		adicionarEmailParaReceberNovidadesDoSite("teste@teste.com.br");

		browser.wait(expectedConditions.visibilityOf(alertMensagem), timeOutExpectedConditions, "alertMensagem - " + mensagemNaoEncontrada);
		expect(alertMensagem.getText()).toContain(mensagemCadastroReceberNovidades);
	});
	
	it('Validar valor do frete na minha sacola', function() {
		pesquisarProduto('oculos');

		adicionarItemNaSacola();

		//abrirPaginaInicial();
		fecharMensagemDeAlerta();

		entrarNoMenuMinhaSacola();

		inserirCepParaCalculo('93200000');

		browser.wait(expectedConditions.visibilityOf(mensagemComOValorDoFrete), timeOutExpectedConditions, "mensagemComOValorDoFrete - " + mensagemNaoEncontrada);
		expect(mensagemComOValorDoFrete.getText()).toBe('');
	});

});