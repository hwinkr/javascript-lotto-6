import BridgeGameController from './controllers/BridgeGameController.js';

class App {
  #bridgeGameController;

  constructor() {
    this.#bridgeGameController = new BridgeGameController();
  }

  async play() {
    await this.#bridgeGameController.run();
  }
}

export default App;

const app = new App();
app.play();
