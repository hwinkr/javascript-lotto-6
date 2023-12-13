export const GAME_MESSAGES = {
  start: '다리 건너기 게임을 시작합니다.',
  success: '성공',
  failed: '실패',
  totalTryCount: (tryCount) => `총 시도한 횟수 : ${tryCount}`,
};

export const ERROR_MESSAGES = {
  prefix: '[ERROR]',
  invalidBridgeSize: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  invalidMovaPath: '이동할 칸은 U또는 D로만 입력할 수 있습니다.',
  invalidRetrySign: '게임을 다시 시도할지에 대한 여부는 R또는 Q로만 입력할 수 있습니다.',
};

export const INPUT_QUERY = {
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  movePath: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

export const BRIDGE_SIZE_RANGE = {
  min: 3,
  max: 20,
};

export const BRIDGE_PATH_NUMBER = {
  down: 0,
  up: 1,
};

export const BRIDGE_PATH = {
  down: 'D',
  up: 'U',
};

export const PLAYER_PATH = {
  open: '[',
  close: ']',
  seperator: '|',
  success: 'O',
  failed: 'X',
  nothing: ' ',
};

export const RETRY_SIGN = {
  retry: 'R',
  exit: 'Q',
};
