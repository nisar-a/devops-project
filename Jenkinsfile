pipeline {

    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                script {
                    echo "Cleaning workspace..."
                    deleteDir() // Deletes everything in the Jenkins workspace before starting
                }
            }
        }

        stage('Git Checkout') {
            steps {
                script {
                    git branch: 'main',
                        credentialsId: 'github_secret',
                        url: 'https://github.com/nisar-a/devops-project.git'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker-hub-creds', toolName: 'docker') {
                        def imageName = "22itr073/devops_projects"
                        def tag = "project"

                        sh "docker build -t ${imageName}:${tag} ."
                        sh "docker push ${imageName}:${tag}"
                    }
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    // Stop and remove the existing container if it's running
                    sh "docker stop jusjes_container || true"
                    sh "docker rm jusjes_container || true"

                    // Run the new container
                    sh "docker run -d --name jusjes_container -p 3002:80 22itr073/devops_projects:project"
                }
            }
        }
    }
}
