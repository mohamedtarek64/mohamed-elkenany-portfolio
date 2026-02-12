'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MeshBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-dark-950">
            {/* Main GIF Background Layer */}
            <div className="absolute inset-0 opacity-30 mix-blend-screen overflow-hidden">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJqZzZqZzZqZzZqZzZqZzZqZzZqZzZqZzZqZzZqZzZqZzZqZnp&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    alt="Background Motion"
                    className="w-full h-full object-cover scale-110 blur-[3px]"
                />
            </div>

            {/* Deep Integration Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/60 to-dark-950 opacity-95" />
            <div className="absolute inset-0 backdrop-blur-[80px]" />

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 120, 0],
                        rotate: [0, 90, 180, 270, 360],
                        scale: [1, 1.2, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[10%] w-32 h-32 border border-primary-500/20 rounded-2xl"
                    style={{ transformStyle: 'preserve-3d' }}
                />

                <motion.div
                    animate={{
                        x: [0, -120, 80, 0],
                        y: [0, 100, -60, 0],
                        rotate: [360, 270, 180, 90, 0],
                        scale: [1, 0.8, 1.3, 0.9, 1],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[15%] w-24 h-24 border border-secondary-500/20 rounded-full"
                />

                <motion.div
                    animate={{
                        x: [0, 60, -40, 0],
                        y: [0, -50, 80, 0],
                        rotate: [0, 120, 240, 360],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[60%] left-[70%] w-16 h-16 border border-accent-500/20"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
            </div>

            {/* Interactive Mouse-Following Gradient */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)',
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                }}
                transition={{ type: "spring", stiffness: 50, damping: 30 }}
            />

            {/* Perspective UI Grid */}
            <div
                className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 95%)'
                }}
            />

            {/* Animated Light Beams */}
            <motion.div
                animate={{ translateY: ['-100%', '300%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
            />

            <motion.div
                animate={{ translateX: ['-100%', '300%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-secondary-500/20 to-transparent"
            />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-500/40 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Micro-Noise Texture */}
            <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};

export default MeshBackground;
