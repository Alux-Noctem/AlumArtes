// --- Galeria de Projetos ---
const galeriaProjetos = [
	{
		imagem: 'assets/projetos/sacada.png',
		titulo: 'Projeto Residencial'
	},
	{
		imagem: 'assets/projetos/predio.png',
		titulo: 'Fachada Comercial'
	},
	{
		imagem: 'assets/projetos/varanda.png',
		titulo: 'Fechamento de Sacada'
	},
	{
		imagem: 'assets/projetos/cabana.png',
		titulo: 'Projeto Natureza'
	},
	{
		imagem: 'assets/projetos/bancada.png',
		titulo: 'Bancada feita com painel ACM'
	},
	{
		imagem: 'assets/projetos/entrada.png',
		titulo: 'Painel ACM com Porta Pivotante para Entrada'
	},
	{
		imagem: 'assets/projetos/garagem.png',
		titulo: 'Vidraçaria para Garagem'
	},
	{
		imagem: 'assets/projetos/janelas.png',
		titulo: 'Painel de Vidro com Janelas'
	},
	{
		imagem: 'assets/projetos/porta_pivotante.png',
		titulo: 'Porta de Alumínio'
	},
	{
		imagem: 'assets/projetos/portal.png',
		titulo: 'Portal de Entrada'
	},
	{
		imagem: 'assets/projetos/portas.png',
		titulo: 'Painel ACM com Portas de Correr'
	},
	{
		imagem: 'assets/projetos/painel.png',
		titulo: 'Painel de Vidro'
	}
	// Adicione mais projetos conforme necessário
];

function renderGaleriaProjetos() {
	const container = document.getElementById('galeria-projetos');
	if (!container) return;
	container.innerHTML = '';
	const grid = document.createElement('div');
	grid.className = 'galeria-grid';
	galeriaProjetos.forEach(proj => {
		const card = document.createElement('div');
		card.className = 'galeria-card';
		card.innerHTML = `
			<img src="${proj.imagem}" alt="${proj.titulo}">
			<h3>${proj.titulo}</h3>
		`;
		grid.appendChild(card);
	});
	container.appendChild(grid);
}

if (window.location.pathname.includes('galeria.html')) {
	document.addEventListener('DOMContentLoaded', renderGaleriaProjetos);
}
// Script para menu suspenso e interações
// (Expansível para funcionalidades extras)

// --- Catálogo de Produtos (xadrez) ---
const produtosCatalogo = [
	{
		tipo: 'janela',
		titulo: 'Janela de Correr',
		descricao: 'Janela de correr de alumínio com design moderno e durável.',
		codigo: 'jan4842',
		imagem: 'assets/produtos/janela_correr.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta de Correr',
		descricao: 'Elegante porta de correr ideal para espaços amplos.',
		codigo: 'por2368',
		imagem: 'assets/produtos/porta_correr.png'
	},
	{
		tipo: 'painel',
		titulo: 'Painel de Vidro Fixo Incolor',
		descricao: 'Painel fixo para fechamento de ambientes com visual clean e iluminação natural.',
		codigo: 'pnl1103',
		imagem: 'assets/produtos/painel_fixo.png'
	},
	{
		tipo: 'janela',
		titulo: 'Janela Integrada com Persiana',
		descricao: 'Modelo com persiana embutida para controle de luz e maior privacidade.',
		codigo: 'jan5916',
		imagem: 'assets/produtos/janela_persiana.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta de Giro Lisa',
		descricao: 'Porta de giro com acabamento liso, ideal para entradas internas e externas.',
		codigo: 'por6734',
		imagem: 'assets/produtos/porta_giro_lisa.png'
	},
	{
		tipo: 'painel',
		titulo: 'Painel de Vidro Laminado Fumê',
		descricao: 'Painel laminado com tonalidade fumê para mais conforto térmico e sofisticação.',
		codigo: 'pnl3297',
		imagem: 'assets/produtos/painel_fume.png'
	},
	{
		tipo: 'janela',
		titulo: 'Janela Maxim-ar',
		descricao: 'Janela maxim-ar de alumínio, com abertura superior, proporcionando ventilação excelente.',
		codigo: 'jan1573',
		imagem: 'assets/produtos/janela_maxim.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta Pivotante',
		descricao: 'Porta pivotante sofisticada e resistente, com ótimo isolamento e design moderno.',
		codigo: 'por5211',
		imagem: 'assets/produtos/porta_pivotante.png'
	},
	{
		tipo: 'painel',
		titulo: 'Painel Temperado para Box',
		descricao: 'Painel em vidro temperado para box de banheiro com segurança e fácil limpeza.',
		codigo: 'pnl5562',
		imagem: 'assets/produtos/painel_box.png'
	},
	{
		tipo: 'janela',
		titulo: 'Janela Basculante',
		descricao: 'Janela basculante prática para cozinhas, banheiros e áreas de serviço.',
		codigo: 'jan2485',
		imagem: 'assets/produtos/janela_basculante.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta Balcão 2 Folhas',
		descricao: 'Porta balcão com ampla abertura e excelente passagem de luz para varandas.',
		codigo: 'por8840',
		imagem: 'assets/produtos/porta_balcao2.png'
	},
	{
		tipo: 'painel',
		titulo: 'Painel Pele de Vidro',
		descricao: 'Composição de painéis para fachadas modernas com estética elegante.',
		codigo: 'pnl7804',
		imagem: 'assets/produtos/painel_pele.png'
	},
	{
		tipo: 'janela',
		titulo: 'Janela Veneziana de Correr',
		descricao: 'Janela com veneziana para ventilação contínua e controle de luminosidade.',
		codigo: 'jan7021',
		imagem: 'assets/produtos/janela_veneziana_correr.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta de Correr 3 Folhas',
		descricao: 'Solução robusta para vãos largos, com trilhos suaves e visual contemporâneo.',
		codigo: 'por9456',
		imagem: 'assets/produtos/porta_correr3.png'
	},
	{
		tipo: 'painel',
		titulo: 'Painel Maxim-ar com Vidro Fumê',
		descricao: 'Painel para fachadas com visual elegante e espelhado com iluminação natural.',
		codigo: 'pnl7489',
		imagem: 'assets/produtos/painel_maxim.png'
	},
	// Adicione mais produtos conforme necessário
];

