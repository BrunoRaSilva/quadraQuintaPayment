const { createApp } = Vue

createApp({
    data() {
        return {
            notificacoes: 2, // Exemplo
            avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' // Troque pela URL do avatar do usuário
        }
    }
}).mount('#app')