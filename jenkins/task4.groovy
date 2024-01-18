pipeline {
    agent any

    triggers {
        cron('H H * * *')  // This cron expression triggers the pipeline every hour
    }

    stages {
        stage('Run Every Hour') {
            steps {
                script {
                    echo 'This pipeline runs every hour.'
                }
            }
        }
    }
}
