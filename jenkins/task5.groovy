pipeline {
    agent any

    stages {
        stage('Create Directory') {
            steps {
                script {
                    // Create a directory named 'my_directory'
                    bat "if not exist my_directory mkdir my_directory"
                }
            }
        }

        stage('Create Text File') {
            steps {
                script {
                    // Create a text file named 'my_file.txt' in the directory
                    writeFile file: 'my_directory/my_file.txt', text: ''
                }
            }
        }

        stage('Write Content to File') {
            steps {
                script {
                    // Write some content to the text file
                    writeFile file: 'my_directory/my_file.txt', text: 'Hello, this is Roshini'
                }
            }
        }

        stage('Print File Content') {
            steps {
                script {
                    // Print the content of the text file
                    bat 'type my_directory/my_file.txt'
                }
            }
        }
    }
}
