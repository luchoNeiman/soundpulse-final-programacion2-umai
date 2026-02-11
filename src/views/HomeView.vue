<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ItemMusical } from '../models/ItemMusical';

// Variable reactiva para guardar los discos
const listaMusica = ref<ItemMusical[]>([]);

// Función Asincrónica para cargar los datos desde el JSON
const cargarDatos = async () => {
    try {
        const response = await fetch('/data/contenido.json');
        const data = await response.json();

        // Transformo el JSON en instancias de la Clase
        listaMusica.value = data.map((item: any) =>
            new ItemMusical(item)
        );
    } catch (error) {
        console.error("Error cargando los datos musicales:", error);
    }
};

onMounted(() => {
    cargarDatos();
});
</script>

<template>
    <div class="container">
        <header class="hero">
            <h1>Soundpulse</h1>
            <p>Explora tu ritmo</p>
        </header>

        <section class="gallery">
            <div v-for="musica in listaMusica" :key="musica.id" class="music-card">
                <img :src="musica.imagen" :alt="musica.titulo" />
                <div class="info">
                    <h3>{{ musica.titulo }}</h3>
                    <p>{{ musica.infoResumida }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.music-card {
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.music-card:hover {
    transform: translateY(-10px);
}

.music-card img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}

.info {
    padding: 1rem;
    color: white;
}
</style>