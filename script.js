'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Ciao Vue JS',
      mieClassi: 'text text-2',
    };
  },
}).mount('#title');
