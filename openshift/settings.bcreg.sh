# Description: BC Registries credential issuer main profile
export PROJECT_NAMESPACE="devex-von-image"
export SKIP_PIPELINE_PROCESSING=1
export include_templates="agent-build agent-deploy api-build api-deploy db-build db-deploy issuer-web-base-image-build issuer-web-build issuer-web-deploy wallet-build wallet-deploy"

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# Override the DEV, TEST, PROD deployment environment
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export TOOLS="devex-von-image-tools"
export DEPLOYMENT_ENV_NAME="tools"
export DEV="tools"
export TEST="tools"
export PROD="tools"