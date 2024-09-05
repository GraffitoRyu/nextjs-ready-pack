/**
 * 시스템 > 언어; 언어별 데이터 컬렉션 타입
 */
interface LocaleCollectionType {
  [localeCode: string]: string;
  /**
   * 한국어 데이터
   */
  ko: string;
  /**
   * 영어 데이터
   */
  en: string;
}
