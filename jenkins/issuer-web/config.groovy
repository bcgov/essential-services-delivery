// Pipeline Configuration Properties
// Import this file into the pipeline using 'load'.
class config extends bc.baseConfig {
  // Build configuration
  public static final String  APP_NAME = "issuer-kit-web"
  public static String  BASE_IMAGE_NAME = "${this.APP_NAME}-base-image"
  public static final String[] BUILDS = ["${this.BASE_IMAGE_NAME}", "${this.APP_NAME}"]
}

return new config();