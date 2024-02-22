pipeline {
  agent {
    label "jenkins-maven"
  }
  options {
    disableConcurrentBuilds()
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '20')
  }
  triggers {
    pollSCM ''
  }
  environment {
    ORG = 'massmutual'
    APP_NAME = 'edap-cleanser'
    CHARTMUSEUM_CREDS = credentials('jenkins-x-chartmuseum')
  }
  stages {
    // stage('Run unit tests') {
    //   when {
    //     anyOf {
    //       branch 'PR-*'
    //       branch 'feature/*'
    //       branch 'build/*'
    //     }
    //   }
    //   steps {
        // Add unit test execution
        // Capture evidence of execution and attach to commit
        // container('maven') {
        //  script {
        //   }
        // }
    //   }
    // }
    stage('CI Build and push snapshot') {
      when {
        anyOf {
          branch 'PR-*'
          branch 'feature/*'
          branch 'build/*'
        }
      }
      environment {
        PREVIEW_VERSION = "0.0.0-SNAPSHOT-$BRANCH_NAME-$BUILD_NUMBER".replaceAll('/','-')
        PREVIEW_NAMESPACE = "$APP_NAME-$BRANCH_NAME".toLowerCase()
        HELM_RELEASE = "$PREVIEW_NAMESPACE".toLowerCase()
        SUB_DOMAIN = k8s.generateUrl()
      }
      steps {
        container('maven') {
          script {
            k8s.previewBuild()
          }
          script {
            k8s.previewDeploy()
          }
        }
      }
    }
    stage('Build Release') {
      when {
        anyOf {
          branch 'master'
          branch 'release'
          branch 'qa'
          branch 'develop'
        }
      }
      steps {
        container('maven') {
          script {
            k8s.build()
          }
        }
      }
    }
    stage('Promote to Environments') {
      when {
        anyOf {
          branch 'master'
          branch 'release'
          branch 'qa'
          branch 'develop'
        }
      }
      steps {
        container('maven') {
          script {
            k8s.deploy()
          }
        }
      }
    }
  }
  post {
        always {
          cleanWs()
        }
  }
}
