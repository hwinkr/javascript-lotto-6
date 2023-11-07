import { LOTTO_RULES } from '../constants/lotto.js';
import generateSortedRandomNumbers from '../utils/generateRandomNumbers.js';
import purchaseAmountValidator from '../validators/purchaseAmountValidator.js';
import Lotto from './Lotto.js';

class LottoStore {
  #pickLottoNumbers;

  constructor(pickLottoNumbers = generateSortedRandomNumbers) {
    this.#pickLottoNumbers = pickLottoNumbers;
  }

  #validatePurchaseAmount(buyAmount) {
    purchaseAmountValidator.validateType(buyAmount);
    purchaseAmountValidator.validateDivision(buyAmount, LOTTO_RULES.lottoPrice);
  }

  generateLottos(buyAmount) {
    this.#validatePurchaseAmount(buyAmount);
    const lottoCount = Number(buyAmount / LOTTO_RULES.lottoPrice);
    const lottos = Array.from({ length: lottoCount }).map(() => {
      const lottoNumbers = this.#pickLottoNumbers();

      return new Lotto(lottoNumbers);
    });

    return lottos;
  }
}

export default LottoStore;
