pipeline {
    agent any

    environment {
        MY_VAR = 'Hello, Roshini!'
    }

    stages {
        stage('Print Environment Variable') {
            steps {
                script {
                    echo "Value of MY_VAR: ${env.MY_VAR}"
                }
            }
        }
    }
}
