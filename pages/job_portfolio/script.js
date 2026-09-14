document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, index) => {

    const project = card.closest(".featured-project, .project");
    if (!project) return;

    const detail = project.querySelector(".project-detail");
    if (!detail) return;

    // 关联触发器与详情面板，供读屏软件播报展开状态
    const detailId = detail.id || `project-detail-${index + 1}`;
    detail.id = detailId;
    card.setAttribute("aria-controls", detailId);
    detail.setAttribute("aria-hidden", "true");

    const inner = detail.querySelector(".detail-inner");

    const toggleDetail = () => {
      const isOpen = card.getAttribute("aria-expanded") === "true";

      if (!isOpen) {
        // 展开：以内容真实高度驱动 height 过渡
        const targetH = inner.scrollHeight;
        detail.classList.add("is-open");
        card.setAttribute("aria-expanded", "true");
        detail.setAttribute("aria-hidden", "false");
        detail.style.height = targetH + "px";
        // 过渡结束后设为 auto，适应窗口缩放等内容变化
        const cleanup = () => {
          detail.style.height = "auto";
          detail.removeEventListener("transitionend", cleanup);
        };
        detail.addEventListener("transitionend", cleanup);
      } else {
        // 收起：先把当前 auto 高度冻结为 px，再过渡到 0
        const currentH = detail.getBoundingClientRect().height;
        detail.style.height = currentH + "px";
        void detail.offsetHeight; // 注册起始值
        detail.style.height = "0px";
        detail.classList.remove("is-open");
        card.setAttribute("aria-expanded", "false");
        detail.setAttribute("aria-hidden", "true");
        const cleanup = () => {
          detail.style.height = "";
          detail.removeEventListener("transitionend", cleanup);
        };
        detail.addEventListener("transitionend", cleanup);
      }
    };

    // 鼠标点击
    card.addEventListener("click", toggleDetail);

    // 键盘操作（Enter / Space）
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleDetail();
      }
    });

  });

});
