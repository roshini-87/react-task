pipeline {
    agent any
    
    stages {
        stage('First') {
            steps {
                // Your first stage steps here
                echo 'Hi'
            }
        }
        
        stage('Second') {
            steps {
                // Your second stage steps here
                echo 'Hello'
            }
        }
    }

    post {
        success {
            // Trigger Pipeline 2 on success of Pipeline 1
            build job: 'task-6-2', wait: false
        }
    }
}
pipeline {
    agent any
    
    stages {
        stage('First') {
            steps {
                // Your first stage steps for Pipeline 2 here
                echo 'This is 2nd pipeline...'
            }
        }
        
        stage('Second') {
            steps {
                // Your second stage steps for Pipeline 2 here
                echo 'Hello,this is the 2nd pipeline..'
            }
        }
    }
}
