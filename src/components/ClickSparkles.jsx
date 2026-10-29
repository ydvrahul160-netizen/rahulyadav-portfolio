import { useEffect } from "react";

export default function ClickSparkles() {
  useEffect(() => {
    const handleClick = (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const container = document.createElement("div");

      container.style.position = "fixed";
      container.style.left = `${event.clientX}px`;
      container.style.top = `${event.clientY}px`;
      container.style.pointerEvents = "none";
      container.style.zIndex = "9999";

      document.body.appendChild(container);

      const colors = ["#ffffff", "#facc15", "#fde68a", "#e9d5ff"];

      for (let i = 0; i < 6; i++) {
        const star = document.createElement("span");

        star.textContent = "✦";
        star.style.position = "absolute";
        star.style.color = colors[i % colors.length];
        star.style.fontSize = `${10 + Math.random() * 10}px`;
        star.style.textShadow = "0 0 8px currentColor";
        star.style.left = "0";
        star.style.top = "0";
        star.style.opacity = "1";
        star.style.transition =
          "transform 600ms ease-out, opacity 600ms ease-out";

        container.appendChild(star);

        const angle = (Math.PI * 2 * i) / 6;
        const distance = 20 + Math.random() * 25;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        requestAnimationFrame(() => {
          star.style.transform = `translate(${x}px, ${y}px) rotate(180deg) scale(0.3)`;
          star.style.opacity = "0";
        });
      }

      setTimeout(() => container.remove(), 700);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

