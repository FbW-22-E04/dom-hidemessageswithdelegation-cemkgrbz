const container = document.querySelector("#container")

container.addEventListener("click", () => {
    if (event.target.className != "remove-button") return;

        let pane = event.target.closest(".pane");
        pane.remove();
      }
)