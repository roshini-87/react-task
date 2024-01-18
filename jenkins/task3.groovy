pipeline {
    agent any

    parameters {
        string(name: 'DYNAMIC', description: 'Enter a dynamic value')
    }

    stages {
        stage('Print Dynamic Value') {
            steps {
                script {
                    echo "Dynamic Value: ${params.DYNAMIC}"
                }
            }
        }
    }
}
