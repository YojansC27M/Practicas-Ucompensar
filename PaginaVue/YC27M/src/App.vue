

<template>
  <div class="container">
    <h1>Lista de Estudiantes</h1>
    <ul class="student-list">
      <li v-for="estudiante in estudiantes" :key="estudiante.id" class="student-item">
        <h2>{{ estudiante.primer_nombre }} {{ estudiante.primer_apellido }}</h2>
        <p>Edad: {{ estudiante.edad }}</p>
        <p>Correo Electrónico: {{ estudiante.correo_electronico }}</p>
        <p>Número de Celular: {{ estudiante.numero_celular }}</p>
      </li>
    </ul>
  </div>
</template>
 
<script>
import axios from 'axios';
 
export default {
  data() {
    return {
      estudiantes: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const url = "https://backend-bibliotecacompensar-production.up.railway.app/estudiantes/obtener_estudiante/";
        const response = await axios.get(url);
        this.estudiantes = response.data.data;
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }
};
</script>
 
<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
 
.student-list {
  list-style: none;
  padding: 0;
}
 
.student-item {
  background-color: #f4f4f4;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}
 
.student-item h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
}
 
.student-item p {
  margin: 5px 0;
}
 
</style>
