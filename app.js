/* =========================================================
   Fine Line · Catálogo
   Comportamento das páginas. Os produtos ficam em dados.js.
   ========================================================= */

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
const reais = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pagina = document.body.dataset.pagina;
const linkCategoria = (id) => `categoria.html?c=${id}`;

/* ---------- Ícones ---------- */

document.body.insertAdjacentHTML("afterbegin", `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <symbol id="i-whats" viewBox="0 0 24 24"><path d="M4 20l1.2-3.6A8 8 0 1 1 8 19z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1.2-1.4-1.8-.9-.8.8c-1-.4-2-1.4-2.4-2.4l.8-.8-.9-1.8z" fill="currentColor"/></symbol>
  <symbol id="i-seta" viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-seta-baixo" viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
  <symbol id="i-mao" viewBox="0 0 24 24"><path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6 7-2.5 0-3.8-1.2-5.2-3.4L4.2 15a1.5 1.5 0 0 1 2.4-1.8L8 15" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-folha" viewBox="0 0 24 24"><path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M5 19c3-4 6-7 10-10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol>
  <symbol id="i-coelho" viewBox="0 0 24 24"><path d="M9 10C7.5 7 7.5 3 9 3s2 3.5 2 6.5M15 10c1.5-3 1.5-7 0-7s-2 3.5-2 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M6 16a6 5.5 0 0 1 12 0c0 2.8-2.7 5-6 5s-6-2.2-6-5z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="10" cy="15" r=".9" fill="currentColor"/><circle cx="14" cy="15" r=".9" fill="currentColor"/></symbol>
  <symbol id="i-coracao" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></symbol>
  <symbol id="i-varetas" viewBox="0 0 24 24"><path d="M10 11L7 2M12 11V2M14 11l3-9" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect x="6" y="11" width="12" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/></symbol>
  <symbol id="i-cubo" viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="9" y="4" width="6" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="8.5" y="12" width="7" height="5" fill="none" stroke="currentColor" stroke-width="1.2"/></symbol>
  <symbol id="i-casa" viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9H4z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 17.5s-2.6-1.6-2.6-3.4a1.4 1.4 0 0 1 2.6-.8 1.4 1.4 0 0 1 2.6.8c0 1.8-2.6 3.4-2.6 3.4z" fill="currentColor"/></symbol>
  <symbol id="i-sabonete" viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="10" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="5" r="1.6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="14" cy="4" r="1" fill="none" stroke="currentColor" stroke-width="1.2"/></symbol>
  <symbol id="i-vela" viewBox="0 0 24 24"><path d="M12 3c1.6 2 1.6 3.6 0 4.6-1.6-1-1.6-2.6 0-4.6z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><rect x="6" y="10" width="12" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 8v2" stroke="currentColor" stroke-width="1.4"/></symbol>
  <symbol id="i-insta" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16.6" cy="7.4" r="1" fill="currentColor"/></symbol>
  <symbol id="i-brilho" viewBox="0 0 24 24"><path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8z" fill="currentColor"/></symbol>
</defs></svg>`);

/* ---------- Estrutura comum: topo, rodapé, barra, ficha ---------- */

const catAtual = pagina === "categoria"
  ? (CATEGORIAS.find((c) => c.id === new URLSearchParams(location.search).get("c")) || CATEGORIAS[0])
  : null;

document.body.insertAdjacentHTML("afterbegin", `
<header class="topo" id="topo">
  <a class="marca" href="index.html" aria-label="Fine Line, início"><span class="marca__nome">Fine Line</span></a>
  <nav class="categorias" aria-label="Categorias">
    ${CATEGORIAS.map((c) => `<a href="${linkCategoria(c.id)}" class="chip${catAtual?.id === c.id ? " chip--ativo" : ""}">${c.nome}</a>`).join("")}
    <a href="seguranca.html" class="chip${pagina === "seguranca" ? " chip--ativo" : ""}">Segurança</a>
  </nav>
  <a class="botao botao--pequeno js-whats" href="#"><svg class="ico"><use href="#i-whats"/></svg><span>Fale com a gente</span></a>
</header>`);

