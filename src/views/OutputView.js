import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, PLAYER_PATH } from '../constants/bridge-game.js';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printStartMessage() {
    this.printMessage(GAME_MESSAGES.start);
  },
  printEmptyLine() {
    this.printMessage('');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(playerPath) {
    const { up, down } = playerPath;
    const upPath = up.map((path) => ` ${path} `).join(PLAYER_PATH.seperator);
    const downPath = down.map((path) => ` ${path} `).join(PLAYER_PATH.seperator);

    this.printMessage(PLAYER_PATH.open + upPath + PLAYER_PATH.close);
    this.printMessage(PLAYER_PATH.open + downPath + PLAYER_PATH.close);
    this.printEmptyLine();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isFinished, tryCount, playerPath) {
    this.printMessage(GAME_MESSAGES.result);
    this.printMap(playerPath);
    const gameResult = isFinished ? GAME_MESSAGES.success : GAME_MESSAGES.failed;
    this.printMessage(`${GAME_MESSAGES.succeedOrFailed} : ${gameResult}`);
    this.printMessage(`${GAME_MESSAGES.totalTryCount(tryCount)}`);
  },
};

export default OutputView;
