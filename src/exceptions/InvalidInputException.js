import { ERROR_MESSAGES } from '../constants/bridge-game.js';

class InvalidInputException extends Error {
  constructor(error) {
    super(`${ERROR_MESSAGES.prefix} ${error}`);
  }
}

export default InvalidInputException;