document.body.insertAdjacentHTML("beforeend", `
<footer class="rodape">
  <p class="marca__nome">Fine Line</p>
  <nav class="rodape__links">${CATEGORIAS.map((c) => `<a href="${linkCategoria(c.id)}">${c.nome}</a>`).join("")}<a href="seguranca.html">Rótulos de segurança</a></nav>
  <a class="rodape__insta" href="https://instagram.com/${INSTAGRAM}" target="_blank" rel="noopener"><svg class="ico"><use href="#i-insta"/></svg>@${INSTAGRAM}</a>
</footer>

<div class="barra-celular" id="barra-celular">
  <a href="${pagina === "inicio" ? "#linhas" : "#grade-produtos"}" class="barra-celular__cat">Ver produtos</a>
  <a href="#" class="botao js-whats"><svg class="ico"><use href="#i-whats"/></svg> Pedir</a>
</div>

<dialog class="ficha" id="ficha" aria-labelledby="ficha-titulo">
  <div class="ficha__conteudo">
    <button class="ficha__fechar" type="button" aria-label="Fechar" data-fechar><svg class="ico"><use href="#i-x"/></svg></button>
    <div class="vitrine ficha__vitrine" id="ficha-vitrine">
      <img class="vitrine__elemento" id="ficha-elemento" alt="" aria-hidden="true">
      <img class="vitrine__produto" id="ficha-foto" alt="">
    </div>
    <div class="ficha__info">
      <p class="ficha__categoria" id="ficha-categoria"></p>
      <h2 id="ficha-titulo" class="ficha__nome"></h2>
      <p class="ficha__notas" id="ficha-notas"></p>
      <p class="ficha__descricao" id="ficha-descricao"></p>
      <div id="ficha-bloco-tamanho">
        <p class="ficha__rotulo">Tamanho</p>
        <div class="tamanhos tamanhos--ficha" id="ficha-tamanhos" role="radiogroup" aria-label="Tamanho"></div>
      </div>
      <div id="ficha-bloco-opcoes">
        <p class="ficha__rotulo" id="ficha-opcoes-rotulo"></p>
        <div class="opcoes" id="ficha-opcoes" role="radiogroup"></div>
      </div>
      <div class="ficha__compra">
        <div class="qtd" aria-label="Quantidade">
          <button type="button" data-qtd="-1" aria-label="Diminuir">−</button>
          <output id="ficha-qtd">1</output>
          <button type="button" data-qtd="1" aria-label="Aumentar">+</button>
        </div>
        <p class="ficha__preco" id="ficha-preco"></p>
      </div>
      <a class="botao botao--largo" id="ficha-pedir" href="#"><svg class="ico"><use href="#i-whats"/></svg> Pedir pelo WhatsApp</a>
      <details class="ficha__mais" id="ficha-mais">
        <summary>O que vem no produto</summary>
        <ul id="ficha-inclui"></ul>
      </details>
      <details class="ficha__mais" id="ficha-seguranca">
        <summary>Informações e segurança</summary>
        <div id="ficha-seguranca-corpo"></div>
      </details>
    </div>
  </div>
</dialog>

<div class="aviso-flutuante" id="toast" role="status" aria-live="polite"></div>`);

/* ---------- WhatsApp ---------- */

const MSG_GERAL = "Olá! Vim pelo catálogo da Fine Line e queria saber mais sobre os produtos.";

function abrirWhats(mensagem, evento) {
  if (!WHATSAPP) {
    evento?.preventDefault();
    avisar("O número do WhatsApp ainda não foi configurado.");
    return;
  }
  const a = evento.currentTarget;
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  a.target = "_blank";
  a.rel = "noopener";
}

const precoTexto = (v) => (v == null ? "Sob consulta" : reais(v));

