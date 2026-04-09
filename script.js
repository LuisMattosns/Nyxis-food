document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const stageButtons = document.querySelectorAll(".funnel-stage");
  const panelBadge = document.getElementById("panelBadge");
  const panelTitle = document.getElementById("panelTitle");
  const panelDescription = document.getElementById("panelDescription");
  const panelObjective = document.getElementById("panelObjective");
  const panelActions = document.getElementById("panelActions");
  const panelResult = document.getElementById("panelResult");
  const panelProgressText = document.getElementById("panelProgressText");
  const panelProgressBar = document.getElementById("panelProgressBar");

  const stages = {
    1: {
      badge: "ETAPA 01",
      title: "Atração Local",
      description:
        "A marca aparece para as pessoas certas, na região certa e nos horários com maior chance de consumo.",
      objective:
        "Atrair pessoas com potencial real de compra para delivery, consumo local ou reserva.",
      actions: [
        "Segmentação geográfica por bairro e raio",
        "Campanhas em horários estratégicos",
        "Criativos adaptados ao perfil do público",
      ],
      result:
        "Mais entrada de público qualificado e base mais forte para conversão.",
      progress: 20,
    },
    2: {
      badge: "ETAPA 02",
      title: "Desejo Imediato",
      description:
        "A comunicação ativa fome, curiosidade, urgência e valor percebido em poucos segundos.",
      objective:
        "Fazer o público sentir vontade real de comprar agora, não qualquer dia perdido no limbo humano.",
      actions: [
        "Ofertas com forte apelo visual",
        "Combos, diferenciais e gatilhos de urgência",
        "Criativos pensados para parar o scroll",
      ],
      result:
        "Mais cliques qualificados e mais intenção de compra.",
      progress: 40,
    },
    3: {
      badge: "ETAPA 03",
      title: "Direcionamento Inteligente",
      description:
        "Nem todo público deve cair no mesmo lugar. A campanha precisa levar o cliente para o canal mais eficiente.",
      objective:
        "Reduzir atrito e encurtar o caminho até o pedido, a reserva ou o contato.",
      actions: [
        "Envio para WhatsApp quando a decisão precisa ser rápida",
        "Envio para Instagram quando a prova social ajuda a vender",
        "Envio para cardápio ou landing page quando a oferta precisa de contexto",
      ],
      result:
        "Mais fluxo útil indo para o canal que realmente converte.",
      progress: 60,
    },
    4: {
      badge: "ETAPA 04",
      title: "Conversão",
      description:
        "A estrutura transforma interesse em ação concreta: pedido, reserva, cupom ou mensagem comercial.",
      objective:
        "Gerar ação mensurável e retorno comercial real.",
      actions: [
        "CTA forte e claro",
        "Atalho para atendimento e pedido",
        "Oferta pensada para acelerar decisão",
      ],
      result:
        "Mais pedidos, mais contatos e maior eficiência da campanha.",
      progress: 80,
    },
    5: {
      badge: "ETAPA 05",
      title: "Retenção",
      description:
        "O crescimento sério não termina na primeira venda. Ele continua para trazer o cliente de volta.",
      objective:
        "Aumentar frequência de compra, lembrança de marca e ticket médio.",
      actions: [
        "Remarketing para quem interagiu e não comprou",
        "Campanhas sazonais e ações de retorno",
        "Comunicação para aumentar recorrência",
      ],
      result:
        "Mais estabilidade de faturamento e crescimento sustentável.",
      progress: 100,
    },
  };

  function setStage(stageNumber) {
    const data = stages[stageNumber];
    if (!data) return;

    stageButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.stage === String(stageNumber));
    });

    panelBadge.textContent = data.badge;
    panelTitle.textContent = data.title;
    panelDescription.textContent = data.description;
    panelObjective.textContent = data.objective;
    panelResult.textContent = data.result;
    panelProgressText.textContent = `${data.progress}%`;
    panelProgressBar.style.width = `${data.progress}%`;

    panelActions.innerHTML = "";
    data.actions.forEach((action) => {
      const li = document.createElement("li");
      li.textContent = action;
      panelActions.appendChild(li);
    });
  }

  stageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setStage(button.dataset.stage);
    });
  });

  setStage(1);
});