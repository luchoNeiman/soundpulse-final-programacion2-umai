<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(true);
const emit = defineEmits(['iniciar']);

const manejarInicio = () => {
    visible.value = false;
    // Emito un evento hacia el padre (App.vue) para avisar que ya puede sonar
    emit('iniciar');
};
</script>

<template>
    <Transition name="fade">
        <div v-if="visible" class="overlay">
            <div class="content">
                <h1 class="logo-text">Soundpulse</h1>
                <p>Siente el ritmo de la tecnología</p>
                <button @click="manejarInicio" class="btn-start">
                    INGRESAR A LA EXPERIENCIA
                </button>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    color: white;
}

.btn-start {
    padding: 1rem 2rem;
    background: transparent;
    border: 2px solid #00ff88;
    color: #00ff88;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-start:hover {
    background: #00ff88;
    color: black;
    box-shadow: 0 0 20px #00ff88;
}

/* Transición de Vue para que desaparezca suavemente */
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-leave-to {
    opacity: 0;
}
</style>