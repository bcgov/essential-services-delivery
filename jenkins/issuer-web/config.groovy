// Pipeline Configuration Properties
// Import this file into the pipeline using 'load'.
class config extends bc.baseConfig {
  // Build configuration
  public static final String  APP_NAME = "issuer-web"
  public static String  BASE_IMAGE_NAME = "${this.APP_NAME}-base-image"
  public static String  RUNTIME_IMAGE_NAME = "${this.APP_NAME}"
  public static final String[] BUILDS = ["${this.RUNTIME_NAME}", "${this.APP_NAME}"]
}

return new config();