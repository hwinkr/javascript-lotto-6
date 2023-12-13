/**
 * 다리 건너기 게임을 관리하는 클래스
 */

import Bridge from '../domains/Bridge.js';
import Player from '../domains/Player.js';
import deepFreeze from '../utils/deepFreeze.js';

// TODO : 도메인들의 로직을 사용해서 새로운 로직을 만드는 BridgeGame 구현하기

class BridgeGame {
  #bridge;

  #player;

  constructor(bridgeSize) {
    this.#bridge = new Bridge(bridgeSize);
    this.#player = new Player();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  // 플레이어가 다리위의 한 칸을 이동했을 때, 다리 건너기 게임을 계속 진행할 수 있는지와 모든 다리를 다 건넜는지를 결정할 수 있음
  move(block) {
    const upperBlock = block.trim().toUpperCase();
    this.#player.addPlayerPath(upperBlock);
    const recentPlayerPosition = this.#player.getRecentPlayerPosition();
    const canCrossBridge = this.#bridge.canCrossBridge(recentPlayerPosition, block);
    const isFinished = this.#bridge.checkFinished(recentPlayerPosition, upperBlock);
    const playerPath = this.#player.darwPlayerPath(canCrossBridge);

    return deepFreeze({ canCrossBridge, isFinished, playerPath });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  // 재시작 신호에 대한 메시지를 외부에 알려줘야, 외부에서 게임을 한번 더 진행하는지 확인할 수 있음.
  checkRetryStatus(retrynSign) {
    const isRetried = this.#player.checkRetried(retrynSign);
    return isRetried;
  }

  retry() {
    this.#player.retry();
  }

  getTryCount() {
    const tryCount = this.#player.getTryCount();
    return tryCount;
  }
}

export default BridgeGame;
