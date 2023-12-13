import BridgeGame from '../services/BridgeGame.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BridgeGameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = null;
  }

  async #initBridgeGame() {
    try {
      const bridgeSize = await InputView.readBridgeSize();
      this.#bridgeGame = new BridgeGame(bridgeSize);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#initBridgeGame();
    }
  }

  #finishGame(isFinished, playerPath) {
    const tryCount = this.#bridgeGame.getTryCount();
    OutputView.printResult(isFinished, tryCount, playerPath);
  }

  async #processRetryGame(isRetried, playerPath) {
    if (!isRetried) {
      this.#finishGame(false, playerPath);
      return;
    }
    this.#bridgeGame.retry();
    await this.#play();
  }

  async #handleRetryGame(playerPath) {
    try {
      const retrySign = await InputView.readGameCommand();
      const isRetried = this.#bridgeGame.checkRetryStatus(retrySign);
      await this.#processRetryGame(isRetried, playerPath);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#handleRetryGame();
    }
  }

  async #progressGame(canCrossBridge, isFinished, playerPath) {
    if (!canCrossBridge) {
      await this.#handleRetryGame(playerPath);
      return;
    }

    if (canCrossBridge && !isFinished) {
      await this.#play();
      return;
    }

    this.#finishGame(isFinished, playerPath);
  }

  async #play() {
    try {
      const moveBlock = await InputView.readMoving();
      const { canCrossBridge, isFinished, playerPath } = this.#bridgeGame.move(moveBlock);
      OutputView.printMap(playerPath);
      await this.#progressGame(canCrossBridge, isFinished, playerPath);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#play();
    }
  }

  async run() {
    OutputView.printStartMessage();
    OutputView.printEmptyLine();
    await this.#initBridgeGame();
    OutputView.printEmptyLine();
    await this.#play();
  }
}

export default BridgeGameController;
