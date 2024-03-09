{
    const welcome = () => {
        console.log("Cześć!");
    };

    const tooglePerformancePlace = () => {
        const performance = document.querySelector(".js-performanceContainer");
        const change = document.querySelector(".js-buttonContainer__change");
        performance.classList.toggle("performance2");
        change.innerText = performance.classList.contains("performance2") ? "wyśrodkuj" : "przesuń do lewej";
    };

    const init = () => {
        const button = document.querySelector(".js-buttonContainer__button");
        button.addEventListener("click", tooglePerformancePlace); 
    };

    welcome();
    init();
     
}