function mensagemPedido(cat, produto, tamanho, qtd = 1, opcao = null) {
  const preco = tamanho ? tamanho.preco : produto.preco;
  const nome = cat.tamanhos ? `${cat.titulo} ${produto.nome}` : produto.nome;
  const detalhes = [tamanho?.rotulo, opcao && `${cat.opcoes.rotulo.toLowerCase()} ${opcao}`].filter(Boolean).join(", ");
  const valor = preco == null ? "" : `: ${reais(preco * qtd)}`;
  return `Olá! Vim pelo catálogo da Fine Line e quero pedir:\n\n• ${qtd}x ${nome}${detalhes ? ` (${detalhes})` : ""}${valor}\n\nPode me passar as formas de pagamento e entrega?`;
}

let timerAviso;
function avisar(texto) {
  const t = $("#toast");
  t.textContent = texto;
  t.classList.add("visivel");
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => t.classList.remove("visivel"), 3200);
}

/* ---------- Pedaços reutilizados ---------- */

const whatsFormatado = () => WHATSAPP.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

// Conteúdo do rótulo de segurança (usado na ficha e na página de rótulos)
function rotuloHTML(seg) {
  const linha = (rotulo, valor) => (valor ? `<p><strong>${rotulo}:</strong> ${valor}</p>` : "");
  return `
    <ul class="rotulo__avisos">${seg.avisos.map((a) => `<li>${a}</li>`).join("")}</ul>
    <div class="rotulo__dados">
      ${linha("Composição", seg.composicao)}
      ${linha("Conteúdo", seg.conteudo)}
      ${linha("Uso", seg.uso)}
      ${linha("Validade", seg.validade)}
      ${linha("Conservação", seg.conservacao)}
    </div>`;
}

function precoMinimo(cat) {
  const precos = cat.tamanhos ? cat.tamanhos.map((t) => t.preco) : cat.produtos.map((p) => p.preco).filter((v) => v != null);
  return precos.length ? Math.min(...precos) : null;
}

function montarTrio(container, produtos) {
  // ordem: lateral, centro, lateral
  const [a, b, c] = produtos;
  container.innerHTML = [b, a, c].filter(Boolean).map((p) => `<img src="${p.foto}" alt="${p.nome}" loading="lazy">`).join("");
}

function montarComprar() {
  const el = $("#comprar");
  if (!el) return;
  el.innerHTML = `
    <div class="secao__cabeca revelar"><h2>Como comprar</h2></div>
    <ol class="comprar__passos">
      <li class="revelar"><strong>Escolha</strong> o produto, o aroma e o tamanho aqui no catálogo.</li>
      <li class="revelar"><strong>Toque em “Pedir”</strong> e a mensagem já vai pronta para o nosso WhatsApp.</li>
      <li class="revelar"><strong>Combine</strong> com a gente o pagamento e a entrega.</li>
    </ol>
    <a class="botao botao--grande revelar js-whats" href="#"><svg class="ico"><use href="#i-whats"/></svg> Falar no WhatsApp</a>`;
}

function montarTamanhos(container, tamanhos, ativo, aoMudar) {
  container.innerHTML = tamanhos.map((t, i) => `
    <button type="button" role="radio" aria-checked="${i === ativo}" data-i="${i}">
      <strong>${t.rotulo}</strong><span>${reais(t.preco)}</span>
    </button>`).join("");
  container.dataset.ativo = ativo;
  container.onclick = (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const i = Number(b.dataset.i);
    container.dataset.ativo = i;
    $$("button", container).forEach((x) => x.setAttribute("aria-checked", x === b));
    aoMudar(i);
  };
}

/* ---------- Página inicial ---------- */

function montarSelos() {
  const el = $("#selos");
  // repete os selos para a faixa sempre ser mais larga que a tela
  const itens = [...SELOS, ...SELOS, ...SELOS, ...SELOS].map((s) => `<li><svg class="ico"><use href="#${s.icone}"/></svg>${s.texto}</li><li class="selos__brilho" aria-hidden="true"><svg class="ico"><use href="#i-brilho"/></svg></li>`).join("");
  // a faixa é repetida para o movimento parecer infinito
  el.innerHTML = `<div class="selos__trilho"><ul>${itens}</ul><ul aria-hidden="true">${itens}</ul></div>`;
}

