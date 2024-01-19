pipeline {
    agent any

    stages {
        stage('1') {
            when {
                expression { true } 
            }
            steps {
                echo 'Hii!!!'
            }
        }

        stage('2') {
            when {
                expression { params.stage2 == true }
            }
            steps {
                echo 'This is'
            }
        }

        stage('3') {
            when {
                expression { params.stage3 == true }
            }
            steps {
                echo 'Roshini'
            }
        }
    }

    parameters {
        booleanParam(name: 'stage2', defaultValue: true, description: 'Run Stage 2')
        booleanParam(name: 'stage3', defaultValue: true, description: 'Run Stage 3')
    }
}
