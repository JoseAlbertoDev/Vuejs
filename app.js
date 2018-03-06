const app = new Vue({
    el: '#app',
    template: `
        <div class="view">
            <game-header></game-header>
            <game-add @new="addNewGame"></game-add>
            <game-list :games="games"></game-list>
        </div>
    `,
    data: {
        games: [
            {title: "ME: Andromeda"},
            {title: "Fifa"}
        ]
    },
    methods: {
        addNewGame: function(game) {
            this.games.push(game);
        }
    }
});