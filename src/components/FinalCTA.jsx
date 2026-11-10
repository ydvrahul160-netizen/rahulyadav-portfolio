import { useEffect, useRef } from "react";

const FinalCTA = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    let canvasWidth = 0;
    let canvasHeight = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvasWidth = canvas.offsetWidth;
      canvasHeight = canvas.offsetHeight;

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];

    const createParticles = () => {
      particles.length = 0;

      const count = window.innerWidth < 640 ? 650 : 1400;

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        particles.push({
          x,
          y,
          z,
          size: Math.random() * 1.4 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.002 + 0.0005,
        });
      }
    };

    createParticles();

    let rotation = 0;

    const animate = () => {
      const width = canvasWidth;
      const height = canvasHeight;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.32;

      rotation += 0.0015;

      particles.forEach((particle) => {
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);

        const rotatedX = particle.x * cos - particle.z * sin;
        const rotatedZ = particle.x * sin + particle.z * cos;

        const perspective = 1 / (2 - rotatedZ);

        const screenX = centerX + rotatedX * radius * perspective;

        const screenY = centerY + particle.y * radius * perspective;

        const size = particle.size * perspective;

        const opacity = particle.opacity * (0.35 + (rotatedZ + 1) * 0.35);

        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className=" bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-24 overflow-hidden pt-2 sm:pt-4 md:pt-6">
      <div className="relative mx-auto w-[92%] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black py-12 sm:py-16 md:py-20 ">
        {/* Particle Background */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s build something great together.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Have a project, opportunity, or idea in mind? Let&apos;s connect and
            create something meaningful.
          </p>

          <div className="mt-9 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white/80">
            Thanks for Stopping By ✦
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
