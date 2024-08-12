export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "20px",
    duration: 2000,
  });

  sr.reveal(".delaySmallReveal", { delay: 20 });
  sr.reveal(".delayMediumReveal", { delay: 30 });
  sr.reveal(".delayLargeReveal", { delay: 40 });
  sr.reveal(".delayExtraBigReveal", { delay: 60 });
  sr.reveal(".intervalCardReveal", { interval: 40 });
}
