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
                    // Create an empty text file named 'my_file.txt' in the directory
                    writeFile file: 'my_directory/roshini.txt', text: ''
                }
            }
        }

        stage('Write') {
            steps {
                script {
                    // Write some content to the text file
                    writeFile file: 'my_directory/roshini.txt', text: 'Hello, this is Roshini'
                }
            }
        }

       stage('Print') {
    steps {
        script {
            // Print the content of the text file using full path to PowerShell
            bat 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe Get-Content my_directory/roshini.txt'
        }
    }
}

    }
}
