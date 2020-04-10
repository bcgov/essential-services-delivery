void call(String imageName, String tag) {
  openshift.withCluster() {
    openshift.withProject() {

      echo "Tagging ${imageName} for deployment to ${tag} ..."

      // Don't tag with BUILD_ID so the pruner can do it's job; it won't delete tagged images.
      // Tag the images for deployment based on the image's hash
      def IMAGE_HASH = getImageTagHash(openshift, "${imageName}")
      echo "IMAGE_HASH: ${IMAGE_HASH}"
      openshift.tag("${imageName}@${IMAGE_HASH}", "${imageName}:${tag}")
    }
  }
}