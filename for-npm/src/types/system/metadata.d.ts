/**
 * 시스템 > 메타데이터 > SEO; 사이트 정보 타입
 */
interface MetadataSEOSiteType {
  /**
   * 페이지 타이틀
   */
  title: LocaleCollectionType;
  /**
   * 페이지 설명
   */
  desc: LocaleCollectionType;
  /**
   * 서비스 도메인 URL
   */
  domain: string;
}