function montarLinhas() {
  $("#linhas-grade").innerHTML = CATEGORIAS.map((c) => {
    const min = precoMinimo(c);
    const tem = c.produtos.length > 0;
    const visual = tem && c.produtos[0].foto
      ? `<div class="trio trio--pequeno${c.produtos[0].formato === "largo" ? " trio--largo" : ""}">${[c.produtos[1], c.produtos[0], c.produtos[2]].filter(Boolean).map((p) => `<img src="${p.foto}" alt="" loading="lazy">`).join("")}</div>`
      : c.capa
        ? `<img class="linha__capa" src="${c.capa}" alt="" loading="lazy">`
        : `<img class="linha__ilustracao" src="${c.ilustracao}" alt="" loading="lazy">`;
    return `
      <a class="linha linha--${c.id} revelar" href="${linkCategoria(c.id)}">
        <div class="linha__visual">${visual}</div>
        <div class="linha__texto">
          <h3>${c.nome}</h3>
          <p>${tem ? `${c.produtos.length} ${c.produtos.length === 1 ? "modelo" : "modelos"}${min != null ? ` · a partir de ${reais(min)}` : ""}` : "Novidades chegando"}</p>
        </div>
        <span class="linha__seta" aria-hidden="true"><svg class="ico"><use href="#i-seta"/></svg></span>
      </a>`;
  }).join("");
}

function montarAromas() {
  const dif = CATEGORIAS.find((c) => c.id === "difusores");
  $("#aromas-grade").innerHTML = dif.produtos.map((p) => `
    <a class="aroma revelar" href="${linkCategoria(dif.id)}#${p.id}" style="--tom:${p.tom};--tom-suave:${p.tomSuave}">
      <div class="vitrine" data-id="${p.id}">
        ${p.elemento ? `<img class="vitrine__elemento" src="${p.elemento}" alt="" aria-hidden="true" loading="lazy">` : ""}
        <img class="vitrine__produto" src="${p.foto}" alt="Difusor ${p.nome}" loading="lazy">
      </div>
      <h3>${p.nome}</h3>
      <p class="aroma__notas">${p.notas}</p>
      <span class="aroma__link">Ver difusor <svg class="ico"><use href="#i-seta"/></svg></span>
    </a>`).join("");
}

/* ---------- Página de categoria ---------- */

let tamanhoAtual = 0;