function renderCatalogoXadrez() {
	const container = document.getElementById('catalogo-produtos');
	if (!container) return;
	// Efeito xadrez: dois pares (imagem esquerda), dois ímpares (imagem direita), repetindo
	container.innerHTML = '';
	const grid = document.createElement('div');
	grid.className = 'catalogo-xadrez-grid';
	let blocoTipo = 0; // 0: par (img esquerda), 1: ímpar (img direita)
	let blocoCount = 0;
	produtosCatalogo.forEach((item, idx) => {
		const bloco = document.createElement('div');
		bloco.className = 'catalogo-xadrez-item';
		const img = `<img src="${item.imagem}" alt="${item.titulo}" class="catalogo-xadrez-img">`;
		const info = `<div class="catalogo-xadrez-info">
			<h3>${item.titulo}</h3>
			<p>${item.descricao}</p>
			<span class="catalogo-codigo">COD.: ${item.codigo}</span>
		</div>`;
		bloco.innerHTML = (blocoTipo === 0) ? (img + info) : (info + img);
		grid.appendChild(bloco);
		blocoCount++;
		if (blocoCount === 2) {
			blocoTipo = blocoTipo === 0 ? 1 : 0;
			blocoCount = 0;
		}
	});
	container.appendChild(grid);
}

// Executa apenas na página de catálogo
if (window.location.pathname.includes('catalogo.html')) {
	document.addEventListener('DOMContentLoaded', renderCatalogoXadrez);
}

// --- Redes sociais na página de contato ---
const redesSociais = [
	{
		nome: 'Instagram',
		url: 'https://www.instagram.com/alumartes_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/',
		icon: 'assets/instagram.svg'
	},
	{
		nome: 'Facebook',
		url: 'https://facebook.com/alumartes_',
		icon: 'assets/facebook.svg'
	},
	//{
	//	nome: 'LinkedIn',
	//	url: 'https://linkedin.com/company/alumartes_',
	//	icon: 'assets/linkedin.svg'
	//}
	//{
	//	nome: 'Youtube',
	//	url: 'https://youtube.com/alumartes_',
	//	icon: 'assets/youtube.svg'
	//}
	// Adicione mais redes se quiser
];

function renderRedesContato() {
	const redesDiv = document.getElementById('contato-redes');
	if (!redesDiv) return;
	redesDiv.innerHTML = redesSociais.map(r =>
		`<a href="${r.url}" target="_blank" rel="noopener" title="${r.nome}">
			<img src="${r.icon}" alt="${r.nome}">
		</a>`
	).join('');
}

if (window.location.pathname.includes('contato.html')) {
	document.addEventListener('DOMContentLoaded', renderRedesContato);
}
