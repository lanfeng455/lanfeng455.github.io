document.addEventListener("DOMContentLoaded", () => {

  const projectCards =
    document.querySelectorAll(".project-card");


  projectCards.forEach(card => {

    const project =
      card.closest(".featured-project, .project");

    if (!project) {
      return;
    }


    const detail =
      project.querySelector(".project-detail");

    if (!detail) {
      return;
    }


    const toggleDetail = () => {

      const isOpen =
        detail.classList.contains("is-open");


      // 当前项目展开 / 收起
      detail.classList.toggle("is-open", !isOpen);

      card.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      detail.setAttribute(
        "aria-hidden",
        String(isOpen)
      );

    };


    // 鼠标点击
    card.addEventListener("click", () => {
      toggleDetail();
    });


    // 键盘操作
    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        toggleDetail();

      }

    });

  });

});

document.addEventListener(
"DOMContentLoaded",
()=>{


const earth =
document.querySelector(".cosmic-earth");


earth.addEventListener(
"mouseenter",
()=>{

 earth.classList.add("active");

});


earth.addEventListener(
"mouseleave",
()=>{

 earth.classList.remove("active");

});


});