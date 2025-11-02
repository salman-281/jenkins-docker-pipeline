pipeline {
    agent any

    environment {
        FRONTEND_REPO = "https://github.com/salman-281/jen-doc-frontend.git"
        BACKEND_REPO  = "https://github.com/salman-281/jen-doc-backend.git"
        FRONTEND_IMAGE = "next-frontend"
        BACKEND_IMAGE = "nest-backend"
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    }

    stages {
        stage('Clone Frontend & Backend') {
            steps {
                echo "📥 Cloning both repositories..."
                dir('frontend') {
                    git branch: 'main', url: "${FRONTEND_REPO}"
                }
                dir('backend') {
                    git branch: 'main', url: "${BACKEND_REPO}"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "🐳 Building Docker images..."
                bat 'docker build -t %FRONTEND_IMAGE% ./frontend'
                bat 'docker build -t %BACKEND_IMAGE% ./backend'
            }
        }

        stage('Run Containers') {
            steps {
                echo "🚀 Starting containers using docker-compose..."
                bat 'docker-compose down || exit 0'
                bat 'docker-compose up -d --build'
            }
        }

        stage('Verify Containers') {
            steps {
                echo "🔍 Checking running containers..."
                bat 'docker ps'
            }
        }

        stage('Deploy to Vercel') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo "🚀 Deploying to Vercel..."
                bat 'npx vercel --token %VERCEL_TOKEN% --prod --confirm'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful!"
        }
        failure {
            echo "❌ Build or deployment failed!"
        }
    }
}
