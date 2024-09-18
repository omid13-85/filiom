const backgroundDiv = document.getElementById('background-img');
    const imageInterval = 3000; 
    
    async function fetchImages() {
        try {
            const response = await fetch("https://omid13-85.github.io/db.-filimo.json/json/background-img.json");
            const images = await response.json();
            return images;
        } catch (error) {
            console.error('Error fetching images:', error);
            return [];
        }
    }
    
    async function updateBackgroundImage(images) {
        if (images.length === 0) ;
        const randomIndex = Math.floor(Math.random() * images.length);
        const imageUrl = images[randomIndex].url;
        backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
    }

    

    fetchImages().then(images => {
        updateBackgroundImage(images);
        setInterval(() => updateBackgroundImage(images), imageInterval);
    });