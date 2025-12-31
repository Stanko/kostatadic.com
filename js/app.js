document.querySelectorAll("a").forEach((link) => {
  const href = link.href.toLowerCase();
  if (
    href.endsWith(".jpg") ||
    href.endsWith(".jpg") ||
    href.endsWith(".png") ||
    href.endsWith(".gif")
  ) {
    link.dataset.fslightbox = "";
  }
});

refreshFsLightbox();
