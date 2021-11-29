export PROJECT_NAMESPACE="a99fd4"
export GIT_URI="https://github.com/bcgov/essential-services-delivery.git"
export GIT_REF="main"
export include_templates="agent-build api-build db-build db-deploy esr-web-base-build esr-web-build issuer-web-base-image-build issuer-web-build safe-entry-base-build safe-entry-build visual-verifier-build wallet-build wallet-deploy nsp-build nsp-deploy"

# The templates that should not have their GIT referances(uri and ref) over-ridden
# Templates NOT in this list will have they GIT referances over-ridden
# with the values of GIT_URI and GIT_REF
export skip_git_overrides="agent-build.yaml api-build.yaml db-build.yaml esr-web-build.yaml issuer-web-base-image.yaml safe-entry-build.yaml visual-verifier-build.yaml wallet-build.yaml"