pipeline {
    agent any

    stages {
        stage('Print') {
            steps {
                script {
                    echo 'Hello!'
                }
            }
        }
    }
}
