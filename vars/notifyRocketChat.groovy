import groovy.json.JsonOutput
import java.util.regex.Pattern

// Green: "#1ee321"
// Red: "#e3211e"
// Blue: "#764FA5"

// Sample Message:
// {
//   "username": "Jenkins",
//   "icon_url": "https://wiki.jenkins.io/download/attachments/2916393/headshot.png",
//   "text": "This is a sample message with an attachment ...",
//   "attachments": [
//     {
//       "title": "This is the title of the attachment",
//       "title_link": "https://rocket.chat",
//       "text": "This is the text of the attachment.",
//       "image_url": "https://wiki.jenkins.io/download/attachments/2916393/headshot.png",
//       "color": "#764FA5"
//     }
//   ]
// }

void call(String text,
          String attachmentTitle = null,
          String attachmentText = null,
          String attachmentColor = "#764FA5",
          String attachmentImageUrl = null,
          String attachmentTitleLink = null,
          String url = "") {

  def rocketChatURL
  if (!url?.trim()) {
    rocketChatURL = getRocketChatUrl()
  } else {
    rocketChatURL = url
  }

  // Exit if there is no rocketChatURL
  if (!rocketChatURL?.trim()) {
    return
  }

  def messageText = text.replaceAll(~/\'/, "")
  def payload = JsonOutput.toJson([
    username: "Jenkins",
    icon_url: "https://wiki.jenkins.io/download/attachments/2916393/headshot.png",
    text: messageText,
    attachments: [
      [
        title: attachmentTitle,
        title_link: attachmentTitleLink,
        text: attachmentText,
        image_url: attachmentImageUrl,
        color: attachmentColor
      ]
    ]
  ])

  // writeFile(file: "post.json", text: payload)
  // sh "curl -X POST -H 'Content-Type: application/json' --data @post.json ${rocketChatURL}"
  sh("curl -X POST -H 'Content-Type: application/json' --data \'${payload}\' ${rocketChatURL}")
}

@NonCPS
String getRocketChatUrl() {
  return getSecret("rocket-chat", "url")
}

@NonCPS
String getSecret(String resourceName, String key, String projectName = "") {
  def String script
  if (!projectName?.trim()) {
    script = "oc extract --to=- --keys=${key} secret/${resourceName} 2>&1 | sed -n 2p"
  } else {
    script = "oc -n ${projectName} extract --to=- --keys=${key} secret/${resourceName} 2>&1 | sed -n 2p"
  }

  secret = sh (script: "${script}", returnStdout: true).trim()
  return secret
}