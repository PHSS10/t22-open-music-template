export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#rangePreco");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right,#6F00FF ${runnableTrackProgress}%, #DEE2E6 ${runnableTrackProgress}%)`;
    });
  }

  