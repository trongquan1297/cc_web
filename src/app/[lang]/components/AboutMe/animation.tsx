

// Generate stars randomly using absolute position
export default function createStars(): void {
    const stars: number = 40;
    const skyStars: HTMLElement | null = document.getElementById("sky__stars");
    if (!skyStars) return;

    for (let i: number = 0; i < stars; i++) {
        let x: number = Math.floor(Math.random() * 100 + 1);
        let y: number = Math.floor(Math.random() * 100 + 1);
        const starPoint: HTMLDivElement = document.createElement("div");
        starPoint.style.left = `${x}%`;
        starPoint.style.top = `${y}%`;
        skyStars.appendChild(starPoint);
    }
    }

    createStars();
