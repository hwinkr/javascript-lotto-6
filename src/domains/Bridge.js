import BridgeMaker from '../BridgeMarker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';

class Bridge {
  #bridge;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  #getBrindgeLength() {
    return this.#bridge.length;
  }

  canCrossBridge(currentPosition, block) {
    return this.#bridge[currentPosition] === block;
  }

  checkFinished(currentPosition, block) {
    const canCrossBridge = this.canCrossBridge(currentPosition, block);
    const bridgeLenght = this.#getBrindgeLength();
    return canCrossBridge && bridgeLenght - 1 === currentPosition;
  }
}

export default Bridge;
