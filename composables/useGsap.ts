export default () => {
  const {
    $gsap: gsap,
    $Draggable: Draggable,
    $ScrollTrigger: ScrollTrigger,
  } = useNuxtApp();

  return { gsap, Draggable, ScrollTrigger };
};
