import { Console } from '@woowacourse/mission-utils';
import { INPUT_QUERY } from '../constants/bridge-game.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  async readInput(query) {
    const input = await Console.readLineAsync(query);
    return input;
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await this.readInput(INPUT_QUERY.bridgeSize);
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const movePath = await this.readInput(INPUT_QUERY.movePath);
    return movePath;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const retrySign = await this.readInput(INPUT_QUERY.retry);
    return retrySign;
  },
};

export default InputView;