function montarCategoria(cat) {
  document.title = `${cat.titulo} · Fine Line`;
  $("#abas").innerHTML = CATEGORIAS.map((c) => `<a href="${linkCategoria(c.id)}" class="chip${c.id === cat.id ? " chip--ativo" : ""}">${c.nome}</a>`).join("")
    + `<a href="seguranca.html" class="chip">Segurança</a>`;
  $("#cat-titulo").textContent = cat.titulo;
  $("#cat-resumo").textContent = cat.resumo;

  const seletor = $("#seletor-tamanho");
  if (cat.tamanhos && cat.produtos.length) montarTamanhos(seletor, cat.tamanhos, tamanhoAtual, trocarTamanho);
  else seletor.remove();

  const grade = $("#grade-produtos");
  if (!cat.produtos.length) {
    grade.outerHTML = `
      <div class="vazio revelar">
        <img src="assets/img/elementos/flor-traco.webp" alt="" aria-hidden="true">
        <h2>Estamos preparando essa linha</h2>
        <p>Os ${cat.nome.toLowerCase()} chegam em breve por aqui. Enquanto isso, chama a gente no WhatsApp.</p>
        <a class="botao js-whats" href="#"><svg class="ico"><use href="#i-whats"/></svg> Falar no WhatsApp</a>
      </div>`;
    return;
  }

  grade.innerHTML = cat.produtos.map((p) => `
    <article class="produto revelar" id="${p.id}" style="--tom:${p.tom};--tom-suave:${p.tomSuave}" data-produto="${p.id}">
      <button class="vitrine produto__vitrine${p.formato === "largo" ? " vitrine--larga" : ""}" type="button" data-id="${p.id}" data-abrir aria-label="Ver detalhes de ${p.nome}">
        ${p.elemento ? `<img class="vitrine__elemento" src="${p.elemento}" alt="" aria-hidden="true" loading="lazy">` : ""}
        <img class="vitrine__produto" src="${p.foto}" alt="${cat.titulo} ${p.nome}" loading="lazy">
        <span class="produto__tamanho">${cat.tamanhos ? cat.tamanhos[tamanhoAtual].rotulo : p.tamanho || ""}</span>
        <span class="produto__lupa" aria-hidden="true"><svg class="ico"><use href="#i-seta"/></svg></span>
      </button>
      <div class="produto__corpo">
        <h3 class="produto__nome">${p.nome}</h3>
        <p class="produto__notas">${p.notas || ""}</p>
        <p class="produto__desc">${p.descricao}</p>
        <div class="produto__rodape">
          <p class="produto__preco">${precoTexto(cat.tamanhos ? cat.tamanhos[tamanhoAtual].preco : p.preco)}</p>
          <a class="botao js-pedir" href="#"><svg class="ico"><use href="#i-whats"/></svg> Pedir</a>
        </div>
      </div>
    </article>`).join("");

  $$(".produto", grade).forEach((card) => {
    const p = cat.produtos.find((x) => x.id === card.dataset.produto);
    $("[data-abrir]", card).onclick = () => abrirFicha(cat, p);
    // com opções (ex.: aroma da vela) a pessoa escolhe na ficha antes de pedir
    $(".js-pedir", card).onclick = (e) => {
      if (cat.opcoes) { e.preventDefault(); abrirFicha(cat, p); }
      else abrirWhats(mensagemPedido(cat, p, cat.tamanhos?.[tamanhoAtual]), e);
    };
  });

  if (cat.destaques) {
    $("#detalhes").hidden = false;
    const item = (d) => `<li class="revelar"><svg class="ico"><use href="#${d.icone}"/></svg><div><h3>${d.titulo}</h3><p>${d.texto}</p></div></li>`;
    const meio = Math.ceil(cat.destaques.length / 2);
    $(".detalhes__lista--esq").innerHTML = cat.destaques.slice(0, meio).map(item).join("");
    $(".detalhes__lista--dir").innerHTML = cat.destaques.slice(meio).map(item).join("");
    montarTrio($("#detalhes-trio"), cat.produtos);
  }

  if (cat.comoUsar) {
    $("#como-usar").hidden = false;
    $("#passos").innerHTML = cat.comoUsar.passos.map((p, i) => `
      <li class="revelar"><span class="passos__n">${i + 1}</span><h3>${p.titulo}</h3><p>${p.texto}</p></li>`).join("");
    $("#aviso").textContent = cat.comoUsar.aviso || "";
  }
}

function trocarTamanho(i) {
  tamanhoAtual = i;
  const tam = catAtual.tamanhos[i];
  $$("#grade-produtos .produto").forEach((card) => {
    $(".produto__tamanho", card).textContent = tam.rotulo;
    const preco = $(".produto__preco", card);
    preco.textContent = reais(tam.preco);
    preco.animate?.([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 400, easing: "ease-out" });
  });
}

/* ---------- Página de rótulos de segurança ---------- */

function montarSeguranca() {
  const cats = CATEGORIAS.filter((c) => c.seguranca);
  $("#abas").innerHTML = cats.map((c, i) => `<a href="#${c.id}" class="chip${i === 0 ? " chip--ativo" : ""}">${c.nome}</a>`).join("");
  $("#rotulos").innerHTML = cats.map((c) => `
    <article class="rotulo revelar" id="${c.id}">
      <p class="rotulo__marca">Fine Line</p>
      <h2>${c.seguranca.titulo}</h2>
      <p class="rotulo__sub">Informações e segurança · Leia atentamente antes de usar.</p>
      ${rotuloHTML(c.seguranca)}
      <p class="rotulo__contato">@${INSTAGRAM} · WhatsApp ${whatsFormatado()}</p>
      <a class="rotulo__link" href="${linkCategoria(c.id)}">Ver ${c.nome.toLowerCase()}</a>
    </article>`).join("");
  $("#abas").addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    $$("#abas .chip").forEach((x) => x.classList.toggle("chip--ativo", x === a));
  });
}

