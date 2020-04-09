// Pipeline Configuration Properties
// Import this file into the pipeline using 'load'.
class config extends bc.baseConfig {
  // Build configuration
  public static final String  APP_NAME = "db"
  public static final String[] BUILDS = ["${this.APP_NAME}"]
}

return new config();