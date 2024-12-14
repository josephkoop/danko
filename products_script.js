// Initialize Supabase Client correctly
const supabase = createClient(
    'https://zbmxpudsscvicasakxxk.supabase.co',  // Your Supabase URL
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibXhwdWRzc2N2aWNhc2FreHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNzgxMTQsImV4cCI6MjA0ODc1NDExNH0.qbZixz59T9s8rTKiLjsNffuF7Kr3UIrouU7n4VWtO2o' // Your Supabase public API key
);

document.addEventListener("DOMContentLoaded", async () => {
    console.log(supabase);
    const { data, error } = await supabase
        .from('products')
        .select('name, description, image');

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    renderImages(data);
});

function renderImages(images) {
    const marketContainer = document.querySelector("#market-container");

    images.forEach(image1 => {
        const marketDiv = document.createElement("div");
        marketDiv.classList.add("market");

        const productImage = document.createElement("img");
        productImage.classList.add("productImages");
        productImage.src = image1.image;
        marketDiv.appendChild(productImage);

        const title = document.createElement("h2");
        title.textContent = image1.name;
        marketDiv.appendChild(title);

        const description = document.createElement("p");
        description.textContent = image1.description;
        marketDiv.appendChild(description);

        marketContainer.appendChild(marketDiv);
    });
}