/* ---------- Ficha do produto ---------- */

const ficha = $("#ficha");
let fichaEstado = {};

function atualizarFicha() {
  const { cat, produto, tamanho, qtd } = fichaEstado;
  const tam = cat.tamanhos?.[tamanho];
  const preco = tam ? tam.preco : produto.preco;
  $("#ficha-qtd").textContent = qtd;
  $("#ficha-preco").textContent = preco == null ? "Sob consulta" : reais(preco * qtd);
  const inclui = [...(tam ? [`${tam.rotulo} de essência`] : []), ...(cat.inclui || [])];
  $("#ficha-categoria").textContent = [cat.titulo, produto.tamanho].filter(Boolean).join(" · ");
  $("#ficha-mais").hidden = !inclui.length;
  $("#ficha-inclui").innerHTML = inclui.map((d) => `<li>${d}</li>`).join("");
}

function abrirFicha(cat, produto) {
  fichaEstado = { cat, produto, tamanho: tamanhoAtual, qtd: 1, opcao: 0 };
  $("#ficha-vitrine").classList.toggle("vitrine--larga", produto.formato === "largo");
  $("#ficha-bloco-opcoes").hidden = !cat.opcoes;
  if (cat.opcoes) {
    $("#ficha-opcoes-rotulo").textContent = cat.opcoes.rotulo;
    const caixa = $("#ficha-opcoes");
    caixa.setAttribute("aria-label", cat.opcoes.rotulo);
    caixa.innerHTML = cat.opcoes.itens.map((o, i) => `<button type="button" role="radio" aria-checked="${i === 0}" data-i="${i}">${o}</button>`).join("");
    caixa.onclick = (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      fichaEstado.opcao = Number(b.dataset.i);
      $$("button", caixa).forEach((x) => x.setAttribute("aria-checked", x === b));
    };
  }
  ficha.style.setProperty("--tom", produto.tom);
  ficha.style.setProperty("--tom-suave", produto.tomSuave);
  $("#ficha-foto").src = produto.foto;
  $("#ficha-foto").alt = `${cat.titulo} ${produto.nome}`;
  $(".ficha__vitrine").dataset.id = produto.id;
  const el = $("#ficha-elemento");
  el.hidden = !produto.elemento;
  if (produto.elemento) el.src = produto.elemento;
  $("#ficha-categoria").textContent = cat.titulo;
  $("#ficha-titulo").textContent = produto.nome;
  $("#ficha-notas").textContent = produto.notas || "";
  $("#ficha-descricao").textContent = produto.descricao;
  $("#ficha-bloco-tamanho").hidden = !cat.tamanhos;
  $("#ficha-seguranca").hidden = !cat.seguranca;
  $("#ficha-seguranca").open = false;
  if (cat.seguranca) {
    $("#ficha-seguranca-corpo").innerHTML = rotuloHTML(cat.seguranca)
      + `<a class="rotulo__link" href="seguranca.html#${cat.id}">Ver todos os rótulos de segurança</a>`;
  }
  if (cat.tamanhos) montarTamanhos($("#ficha-tamanhos"), cat.tamanhos, fichaEstado.tamanho, (i) => { fichaEstado.tamanho = i; atualizarFicha(); });
  atualizarFicha();
  ficha.showModal();
  document.documentElement.style.overflow = "hidden";
}

