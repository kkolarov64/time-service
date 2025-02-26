pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t kkolarov64/time-service:$BUILD_NUMBER .'
                echo 'Build Image Completed'
            }
        }
        
        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                echo 'Login Completed'
            }
        }
        
        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push kkolarov64/time-service:$BUILD_NUMBER'
                sh 'docker tag kkolarov64/time-service:$BUILD_NUMBER kkolarov64/time-service:latest'
                sh 'docker push kkolarov64/time-service:latest'
                echo 'Push Image Completed'
            }
        }
    }
    
    post {
        always {
            sh 'docker logout'
        }
    }
}
