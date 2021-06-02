enum ErrorCode {
  'SUCCESS' = 0, // 성공
  'UNKNOWN_ERROR' = 1, // 알 수 없는 오류
  'REQUEST_MISSING_TOKEN' = 2, // 요청에 token 가 없음
  'REQUEST_MISSING_PASSWORD' = 3, // 요청에 password 가 없음
  'REQUEST_MISSING_EMAIL' = 4, // 요청에 email 이 없음
  'INVALID_EMAIL' = 5, // email 이 올바르지 않음
  'INVALID_PASSWORD' = 6, // password 가 올바르지 않음
  'DUPLICATE_EMAIL' = 7, // 이미 존재하는 email 임
}

export default ErrorCode
