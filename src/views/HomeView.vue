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
    <main>
        <h1>Soundpulse Gallery</h1>
        <div class="galeria">
            <div v-for="item in listaMusica" :key="item.id" class="card">
                <img :src="item.imagen" :alt="item.titulo">
                <h3>{{ item.titulo }}</h3>
                <p>{{ item.infoResumida }}</p>
            </div>
        </div>
    </main>
</template>