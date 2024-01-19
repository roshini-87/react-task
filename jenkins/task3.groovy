pipeline {
    agent any

    parameters {
        string(name: 'DYNAMIC', description: 'Enter your name')
    }

    stages {
        stage('Dynamic Value') {
            steps {
                script {
                    echo "Hi, ${params.DYNAMIC}!"
                }
            }
        }
    }
}
