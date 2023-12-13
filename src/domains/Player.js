// TODO : 다리 건너기 게임을 플레이 하는 플레이어 도메인 구현하기

import { BRIDGE_PATH, ERROR_MESSAGES, PLAYER_PATH, RETRY_SIGN } from '../constants/bridge-game.js';
import InvalidInputException from '../exceptions/InvalidInputException.js';
import deepFreeze from '../utils/deepFreeze.js';

class Player {
  #tryCount;

  #playerPath;

  constructor() {
    this.#tryCount = 1;
    this.#playerPath = [];
  }

  #validateBlock(block) {
    if (block !== BRIDGE_PATH.down && block !== BRIDGE_PATH.up) {
      throw new InvalidInputException(ERROR_MESSAGES.invalidMovaPath);
    }
  }

  #validateRetrySign(retrySign) {
    if (retrySign !== RETRY_SIGN.retry && retrySign !== RETRY_SIGN.exit) {
      throw new InvalidInputException(ERROR_MESSAGES.invalidMovaPath);
    }
  }

  #darwPlayerFloorPath(canCrossBridge, floor) {
    const recentPlayerPosition = this.getRecentPlayerPosition();
    const floorPath = this.#playerPath.map((path, index) => {
      if (path !== floor) return PLAYER_PATH.nothing;
      if (index === recentPlayerPosition && !canCrossBridge) return PLAYER_PATH.failed;
      return PLAYER_PATH.success;
    });

    return deepFreeze(floorPath);
  }

  addPlayerPath(block) {
    this.#validateBlock(block);
    this.#playerPath.push(block);
  }

  darwPlayerPath(canCrossBridge) {
    const upFloorPath = this.#darwPlayerFloorPath(canCrossBridge, BRIDGE_PATH.up);
    const downFloorPath = this.#darwPlayerFloorPath(canCrossBridge, BRIDGE_PATH.down);

    return deepFreeze({
      up: upFloorPath,
      down: downFloorPath,
    });
  }

  checkRetried(retrySign) {
    const upperRetrySign = retrySign.trim().toUpperCase();
    this.#validateRetrySign(upperRetrySign);

    return upperRetrySign === RETRY_SIGN.retry;
  }

  retry() {
    this.#tryCount += 1;
    this.#playerPath = [];
  }

  getTryCount() {
    return this.#tryCount;
  }

  getRecentPlayerPosition() {
    return this.#playerPath.length - 1;
  }
}

export default Player;
