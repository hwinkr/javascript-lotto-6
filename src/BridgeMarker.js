/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */

import {
  BRIDGE_PATH,
  BRIDGE_PATH_NUMBER,
  BRIDGE_SIZE_RANGE,
  ERROR_MESSAGES,
} from './constants/bridge-game.js';
import InvalidInputException from './exceptions/InvalidInputException.js';

const BridgeMaker = {
  validateBridgeSize(size) {
    const numericSize = Number(size);
    if (!(typeof numericSize === 'number') || Number.isNaN(numericSize)) {
      throw new InvalidInputException(ERROR_MESSAGES.invalidBridgeSize);
    }
    if (numericSize < BRIDGE_SIZE_RANGE.min || numericSize > BRIDGE_SIZE_RANGE.max) {
      throw new InvalidInputException(ERROR_MESSAGES.invalidBridgeSize);
    }
  },
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    this.validateBridgeSize(size);
    const bridge = Array.from({ length: size }).reduce((accBridge) => {
      const randomNumber = generateRandomNumber();
      const path = randomNumber === BRIDGE_PATH_NUMBER.down ? BRIDGE_PATH.down : BRIDGE_PATH.up;
      return [...accBridge, path];
    }, []);

    return bridge;
  },
};

export default BridgeMaker;
