_includeFile=$(type -p overrides.inc)
if [ ! -z ${_includeFile} ]; then
  . ${_includeFile}
else
  _red='\033[0;31m'; _yellow='\033[1;33m'; _nc='\033[0m'; echo -e \\n"${_red}overrides.inc could not be found on the path.${_nc}\n${_yellow}Please ensure the openshift-developer-tools are installed on and registered on your path.${_nc}\n${_yellow}https://github.com/BCDevOps/openshift-developer-tools${_nc}"; exit 1;
fi

OUTPUT_FORMAT=json

# Generate Caddyfile
# Injected by genDepls.sh
# - CADDY_CONFIG_MAP_NAME
# - SUFFIX
CADDY_SOURCE_FILE=$( dirname "$0" )/config/Caddyfile
CADDY_OUTPUT_FILE=${CADDY_CONFIG_MAP_NAME}-configmap_DeploymentConfig.json
printStatusMsg "Generating ConfigMap; ${CADDY_CONFIG_MAP_NAME} ..."
generateConfigMap "${CADDY_CONFIG_MAP_NAME}${SUFFIX}" "${CADDY_SOURCE_FILE}" "${OUTPUT_FORMAT}" "${CADDY_OUTPUT_FILE}"

# Generate application config map
# - To include all of the files in the application instance's profile directory.
# Injected by genDepls.sh
# - APP_CONFIG_MAP_NAME
# - SUFFIX
APPCONFIG_SOURCE_PATH=$( dirname "$0" )/config/${PROFILE}
APPCONFIG_OUTPUT_FILE=${APP_CONFIG_MAP_NAME}-configmap_DeploymentConfig.json
printStatusMsg "Generating ConfigMap; ${APP_CONFIG_MAP_NAME} ..."
generateConfigMap "${APP_CONFIG_MAP_NAME}${SUFFIX}" "${APPCONFIG_SOURCE_PATH}" "${OUTPUT_FORMAT}" "${APPCONFIG_OUTPUT_FILE}"

unset SPECIALDEPLOYPARMS
echo ${SPECIALDEPLOYPARMS}