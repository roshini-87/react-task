pipeline {
    agent any

    stages {
        stage('Trigger') {
            steps {
                script {
                    build job: 'Pipeline2', parameters: [string(name: 'myParam', value: 'Hello World!')]
                }
            }
        }
    }
}
pipeline {
    agent any

    parameters {
        string(name: 'myParam', defaultValue: '', description: 'Parameter')
    }

    stages {
        stage('Print') {
            steps {
                script {
                    echo "Received Parameter: ${params.myParam}"
                }
            }
        }
    }
}