ficha.addEventListener("close", () => { document.documentElement.style.overflow = ""; });
ficha.addEventListener("click", (e) => {
  if (e.target === ficha || e.target.closest("[data-fechar]")) ficha.close();
  const q = e.target.closest("[data-qtd]");
  if (q) {
    fichaEstado.qtd = Math.min(20, Math.max(1, fichaEstado.qtd + Number(q.dataset.qtd)));
    atualizarFicha();
  }
});
$("#ficha-pedir").addEventListener("click", (e) => {
  const { cat, produto, tamanho, qtd, opcao } = fichaEstado;
  abrirWhats(mensagemPedido(cat, produto, cat.tamanhos?.[tamanho], qtd, cat.opcoes?.itens[opcao]), e);
});

/* ---------- Revelar ao rolar ---------- */

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("visto");
      observador.unobserve(en.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

/* ---------- Linha fina que se desenha ao rolar ---------- */

const fio = $(".fio");
const fioPath = $("#fio-path");
let fioTamanho = 0, fioInicio = 0;

function desenharFio() {
  const W = document.documentElement.clientWidth;
  const H = document.body.scrollHeight;
  const primeira = $("main > section");
  const inicio = primeira.offsetTop + primeira.offsetHeight - 40;
  const fim = H - $(".rodape").offsetHeight + 40;
  fio.setAttribute("viewBox", `0 0 ${W} ${H}`);
  fio.style.height = H + "px";

  const passo = W < 720 ? 520 : 760;
  const esq = W * (W < 720 ? 0.06 : 0.08), dir = W * (W < 720 ? 0.94 : 0.92);
  let x = W * 0.5, y = inicio, lado = 0;
  let d = `M ${x} ${y}`;
  while (y < fim) {
    const ny = Math.min(y + passo, fim);
    const nx = lado % 2 === 0 ? dir : esq;
    d += ` C ${x} ${y + passo * 0.55}, ${nx} ${ny - passo * 0.55}, ${nx} ${ny}`;
    x = nx; y = ny; lado++;
  }
  fioPath.setAttribute("d", d);
  fioTamanho = fioPath.getTotalLength();
  fioInicio = inicio;
  fioPath.style.strokeDasharray = fioTamanho;
  atualizarFio();
}

function atualizarFio() {
  if (!fioTamanho) return;
  const H = document.body.scrollHeight;
  const p = Math.min(1, Math.max(0, (scrollY + innerHeight * 0.75 - fioInicio) / (H - innerHeight * 0.25 - fioInicio)));
  fioPath.style.strokeDashoffset = semMovimento ? 0 : fioTamanho * (1 - p);
}

/* ---------- Rolagem: topo, barra do celular, parallax ---------- */

const topo = $("#topo");
const barra = $("#barra-celular");
const paralaxe = $$("[data-parallax]");
let pedidoQuadro = false;

function aoRolar() {
  const y = scrollY;
  topo.classList.toggle("rolou", y > 20);
  barra.classList.toggle("visivel", y > innerHeight * 0.5);
  if (!semMovimento && y < innerHeight * 1.2) {
    paralaxe.forEach((el) => { el.style.translate = `0 ${y * Number(el.dataset.parallax)}px`; });
  }
  atualizarFio();
  pedidoQuadro = false;
}
addEventListener("scroll", () => {
  if (!pedidoQuadro) { pedidoQuadro = true; requestAnimationFrame(aoRolar); }
}, { passive: true });

/* ---------- Início ---------- */

if (pagina === "inicio") {
  montarSelos();
  montarLinhas();
  montarAromas();
} else if (pagina === "seguranca") {
  montarSeguranca();
} else {
  montarCategoria(catAtual);
}
montarComprar();

$$(".revelar").forEach((el) => observador.observe(el));
$$(".js-whats").forEach((a) => a.addEventListener("click", (e) => abrirWhats(MSG_GERAL, e)));

// abre direto no produto quando vem de um link com #aroma
if (location.hash && pagina === "categoria") {
  const alvo = document.getElementById(location.hash.slice(1));
  if (alvo) requestAnimationFrame(() => alvo.scrollIntoView({ block: "center" }));
}

new ResizeObserver(() => desenharFio()).observe(document.body);
aoRolar();
