// --- Galeria de Projetos ---
const galeriaProjetos = [
	{
		imagem: 'assets/sacada.png',
		titulo: 'Projeto Residencial'
	},
	{
		imagem: 'assets/predio.png',
		titulo: 'Fachada Comercial'
	},
	{
		imagem: 'assets/varanda.png',
		titulo: 'Fechamento de Sacada'
	},
	{
		imagem: 'assets/cabana.png',
		titulo: 'Projeto Natureza'
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
		imagem: 'assets/jan1.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta de Correr',
		descricao: 'Elegante porta de correr ideal para espaços amplos.',
		codigo: 'por2368',
		imagem: 'assets/por1.png'
	},
	{
		tipo: 'janela',
		titulo: 'Janela Maxim-ar',
		descricao: 'Janela maxim-ar de alumínio, com abertura superior, proporcionando ventilação excelente.',
		codigo: 'jan1573',
		imagem: 'assets/jan2.png'
	},
	{
		tipo: 'porta',
		titulo: 'Porta Pivotante',
		descricao: 'Porta pivotante sofisticada e resistente, com ótimo isolamento e design moderno.',
		codigo: 'por5211',
		imagem: 'assets/por2.png'
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
		url: 'https://instagram.com/alumartesv?igsh=MXVrNWR2Y3E3aHhudQ==',
		icon: 'assets/instagram.svg'
	},
	{
		nome: 'Facebook',
		url: 'https://facebook.com/alumartes',
		icon: 'assets/facebook.svg'
	},
	{
		nome: 'LinkedIn',
		url: 'https://linkedin.com/company/alumartes',
		icon: 'assets/linkedin.svg'
	}
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
